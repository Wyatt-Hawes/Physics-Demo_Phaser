

let pad;
let ball;
class PlinkScene extends Phaser.Scene{
    keyA;
    keyD;

    keyI;
    keyO;
    keyP;
   

    preload(){
            this.load.image('ball', 'assets/aqua_ball.png');
            this.load.image('rect', 'assets/image.png');
    }

    create(){
        this.me = this;
        this.cameras.main.fadeIn(this.transitionDuration, 0, 0, 0);


        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        this.keyI = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);
        this.keyO = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O);
        this.keyP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
        
        this.matter.world.setBounds();

        this.ball = this.matter.add.image(1348,1100, 'ball');
        this.ball.setScale(4);
        this.ball.setCircle(25);
        this.ball.setFriction(0.005);
        this.ball.setBounce(1);
        this.ball.setBlendMode('ADD');
        this.ball.sleepThreshhold = -1;
        this.ball.setDepth(1000);

        this.input.on('pointerdown', (mouse) => {console.log(Math.floor(mouse.x) + "," + Math.floor(mouse.y));
        console.log('(' + this.ball.body.velocity.x + ',' + this.ball.body.velocity.y + ')')});

        console.log(this.ball);

        let r = this.matter.add.sprite(1350,60,'rect');
        r.setRotation(3.1415/4);
        r.setStatic(true);

        let wall = this.matter.add.rectangle(1260, 1250, 100, 1400, { isStatic: true, mass: 99999, frictionStatic: 0});
        //wall.setFriction(0);
        let base = this.matter.add.rectangle(1345, 1880, 70, 50, { isStatic: true, mass: 99999});

        //let bounce = this.matter.add.rectangle(100, 100, 100, 50, { isStatic: true, mass: 99999});

        pad = this.matter.add.rectangle(1345, 1580, 70, 100, { angle: 0, friction: .01, slop: 0, restitution: 1 });
        //pad.transform.setFixedRotation()
        //pad = this.matter.add.rectangle(1345, 1580, 67, 50, { isStatic: false, angularStiffness: 0, stiffness: 1});
        
        //let arc = this.matter.add.arc(100,100, 100, 0,  180, false, 0xFFFFFF);
        // pad.x = 100;
        // pad.y = 100;
        // pad.setPosition(100,100);
            
        //this.matter.body.setInertia(base, Infinity);
        
        //ball.body.ignorePointer = true;

        
        this.matter.add.spring(pad, base, 450, 0.01, {stiffness: 1, angularStiffness:1,angleA: 0, angleB: 0});
        //this.matter.add.worldConstraint(pad, 1, .3, { pointA: { x: 1345, y: 1880 }});
        // Bodies.rectangle(0,0,100,100, {
        //     render: {
        //         fillStyle: 'red',
        //         strokeStyle: 'blue',
        //         lineWidth: 3
        //     }
        // })
        this.matter.add.mouseSpring({length: 3,angularStiffness:1, stiffness: 0.007, angleA: 0, angleB: 0});
        // this.tweens.add({
        //     targets: pad,
        //     x: 1345,
        //     duration: 1000,
        //     repeat: 3,
        //     onComplete: function(){
        //         console.log("done");
        //     }
        // });

        //this.matter.add.mouseSpring();
        console.log("p scene");
        this.onStart();
    }

    xbetween(v1, v2){
        if(this.ball.x > v1 && this.ball.x < v2){
            return true;
        }
        return false;
    }
    ybetween(v1,v2){
        if(this.ball.y > v1 && this.ball.y < v2){
            return true;
        }
        return false
    }

    inBox(x1,y1,x2,y2){
        if(this.xbetween(x1,x2) && this.ybetween(y1,y2)){
            return true;
        }
        return false;
    }

    makePeg(x,y){
        this.matter.add.circle(x,y, 40,{isStatic: true})
    }

    makeWall(x,y){
        let r = this.matter.add.rectangle(x, y, 10, 150, { isStatic: true, mass: 99999});
        return r;
    }

    addRect(x,y,Color){
        let r = this.add.rectangle(x,y,190,150, Color, 0.5);
        r.setOrigin(0,0);
    }

    isStopped(){
        if(Math.abs(this.ball.body.velocity.x) < 0.05 && Math.abs(this.ball.body.velocity.y) < 0.05){
            return true;
        }
        return false;
    }

    update(){
        this.ball.setAwake();
        if(this.inBox(1300,1750,1400,1900)){
            this.ball.setPosition(1348,1100);
        }
        //this.matter.setVelocity(pad,0,0);a
        if(this.keyA.isDown){
            //ball.body.velocity -= 10;
            // ball.body.setVelocityX(-1);
            // ball.body.velocity.y +=10;
            this.matter.setVelocity(this.ball,this.ball.body.velocity.x -.05, this.ball.body.velocity.y);
            //console.log(ball.body.velocity.x);
        }
        if(this.keyD.isDown){
            this.matter.setVelocity(this.ball,this.ball.body.velocity.x +.05, this.ball.body.velocity.y);
            //console.log("d");
        }

        if(this.keyI.isDown){
            this.scene.start('one');
        }
        if(this.keyO.isDown){
            this.scene.start('two');
        }
        if(this.keyP.isDown){
            this.scene.start('three');
        }

        this.everyTick();
    }




    gotoScene(key) {
        this.cameras.main.fade(3000, 0, 0, 0);
        this.time.delayedCall(3000, () => {
            this.scene.start(key);
        });
    }

}