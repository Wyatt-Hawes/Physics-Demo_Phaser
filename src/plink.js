let p;
class PlinkScene extends Phaser.Scene{

   

    preload(){
            this.load.image('ball', 'assets/aqua_ball.png');
    }

    create(){
        this.matter.world.setBounds();

        let ball = this.matter.add.image(100,100, 'ball');
        ball.setScale(4);
        ball.setCircle(28);
        ball.setFriction(0.005);
        ball.setBounce(1);

        let wall = this.matter.add.rectangle(1300, 1250, 20, 1400, { isStatic: true,});
        //wall.setFriction(0);
        let base = this.matter.add.rectangle(1345, 1880, 70, 50, { isStatic: true,});

        p = this.matter.add.rectangle(1345, 1580, 67, 50, { isStatic: false,});
        this.matter.body.setInertia(base, Infinity);
        this.matter.add.mouseSpring();
        ball.body.ignorePointer = true;

        p.setInteractive({draggable: true});
    //     p.setInteractive({
    //         draggable:true,
    //         useHandCursor: true,
    //     });
    //     p.on('drag', (pointer, dragX, dragY) => {
    //         p.x = 1345;
    //         p.y = dragY;
    //         console.log("dragging");
    //    })
        //this.matter.world.setBodyRenderStyle(body1, 0xFFFFFF, 0, 0, 0xFFFFFF);
        //body1.angle = .5;
        this.matter.add.spring(p, base, 450, 0.01);

        // Bodies.rectangle(0,0,100,100, {
        //     render: {
        //         fillStyle: 'red',
        //         strokeStyle: 'blue',
        //         lineWidth: 3
        //     }
        // })
        this.tweens.add({
            targets: p,
            x: 1345,
            duration: 100,
            repeat: -1,
            onComplete: function(){
                console.log(done);
            }
        });

        //this.matter.add.mouseSpring();
        console.log("p scene");
        this.onStart();
    }

    update(){
        //p.angularVelocity = 0;
        this.everyTick();
    }




    gotoScene(key) {
        this.cameras.main.fade(this.transitionDuration, 0, 0, 0);
        this.time.delayedCall(this.transitionDuration, () => {
            this.scene.start(key, { inventory: this.inventory });
        });
    }

}