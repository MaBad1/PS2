class Start extends Phaser.Scene {
    constructor() {
        super('Start');
    }

    preload(){

        this.load.image('MainScreen', 'assets/images/UI/MainMenu.png');
        this.load.image('Play', 'assets/images/UI/Play.png');
        this.load.image('Quit', 'assets/images/UI/Quit.png');
        this.load.image('Options', 'assets/images/UI/Options.png');
        this.load.image('Credits', 'assets/images/UI/Credits.png');
        this.load.image('Credits3', 'assets/images/UI/CreditsNoms.png');
        this.load.image('Credits4', 'assets/images/UI/CreditsThanks.png');
        this.load.image('MenuB', 'assets/images/UI/MenuButt.png');
        this.load.image('Line', 'assets/images/UI/Line.png');
        this.load.image('part', 'assets/images/UI/white.png');
        this.load.image('NextB', 'assets/images/UI/NextButt.png');


    }

    create(){
        const menu = this.add.image(0, 0, 'MainScreen').setOrigin(0, 0);

        this.buttonStartSprite = this.add.image(930, 400, 'Play')
            .setOrigin(0, 0)
            .setScale(1)
            .setAlpha(0.7);

        this.buttonOptionSprite = this.add.image(700, 550, 'Options')
            .setOrigin(0, 0)
            .setScale(1)
            .setAlpha(0.7);

        this.buttonCreditsSprite = this.add.image(890, 700, 'Credits')
            .setOrigin(0, 0)
            .setScale(1)
            .setAlpha(0.7);

        this.buttonQuitSprite = this.add.image(930, 850, 'Quit')
            .setOrigin(0, 0)
            .setScale(1)
            .setAlpha(0.7);

        this.creditsN = this.add.image(320, 120, 'Credits3').setOrigin(0, 0).setVisible(false);
        this.creditsT = this.add.image(320, 120, 'Credits4').setOrigin(0, 0).setVisible(false);

        const line1 =this.add.image(900, 450, 'Line')
            .setOrigin(0, 0)
            .setScale(1)
            .setVisible(false)

        const line2 =this.add.image(900, 600, 'Line')
            .setOrigin(0, 0)
            .setScale(1)
            .setVisible(false)

        const line3 =this.add.image(900, 750, 'Line')
            .setOrigin(0, 0)
            .setScale(1)
            .setVisible(false)

        const line4 =this.add.image(900, 900, 'Line')
            .setOrigin(0, 0)
            .setScale(1)
            .setVisible(false)

        this.buttonStart = this.add.rectangle(this.buttonStartSprite.x, this.buttonStartSprite.y,350,100,0xffffff,0)
            .setOrigin(0,0)
            .setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, ()=> {
                this.scene.start('cutscene1')
            })
            .on('pointerover',function(){
                line1.setVisible(true);
            })
            .on('pointerout',function(){
                line1.setVisible(false);
            })

        this.buttonOptions = this.add.rectangle(this.buttonOptionSprite.x, this.buttonOptionSprite.y,350,100,0xffffff,0)
            .setOrigin(0,0)
            .setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, ()=> {
                this.scene.start('game')
            })
            .on('pointerover',function(){
                line2.setVisible(true);
            })
            .on('pointerout',function(){
                line2.setVisible(false);
            })

        this.buttonCredits = this.add.rectangle(this.buttonCreditsSprite.x, this.buttonCreditsSprite.y,350,100,0xffffff,0)
            .setOrigin(0,0)
            .setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, ()=> {
                this.buttonStart.disableInteractive();
                this.buttonOptions.disableInteractive();
                this.buttonCredits.disableInteractive();
                this.buttonQuit.disableInteractive();
                this.buttonNext.setInteractive();
                this.buttonNextSprite.setVisible(true);
                this.creditsT.setVisible(true);
            })
            .on('pointerover',function(){
                line3.setVisible(true);
            })
            .on('pointerout',function(){
                line3.setVisible(false);
            })

        this.buttonQuit = this.add.rectangle(this.buttonQuitSprite.x, this.buttonQuitSprite.y,350,100,0xffffff,0)
            .setOrigin(0,0)
            .setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, ()=> {
                window.close()
            })
            .on('pointerover',function(){
                line4.setVisible(true);
            })
            .on('pointerout',function(){
                line4.setVisible(false);
            })

        this.buttonNextSprite = this.add.image(1440, 770, 'NextB')
            .setOrigin(0, 0)
            .setScale(1)
            .setAlpha(1)
            .setVisible(false);

        const line6 =this.add.image(1400, 800, 'Line')
            .setOrigin(0, 0)
            .setScale(1)
            .setVisible(false)

        this.buttonNext= this.add.rectangle(this.buttonNextSprite.x, this.buttonNextSprite.y,350,100,0xffffff,0)
            .setOrigin(0,0)
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, ()=> {
                this.creditsT.visible = false;
                this.creditsN.visible = true;
                this.buttonMenu.setInteractive();
                this.buttonMenuSprite.setVisible(true);
                this.buttonNext.disableInteractive();
                this.buttonNextSprite.setVisible(false);
            })
            .on('pointerover',function(){
                line6.setVisible(true);
                line5.setVisible(false);
            })
            .on('pointerout',function(){
                line6.setVisible(false);
            })

        this.buttonMenuSprite = this.add.image(1350, 770, 'MenuB')
            .setOrigin(0, 0)
            .setScale(1)
            .setAlpha(1)
            .setVisible(false);

        const line5 =this.add.image(1380, 800, 'Line')
            .setOrigin(0, 0)
            .setScale(1)
            .setVisible(false)

        this.buttonMenu = this.add.rectangle(this.buttonMenuSprite.x, this.buttonMenuSprite.y,350,100,0xffffff,0)
            .setOrigin(0,0)
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, ()=> {
                this.creditsN.visible = false;
                this.buttonStart.setInteractive();
                this.buttonOptions.setInteractive();
                this.buttonCredits.setInteractive();
                this.buttonQuit.setInteractive();
                this.buttonMenu.disableInteractive();
                this.buttonMenuSprite.setVisible(false);
            })
            .on('pointerover',function(){
                line5.setVisible(true);
                line3.setVisible(false);
            })
            .on('pointerout',function(){
                line5.setVisible(false);
            })

        this.part = this.add.particles('part');

        this.emitter = this.part.createEmitter({
            x: { min: 1200, max: 1920 },
            y: { min: 850, max: 1080 },
            lifespan: { min: 500, max: 4000},
            speedY: { min: -50, max: -10 },
            scale: { start: 0.1, end: 0 },
            quantity: { min: 0.2, max: 0.5 },
            blendMode: 'ADD'

        });
        this.emitter.start(0,0);

        this.emitter = this.part.createEmitter({
            x: { min: 0, max: 800 },
            y: { min: 850, max: 1080 },
            lifespan: { min: 500, max: 4000},
            speedY: { min: -50, max: -10 },
            scale: { start: 0.1, end: 0 },
            quantity: { min: 0.2, max: 0.5 },
            blendMode: 'ADD'

        });
        this.emitter.start(0,0);

        this.emitter = this.part.createEmitter({
            x: { min: 800, max: 1200 },
            y: { min: 950, max: 1080 },
            lifespan: { min: 500, max: 600},
            speedY: { min: -50, max: -10 },
            scale: { start: 0.1, end: 0 },
            quantity: { min: 0.2, max: 0.3 },
            blendMode: 'ADD'

        });
        this.emitter.start(0,0);


    }


}