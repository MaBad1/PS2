class Gate{
    constructor(scene, player, player2) {
        this.scene = scene;
        this.player = player;
        this.player2 = player2;

        const map = this.scene.make.tilemap({key: 'map'});

        this.Gate = this.scene.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        map.getObjectLayer('Gates').objects.forEach((Gate) => {
            this.GateSprite = this.Gate.create(Gate.x, Gate.y-Gate.height, 'Gate').setOrigin(0);
            this.GateSprite.nom = Gate.name;
        });
        this.scene.physics.add.collider(this.player.player, this.Gate);
        this.scene.physics.add.collider(this.player2.player2, this.Gate);

    }
}