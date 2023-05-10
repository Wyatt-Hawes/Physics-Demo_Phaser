const game = new Phaser.Game({
    //type: Phaser.CANVAS,
    physics: {
        default: 'matter',
        arcade: { debug: true }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1380,
        height: 1920
    },
    scene: [Title, One],
    title: "Adventure Game",
});

