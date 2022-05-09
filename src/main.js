const config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 12800,
    heigth: 768,
    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 560 },
            debug: true,
        },
    },
    scene: new scene(),
};

const game = new Phaser.Game(config);