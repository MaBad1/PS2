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
            this.GateSprite = this.scene.physics.add.sprite(Gate.x, Gate.y-Gate.height, 'Gate').setOrigin(0);
            this.GateSprite.name = Gate.name;
            this.Gate.add(this.GateSprite);
        });
        this.scene.physics.add.collider(this.player.player, this.Gate);
        this.scene.physics.add.collider(this.player2.player2, this.Gate);

    }
}