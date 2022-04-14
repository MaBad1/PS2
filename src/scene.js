class scene extends Phaser.Scene {

    preload() {
        this.load.image('background', 'assets/images/background.png');
        this.load.image('spike', 'assets/images/spike.png');
        // At last image must be loaded with its JSON
        this.load.atlas('player', 'assets/images/kenney_player.png', 'assets/images/kenney_player_atlas.json');
        this.load.image('tiles', 'assets/tilesets/Tileset1.png');
        this.load.image('FeuF','assets/images/FF.png');
        this.load.image('Lampe', 'assets/images/Lampe.png');


        // Load the export Tiled JSON
        this.load.tilemapTiledJSON('map', 'assets/tilemaps/tableauTiled1.json');
    }


    create() {





        const backgroundImage = this.add.image(0, 0, 'background').setOrigin(0, 0);
        backgroundImage.setScale(1, 0.8);
        const map = this.make.tilemap({key: 'map'});

        const tileset = map.addTilesetImage('Tileset1', 'tiles');



        this.cursors = this.input.keyboard.createCursorKeys();

        map.getObjectLayer('Lampes').objects.forEach((Lampe) => {

        });
        this.platforms = map.createStaticLayer('Base', tileset);
        this.platforms.setCollisionByExclusion(-1, true);

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
    }


    update() {
        console.log(this.player.player.body.x)
        if(this.player.player.body.x==1824){
            this.cameras.main.startFollow(this.pointCamera2,false,1,1,0,150);
        }

       this.player.move();




    }
}