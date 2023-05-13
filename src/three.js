class Three extends PlinkScene{
    constructor(){
        super("three");
        this.triggered = 0;
    }
    onStart(){
        this.levelText = this.add.text(500,50,"Level 3");
        this.levelText.setFontSize("60pt");

        this.tweens.add({
            targets: this.ball,
            scale: 2,
        })

    }

    everyTick(){

    }
}