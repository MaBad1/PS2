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

        this.Cage = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        map.getObjectLayer('Cages').objects.forEach((Cage) => {
            this.CageSprite = this.Cage.create(Cage.x + 35, Cage.y- 100 + Cage.height, 'Cage');
        });

        this.Lampe = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        map.getObjectLayer('Lampes').objects.forEach((Lampe) => {
            this.LampeSprite = this.Lampe.create(Lampe.x, Lampe.y- 160 + Lampe.height, 'Lampe');
        });

        this.Gate = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        map.getObjectLayer('Gates').objects.forEach((Gate) => {
            this.GateSprite = this.Gate.create(Gate.x+10, Gate.y-305, 'Gate');
        });

        this.player = new Player(this)
        this.player2 = new Player2(this)

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


    update() {
        console.log(this.player.player.body.x)
        if(this.player.player.body.x==1824){
            this.cameras.main.startFollow(this.pointCamera2,false,1,1,0,150);
        }

       this.player.move();




    }
}