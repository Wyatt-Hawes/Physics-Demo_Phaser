let pad;
class PlinkScene extends Phaser.Scene{

   

    preload(){
            this.load.image('ball', 'assets/aqua_ball.png');
    }

    create(){
        this.matter.world.setBounds();

        let ball = this.matter.add.image(1348,100, 'ball');
        ball.setScale(4);
        ball.setCircle(27);
        ball.setFriction(0.005);
        ball.setBounce(1);

        let wall = this.matter.add.rectangle(1300, 1250, 20, 1400, { isStatic: true,});
        //wall.setFriction(0);
        let base = this.matter.add.rectangle(1345, 1880, 70, 50, { isStatic: true,});

        
        pad = this.matter.add.rectangle(1345, 1580, 67, 67, { angle: 0, friction: 0, slop: 0, restitution: 1 });
        //pad = this.matter.add.rectangle(1345, 1580, 67, 50, { isStatic: false, angularStiffness: 0, stiffness: 1});
        
        
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
        this.matter.add.mouseSpring({length: 3, stiffness: 0.01, angleA: 0, angleB: 0});
        this.tweens.add({
            targets: pad,
            x: 1345,
            duration: 1000,
            repeat: 3,
            onComplete: function(){
                console.log("done");
            }
        });

        //this.matter.add.mouseSpring();
        console.log("p scene");
        this.onStart();
    }

    update(){
        //this.matter.setVelocity(pad,0,0);
        this.everyTick();
    }




    gotoScene(key) {
        this.cameras.main.fade(this.transitionDuration, 0, 0, 0);
        this.time.delayedCall(this.transitionDuration, () => {
            this.scene.start(key, { inventory: this.inventory });
        });
    }

}