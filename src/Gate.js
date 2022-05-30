class Gate{
    constructor(scene, player, player2) {
        this.scene = scene;
        this.player = player;
        this.player2 = player2;

        const map = this.scene.make.tilemap({key:this.scene.mapKey});

        this.Gate = this.scene.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        map.getObjectLayer('Gates').objects.forEach((Gate) => {
            this.GateSprite = this.Gate.create(Gate.x, Gate.y-Gate.height, 'Gate').setOrigin(0);
            this.GateSprite.name = Gate.name;
        });
        this.scene.physics.add.collider(this.player.player, this.Gate);
        this.scene.physics.add.collider(this.player2.player2, this.Gate);

        this.emitter=EventDispatcher.getInstance();
        this.emitter.on('hide door',this.HideDoor,this);
        this.emitter.on('show door',this.ShowDoor,this);

    }

    ShowDoor(){
        console.log('on');
        for (var i = 0; i < this.Gate.getChildren().length; i++) {
            if (this.scene.lampe.LampeSprite.name === this.Gate.getChildren()[i].name) {
                this.Gate.getChildren()[i].visible = true;
                this.Gate.getChildren()[i].body.enable = true;
            }
        }

    }

    HideDoor(){
        console.log('off');
        for (var i = 0; i < this.Gate.getChildren().length; i++) {
            if (this.scene.lampe.LampeSprite.name === this.Gate.getChildren()[i].name) {
                this.Gate.getChildren()[i].visible = false;
                this.Gate.getChildren()[i].body.enable = false;
            }
        }


    }
}