class GateOpen{
    constructor(scene) {
        this.scene = scene;

        const map = this.scene.make.tilemap({key: this.scene.mapKey});

        this.GateO = this.scene.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        map.getObjectLayer('GateOpen').objects.forEach((GateO) => {
            this.GateOSprite = this.GateO.create(GateO.x, GateO.y-GateO.height, 'GateO').setOrigin(0).setVisible(false);
            this.GateOSprite.name = GateO.name;
        })
        this.emitter=EventDispatcher.getInstance();
        this.emitter.on('hide doorO',this.HideDoorO,this);
        this.emitter.on('show doorO',this.ShowDoorO,this);

    }

    ShowDoorO(){
        for (var i = 0; i < this.GateO.length; i++) {
            if (this.scene.lampe.name === this.GateO[i].name) {
                this.GateO[i].visible = true;
            }
        }
    }

    HideDoorO(){
        for (var i = 0; i < this.GateO.length; i++) {
            if (this.scene.lampe.name === this.GateO[i].name) {
                this.GateO[i].visible = false;
            }
        }
    }
}