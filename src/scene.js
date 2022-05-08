class scene extends Phaser.Scene {

    preload() {
        this.load.image('background', 'assets/images/background.png');
        this.load.image('spike', 'assets/images/spike.png');
        // At last image must be loaded with its JSON
        this.load.image('player', 'assets/images/Mana.png');
        this.load.image('tiles', 'assets/tilesets/Tileset1.png');
        this.load.image('tilesAP', 'assets/tilesets/TilesetAP.png');
        this.load.image('FeuF','assets/images/FF.png');
        this.load.image('Lampe', 'assets/images/Lampe.png');
        this.load.image('Cage', 'assets/images/Cage.png');
        this.load.image('Gate', 'assets/images/Gate.png');
        this.load.image('Death', 'assets/images/Death.png');
        this.load.image('Save', 'assets/images/Save.png');
        this.load.image('TrouN', 'assets/images/TN.png');
        this.load.image('Plateforme', 'assets/images/Plateforme.png');
        this.load.image('GateO', 'assets/images/GateO.png');


        // Load the export Tiled JSON
        this.load.tilemapTiledJSON('map', 'assets/tilemaps/tableauTiled1.json');
    }


    create() {





        const backgroundImage = this.add.image(0, 0, 'background').setOrigin(0, 0);
        backgroundImage.setScale(1, 0.8);
        const map = this.make.tilemap({key: 'map'});

        const tileset = map.addTilesetImage('Tileset1', 'tiles');
        const tilesetAP = map.addTilesetImage('TilesetAP', 'tilesAP');



        this.cursors = this.input.keyboard.createCursorKeys();

        this.plan2 = map.createStaticLayer('Plan2', tilesetAP);
        this.plan2.setCollisionByExclusion(-1, false);

        this.plan3 = map.createStaticLayer('Plan3', tilesetAP);
        this.plan3.setCollisionByExclusion(-1, false);

        this.platforms = map.createStaticLayer('Base', tileset);
        this.platforms.setCollisionByExclusion(-1, true);

        this.player = new Player(this);
        this.player2 = new Player2(this);

        this.Plateforme = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        map.getObjectLayer('Plateformes').objects.forEach((Plateforme) => {
            this.PlateformeSprite = this.Plateforme.create(Plateforme.x + 30, Plateforme.y - 20 + Plateforme.height, 'Plateforme');
        });

        this.Death = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        map.getObjectLayer('DeathZone').objects.forEach((Death) => {
            const DeathSprite = this.Death.create(Death.x, Death.y - Death.height, 'Death').setOrigin(0).setVisible(false) ;
        });
        this.physics.add.collider(this.player.player, this.Death, this.playerHit, null, this);

        this.TrouN = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        map.getObjectLayer('TrousN').objects.forEach((TrouN) => {
            this.TrouNSprite = this.TrouN.create(TrouN.x+30, TrouN.y- 200 + TrouN.height, 'TrouN');
        });

        this.Save = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        map.getObjectLayer('Checkpoints').objects.forEach((Save) => {
            const SaveSprite = this.Save.create(Save.x, Save.y - Save.height, 'Save').setOrigin(0);
        });
        this.physics.add.overlap(this.player.player, this.Save, this.sauvegarde, null, this)

        this.cursors = this.input.keyboard.createCursorKeys();

        this.Cage = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        map.getObjectLayer('Cages').objects.forEach((Cage) => {
            this.CageSprite = this.Cage.create(Cage.x + 25, Cage.y - 145 + Cage.height, 'Cage');
        });

        this.Lampe = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        map.getObjectLayer('Lampes').objects.forEach((Lampe) => {
            this.LampeSprite = this.Lampe.create(Lampe.x, Lampe.y- 170 + Lampe.height, 'Lampe');
        });

        this.Gate = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        map.getObjectLayer('Gates').objects.forEach((Gate) => {
            this.GateSprite = this.Gate.create(Gate.x+10, Gate.y-180, 'Gate');
        });



        this.pointCamera = this.physics.add.sprite(960,384);
        this.pointCamera.body.setAllowGravity(false);
        this.pointCamera.setImmovable(true);
        this.cameras.main.startFollow(this.pointCamera,false,1,1,0,150);
        this.cameras.main.setRoundPixels(true);
        this.pointCamera2 = this.physics.add.sprite(2784,384);
        this.pointCamera2.body.setAllowGravity(false);
        this.pointCamera2.setImmovable(true);


        this.plan1 = map.createStaticLayer('Plan1', tileset);
        this.plan1.setCollisionByExclusion(-1, false);

    }

    sauvegarde(player, saves) {
        console.log("current", this.currentSaveX, this.currentSaveY)
        this.currentSaveX = player.x
        this.currentSaveY = player.y
        saves.body.enable = false;
        this.currentKey = player.key
    }

    playerHit(player, Death) {
        player.setVelocity(0, 0);
        player.x = this.currentSaveX
        player.y = this.currentSaveY;
        player.key= this.currentKey
        player.play('idle', true);
        player.setAlpha(0);
        let tw = this.tweens.add({
            targets: player,
            alpha: 1,
            duration: 100,
            ease: 'Linear',
            repeat: 5,
        });
    }


    update() {
        console.log(this.player.player.body.x)
        if(this.player.player.body.x==1857){
            this.cameras.main.startFollow(this.pointCamera2,false,1,1,0,150);
        }


        this.player2.move();


        this.player.move();






    }
}