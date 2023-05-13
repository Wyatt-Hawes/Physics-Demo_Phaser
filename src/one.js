class One extends PlinkScene{
    constructor(){
        super("one");
    }
    
    onStart(){
        let t = this.add.text(500,50,"Level 1");
        t.setFontSize("60pt");

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

    everyTick(){

    }
}