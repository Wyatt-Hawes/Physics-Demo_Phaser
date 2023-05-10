class PlinkScene extends Phaser.Scene{

    preload(){
            this.load.image('ball', 'assets/aqua_ball.png');
    }

    create(){
        this.matter.world.setBounds();

        let ball = this.matter.add.image(100,100, 'ball');
        ball.setScale(4);
        ball.setCircle();
        ball.setFriction(0.005);
        ball.setBounce(1);
        let body1 = this.matter.add.rectangle(100, 800, 200, 32, { isStatic: true,
        
        
        render: {fillStyle: 'green',
                 
                 lineWidth: 3}});

        // Bodies.rectangle(0,0,100,100, {
        //     render: {
        //         fillStyle: 'red',
        //         strokeStyle: 'blue',
        //         lineWidth: 3
        //     }
        // })

        console.log("p scene");
        this.onStart();
    }






    gotoScene(key) {
        this.cameras.main.fade(this.transitionDuration, 0, 0, 0);
        this.time.delayedCall(this.transitionDuration, () => {
            this.scene.start(key, { inventory: this.inventory });
        });
    }

}