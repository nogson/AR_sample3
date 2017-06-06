class VideoMesh {

    constructor(width, height) {
        this.canvas;
        this.context;
        this.count = 0;
        this.text = '　　ワレワレハ宇宙人ダ';

    }

    create() {
        let _this = this;
        var geometry = new THREE.PlaneGeometry(6.4, 3.2, 10, 10);
        var material = new THREE.MeshBasicMaterial({
            map: this.setTexture()
        });
        let planeMesh = new THREE.Mesh(geometry, material);
        planeMesh.material.map.needsUpdate = true;

        return planeMesh;
    }

    setTexture() {
        let _this = this;
        this.canvas = document.createElement('canvas');
        this.canvas.width = 1024;
        this.canvas.height = 512;
        this.context = this.canvas.getContext('2d');
        let count = '00' + this.count;
        count = count.slice(-3);
        let img = new Image();
        img.src = "images/holo/" + count + ".png";
        /* 画像を描画 */
        img.onload = function() {
            _this.context.drawImage(img, 0, 0);
            if (_this.count < 179) {
                _this.count++;
            } else {
                _this.count = 0;
            }
        }

        //hoge.appendChild(this.canvas);

        this.context.font = "50px 'ＭＳ Ｐゴシック'";

        let texture = new THREE.Texture(this.canvas);
        return texture;

    }

    render() {
        let _this = this;
        let count = '00' + this.count;
        count = count.slice(-3);
        let img = new Image();
        img.src = "images/holo/" + count + ".png";
        /* 画像を描画 */
        img.onload = function() {
            _this.context.clearRect(0, 0, 1024, 512)
            _this.context.drawImage(img, 0, 0);
            if (_this.count < 179) {
                _this.count++;
            } else {
                _this.count = 0;
            }

            let num = Math.floor(_this.count / 10);
            let text = _this.text.slice(0, num);

            _this.context.fillStyle = "rgb(200, 30, 100)";
            _this.context.fillText(text, 200, 50);
        }


    }

    play() {
        this.video.play();
    }

}