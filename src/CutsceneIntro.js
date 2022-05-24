class cutIntro extends Phaser.Scene {
    constructor() {
        super('cutscene1');
    }

    preload(){

        this.load.video('Intro', 'assets/VideoImgs/CutsceneIntro.mp4','loadeddata', false, true);
        this.load.image('Skip', 'assets/images/UI/Skip.png');
        this.load.audio('MainTheme', 'assets/sounds/LevelMusic.mp3');

    }

    create() {

        this.video = this.add.video(1000, 400, 'Intro');
        this.video.setScale(0.7, 0.7);
        this.video.play();

        this.mainTheme = this.sound.add('MainTheme',{volume: 0.3});
        this.mainTheme.loop = true;
        this.mainTheme.play();

        this.buttonSkipSprite = this.add.image(770, 800, 'Skip')
            .setOrigin(0, 0)
            .setScale(1)
            .setAlpha(0.7)

        this.buttonSkip = this.add.rectangle(this.buttonSkipSprite.x, this.buttonSkipSprite.y,350,150,0xffffff,0)
            .setOrigin(0,0)
            .setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, ()=> {
                this.mainTheme.stop();
                this.scene.start('tuto')
            })
            .on('pointerover',function(){
                this.buttonSkipSprite.setAlpha(1);
            })
            .on('pointerout',function(){
                this.buttonSkipSprite.setAlpha(0.7);
            })

    }
}