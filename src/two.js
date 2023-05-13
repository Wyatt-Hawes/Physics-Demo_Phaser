class Two extends PlinkScene{
    constructor(){
        super("two");
        this.finished = 0;
    }

    onStart(){
        this.levelText = this.add.text(500,50,"Level 2");
        this.levelText.setFontSize("60pt");

        this.makePegs();
        this.makeBox();

        this.add.rectangle(560,650,130,140, 0x00FF00).setOrigin(0,0);
        this.add.rectangle(0,1775,1210,150, 0xFF0000).setOrigin(0,0);
    }

    makePegs(){
        let c = 1180/2;
        let h = 600;

        for(let i = 0; i < 8; i++){
                this.makePeg(100 + (150 * i), h);
            
        }
    }

    makeBox(){
        this.makeWall(550,720);
        this.makeWall(700,720);
        this.matter.add.rectangle(625, 800, 160, 10, { isStatic: true, mass: 99999});
    }

    inGoodZone(){
        if(this.inBox(560,650,560+130,650+140)){
            return true;
        }else{
            return false;
        }
    }

    inBadZone(){
        if(this.inBox(0,1775,1210,1925)){
            return true;
        }else{
            return false;
        }
    }

    everyTick(){
        if(this.finished == 0 && this.inBadZone()){
            this.ball.setPosition(1348,1100);
        }
        if(this.finished == 0 && this.inGoodZone() && this.isStopped()){
            this.finished = 1;
            this.levelText.setText("Good Job!");
            this.gotoScene('three')
        }
    }
}