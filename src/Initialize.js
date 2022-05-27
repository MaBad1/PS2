class Initialize extends Phaser.Scene {
    constructor() {
        super('init');
    }

    create(){
        this.scene.start('Start')

        window.death = 0;
        window.compteur = 0;
    }
}