class GateOpen{
    constructor(scene) {
        this.scene = scene;

        const map = this.scene.make.tilemap({key: this.scene.mapKey});

        this.GateO = this.scene.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        map.getObjectLayer('GateOpen').objects.forEach((GateO) => {
            this.GateOSprite = this.scene.physics.add.sprite(GateO.x, GateO.y-GateO.height, 'GateO').setOrigin(0).setVisible(false);
            this.GateOSprite.name = GateO.name;
            this.GateO.add(this.GateOSprite);
        });

    }
}