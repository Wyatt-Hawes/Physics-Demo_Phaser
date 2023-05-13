
class One extends PlinkScene{
    constructor(){
        super("one");
    }
    
    onStart(){
        this.levelText = this.add.text(500,50,"Level 1");
        this.levelText.setFontSize("60pt");
        this.finished = 0;
        // this.tweens.add({
        //     targets: t,
        //     alpha: 0,
        //     duration: 3000,
        // })
        this.makePegs();
        this.makeWalls();


        this.addGoodZones();
        this.addBadZones();
    }

    makePegs(){
        let c = 1180/2;
        let h = 600;

        for(let j = 0; j < 7; j++){
            for(let i = 0; i < 8; i ++){
                if(j % 2 == 0){
                    this.makePeg(100 + (150 * i), h + (150 * j));
                }else{
                    this.makePeg(25 + (150 * i), h + (150 * j));
                }
            }
        }
    }
    makeWalls(){
        for(let i= 0; i < 6; i++){
            this.makeWall(10 + (200 * i),1850);
        }
    }

    addGoodZones(){
        for(let i = 0; i < 3; i++){
            this.addRect(15 + (400 * i),1775,0x00FF00);
        }
    }

    addBadZones(){
        for(let i = 0; i < 3; i++){
            this.addRect(215 + (400 * i),1775,0xFF0000);
        }
    }

    inGoodZone(){
        if(this.inBox(15,1775,200,1900) || this.inBox(415,1775,600,1900) || this.inBox(815, 1775, 1000,1900)){
            return true;
        }else{
            return false;
        }
    }

    inBadZone(){
        if(this.inBox(215,1775,400,1900) || this.inBox(615,1775,800,1900) || this.inBox(1015, 1775, 1200,1900)){
            return true;
        }else{
            return false;
        }
    }

    everyTick(){
        //console.log(this.inGoodZone() && this.isStopped());
        //console.log(this.inBadZone() && this.isStopped());
        if(this.finished == 0 && this.inBadZone() && this.isStopped()){
            this.ball.setPosition(1348,1100);
        }
        if(this.finished == 0 && this.inGoodZone() && this.isStopped()){
            this.finished = 1;
            this.levelText.setText("Good Job!");
            this.gotoScene('intermtwo')
        }
    }
}