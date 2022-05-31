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
            this.LampFxSprite.name = LampFx.name;

            this.emitter=EventDispatcher.getInstance();
            this.emitter.on('hide lampFx',this.HideLampFx,this);
            this.emitter.on('show lampFx',this.ShowLampFx,this);

        });

    }

    ShowLampFx(name){
        for (var i = 0; i < this.LampFx.getChildren().length; i++) {
            if (name === this.LampFx.getChildren()[i].name) {
                this.LampFx.getChildren()[i].visible = true;
            }
        }
    }

    HideLampFx(name){
        for (var i = 0; i < this.LampFx.getChildren().length; i++) {
            if (name === this.LampFx.getChildren()[i].name) {
                this.LampFx.getChildren()[i].visible = false;
            }
        }
    }

}