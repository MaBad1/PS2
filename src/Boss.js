class boss extends Phaser.Scene {

    constructor() {
        super('Boss');
    }

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
        this.load.image('brume', 'assets/images/brume.png');
        this.load.image('brumeB', 'assets/images/brumeB.png');
        this.load.image('LampeOn', 'assets/images/LampeOn.png');
        this.load.image('LampFx', 'assets/images/LampFx.png');
        this.load.image('Locator', 'assets/images/BG.png');
        this.load.image('pelko', 'assets/images/Pelko.png');
        this.load.image('Act', 'assets/images/Acti.png');
        this.load.image('NZ', 'assets/images/NextZone.png');

        this.load.audio('MainTheme', 'assets/sounds/LevelMusic.mp3');
        this.load.audio('brandirsfx', 'assets/sounds/brandir.ogg');
        this.load.audio('lampsfx', 'assets/sounds/lamp.ogg');
        this.load.audio('doorsfx', 'assets/sounds/door.wav');
        this.load.audio('walksfx', 'assets/sounds/walk.mp3');
        this.load.audio('deathsfx', 'assets/sounds/death.mp3');
        this.load.audio('FFsfx', 'assets/sounds/FF.mp3');

        this.load.spritesheet('walk','assets/images/anim/walk.png',{frameWidth: 130, frameHeight: 140});
        this.load.spritesheet('idle','assets/images/anim/idle.png',{frameWidth: 130, frameHeight: 140});
        this.load.spritesheet('jump','assets/images/anim/jump.png',{frameWidth: 130, frameHeight: 140});
        this.load.spritesheet('brandir','assets/images/anim/brandir.png',{frameWidth: 130, frameHeight: 140});
        this.load.spritesheet('trou','assets/images/anim/trou.png',{frameWidth: 150, frameHeight: 150});
        this.load.spritesheet('Lampfx','assets/images/anim/fxlamp.png',{frameWidth: 192, frameHeight: 192});
        this.load.spritesheet('pIdle','assets/images/anim/pIdle.png',{frameWidth: 160, frameHeight: 180});
        this.load.spritesheet('pAtk','assets/images/anim/pAtk.png',{frameWidth: 160, frameHeight: 180});

        this.load.image('Grain1', 'assets/images/anim/Grain/Bruit1.png');
        //this.load.image('Grain2', 'assets/images/anim/Grain/Bruit2.png');
        this.load.image('Grain3', 'assets/images/anim/Grain/Bruit3.png');
        this.load.image('Grain4', 'assets/images/anim/Grain/Bruit4.png');


        // Load the export Tiled JSON
        this.load.tilemapTiledJSON('map2', 'assets/tilemaps/Boss.json');
    }


    create() {
        this.started = false ;
        this.mapKey = 'map2';

        this.anims.create({
            key: 'trou',
            frames: this.anims.generateFrameNames('trou', {
                start: 0,
                end: 18,
            }),
            frameRate: 6,
            repeat:-1,
        });

        this.anims.create({
            key: 'Lampfx',
            frames: this.anims.generateFrameNames('Lampfx', {
                start: 0,
                end: 3,
            }),
            frameRate: 10,
            repeat:-1,
        });

        this.anims.create({
            key: 'pAtk',
            frames: this.anims.generateFrameNames('pAtk', {
                start: 0,
                end: 19,
            }),
            frameRate: 7,
            repeat:0,
            showOnStart: true,
            hideOnComplete: true
        });


        const backgroundImage = this.add.image(0, 0, 'background').setOrigin(0, 0);
        backgroundImage.setScale(1, 0.8);
        const map = this.make.tilemap({key: 'map2'});

        const tileset = map.addTilesetImage('Tileset1', 'tiles');
        const tilesetAP = map.addTilesetImage('TilesetAP', 'tilesAP');

        this.cursors = this.input.keyboard.createCursorKeys();

        this.plan3 = map.createStaticLayer('Plan3', tilesetAP);
        this.plan3.setCollisionByExclusion(-1, false);

        this.Brume = map.createStaticLayer('Brume', tilesetAP);
        this.Brume.setCollisionByExclusion(-1, false);

        this.plan2 = map.createStaticLayer('Plan2', tilesetAP);
        this.plan2.setCollisionByExclusion(-1, false);

        this.persatmo = this.add.image(0, 140, 'persatmo').setOrigin(0, 0);
        this.persatmo.setScale(1, 1);
        this.tweens.add({
            targets: this.persatmo,
            x: -2000,
            paused: false,
            yoyo: true,
            duration: 20000,
            repeat: -1
        });

        this.platforms = map.createStaticLayer('Base', tileset);
        this.platforms.setCollisionByExclusion(-1, true);

        this.player = new Player(this);
        this.player2 = new Player2(this);

        this.NZ = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });

        map.getObjectLayer('ToEnd').objects.forEach((NZ) => {
            this.NZSprite = this.NZ.create(NZ.x , NZ.y - NZ.height, 'NZ').setOrigin(0).setVisible(false);
        });
        this.physics.add.overlap(this.player.player, this.NZ, this.ToEnd, null, this);

        this.Next = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        map.getObjectLayer('NextCam1').objects.forEach((Next) => {
            this.NextSprite = this.Next.create(Next.x , Next.y -Next.height, 'Next').setOrigin(0).setVisible(false);
        });
        this.physics.add.overlap(this.player.player, this.Next, this.SetCam1, null, this);

        this.Next1 = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });

        map.getObjectLayer('NextCam2').objects.forEach((Next1) => {
            this.Next1Sprite = this.Next1.create(Next1.x , Next1.y - Next1.height, 'Next').setOrigin(0).setVisible(false);
        });
        this.physics.add.overlap(this.player.player, this.Next1, this.SetCam2, null, this);

        this.Next2 = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });

        map.getObjectLayer('NextCam3').objects.forEach((Next2) => {
            this.Next2Sprite = this.Next2.create(Next2.x , Next2.y - Next2.height, 'Next').setOrigin(0).setVisible(false);
        });
        this.physics.add.overlap(this.player.player, this.Next2, this.SetCam3, null, this);

        this.Next3 = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });

        map.getObjectLayer('NextCam4').objects.forEach((Next3) => {
            this.Next3Sprite = this.Next3.create(Next3.x , Next3.y - Next3.height, 'Next').setOrigin(0).setVisible(false);
        });
        this.physics.add.overlap(this.player.player, this.Next3, this.SetCam4, null, this);

        this.Next4 = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });

        map.getObjectLayer('NextCam5').objects.forEach((Next4) => {
            this.Next4Sprite = this.Next4.create(Next4.x , Next4.y - Next4.height, 'Next').setOrigin(0).setVisible(false);
        });
        this.physics.add.overlap(this.player.player, this.Next4, this.SetCam5, null, this);

        this.Next5 = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });

        map.getObjectLayer('NextCam6').objects.forEach((Next5) => {
            this.Next5Sprite = this.Next5.create(Next5.x , Next5.y - Next5.height, 'Next').setOrigin(0).setVisible(false);
        });
        this.physics.add.overlap(this.player.player, this.Next5, this.SetCam6, null, this);

        this.Prev = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });

        map.getObjectLayer('PrevCam1').objects.forEach((Prev) => {
            this.PrevSprite = this.Prev.create(Prev.x , Prev.y - Prev.height, 'Prev').setOrigin(0).setVisible(false);
        });
        this.physics.add.overlap(this.player.player, this.Prev, this.SetCam0, null, this);

        this.Prev1 = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });

        map.getObjectLayer('PrevCam2').objects.forEach((Prev1) => {
            this.Prev1Sprite = this.Prev1.create(Prev1.x , Prev1.y -  Prev1.height, 'Prev').setOrigin(0).setVisible(false);
        });
        this.physics.add.overlap(this.player.player, this.Prev1, this.SetCam1, null, this);

        this.Prev2 = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });

        map.getObjectLayer('PrevCam3').objects.forEach((Prev2) => {
            this.Prev2Sprite = this.Prev2.create(Prev2.x , Prev2.y -  Prev2.height, 'Prev').setOrigin(0).setVisible(false);
        });
        this.physics.add.overlap(this.player.player, this.Prev2, this.SetCam2, null, this);

        this.Prev3 = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });

        map.getObjectLayer('PrevCam4').objects.forEach((Prev3) => {
            this.Prev3Sprite = this.Prev3.create(Prev3.x , Prev3.y -  Prev3.height, 'Prev').setOrigin(0).setVisible(false);
        });
        this.physics.add.overlap(this.player.player, this.Prev3, this.SetCam3, null, this);

        this.Prev4 = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });

        map.getObjectLayer('PrevCam5').objects.forEach((Prev4) => {
            this.Prev4Sprite = this.Prev4.create(Prev4.x , Prev4.y -  Prev4.height, 'Prev').setOrigin(0).setVisible(false);
        });
        this.physics.add.overlap(this.player.player, this.Prev4, this.SetCam4, null, this);

        this.Prev5 = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });

        map.getObjectLayer('PrevCam6').objects.forEach((Prev5) => {
            this.Prev5Sprite = this.Prev5.create(Prev5.x , Prev5.y -  Prev5.height, 'Prev').setOrigin(0).setVisible(false);
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
            this.TrouNSprite = this.TrouN.create(TrouN.x, TrouN.y- TrouN.height, 'TrouN').setOrigin(0).setBodySize(135,135).setVisible(false);
            this.TrouNSprite.nom = TrouN.name;
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
        this.physics.add.collider(this.player2.player2, this.TrouN, this.player2Hit, null, this);

        this.TrouN2 = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        map.getObjectLayer('TrousN2').objects.forEach((TrouN2) => {
            this.TrouN2Sprite = this.TrouN2.create(TrouN2.x, TrouN2.y- TrouN2.height, 'TrouN').setOrigin(0).setBodySize(135,135).setVisible(false);
            this.TrouN2Sprite.nom = TrouN2.name;
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
        this.physics.add.collider(this.player2.player2, this.TrouN2, this.player2Hit, null, this);

        this.TrouN3 = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        map.getObjectLayer('TrousN3').objects.forEach((TrouN3) => {
            this.TrouN3Sprite = this.TrouN3.create(TrouN3.x, TrouN3.y- TrouN3.height, 'TrouN').setOrigin(0).setBodySize(135,135).setVisible(false);
            this.TrouN3Sprite.nom = TrouN3.name;
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
        this.physics.add.collider(this.player2.player2, this.TrouN3, this.player2Hit, null, this);

        this.TrouN4 = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        map.getObjectLayer('TrousN4').objects.forEach((TrouN4) => {
            this.TrouN4Sprite = this.TrouN4.create(TrouN4.x, TrouN4.y- TrouN4.height, 'TrouN').setOrigin(0).setBodySize(135,135).setVisible(false);
            this.TrouN4Sprite.nom = TrouN4.name;
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
        this.physics.add.collider(this.player2.player2, this.TrouN4, this.player2Hit, null, this);

        this.Save = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        map.getObjectLayer('Checkpoints').objects.forEach((Save) => {
            const SaveSprite = this.Save.create(Save.x, Save.y - Save.height, 'Save').setOrigin(0).setVisible(false);
        });
        this.physics.add.overlap(this.player.player, this.Save, this.sauvegarde, null, this)


        this.cursors = this.input.keyboard.createCursorKeys();

        this.LampeOn = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        map.getObjectLayer('LampesOn').objects.forEach((LampeOn) => {
            this.LampeOnSprite = this.LampeOn.create(LampeOn.x, LampeOn.y- LampeOn.height, 'LampeOn').setOrigin(0);
        });



        this.gate = new Gate(this,this.player,this.player2);
        this.gateOpen = new GateOpen(this);
        this.LampeFx = new LampeFx(this);
        this.lampe = new Lampe(this,this.player2, this.gate, this.gateOpen, this.LampeFx);




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

        this.pelko = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        map.getObjectLayer('Pelko').objects.forEach((pelko) => {
            this.pelkoSprite = this.pelko.create(pelko.x, pelko.y- pelko.height, 'pelko').setOrigin(0).setVisible(false);
            this.pelkoSprite.nom = pelko.name;
        });

        this.Act = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        map.getObjectLayer('Activator').objects.forEach((Act) => {
            this.ActSprite = this.Act.create(Act.x, Act.y - Act.height, 'Act').setOrigin(0).setVisible(false);
            this.ActSprite.nom = Act.name;
        });
        this.physics.add.overlap(this.player.player, this.Act, this.SpawnAtk.bind(this), null, this)

        this.piquesP3 = map.createStaticLayer('PiquesP3', tilesetAP);
        this.piquesP3.setCollisionByExclusion(-1, false);

        this.piquesP2 = map.createStaticLayer('PiquesP2', tilesetAP);
        this.piquesP2.setCollisionByExclusion(-1, false);

        this.plan1 = map.createStaticLayer('Plan1', tileset);
        this.plan1.setCollisionByExclusion(-1, false);

        this.plan0 = map.createStaticLayer('Plan0', tileset);
        this.plan0.setCollisionByExclusion(-1, false);

       this.anims.create({
            key: 'Grain',
            frames: [
                {key:'Grain1'},
                //{key:'Grain2'},
                {key:'Grain3'},
                {key:'Grain4'},
            ],
            frameRate: 10,
            repeat: -1
        });

        this.Locator = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        map.getObjectLayer('Grain').objects.forEach((Locator) => {
            this.LocatorSprite = this.Locator.create(Locator.x, Locator.y-Locator.height, 'Locator').setOrigin(0);
            this.LocatorSprite.play('Grain');

        });

        this.CM = map.createStaticLayer('Cachemisere', tileset);
        this.CM.setCollisionByExclusion(-1, false);

        this.bossTheme1 = this.sound.add('MainTheme',{volume: 0.3});
        this.bossTheme1.loop = true;
        this.bossTheme1.play();

        this.brandirsfx = this.sound.add('brandirsfx',{volume: 0});
        this.walksfx = this.sound.add('walksfx',{volume: 0});
        this.deathsfx = this.sound.add('deathsfx',{volume: 0.3});
        this.lampsfx = this.sound.add('lampsfx',{volume: 0});
        this.FFsfx = this.sound.add('FFsfx',{volume: 0.3});
        this.doorsfx = this.sound.add('doorsfx',{volume: 0.3});

        this.lampsfx.loop = true;
        this.lampsfx.play();
        this.walksfx.loop = true;
        this.walksfx.play();
        this.brandirsfx.loop = true;
        this.brandirsfx.play();

        this.back = new Boolean(false);

        this.emitter=EventDispatcher.getInstance();

        this.emitter.off('hide door1')
        this.emitter.off('show doorO1')
        this.emitter.off('hide lamp1')
        this.emitter.off('show lampFx1')
        this.emitter.off('show door1')
        this.emitter.off('hide doorO1')
        this.emitter.off('show lamp1')
        this.emitter.off('hide lampFx1')

        this.physics.add.overlap(this.player2.player2,this.lampe.lampe,this.emitOn,null,this)

    }

    SpawnAtk(player, Act){
        for (var i = 0; i < this.pelko.getChildren().length; i++) {
            if (Act.nom === this.pelko.getChildren()[i].nom) {
                this.pelko.getChildren()[i].play('pAtk',true);
            }
        }
        for (var i = 0; i < this.TrouN.getChildren().length; i++) {
            if (Act.nom === this.TrouN.getChildren()[i].nom) {
                this.TrouN.getChildren()[i].visible = true;
                this.TrouN.getChildren()[i].body.enable = true;
            }
        }
        for (var i = 0; i < this.TrouN2.getChildren().length; i++) {
            if (Act.nom === this.TrouN2.getChildren()[i].nom) {
                this.TrouN2.getChildren()[i].visible = true;
                this.TrouN2.getChildren()[i].body.enable = true;
            }
        }
        for (var i = 0; i < this.TrouN3.getChildren().length; i++) {
            if (Act.nom === this.TrouN3.getChildren()[i].nom) {
                this.TrouN3.getChildren()[i].visible = true;
                this.TrouN3.getChildren()[i].body.enable = true;
            }
        }
        for (var i = 0; i < this.TrouN4.getChildren().length; i++) {
            if (Act.nom === this.TrouN4.getChildren()[i].nom) {
                this.TrouN4.getChildren()[i].visible = true;
                this.TrouN4.getChildren()[i].body.enable = true;
            }
        }
        Act.body.enable=false;
    }

    sauvegarde(player, saves) {
        console.log("current", this.currentSaveX, this.currentSaveY)
        this.currentSaveX = player.x
        this.currentSaveY = player.y
        saves.body.enable = false;
        this.currentKey = player.key
    }

    playerHit(player, Death) {
        window.death+=1;
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
        this.deathsfx.play();
    }

    player2Hit(player2, Death) {
        player2.setVelocity(0, 0);
        player2.x = this.currentSaveX
        player2.y = this.currentSaveY;
        player2.key= this.currentKey
        player2.setAlpha(0);
        let tw = this.tweens.add({
            targets: player2,
            alpha: 1,
            duration: 100,
            ease: 'Linear',
            repeat: 5,
        });
    }

    ToEnd(){
        if (this.started){

        } else {
            this.walksfx.stop();
            this.brandirsfx.stop();
            this.bossTheme1.stop();
            this.emitter.off('hide door')
            this.emitter.off('show doorO')
            this.emitter.off('hide lamp')
            this.emitter.off('show lampFx')
            this.emitter.off('show door')
            this.emitter.off('hide doorO')
            this.emitter.off('show lamp')
            this.emitter.off('hide lampFx')
            this.scene.start('credits')
            this.started = true ;
        }
    }


    SetCam0(){
        this.cameras.main.startFollow(this.pointCamera,false,1,1,0,150);
        this.lampsfx.setVolume(0);
    }
    SetCam1(){
        this.cameras.main.startFollow(this.pointCamera2,false,1,1,0,150);
        this.lampsfx.setVolume(0);
    }
    SetCam2(){
        this.cameras.main.startFollow(this.pointCamera3,false,1,1,0,150);
        this.lampsfx.setVolume(0);
    }
    SetCam3(){
        this.cameras.main.startFollow(this.pointCamera4,false,1,1,0,150);
        this.lampsfx.setVolume(0);
    }
    SetCam4(){
        this.cameras.main.startFollow(this.pointCamera5,false,1,1,0,150);
        this.lampsfx.setVolume(0);
    }
    SetCam5(){
        this.cameras.main.startFollow(this.pointCamera6,false,1,1,0,150);
        this.lampsfx.setVolume(0);
    }
    SetCam6(){
        this.cameras.main.startFollow(this.pointCamera7,false,1,1,0,150);
        this.lampsfx.setVolume(0);
    }

    emitOn(yolo,yolo2){
        this.emitter.emit('hide door',yolo2.name)
        this.emitter.emit('show doorO',yolo2.name)
        this.emitter.emit('hide lamp',yolo2.name)
        this.emitter.emit('show lampFx',yolo2.name)
    }


    update() {

        this.player.move();

        this.player2.move();

        if(this.player.player.back === false){
            switch (true) {
                case this.cursors.space.isUp && this.cursors.down.isDown:
                    this.player.player.back = true;
                    break;
            }
        }
        if(this.player.player.back === true){
            switch (true) {
                case this.cursors.space.isDown:
                    this.player.player.back = false;
                    break;
                case this.cursors.space.isUp && this.cursors.right.isDown:
                    this.player2.player2.body.x = this.player.player.body.x - 30;
                    this.player2.player2.body.y = this.player.player.body.y - 5;
                    break;
                case this.cursors.space.isUp && this.cursors.left.isDown:
                    this.player2.player2.body.x = this.player.player.body.x + 60;
                    this.player2.player2.body.y = this.player.player.body.y - 5;
                    break;
                case this.cursors.space.isUp:
                    this.player2.player2.body.x = this.player.player.body.x - 30;
                    this.player2.player2.body.y = this.player.player.body.y - 5;
                    break;
            }
        }
    }
}