class Two extends PlinkScene{
    constructor(){
        super("two");
        
    }

    onStart(){
        this.finished = 0;
        this.levelText = this.add.text(500,50,"Level 2");
        this.levelText.setFontSize("60pt");

        this.makePegs();
        //this.makeBox();

        this.z1 = this.add.rectangle(1050,650,160,140, 0x00FF00).setOrigin(0,0);
        this.add.rectangle(0,1775,1210,150, 0xFF0000).setOrigin(0,0);

        let me = this;
        this.tweens.add({
            targets: [this.z1],
            x:0,
            duration:8000,
            yoyo: true,
            repeat: -1,
        });
        this.flag = false;
    }

    makePegs(){
        let c = 1180/2;
        let h = 600;

        for(let i = 0; i < 8; i++){
                this.makePeg(100 + (150 * i), h);
            
        }
    }

    makeBox(){
        this.w1 = this.makeWall(550,720);
        this.w2 = this.makeWall(700,720);
        this.w3 = this.matter.add.rectangle(625, 800, 160, 10, { ignoreGravity: true, mass: 99999});
    }

    inGoodZone(){
        if(this.inBox(this.z1.x,this.z1.y,this.z1.x+160,this.z1.y+140)){
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
        //this.w3.setPosition(100,100);
        if(this.finished == 0 && this.inBadZone()){
            this.ball.setPosition(1348,1100);
        }
        if(this.finished == 0 && this.inGoodZone()){
            this.finished = 1;
            this.levelText.setText("Good Job!");
            this.flag = true;
            this.gotoScene('intermthree')
        }
        if(this.flag){
            this.ball.setPosition(this.z1.x + 80, this.z1.y + 70);
        }
    }
}