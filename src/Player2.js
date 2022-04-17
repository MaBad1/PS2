class Player2 {


    constructor(scene) {
        this.scene=scene;
        this.cameras=scene;
        this.player2 = this.scene.physics.add.sprite(100, 300, 'FeuF');
        this.player2.setDisplaySize(40,40);
        this.player2.setCollideWorldBounds(true);
        this.scene.physics.add.collider(this.player2, this.scene.platforms);
        this.player2.body.setAllowGravity(false);

    }

    up(){
        this.player2.setVelocityY(-300);
    }
    down(){
        this.player2.setVelocityY(300);
    }
    moveRight(){
        this.player2.setVelocityX(300);
    }
    moveLeft(){
        this.player2.setVelocityX(-300);
    }
    stop(){
        this.player2.setVelocityX(0);
    }



    move(){

        switch (true) {
            case this.scene.cursors.up.isDown:
                this.up()
                break;
            case this.scene.cursors.down.isDown:
                this.down()
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



