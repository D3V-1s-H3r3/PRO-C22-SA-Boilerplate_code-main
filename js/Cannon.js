class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    
    this.CannonImage = loadImage("assets/cannon.png");
    this.CannonBase = loadImage("assets/cannonBase.png");
  }
  
  display() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.CannonImage, 0, 0, this.width, this.height);
    pop();

    image(this.CannonBase, 70, 20, 200, 200);
    noFill();
  }

}
