class Lampe{
    constructor(scene) {
        this.scene = scene;

        const map = this.scene.make.tilemap({key: this.scene.mapKey});

        this.lampe = this.scene.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        map.getObjectLayer('Lampes').objects.forEach((Lampe) => {
            this.LampeSprite = this.lampe.create(Lampe.x, Lampe.y- Lampe.height, 'Lampe').setOrigin(0);
            this.LampeSprite.name = Lampe.name;
        });
            //this.scene.physics.add.overlap(this.player2.player2,this.lampe, null, this);
        this.emitter=EventDispatcher.getInstance();

        this.emitter.on('hide lamp',this.LampeAct,this);
        this.emitter.on('show lamp',this.LampeDes,this);

    }


    LampeAct(player2, lampe){
        this.LampeSprite.visible = false;
        // for (var i = 0; i < this.gate.Gate.length; i++) {
        //     if (lampe.name === this.gate.Gate[i].name) {
        //         this.gate.Gate[i].setvisible = false;
        //         this.gate.Gate[i].body.enable = false;
        //         lampe.visible = false;
        //     }
        // }
        // for (var i = 0; i < this.gateO.GateO.length; i++) {
        //     if (lampe.name === this.gateO.GateO[i].name) {
        //         this.gateO.GateO[i].visible = true;
        //     }
        // }
        // for (var i = 0; i < this.lampFx.LampFx.length; i++) {
        //     if (lampe.name === this.lampFx.LampFx[i].name) {
        //         this.lampFx.LampFx[i].visible = true;
        //     }
        // }
        // //this.scene.lampsfx.play();
        // //this.scene.doorsfx.play()

    }

    LampeDes(player2, lampe){
        this.LampeSprite.visible = true;
        // for (var i = 0; i < this.gate.Gate.length; i++) {
        //     if (lampe.name === this.gate.Gate[i].name) {
        //         this.gate.Gate[i].visible = true;
        //         this.gate.Gate[i].body.enable = true;
        //         lampe.visible = true;
        //     }
        // }
        // for (var i = 0; i < this.gateO.GateO.length; i++) {
        //     if (lampe.name === this.gateO.GateO[i].name) {
        //         this.gateO.GateO[i].visible = false;
        //     }
        // }
        // for (var i = 0; i < this.lampFx.LampFx.length; i++) {
        //     if (lampe.name === this.lampFx.LampFx[i].name) {
        //         this.lampFx.LampFx[i].visible = false;
        //     }
        // }
        //this.scene.lampsfx.play();
        //this.scene.doorsfx.play()

    }

    }