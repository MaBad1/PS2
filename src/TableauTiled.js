class TableauTiled extends Tableau1 {


    loadFrames(prefix,url,length) {
        let frames = [];
        for (let i = 1; i <= length; i++) {
            this.load.image(prefix + i, url + i + '.png')
        }
        return frames;
    }

    getFrames(prefix,length){
        let frames=[];
        for (let i=1;i<=length;i++){
            frames.push({key: prefix+i});
        }
        return frames;
    }

    preload() {
        super.preload();
        this.load.image('background', 'assets/images/background.png');
        this.load.image('arbre1', 'assets/anims/arbreAube.png');
        this.load.image('arbre2', 'assets/anims/arbreJour.png');
        this.load.image('arbre3', 'assets/anims/arbreSoir.png');
        this.load.image('arbre4', 'assets/anims/arbreNuit.png');
        this.load.image('nuage', 'assets/anims/nuage.png');
        this.load.image('water', 'assets/anims/water.png');
        this.load.image('fumer', 'assets/anims/fumer.png');
        this.load.atlas('player', 'assets/images/kenney_player.png', 'assets/images/kenney_player_atlas.json');
        this.loadFrames('TreeA', 'assets/aa/aa',6);
        this.loadFrames('TreeC', 'assets/ac/ac',6);
        this.loadFrames('TreeJ', 'assets/aj/aj',6);
        this.loadFrames('TreeN', 'assets/an/an',6);



        // At last image must be loaded with its JSON
        this.load.image('tiles', 'assets/tilesets/tilesheetFT.png');

        // Load the export Tiled JSON
        this.load.tilemapTiledJSON('map', 'assets/tilemaps/blockout.json');

    }



    create() {
        super.create();

        //Création de toutes les animations
        //Arbre1
        this.anims.create({
            key: 'TreeMoove1',
            frames: this.getFrames("TreeA",6),
            frameRate: 3,
            repeat: -1,
        });
        //Arbre2
        this.anims.create({
            key: 'TreeMoove3',
            frames: this.getFrames("TreeC",6),
            frameRate: 3,
            repeat: -1,
        });
        //Arbre3
        this.anims.create({
            key: 'TreeMoove2',
            frames: this.getFrames("TreeJ",6),
            frameRate: 3,
            repeat: -1,
        });
        //Arbre4
        this.anims.create({
            key: 'TreeMoove4',
            frames: this.getFrames("TreeN",6),
            frameRate: 3,
            repeat: -1,
        });



        // On créer la taille du niveau
        this.vuelarge = false;
        this.largeurniveau = 5120;
        this.hauteurniveau = 720;
        this.largeurcamera = 1280;
        this.hauteurcamera = 720;

        const backgroundImage = this.add.image(0, 0, 'background').setOrigin(0, 0);
        backgroundImage.setScale(2, 0.8);

        //notre map
        const map = this.make.tilemap({key: 'map'});
        //nos images qui vont avec la map
        const tileset = map.addTilesetImage('tilesheetFT', 'tiles');


        //On charge les layers Tiled du dernier au premier plan, les layers de Tiles sont une simple ligne
        const platforms5 = map.createLayer('ciel', tileset, 0, 200);
        const platforms4 = map.createLayer('plan4', tileset, 0, 200);
        const platforms3 = map.createLayer('plan3', tileset, 0, 200);
        const platforms2 = map.createLayer('Decor', tileset, 0, 200);

        //Les layers d'objets : on charge d'abord la physique des objets.
        this.arbre4 = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });

        //Puis le layer en question en positionnant objet par objet.
        map.getObjectLayer('Arbre4').objects.forEach((arbre4) => {
            const arbre4Sprite = this.arbre4.create(arbre4.x, arbre4.y + 200 - arbre4.height, 'arbre4').setOrigin(0);
            arbre4Sprite.play('TreeMoove4'); //On ajoute l'animation
            arbre4Sprite.scrollFactorX=0.97; //On ajoute la parallaxe
        });


        this.arbre3 = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });

        map.getObjectLayer('Arbre3').objects.forEach((arbre3) => {
            const arbre3Sprite = this.arbre3.create(arbre3.x, arbre3.y + 200 - arbre3.height, 'arbre3').setOrigin(0);
            arbre3Sprite.play('TreeMoove3'); //On ajoute l'animation
            arbre3Sprite.scrollFactorX=0.97;
        });


        this.arbre2 = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });

        map.getObjectLayer('Arbre2').objects.forEach((arbre2) => {
            const arbre2Sprite = this.arbre2.create(arbre2.x, arbre2.y + 200 - arbre2.height, 'arbre2').setOrigin(0);
            arbre2Sprite.play('TreeMoove2'); //On ajoute l'animation
            arbre2Sprite.scrollFactorX=0.97;
        });



        this.arbre1 = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });

        map.getObjectLayer('Arbre1').objects.forEach((arbre1) => {
            const arbre1Sprite = this.arbre1.create(arbre1.x, arbre1.y + 200 - arbre1.height, 'arbre1').setOrigin(0);
            arbre1Sprite.play('TreeMoove1'); //On ajoute l'animation
            arbre1Sprite.scrollFactorX=0.97;
        });

        const platforms1 = map.createLayer('Base', tileset, 0, 200);

        //Création du player et de toutes ses anims
        this.player = this.physics.add.sprite(50, 300, 'player');
        this.player.setBounce(0.1);
        this.player.setCollideWorldBounds(false);


        //anim de marche
        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNames('player', {
                prefix: 'robo_player_',
                start: 2,
                end: 3,
            }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'idle',
            frames: [{key: 'player', frame: 'robo_player_0'}],
            frameRate: 10,
        });
        //anim de saut
        this.anims.create({
            key: 'jump',
            frames: [{key: 'player', frame: 'robo_player_1'}],
            frameRate: 10,
        });

        //On charge le dernier layer Tiled pour qu'il soit en premier plant !
        const platforms0 = map.createLayer('Plan1', tileset, 0,200);




        // on donne les collisions ou non
        platforms0.setCollisionByExclusion(-1, false);
        platforms1.setCollisionByExclusion(-1, true);
        platforms2.setCollisionByExclusion(-1, false);
        platforms3.setCollisionByExclusion(-1, false);
        platforms4.setCollisionByExclusion(-1, false);
        platforms5.setCollisionByExclusion(-1, false);

        // Qui collide avec quoi
        this.physics.add.collider(this.player, platforms1);


        //On ajoute la parallaxe pour les layers de tiles.
        platforms1.scrollFactorX=1; //SOL
        platforms0.scrollFactorX=1.03;//Bushes
        platforms2.scrollFactorX=0.95; //Bushes2
        platforms3.scrollFactorX=0.90; //MONTAGNES
        platforms4.scrollFactorX=0.87; //NUAGES
        platforms5.scrollFactorX=1; //CIEL

    }



}