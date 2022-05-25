class Pelko {


    constructor(scene) {
        this.scene=scene;
        this.pelko = this.scene.physics.add.sprite(12544, 445, 'pelko');
        this.pelko.setDisplaySize(100,160);
        this.pelko.setBounce(0.1);
        this.pelko.setCollideWorldBounds(false);
        this.scene.physics.add.collider(this.pelko, this.scene.platforms);

        this.scene.anims.create({
            key: 'pIdle',
            frames: this.scene.anims.generateFrameNames('pIdle', {
                start: 0,
                end: 3,
            }),
            frameRate: 5,
            repeat: -1
        });

    }


}



