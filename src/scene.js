class scene extends Phaser.Scene {

    preload() {
        this.load.image('background', 'assets/images/background.png');
        this.load.image('spike', 'assets/images/spike.png');
        // At last image must be loaded with its JSON
        this.load.atlas('player', 'assets/images/kenney_player.png', 'assets/images/kenney_player_atlas.json');
        this.load.image('tiles', 'assets/tilesets/Tileset1.png');

        // Load the export Tiled JSON
        this.load.tilemapTiledJSON('map', 'assets/tilemaps/tableauTiled1.json');
    }


    create() {





        const backgroundImage = this.add.image(0, 0, 'background').setOrigin(0, 0);
        backgroundImage.setScale(1, 0.8);
        const map = this.make.tilemap({key: 'map'});

        const tileset = map.addTilesetImage('Tileset1', 'tiles');
        this.platforms = map.createStaticLayer('Base', tileset);

        this.platforms.setCollisionByExclusion(-1, true);
        this.cursors = this.input.keyboard.createCursorKeys();


        this.player = new Player(this)

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

        switch (true) {
            case (this.cursors.space.isDown || this.cursors.up.isDown) && this.player.player.body.onFloor():
                this.player.jump()
                console.log("oui")
                break;
            case this.cursors.left.isDown:
                this.player.moveLeft()
                break;
            case this.cursors.right.isDown:
                this.player.moveRight();
                break;
            default:
                this.player.stop();
        }





    }
}