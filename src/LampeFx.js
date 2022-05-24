class LampeFx {
    constructor(scene, player2) {
        this.scene = scene;
        this.player2 = player2;

        const map = this.scene.make.tilemap({key: this.scene.mapKey});

        this.LampFx = this.scene.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        map.getObjectLayer('LampFx').objects.forEach((LampFx) => {
            this.LampFxSprite = this.LampFx.create(LampFx.x - 30, LampFx.y - 25 - LampFx.height, 'LampFx').setOrigin(0).setVisible(false);
            this.LampFxSprite.play('Lampfx');
        });
        this.scene.physics.add.overlap(this.player2.player2, this.LampFx,  this.LampeFx.bind(this), null, this);
    }

    LampeFx(player2, LampeFx){
        LampeFx.visible = true;
    }
}