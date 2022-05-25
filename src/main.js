const config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 12800,
    heigth: 768,
    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 500 },
            debug: true,
        },
    },
    scene: [new Start(), new cutIntro(),new Tuto(), new scene(), new cutBoss(), new boss(), new credits()]
};

const game = new Phaser.Game(config);