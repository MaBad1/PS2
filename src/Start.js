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
        this.load.image('MenuB', 'assets/images/UI/MenuButt.png');
        this.load.image('Line', 'assets/images/UI/Line.png');


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

        this.line1 =this.add.image(930, 420, 'Line')
            .setOrigin(0, 0)
            .setScale(1)
            .setVisible(false);

        this.line2 =this.add.image(930, 570, 'Line')
            .setOrigin(0, 0)
            .setScale(1)
            .setVisible(false);

        this.line3 =this.add.image(930, 720, 'Line')
            .setOrigin(0, 0)
            .setScale(1)
            .setVisible(false);

        this.line4 =this.add.image(930, 870, 'Line')
            .setOrigin(0, 0)
            .setScale(1)
            .setVisible(false);

        this.buttonStart = this.add.rectangle(this.buttonStartSprite.x, this.buttonStartSprite.y,350,100,0xffffff,0)
            .setOrigin(0,0)
            .setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, ()=> {
                this.scene.start('cutscene1')
            })
            .on('pointerover',function(){
                this.line1.setVisible(true);
            })
            .on('pointerout',function(){
            })

        this.buttonOptions = this.add.rectangle(this.buttonOptionSprite.x, this.buttonOptionSprite.y,350,100,0xffffff,0)
            .setOrigin(0,0)
            .setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, ()=> {
                this.scene.start('game')
            })
            .on('pointerover',function(){
                this.line2.setVisible(true);
            })
            .on('pointerout',function(){
            })

        this.buttonCredits = this.add.rectangle(this.buttonCreditsSprite.x, this.buttonCreditsSprite.y,350,100,0xffffff,0)
            .setOrigin(0,0)
            .setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, ()=> {
                this.buttonStart.disableInteractive();
                this.buttonOptions.disableInteractive();
                this.buttonCredits.disableInteractive();
                this.buttonQuit.disableInteractive();
                this.buttonMenu.setInteractive();
                this.buttonMenuSprite.setVisible(true);
                this.creditsN.setVisible(true);
            })
            .on('pointerover',function(){
                this.line3.setVisible(true);
            })
            .on('pointerout',function(){
            })

        this.buttonQuit = this.add.rectangle(this.buttonQuitSprite.x, this.buttonQuitSprite.y,350,100,0xffffff,0)
            .setOrigin(0,0)
            .setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, ()=> {
                this.scene.start('Boss')
            })
            .on('pointerover',function(){
                this.line4.setVisible(true);
            })
            .on('pointerout',function(){
            })

        this.creditsN = this.add.image(320, 120, 'Credits3').setOrigin(0, 0).setVisible(false);

        this.buttonMenuSprite = this.add.image(1350, 770, 'MenuB')
            .setOrigin(0, 0)
            .setScale(1)
            .setAlpha(0.7)
            .setVisible(false);

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
                this.buttonMenuSprite.setAlpha(1);
            })
            .on('pointerout',function(){
                this.buttonMenuSprite.setAlpha(0.7);
            })


    }


}