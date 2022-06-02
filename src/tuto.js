class Tuto extends Phaser.Scene {

    constructor(scene) {
        super('tuto');
        this.scene = scene;
    }

    preload() {
        this.load.image('background', 'assets/images/background.png');
        this.load.image('persatmo', 'assets/images/persatmo.png');
        this.load.image('spike', 'assets/images/spike.png');
        // At last image must be loaded with its JSON
        this.load.image('player', 'assets/images/Mana.png');
        this.load.image('tiles', 'assets/tilesets/Tileset1.png');
        this.load.image('tilesAP', 'assets/tilesets/TilesetAP.png');
        this.load.image('tilesTuto', 'assets/tilesets/TutoTileset.png');
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
        this.load.image('NZ', 'assets/images/NextZone.png');

        this.load.spritesheet('walk','assets/images/anim/walk.png',{frameWidth: 130, frameHeight: 140});
        this.load.spritesheet('idle','assets/images/anim/idle.png',{frameWidth: 130, frameHeight: 140});
        this.load.spritesheet('jump','assets/images/anim/jump.png',{frameWidth: 130, frameHeight: 140});
        this.load.spritesheet('brandir','assets/images/anim/brandir.png',{frameWidth: 130, frameHeight: 140});
        this.load.spritesheet('trou','assets/images/anim/trou.png',{frameWidth: 150, frameHeight: 150});
        this.load.spritesheet('Lampfx','assets/images/anim/fxlamp.png',{frameWidth: 192, frameHeight: 192});

        this.load.image('Grain1', 'assets/images/anim/Grain/Bruit1.png');
        //this.load.image('Grain2', 'assets/images/anim/Grain/Bruit2.png');
        this.load.image('Grain3', 'assets/images/anim/Grain/Bruit3.png');
        this.load.image('Grain4', 'assets/images/anim/Grain/Bruit4.png');

        this.load.audio('MainTheme', 'assets/sounds/LevelMusic.mp3');
        this.load.audio('brandirsfx', 'assets/sounds/brandir.ogg');
        this.load.audio('lampsfx', 'assets/sounds/lamp.ogg');
        this.load.audio('doorsfx', 'assets/sounds/door.wav');
        this.load.audio('walksfx', 'assets/sounds/walk.mp3');
        this.load.audio('deathsfx', 'assets/sounds/death.mp3');
        this.load.audio('FFsfx', 'assets/sounds/FF.mp3');

        this.load.tilemapTiledJSON('map', 'assets/tilemaps/tuto.json');
    }

    create() {
        this.started = false ;
        this.mapKey = 'map';


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

        const backgroundImage = this.add.image(0, 0, 'background').setOrigin(0, 0);
        backgroundImage.setScale(1, 0.8);
        const tuto = this.make.tilemap({key: 'map'});

        const tileset = tuto.addTilesetImage('Tileset1', 'tiles');
        const tilesetAP = tuto.addTilesetImage('TilesetAP', 'tilesAP');
        const TutoTiles = tuto.addTilesetImage('TutoTileset', 'tilesTuto');

        this.plan3 = tuto.createStaticLayer('Plan3', tilesetAP);
        this.plan3.setCollisionByExclusion(-1, false);

        this.Brume = tuto.createStaticLayer('Brume', tilesetAP);
        this.Brume.setCollisionByExclusion(-1, false);

        this.tuto = tuto.createStaticLayer('Tuto', TutoTiles);
        this.tuto.setCollisionByExclusion(-1, false);

        this.plan2 = tuto.createStaticLayer('Plan2', tilesetAP);
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

        this.platforms = tuto.createStaticLayer('Base', tileset);
        this.platforms.setCollisionByExclusion(-1, true);

        this.player = new Player(this);
        this.player2 = new Player2(this);

        this.Next0 = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        tuto.getObjectLayer('NextCam').objects.forEach((Next0) => {
            this.Next0Sprite = this.Next0.create(Next0.x , Next0.y -Next0.height, 'Next').setOrigin(0).setVisible(false);
        });
        this.physics.add.overlap(this.player.player, this.Next0, this.SetCam1, null, this);

        this.Prev0 = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });

        tuto.getObjectLayer('PrevCam').objects.forEach((Prev0) => {
            this.Prev0Sprite = this.Prev0.create(Prev0.x , Prev0.y - Prev0.height, 'Prev').setOrigin(0).setVisible(false);
        });
        this.physics.add.overlap(this.player.player, this.Prev0, this.SetCam0, null, this);

        this.NZ = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });

        tuto.getObjectLayer('ToLvl1').objects.forEach((NZ) => {
            this.NZSprite = this.NZ.create(NZ.x , NZ.y - NZ.height, 'NZ').setOrigin(0).setVisible(false);
        });
        this.physics.add.overlap(this.player.player, this.NZ, this.NextZone, null, this);

        this.Plateforme0 = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        tuto.getObjectLayer('Plateformes').objects.forEach((Plateforme0) => {
            this.Plateforme0Sprite = this.Plateforme0.create(Plateforme0.x , Plateforme0.y - Plateforme0.height, 'Plateforme').setOrigin(0);
        });
        this.physics.add.collider(this.player.player, this.Plateforme0);

        this.Death0 = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        tuto.getObjectLayer('DeathZone').objects.forEach((Death0) => {
            const Death0Sprite = this.Death0.create(Death0.x, Death0.y - Death0.height, 'Death').setOrigin(0).setVisible(false) ;
        });
        this.physics.add.collider(this.player.player, this.Death0, this.playerHit, null, this);

        this.TrouN0 = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        tuto.getObjectLayer('TrouN').objects.forEach((TrouN0) => {
            this.TrouN0Sprite = this.TrouN0.create(TrouN0.x, TrouN0.y- TrouN0.height, 'TrouN').setOrigin(0).setBodySize(135,135);
            this.TrouN0Sprite.play('trou');
            this.tweens.add({
                targets: this.TrouN0Sprite,
                y:this.TrouN0Sprite.y+256,
                paused: false,
                yoyo: true,
                repeat: -1
            });
        });
        this.physics.add.collider(this.player.player, this.TrouN0, this.playerHit, null, this);
        this.physics.add.collider(this.player2.player2, this.TrouN0, this.player2Hit, null, this);

        this.Save0 = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        tuto.getObjectLayer('Checkpoints').objects.forEach((Save0) => {
            const Save0Sprite = this.Save0.create(Save0.x, Save0.y - Save0.height, 'Save').setOrigin(0).setVisible(false);
        });
        this.physics.add.overlap(this.player.player, this.Save0, this.sauvegarde, null, this)

        this.cursors = this.input.keyboard.createCursorKeys();

        this.FF0 = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        tuto.getObjectLayer('FeuFollets').objects.forEach((FF0) => {
            this.FF0Sprite = this.FF0.create(FF0.x , FF0.y  - FF0.height, 'FeuF').setOrigin(0).setScale(0.5);
        });
        this.physics.add.overlap(this.player.player, this.FF0, this.getKey, null, this);


        this.Cage0 = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        tuto.getObjectLayer('Cages').objects.forEach((Cage0) => {
            this.Cage0Sprite = this.Cage0.create(Cage0.x , Cage0.y  - Cage0.height, 'Cage').setOrigin(0);
        });

        this.LampeOn0 = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        tuto.getObjectLayer('LampesOn').objects.forEach((LampeOn0) => {
            this.LampeOn0Sprite = this.LampeOn0.create(LampeOn0.x, LampeOn0.y- LampeOn0.height, 'LampeOn').setOrigin(0);
        });


        this.lampe = new Lampe(this);
        this.LampeFx = new LampeFx(this);
        this.gate = new Gate(this,this.player,this.player2);
        this.gateOpen = new GateOpen(this);


        this.pointCamera0 = this.physics.add.sprite(960,384);
        this.pointCamera0.body.setAllowGravity(false);
        this.pointCamera0.setImmovable(true);
        this.cameras.main.startFollow(this.pointCamera0,false,1,1,0,150);
        this.cameras.main.setRoundPixels(true);
        this.pointCamer = this.physics.add.sprite(2880,384);
        this.pointCamer.body.setAllowGravity(false);
        this.pointCamer.setImmovable(true);

        this.piquesP30 = tuto.createStaticLayer('piquesP3', tilesetAP);
        this.piquesP30.setCollisionByExclusion(-1, false);

        this.piquesP20 = tuto.createStaticLayer('piquesP2', tilesetAP);
        this.piquesP20.setCollisionByExclusion(-1, false);

        this.plan10 = tuto.createStaticLayer('Plan1', tileset);
        this.plan10.setCollisionByExclusion(-1, false);

        this.plan00 = tuto.createStaticLayer('Plan0', tileset);
        this.plan00.setCollisionByExclusion(-1, false);

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

        this.Locator0 = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        tuto.getObjectLayer('Grain').objects.forEach((Locator0) => {
            this.Locator0Sprite = this.Locator0.create(Locator0.x, Locator0.y-Locator0.height, 'Locator').setOrigin(0);
            this.Locator0Sprite.play('Grain');

        });

        this.CM0 = tuto.createStaticLayer('Cachemisere', tileset);
        this.CM0.setCollisionByExclusion(-1, false);

        this.mainTheme0 = this.sound.add('MainTheme',{volume: 0.3});
        this.mainTheme0.loop = true;
        this.mainTheme0.play();

        this.brandirsfx = this.sound.add('brandirsfx',{volume: 0});
        this.walksfx = this.sound.add('walksfx',{volume: 0});
        this.deathsfx = this.sound.add('deathsfx',{volume: 0.3});
        this.lampsfx = this.sound.add('lampsfx',{volume: 0});
        this.FFsfx = this.sound.add('FFsfx',{volume: 0.3});
        this.doorsfx = this.sound.add('doorsfx',{volume: 0.4});

        this.lampsfx.loop = true;
        this.lampsfx.play();
        this.walksfx.loop = true;
        this.walksfx.play();
        this.brandirsfx.loop = true;
        this.brandirsfx.play();


        this.emitter=EventDispatcher.getInstance();

        this.emitter.off('hide door2')
        this.emitter.off('show doorO2')
        this.emitter.off('hide lamp2')
        this.emitter.off('show lampFx2')
        this.emitter.off('show door2')
        this.emitter.off('hide doorO2')
        this.emitter.off('show lamp2')
        this.emitter.off('hide lampFx2')
        this.physics.add.overlap(this.player2.player2,this.lampe.lampe,this.emitOn,null,this)
    }

    getKey(player,FF){
        window.compteur+=1
        FF.body.enable=false
        FF.visible=false
        this.FFsfx.play();
    }

    sauvegarde(player, saves) {
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

    NextZone(){
        if (this.started){

        } else {
            this.walksfx.stop();
            this.brandirsfx.stop();
            this.emitter.off('hide door')
            this.emitter.off('show doorO')
            this.emitter.off('hide lamp')
            this.emitter.off('show lampFx')
            this.emitter.off('show door')
            this.emitter.off('hide doorO')
            this.emitter.off('show lamp')
            this.emitter.off('hide lampFx')
            this.mainTheme0.stop();
            this.scene.start('game')
            this.started = true ;
        }
    }

    SetCam0(){
        this.cameras.main.startFollow(this.pointCamera0,false,1,1,0,150);
        this.lampsfx.setVolume(0);
    }
    SetCam1(){
        this.cameras.main.startFollow(this.pointCamer,false,1,1,0,150);
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

        /**this.isolap = this.physics.overlap(this.player2.player2, this.lampe.lampe) ? true : false;

        switch (true){
            case this.isolap === true:
                this.emitter.emit('hide door')
                this.emitter.emit('show doorO')
                this.emitter.emit('hide lamp')
                this.emitter.emit('show lampFx')
                break;
            case this.isolap === false:
                this.emitter.emit('show door')
                this.emitter.emit('hide doorO')
                this.emitter.emit('show lamp')
                this.emitter.emit('hide lampFx')
                break;
        }*/

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