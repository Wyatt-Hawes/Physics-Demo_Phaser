class Two extends PlinkScene{
    constructor(){
        super("two");
        this.finished = 0;
    }

    onStart(){
        this.makePegs();
    }

    makePegs(){
        let c = 1180/2;
        let h = 600;

        for(let i = 0; i < 8; i++){
                this.makePeg(100 + (150 * i), h);
            
        }
    }

    everyTick(){

    }
}