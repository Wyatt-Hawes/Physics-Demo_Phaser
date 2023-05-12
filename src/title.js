class Title extends PlinkScene{
    constructor(){
        super("title");
    }

    onStart(){
        
        let t = this.add.text(450,100, "Plink!", );
        t.setColor('#ffFFFF');
        t.setFontSize('100pt');

        let point = this.add.text(1150,1450,"👉");
        point.setFontSize('100pt');
        point.setAngle(-30);

        this.tweens.add({
            targets:point,
            y: 1700,
            duration: 1000,
            loop: -1,
            delay: 500
        });

        let p1 = this.matter.add.rectangle(710, 575, 1000, 50, { isStatic: true, mass: 99999});
        let p2 = this.matter.add.rectangle(510, 775, 1000, 50, { isStatic: true, mass: 99999});

        //Zone
        let z = this.add.zone(900,300,500, 600 );
        //let zVis = this.add.rectangle(900,300,500,600,0xFFFFFF);
        //this.zone.body.debugBodyColor(0xFFFFFF);
        console.log(this);
        Phaser.Physics.Matter.MatterPhysics.overlap(z,this.ball, ()=>{
            console.log("overlap!");
        })

    }

    everyTick(){
        

    }
}