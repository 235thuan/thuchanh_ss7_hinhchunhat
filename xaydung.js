let Rectangle = function (x, y, width, length) {
    this.width = width;
    this.length = length;
    this.x = x;
    this.y = y;
// hanh vi tinh dien tich va chu vi
    this.getArea = function () {

        return width * length;
    };
    this.getPerimeter = function () {
        return 2 * (width + length);

    };
//hanh vi nhap x, y, width,length
    this.setWidth = function (width) {
        this.width = width;
    };
    this.setLength = function (length) {
        this.length = length;
    };
    this.setOx = function (x) {
        this.x = x;
    };
    this.setOy = function (y) {
        this.y = y;
    };
// hanh vi xuat x,y ,width,length
    this.getWidth = function () {
        return this.width;
    };
    this.getLength = function () {
        return this.length;
    };
    this.getOx = function () {
        return this.x;
    };
    this.getOy = function () {
        return this.y;
    };
// hanh vi ve hinh chu nhat


    this.getRandomHex = function () {
        return Math.floor(Math.random() * 255)
    };
    this.getRandomColor = function () {

        let red = this.getRandomHex();
        let green = this.getRandomHex();
        let blue = this.getRandomHex();
        return "rgb(" + red + "," + blue + "," + green + ")";
    };
    this.createRectangle = function () {
        this.ctx = document.getElementById("myCanvas").getContext("2d");

        this.color = this.getRandomColor();
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.rectangle = new Rectangle(x, y, width, length);
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.width, this.length);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    };
    this.createMultiRectangle = function () {

        for (let i = 0; i < 3; i++) {
            this.createRectangle();

        }
    }
};


let rec = new Rectangle(0, 0, 200, 200);
let areaRec = rec.getArea();
let perimeterRec = rec.getPerimeter();

rec.createRectangle();
rec.createMultiRectangle();
alert("area: " + areaRec + "perimeter: " + perimeterRec);


// function createRectangle() {
//     let this.ctx = document.getElementById("myCanvas").getContext("2d");
//     this.ctx.beginPath();
//     this.ctx.rect(0, 0, 50, 150);
//     this.ctx.fill();
// }
//
// createRectangle();




