class Pelko {


    constructor(scene) {
        this.scene=scene;
        this.pelko = this.scene.physics.add.sprite(12544, 488, 'pelko');
        this.pelko.setDisplaySize(100,160);
        this.pelko.setBounce(0.1);
        this.pelko.setCollideWorldBounds(false);
        this.scene.physics.add.collider(this.pelko, this.scene.platforms);

        this.scene.anims.create({
            key: 'pIdle',
            frames: this.scene.anims.generateFrameNames('pIdle', {
                start: 0,
                end: 4,
            }),
            frameRate: 5,
            repeat: -1
        });
        this.scene.anims.create({
            key: 'pAtk',
            frames: this.scene.anims.generateFrameNames('pAtk', {
                start: 0,
                end: 4,
            }),
            frameRate: 10,
            repeat:1,
            showOnStart: true
        });

    }


}



