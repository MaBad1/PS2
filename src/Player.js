class Player {


    constructor(scene) {
        this.scene=scene
        this.cameras=scene
        this.player = this.scene.physics.add.sprite(100, 300, 'player');
        this.player.setDisplaySize(63,100);
        this.player.setBounce(0.1);
        this.player.setCollideWorldBounds(true);
        this.scene.physics.add.collider(this.player, this.scene.platforms);

       /** this.scene.anims.create({
            key: 'walk',
            frames: this.scene.anims.generateFrameNames('player', {
                prefix: 'robo_player_',
                start: 2,
                end: 3,
            }),
            frameRate: 10,
            repeat: -1
        });
        this.scene.anims.create({
            key: 'idle',
            frames: [{key: 'player', frame: 'robo_player_0'}],
            frameRate: 10,

        });
        this.scene.anims.create({
            key: 'jump',
            frames: [{key: 'player', frame: 'robo_player_1'}],
            frameRate: 10,
            repeat:-1,

        });*/
    }

    jump(){
        this.player.setVelocityY(-420);
       /** this.player.play('jump', true);*/
    }
    moveRight(){
        this.player.setVelocityX(300);
        this.player.setFlipX(false);
        /**if (this.player.body.onFloor()) {
            this.player.play('walk', true)}*/
    }
    moveLeft(){
        this.player.setVelocityX(-300);
        /**if (this.player.body.onFloor()) {
            this.player.play('walk', true)}*/
        this.player.setFlipX(true);
    }
    stop(){
        this.player.setVelocityX(0);
        /**if (this.player.body.onFloor()) {
            this.player.play('idle',true)
        }*/
    }

    move(){

        switch (true) {
            case (this.scene.cursors.space.isDown || this.scene.cursors.up.isDown) && this.player.body.onFloor():
                this.jump()
                console.log("oui")
                break;
            case this.scene.cursors.left.isDown:
                this.moveLeft()
                break;
            case this.scene.cursors.right.isDown:
                this.moveRight();
                break;
            default:
                this.stop();
        }

    }

    }



