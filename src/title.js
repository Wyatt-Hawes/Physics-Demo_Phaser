class Title extends PlinkScene{
    constructor(){
        super("title");
        this.triggered = 0;
        this.nextZone = 0;
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

        let p1 = this.matter.add.rectangle(710, 575, 1000, 50, { isStatic: true, mass: 99999, friction: 1});
        let p2 = this.matter.add.rectangle(510, 775, 1000, 50, { isStatic: true, mass: 99999, friction: 1});

        //Zone
        let z = this.add.zone(900,300,500, 600 );
        //let zVis = this.add.rectangle(900,300,500,600,0xFFFFFF);
        //this.zone.body.debugBodyColor(0xFFFFFF);
        console.log(this);
        console.log(this.ball);
        this.matter.overlap(this.ball)
        // this.matter.add.overlap(z, this.ball, ()=>{
        //     console.log("overlapped");
        // });

        //this.makePeg(500,1000);
        
    }

    
    everyTick(){
        if(this.triggered == 0 & this.xbetween(850, 1250) && this.ybetween(0,550)){
            console.log("inside");
            this.triggered = 1;
            let t = this.add.text(150,200,"Press A and D to influence the ball!");
            t.setFontSize("40pt");
        }

        if(this.nextZone == 0 && this.xbetween(0,1200) && this.ybetween(1800,1900)){
            console.log("next!");
            this.nextZone = 1;
            let t = this.add.text(450,1000,"Good Job!");
            t.setFontSize("40pt");
            this.time.delayedCall(3000, () => this.gotoScene('one'));
        }
        //console.log(this.ball.x);
    }
}