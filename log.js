class log extends Baseclass {
    constructor(x, y, height,angle) {
    super(x,y,26,height,angle)
    this.image = loadImage("sprites/wood2.png")  ;
    Matter.Body.setAngle(this.body,angle);  
    }
    

}