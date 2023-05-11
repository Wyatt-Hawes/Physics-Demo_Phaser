class Title extends PlinkScene{
    constructor(){
        super("title");
    }

    onStart(){
        let t = this.add.text(300,300, "Test", );
        t.setColor('#ff0000');
        t.setFontSize('60pt');
        


        //let me = this;
        //this.input.on('pointerdown', () => {me.gotoScene('one')});
    }

    everyTick(){

    }
}