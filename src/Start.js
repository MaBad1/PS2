class Start extends Phaser.Scene {
    constructor() {
        super('Start');
    }

    preload(){

        this.load.image('MainScreen', 'assets/images/UI/MainMenu.png');
        this.load.image('Play', 'assets/images/UI/Play.png');
        this.load.image('PlayMO', 'assets/images/UI/PlayMO.png');
        this.load.image('PlayClick', 'assets/images/UI/PlayClick.png');
        this.load.image('Quit', 'assets/images/UI/Quit.png');
        this.load.image('QuitMO', 'assets/images/UI/QuitMO.png');
        this.load.image('QuitClick', 'assets/images/UI/QuitClick.png');
        this.load.image('Options', 'assets/images/UI/Options.png');
        this.load.image('OptionsMO', 'assets/images/UI/OptionsMO.png');
        this.load.image('OptionsClick', 'assets/images/UI/OptionsClick.png');
        this.load.image('Credits', 'assets/images/UI/Credits.png');
        this.load.image('CreditsMO', 'assets/images/UI/CreditsMO.png');
        this.load.image('CreditsClick', 'assets/images/UI/CreditsClick.png');

    }

    create(){
        const menu = this.add.image(0, 0, 'MainScreen').setOrigin(0, 0);

        const buttonStartSprite = this.add.image(930, 400, 'Play')
            .setOrigin(0, 0)
            .setScale(1)
            .setAlpha(0.7);

        const buttonOptionSprite = this.add.image(930, 550, 'Options')
            .setOrigin(0, 0)
            .setScale(1)
            .setAlpha(0.7);

        const buttonCreditsSprite = this.add.image(930, 700, 'Credits')
            .setOrigin(0, 0)
            .setScale(1)
            .setAlpha(0.7);

        const buttonQuitSprite = this.add.image(930, 850, 'Quit')
            .setOrigin(0, 0)
            .setScale(1)
            .setAlpha(0.7);

        this.buttonStart = this.add.rectangle(buttonStartSprite.x, buttonStartSprite.y,350,150,0xffffff,0)
            .setOrigin(0,0)
            .setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, ()=> {
                this.scene.start('game')
            })
            .on('pointerover',function(){
                buttonStartSprite.setAlpha(1);
            })
            .on('pointerout',function(){
                buttonStartSprite.setAlpha(0.7);
            })

        this.buttonOptions = this.add.rectangle(buttonOptionSprite.x, buttonOptionSprite.y,350,150,0xffffff,0)
            .setOrigin(0,0)
            .setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, ()=> {
                this.scene.start('game')
            })
            .on('pointerover',function(){
                buttonOptionSprite.setAlpha(1);
            })
            .on('pointerout',function(){
                buttonOptionSprite.setAlpha(0.7);
            })

        this.buttonCredits = this.add.rectangle(buttonCreditsSprite.x, buttonCreditsSprite.y,350,150,0xffffff,0)
            .setOrigin(0,0)
            .setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, ()=> {
                this.scene.start('game')
            })
            .on('pointerover',function(){
                buttonCreditsSprite.setAlpha(1);
            })
            .on('pointerout',function(){
                buttonCreditsSprite.setAlpha(0.7);
            })

        this.buttonQuit = this.add.rectangle(buttonQuitSprite.x, buttonQuitSprite.y,350,150,0xffffff,0)
            .setOrigin(0,0)
            .setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, ()=> {
                this.scene.start('game')
            })
            .on('pointerover',function(){
                buttonQuitSprite.setAlpha(1);
            })
            .on('pointerout',function(){
                buttonQuitSprite.setAlpha(0.7);
            })
    }


}