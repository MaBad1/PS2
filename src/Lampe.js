class Lampe{
    constructor(scene, player2, gate, gateO,lampFx) {
        this.scene = scene;
        this.player2 = player2;
        this.gate = gate;
        this.gateO = gateO;
        this.lampFx = lampFx;

        const map = this.scene.make.tilemap({key: this.scene.mapKey});

        this.lampe = this.scene.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        map.getObjectLayer('Lampes').objects.forEach((Lampe) => {
            this.LampeSprite = this.lampe.create(Lampe.x, Lampe.y- Lampe.height, 'Lampe').setOrigin(0);
            this.LampeSprite.nom = Lampe.name;
        });
            this.scene.physics.add.overlap(this.player2.player2,this.lampe, this.LampeAct.bind(this), null, this);
    }


    LampeAct(player2, lampe){
        for (var i = 0; i < this.gate.Gate.getChildren().length; i++) {
            if (lampe.nom === this.gate.Gate.getChildren()[i].nom) {
                this.gate.Gate.getChildren()[i].visible = false;
                this.gate.Gate.getChildren()[i].body.enable = false;
                lampe.visible = false;
            }
        }
        for (var i = 0; i < this.gateO.GateO.getChildren().length; i++) {
            if (lampe.nom === this.gateO.GateO.getChildren()[i].nom) {
                this.gateO.GateO.getChildren()[i].visible = true;
            }
        }
        for (var i = 0; i < this.lampFx.LampFx.getChildren().length; i++) {
            if (lampe.nom === this.lampFx.LampFx.getChildren()[i].nom) {
                this.lampFx.LampFx.getChildren()[i].visible = true;
            }
        }
        //this.scene.lampsfx.play();
        //this.scene.doorsfx.play()
    }
    }