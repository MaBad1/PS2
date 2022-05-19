class Start extends Phaser.Scene {
    constructor() {
        super('start');
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
        this.MainMenu = this.add.image(0, 0, 'MainMenu').setOrigin(0, 0);
    }

}