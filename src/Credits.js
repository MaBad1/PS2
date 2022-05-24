class credits extends Phaser.Scene {
    constructor() {
        super('credits');
    }

    preload(){

        this.load.image('MainScreen', 'assets/images/UI/MainMenu.png');
        this.load.image('NextB', 'assets/images/UI/NextButt.png');
        this.load.image('MenuB', 'assets/images/UI/MenuButt.png');
        this.load.image('Credits1', 'assets/images/UI/CreditsEnd.png');
        this.load.image('Credits2', 'assets/images/UI/CreditsScore.png');
        this.load.image('Credits3', 'assets/images/UI/CreditsNoms.png');

    }

    create() {
        const back = this.add.image(0, 0, 'MainScreen').setOrigin(0, 0);

        this.credits1 = this.add.image(320, 120, 'Credits1').setOrigin(0, 0).setVisible(true);
        this.credits2 = this.add.image(315, 115, 'Credits2').setOrigin(0, 0).setVisible(false);
        this.credits3 = this.add.image(320, 120, 'Credits3').setOrigin(0, 0).setVisible(false);

        this.buttonNextSprite = this.add.image(1440, 770, 'NextB')
            .setOrigin(0, 0)
            .setScale(1)
            .setAlpha(0.7)
            .setVisible(true);

            this.buttonNext = this.add.rectangle(this.buttonNextSprite.x, this.buttonNextSprite.y,350,150,0xffffff,0)
                .setOrigin(0,0)
                .setInteractive()
                .on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, ()=> {
                    this.credits1.visible = false;
                    this.credits2.visible = true;
                    this.buttonNext.disableInteractive();
                    this.buttonNext2.setInteractive();
                    this.buttonNextSprite.setVisible(false);
                    this.buttonNext2Sprite.setVisible(true);
                })
                .on('pointerover',function(){
                    this.buttonNextSprite.setAlpha(1);
                })
                .on('pointerout',function(){
                    this.buttonNextSprite.setAlpha(0.7);
                })

        this.buttonNext2Sprite = this.add.image(1440, 770, 'NextB')
            .setOrigin(0, 0)
            .setScale(1)
            .setAlpha(0.7)
            .setVisible(false);

        this.buttonNext2 = this.add.rectangle(this.buttonNext2Sprite.x, this.buttonNext2Sprite.y,350,150,0xffffff,0)
            .setOrigin(0,0)
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, ()=> {
                this.credits2.visible = false;
                this.credits3.visible = true;
                this.buttonNext2.disableInteractive();
                this.buttonMenu.setInteractive();
                this.buttonNext2Sprite.setVisible(false);
                this.buttonMenuSprite.setVisible(true);
            })
            .on('pointerover',function(){
                this.buttonNext2Sprite.setAlpha(1);
            })
            .on('pointerout',function(){
                this.buttonNext2Sprite.setAlpha(0.7);
            })

        this.buttonMenuSprite = this.add.image(1350, 770, 'MenuB')
            .setOrigin(0, 0)
            .setScale(1)
            .setAlpha(0.7)
            .setVisible(false);

        this.buttonMenu = this.add.rectangle(this.buttonMenuSprite.x, this.buttonMenuSprite.y,350,150,0xffffff,0)
            .setOrigin(0,0)
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, ()=> {
                this.credits3.visible = false;
                this.scene.start('Start');
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