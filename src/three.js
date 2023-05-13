class Three extends PlinkScene{
    constructor(){
        super("three");
    }
    onStart(){
        this.triggered = 0;
        this.finished = 0;
        this.levelText = this.add.text(500,50,"Level 3");
        this.levelText.setFontSize("60pt");

        this.makeCup(100,300);
        this.makeCup(550,520);
        this.makeCup(870,340);
        this.makeCup(300,950);
        this.makeCup(990,1250);
        this.makeCup(470,1450);

        this.tweens.add({
            targets: this.ball,
            scale:2,
        })
        this.add.rectangle(0,1775,1210,150, 0xFF0000).setOrigin(0,0);


    }

    inGoodZone(){
        if(this.inSmallBox(100,300) || this.inSmallBox(550,520) || this.inSmallBox(870, 340) || this.inSmallBox(300,950) || this.inSmallBox(990,1250) || this.inSmallBox(470,1450)){
            return true;
        }
        return false;
    }

    inSmallBox(x,y){
        return this.inBox(x+5,y-35,x+130,y+70);
    }

    makeCup(x,y){
        this.matter.add.rectangle(x, y, 10, 75, { isStatic: true, mass: 99999});
        this.matter.add.rectangle(x+70,y+75/2 + 5, 150, 10, { isStatic: true, mass: 99999});
        this.matter.add.rectangle(x+ 140, y, 10, 75, { isStatic: true, mass: 99999});
        this.add.rectangle(x+5,y-35,130,70, 0x00FF00,0.5).setOrigin(0,0);

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
        if(this.finished == 0 && this.isStopped() && this.inGoodZone()){
            this.finished = 1;
            this.levelText.setText("Good Job!");
            this.gotoScene('victory')
        }
    }
}