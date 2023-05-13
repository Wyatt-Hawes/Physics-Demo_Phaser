class IntermOne extends Phaser.Scene{
    constructor(){
        super("intermone");
        this.triggered = 0;
        this.nextZone = 0;
    }
    preload(){
        this.load.image('ball', 'assets/aqua_ball.png');
        this.load.image('rect', 'assets/image.png');
    }
    create(){
        this.input.on('pointerdown', (mouse) => console.log(Math.floor(mouse.x) + "," + Math.floor(mouse.y)));

        this.input.on('pointerdown', () => {this.gotoScene('one');});

        this.levelText = this.add.text(200,400,"Get the ball into the green!");
        this.levelText.setFontSize('40pt');

        this.makeCup(600,1000);
        
        let b = this.add.sprite(540,835,'ball');

        let arrow = this.add.text(590,900, '➡');
        arrow.setOrigin(0.5,0.5);
        arrow.setScale(5);
        arrow.angle = 50;

        this.tweens.add({
            targets: arrow,
            scale: 4,
            duration:500,
            yoyo:true,
            repeat: -1,
        });
        this.time.delayedCall(1500, ()=> this.add.text(350,1300, "Click to continue!").setFontSize("50pt"));

        b.setScale(3);
    }
    
    makeCup(x,y){
        this.matter.add.rectangle(x, y, 10, 75, { isStatic: true, mass: 99999});
        this.matter.add.rectangle(x+70,y+75/2 + 5, 150, 10, { isStatic: true, mass: 99999});
        this.matter.add.rectangle(x+ 140, y, 10, 75, { isStatic: true, mass: 99999});
        this.add.rectangle(x+5,y-35,130,70, 0x00FF00,0.5).setOrigin(0,0);
        

    }
    gotoScene(key) {
        this.cameras.main.fade(1500, 0, 0, 0);
        this.time.delayedCall(1500, () => {
            this.scene.start(key);
        });
    }
    update(){
    }
}

class IntermTwo extends Phaser.Scene{
    constructor(){
        super("intermtwo");
        this.triggered = 0;
        this.nextZone = 0;
    }
    preload(){
        this.load.image('ball', 'assets/aqua_ball.png');
        this.load.image('rect', 'assets/image.png');
    }
    create(){
        this.input.on('pointerdown', (mouse) => console.log(Math.floor(mouse.x) + "," + Math.floor(mouse.y)));

        this.input.on('pointerdown', () => {this.gotoScene('two');});

        this.levelText = this.add.text(200,400,"Get the ball into the green!");
        this.levelText.setFontSize('40pt');

        this.makeCup(600,1000);
        
        let b = this.add.sprite(540,835,'ball');

        let arrow = this.add.text(590,900, '➡');
        arrow.setOrigin(0.5,0.5);
        arrow.setScale(5);
        arrow.angle = 50;

        this.tweens.add({
            targets: arrow,
            scale: 4,
            duration:500,
            yoyo:true,
            repeat: -1,
        });
        this.time.delayedCall(1500, ()=> this.add.text(350,1300, "Click to continue!").setFontSize("50pt"));

        b.setScale(3);
    }
    
    makeCup(x,y){
        this.matter.add.rectangle(x, y, 10, 75, { isStatic: true, mass: 99999});
        this.matter.add.rectangle(x+70,y+75/2 + 5, 150, 10, { isStatic: true, mass: 99999});
        this.matter.add.rectangle(x+ 140, y, 10, 75, { isStatic: true, mass: 99999});
        this.add.rectangle(x+5,y-35,130,70, 0x00FF00,0.5).setOrigin(0,0);
        

    }
    gotoScene(key) {
        this.cameras.main.fade(1500, 0, 0, 0);
        this.time.delayedCall(1500, () => {
            this.scene.start(key);
        });
    }
    update(){
    }
}