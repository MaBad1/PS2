class scene extends Phaser.Scene {


    preload() {
        this.load.image('background', 'assets/images/background.png');
        this.load.image('persatmo', 'assets/images/persatmo.png');
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
        this.load.image('Next', 'assets/images/Next.png');
        this.load.image('Prev', 'assets/images/Prev.png');



        this.load.spritesheet('walk','assets/images/anim/walk.png',{frameWidth: 130, frameHeight: 140});
        this.load.spritesheet('idle','assets/images/anim/idle.png',{frameWidth: 130, frameHeight: 140});
        this.load.spritesheet('jump','assets/images/anim/jump.png',{frameWidth: 130, frameHeight: 140});
        this.load.spritesheet('brandir','assets/images/anim/brandir.png',{frameWidth: 130, frameHeight: 140});
        this.load.spritesheet('trou','assets/images/anim/trou.png',{frameWidth: 150, frameHeight: 150});

        this.load.image('Grain1', 'assets/images/anim/grain/Bruit1.png');
        this.load.image('Grain2', 'assets/images/anim/grain/Bruit2.png');
        this.load.image('Grain3', 'assets/images/anim/grain/Bruit3.png');
        this.load.image('Grain4', 'assets/images/anim/grain/Bruit4.png');


        // Load the export Tiled JSON
        this.load.tilemapTiledJSON('map', 'assets/tilemaps/tableauTiled1.json');
    }


    create() {

        this.anims.create({
            key: 'trou',
            frames: this.anims.generateFrameNames('trou', {
                start: 0,
                end: 19,
            }),
            frameRate: 10,
            repeat:-1,
        });

        const backgroundImage = this.add.image(0, 0, 'background').setOrigin(0, 0);
        backgroundImage.setScale(1, 0.8);
        const map = this.make.tilemap({key: 'map'});

        const tileset = map.addTilesetImage('Tileset1', 'tiles');
        const tilesetAP = map.addTilesetImage('TilesetAP', 'tilesAP');

        this.cursors = this.input.keyboard.createCursorKeys();

        this.plan3 = map.createStaticLayer('Plan3', tilesetAP);
        this.plan3.setCollisionByExclusion(-1, false);

        this.plan2 = map.createStaticLayer('Plan2', tilesetAP);
        this.plan2.setCollisionByExclusion(-1, false);

        const persatmo = this.add.image(0, 0, 'persatmo').setOrigin(0, 0);
        persatmo.setScale(1, 1);

        this.platforms = map.createStaticLayer('Base', tileset);
        this.platforms.setCollisionByExclusion(-1, true);

        this.player = new Player(this);
        this.player2 = new Player2(this);

        this.Next = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        map.getObjectLayer('NextCam1').objects.forEach((Next) => {
            this.NextSprite = this.Next.create(Next.x + 30, Next.y - 20 + Next.height, 'Next').setVisible(false);
        });
        this.physics.add.overlap(this.player.player, this.Next, this.SetCam1, null, this);

        this.Next1 = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });

        map.getObjectLayer('NextCam2').objects.forEach((Next1) => {
            this.Next1Sprite = this.Next1.create(Next1.x + 30, Next1.y - 20 + Next1.height, 'Next').setVisible(false);
        });
        this.physics.add.overlap(this.player.player, this.Next1, this.SetCam2, null, this);

        this.Next2 = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });

        map.getObjectLayer('NextCam3').objects.forEach((Next2) => {
            this.Next2Sprite = this.Next2.create(Next2.x + 30, Next2.y - 20 + Next2.height, 'Next').setVisible(false);
        });
        this.physics.add.overlap(this.player.player, this.Next2, this.SetCam3, null, this);

        this.Next3 = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });

        map.getObjectLayer('NextCam4').objects.forEach((Next3) => {
            this.Next3Sprite = this.Next3.create(Next3.x + 30, Next3.y - 20 + Next3.height, 'Next').setVisible(false);
        });
        this.physics.add.overlap(this.player.player, this.Next3, this.SetCam4, null, this);

        this.Next4 = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });

        map.getObjectLayer('NextCam5').objects.forEach((Next4) => {
            this.Next4Sprite = this.Next4.create(Next4.x + 30, Next4.y - 20 + Next4.height, 'Next').setVisible(false);
        });
        this.physics.add.overlap(this.player.player, this.Next4, this.SetCam5, null, this);

        this.Next5 = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });

        map.getObjectLayer('NextCam6').objects.forEach((Next5) => {
            this.Next5Sprite = this.Next5.create(Next5.x + 30, Next5.y - 20 + Next5.height, 'Next').setVisible(false);
        });
        this.physics.add.overlap(this.player.player, this.Next5, this.SetCam6, null, this);

        this.Prev = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });

        map.getObjectLayer('PrevCam1').objects.forEach((Prev) => {
            this.PrevSprite = this.Prev.create(Prev.x + 30, Prev.y - 20 + Prev.height, 'Prev').setVisible(false);
        });
        this.physics.add.overlap(this.player.player, this.Prev, this.SetCam0, null, this);

        this.Prev1 = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });

        map.getObjectLayer('PrevCam2').objects.forEach((Prev1) => {
            this.Prev1Sprite = this.Prev1.create(Prev1.x + 30, Prev1.y - 20 + Prev1.height, 'Prev').setVisible(false);
        });
        this.physics.add.overlap(this.player.player, this.Prev1, this.SetCam1, null, this);

        this.Prev2 = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });

        map.getObjectLayer('PrevCam3').objects.forEach((Prev2) => {
            this.Prev2Sprite = this.Prev2.create(Prev2.x + 30, Prev2.y - 20 + Prev2.height, 'Prev').setVisible(false);
        });
        this.physics.add.overlap(this.player.player, this.Prev2, this.SetCam2, null, this);

        this.Prev3 = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });

        map.getObjectLayer('PrevCam4').objects.forEach((Prev3) => {
            this.Prev3Sprite = this.Prev3.create(Prev3.x + 30, Prev3.y - 20 + Prev3.height, 'Prev').setVisible(false);
        });
        this.physics.add.overlap(this.player.player, this.Prev3, this.SetCam3, null, this);

        this.Prev4 = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });

        map.getObjectLayer('PrevCam5').objects.forEach((Prev4) => {
            this.Prev4Sprite = this.Prev4.create(Prev4.x + 30, Prev4.y - 20 + Prev4.height, 'Prev').setVisible(false);
        });
        this.physics.add.overlap(this.player.player, this.Prev4, this.SetCam4, null, this);

        this.Prev5 = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });

        map.getObjectLayer('PrevCam6').objects.forEach((Prev5) => {
            this.Prev5Sprite = this.Prev5.create(Prev5.x + 30, Prev5.y - 20 + Prev5.height, 'Prev').setVisible(false);
        });
        this.physics.add.overlap(this.player.player, this.Prev5, this.SetCam5, null, this);

        this.Plateforme = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        map.getObjectLayer('Plateformes').objects.forEach((Plateforme) => {
            this.PlateformeSprite = this.Plateforme.create(Plateforme.x , Plateforme.y - Plateforme.height, 'Plateforme').setOrigin(0);
        });
        this.physics.add.collider(this.player.player, this.Plateforme);

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
            this.TrouNSprite = this.TrouN.create(TrouN.x, TrouN.y- TrouN.height, 'TrouN').setOrigin(0);
            this.TrouNSprite.play('trou');
            this.tweens.add({
                targets: this.TrouNSprite,
                y:this.TrouNSprite.y+256,
                paused: false,
                yoyo: true,
                repeat: -1
            });
        });
        this.physics.add.collider(this.player.player, this.TrouN, this.playerHit, null, this);
        this.physics.add.collider(this.player2.player2, this.TrouN, this.playerHit, null, this);

        this.TrouN2 = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        map.getObjectLayer('TrousN2').objects.forEach((TrouN2) => {
            this.TrouN2Sprite = this.TrouN2.create(TrouN2.x, TrouN2.y- TrouN2.height, 'TrouN').setOrigin(0);
            this.TrouN2Sprite.play('trou');
            this.tweens.add({
                targets: this.TrouN2Sprite,
                x:this.TrouN2Sprite.x+256,
                paused: false,
                yoyo: true,
                repeat: -1
            });
        });
        this.physics.add.collider(this.player.player, this.TrouN2, this.playerHit, null, this);
        this.physics.add.collider(this.player2.player2, this.TrouN2, this.playerHit, null, this);

        this.TrouN3 = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        map.getObjectLayer('TrousN3').objects.forEach((TrouN3) => {
            this.TrouN3Sprite = this.TrouN3.create(TrouN3.x, TrouN3.y- TrouN3.height, 'TrouN').setOrigin(0);
            this.TrouN3Sprite.play('trou');
            this.tweens.add({
                targets: this.TrouN3Sprite,
                y:this.TrouN3Sprite.y-384,
                duration: 5000,
                paused: false,
                yoyo: true,
                repeat: -1
            });
        });
        this.physics.add.collider(this.player.player, this.TrouN3, this.playerHit, null, this);
        this.physics.add.collider(this.player2.player2, this.TrouN3, this.playerHit, null, this);

        this.TrouN4 = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        map.getObjectLayer('TrousN4').objects.forEach((TrouN4) => {
            this.TrouN4Sprite = this.TrouN4.create(TrouN4.x, TrouN4.y- TrouN4.height, 'TrouN').setOrigin(0);
            this.TrouN4Sprite.play('trou');
            this.tweens.add({
                targets: this.TrouN4Sprite,
                x:this.TrouN4Sprite.x-128,
                paused: false,
                yoyo: true,
                repeat: -1
            });
        });
        this.physics.add.collider(this.player.player, this.TrouN4, this.playerHit, null, this);
        this.physics.add.collider(this.player2.player2, this.TrouN4, this.playerHit, null, this);

        this.Save = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        map.getObjectLayer('Checkpoints').objects.forEach((Save) => {
            const SaveSprite = this.Save.create(Save.x, Save.y - Save.height, 'Save').setOrigin(0).setVisible(false);
        });
        this.physics.add.overlap(this.player.player, this.Save, this.sauvegarde, null, this)

        this.cursors = this.input.keyboard.createCursorKeys();

        this.FF = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        map.getObjectLayer('FeuxFollets').objects.forEach((FF) => {
            this.FFSprite = this.FF.create(FF.x , FF.y  - FF.height, 'FeuF').setOrigin(0).setScale(0.5);
        });
        this.physics.add.overlap(this.player.player, this.FF, this.player.getKey, null, this);


        this.Cage = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        map.getObjectLayer('Cages').objects.forEach((Cage) => {
            this.CageSprite = this.Cage.create(Cage.x , Cage.y  - Cage.height, 'Cage').setOrigin(0);
        });

        this.Lampe = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        map.getObjectLayer('Lampes').objects.forEach((Lampe) => {
            this.LampeSprite = this.Lampe.create(Lampe.x, Lampe.y- Lampe.height, 'Lampe').setOrigin(0);
        });

        this.Gate = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        map.getObjectLayer('Gates').objects.forEach((Gate) => {
            this.GateSprite = this.Gate.create(Gate.x, Gate.y-Gate.height, 'Gate').setOrigin(0);
        });



        this.pointCamera = this.physics.add.sprite(960,384);
        this.pointCamera.body.setAllowGravity(false);
        this.pointCamera.setImmovable(true);
        this.cameras.main.startFollow(this.pointCamera,false,1,1,0,150);
        this.cameras.main.setRoundPixels(true);
        this.pointCamera2 = this.physics.add.sprite(2880,384);
        this.pointCamera2.body.setAllowGravity(false);
        this.pointCamera2.setImmovable(true);
        this.pointCamera3 = this.physics.add.sprite(4800,384);
        this.pointCamera3.body.setAllowGravity(false);
        this.pointCamera3.setImmovable(true);
        this.pointCamera4 = this.physics.add.sprite(6720,384);
        this.pointCamera4.body.setAllowGravity(false);
        this.pointCamera4.setImmovable(true);
        this.pointCamera5 = this.physics.add.sprite(8640,384);
        this.pointCamera5.body.setAllowGravity(false);
        this.pointCamera5.setImmovable(true);
        this.pointCamera6 = this.physics.add.sprite(10560,384);
        this.pointCamera6.body.setAllowGravity(false);
        this.pointCamera6.setImmovable(true);
        this.pointCamera7 = this.physics.add.sprite(12480,384);
        this.pointCamera7.body.setAllowGravity(false);
        this.pointCamera7.setImmovable(true);


        this.plan1 = map.createStaticLayer('Plan1', tileset);
        this.plan1.setCollisionByExclusion(-1, false);

        this.plan0 = map.createStaticLayer('Plan0', tileset);
        this.plan0.setCollisionByExclusion(-1, false);

        this.GrainAnim = this.add.sprite(0, 0, 'Grain1').setOrigin(0,0);

        this.anims.create({
            key: 'Grain',
            frames: [
                {key:'Grain1'},
                {key:'Grain2'},
                {key:'Grain3'},
                {key:'Grain4'},
            ],
            frameRate: 10,
            repeat: -1
        });
        this.GrainAnim.play('Grain');

        this.GrainAnim.scrollFactorX=0;

        this.CM = map.createStaticLayer('Cachemisere', tileset);
        this.CM.setCollisionByExclusion(-1, false);

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

    SetCam0(){
        this.cameras.main.startFollow(this.pointCamera,false,1,1,0,150);
    }
    SetCam1(){
        this.cameras.main.startFollow(this.pointCamera2,false,1,1,0,150);
    }
    SetCam2(){
        this.cameras.main.startFollow(this.pointCamera3,false,1,1,0,150);
    }
    SetCam3(){
        this.cameras.main.startFollow(this.pointCamera4,false,1,1,0,150);
    }
    SetCam4(){
        this.cameras.main.startFollow(this.pointCamera5,false,1,1,0,150);
    }
    SetCam5(){
        this.cameras.main.startFollow(this.pointCamera6,false,1,1,0,150);
    }
    SetCam6(){
        this.cameras.main.startFollow(this.pointCamera7,false,1,1,0,150);
    }


    update() {

        console.log(this.player.player.compteur);
        this.player.move();

        this.player2.move();

       /** switch (true) {
            case this.scene.cursors.space.isUp && this.scene.cursors.down.isDown:
                this.player2.player2.body.x = this.player.player.body.x + 5;
                this.player2.player2.body.y = this.player.player.body.y - 5;
                break;
        }*/
    }
}