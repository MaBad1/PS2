class Gate{
    constructor(scene, player, player2) {
        this.scene = scene;
        this.player = player;
        this.player2 = player2;

        const map = this.scene.make.tilemap({key:this.scene.mapKey});

        this.GateG = this.scene.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        map.getObjectLayer('Gates').objects.forEach((Gate) => {
            this.GateSprite = this.GateG.create(Gate.x, Gate.y-Gate.height, 'Gate').setOrigin(0);
            this.GateSprite.name = Gate.name;
        });
        this.scene.physics.add.collider(this.player.player, this.GateG);
        this.scene.physics.add.collider(this.player2.player2, this.GateG);

        this.emitter=EventDispatcher.getInstance();
        this.emitter.on('hide door',this.HideDoor,this);
        this.emitter.on('show door',this.ShowDoor,this);


    }


    ShowDoor(name){
        for (var i = 0; i < this.GateG.getChildren().length; i++) {
            if (name === this.GateG.getChildren()[i].name) {
                this.GateG.getChildren()[i].visible = true;
                this.GateG.getChildren()[i].body.enable = true;
                console.log(this.scene.lampe.LampeSprite)
                console.log(this.GateG.getChildren()[i])
            }
        }

    }

    HideDoor(name){
        for (var i = 0; i < this.GateG.getChildren().length; i++) {
            if (name === this.GateG.getChildren()[i].name) {
                this.GateG.getChildren()[i].visible = false;
                this.GateG.getChildren()[i].body.enable = false;
            }
        }


    }
}