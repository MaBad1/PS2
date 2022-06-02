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
        this.load.image('Credits4', 'assets/images/UI/CreditsThanks.png');
        this.load.image('Line', 'assets/images/UI/Line.png');

        this.load.audio('MenuTheme', 'assets/sounds/MenuMusic.mp3');

    }

    create() {

        const back = this.add.image(0, 0, 'MainScreen').setOrigin(0, 0);

        this.menuTheme2 = this.sound.add('MenuTheme',{volume: 0.3});
        this.menuTheme2.loop = true;
        this.menuTheme2.play();

        this.credits1 = this.add.image(320, 120, 'Credits1').setOrigin(0, 0).setVisible(true);
        this.credits2 = this.add.image(315, 115, 'Credits2').setOrigin(0, 0).setVisible(false);
        this.credits3 = this.add.image(320, 120, 'Credits3').setOrigin(0, 0).setVisible(false);
        this.credits4 = this.add.image(320, 120, 'Credits4').setOrigin(0, 0).setVisible(false);
        this.deathOv = this.add.text(1000, 550, window.death, { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', fontSize: 50 });
        this.comptOv = this.add.text(1000, 425, window.compteur + '/7', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', fontSize: 50 });
        this.deathOv.setVisible(false);
        this.comptOv.setVisible(false);


        this.buttonNextSprite = this.add.image(1440, 770, 'NextB')
            .setOrigin(0, 0)
            .setScale(1)
            .setAlpha(0.7)
            .setVisible(true);

        const line1 =this.add.image(1400, 800, 'Line')
            .setOrigin(0, 0)
            .setScale(1)
            .setVisible(false)

            this.buttonNext = this.add.rectangle(this.buttonNextSprite.x, this.buttonNextSprite.y,350,150,0xffffff,0)
                .setOrigin(0,0)
                .setInteractive()
                .on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, ()=> {
                    this.credits1.visible = false;
                    this.credits2.visible = true;
                    this.comptOv.visible = true;
                    this.deathOv.visible = true;
                    this.buttonNext.disableInteractive();
                    this.buttonNext2.setInteractive();
                    this.buttonNextSprite.setVisible(false);
                    this.buttonNext2Sprite.setVisible(true);
                })
                .on('pointerover',function(){
                    line1.setVisible(true);
                })
                .on('pointerout',function(){
                    line1.setVisible(false);
                })

        this.buttonNext2Sprite = this.add.image(1440, 770, 'NextB')
            .setOrigin(0, 0)
            .setScale(1)
            .setAlpha(0.7)
            .setVisible(false);

        const line2 =this.add.image(1400, 800, 'Line')
            .setOrigin(0, 0)
            .setScale(1)
            .setVisible(false)

        this.buttonNext2 = this.add.rectangle(this.buttonNext2Sprite.x, this.buttonNext2Sprite.y,350,150,0xffffff,0)
            .setOrigin(0,0)
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, ()=> {
                this.credits2.visible = false;
                this.comptOv.visible = false;
                this.deathOv.visible = false;
                this.credits4.visible = true;
                this.buttonNext2.disableInteractive();
                this.buttonNext3.setInteractive();
                this.buttonNext2Sprite.setVisible(false);
                this.buttonNext3Sprite.setVisible(true);
            })
            .on('pointerover',function(){
                line2.setVisible(true);
                line1.setVisible(false);
            })
            .on('pointerout',function(){
                line2.setVisible(false);
            })

        this.buttonNext3Sprite = this.add.image(1440, 770, 'NextB')
            .setOrigin(0, 0)
            .setScale(1)
            .setAlpha(0.7)
            .setVisible(false);

        const line4 =this.add.image(1400, 800, 'Line')
            .setOrigin(0, 0)
            .setScale(1)
            .setVisible(false)

        this.buttonNext3 = this.add.rectangle(this.buttonNext3Sprite.x, this.buttonNext3Sprite.y,350,150,0xffffff,0)
            .setOrigin(0,0)
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, ()=> {
                this.credits3.visible = true;
                this.credits4.visible = false;
                this.buttonNext3.disableInteractive();
                this.buttonMenu.setInteractive();
                this.buttonNext3Sprite.setVisible(false);
                this.buttonMenuSprite.setVisible(true);
            })
            .on('pointerover',function(){
                line4.setVisible(true);
                line2.setVisible(false);
            })
            .on('pointerout',function(){
                line4.setVisible(false);
            })

        this.buttonMenuSprite = this.add.image(1350, 770, 'MenuB')
            .setOrigin(0, 0)
            .setScale(1)
            .setAlpha(0.7)
            .setVisible(false);

        const line3 =this.add.image(1380, 800, 'Line')
            .setOrigin(0, 0)
            .setScale(1)
            .setVisible(false)

        this.buttonMenu = this.add.rectangle(this.buttonMenuSprite.x, this.buttonMenuSprite.y,350,150,0xffffff,0)
            .setOrigin(0,0)
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, ()=> {
                this.credits3.visible = false;
                this.menuTheme2.stop();
                this.scene.start('Start');
                this.buttonMenu.disableInteractive();
                this.buttonMenuSprite.setVisible(false);
            })
            .on('pointerover',function(){
                line3.setVisible(true);
                line4.setVisible(false);
            })
            .on('pointerout',function(){
                line3.setVisible(false);
            })

    }
}