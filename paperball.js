class Ball{
    constructor(x, y, radius, options){
        var options = {
         isStatic:false,
         "restituition": 0.3,
         "friction":0.5,
         "density":1
    }
        this.image = loadImage("sprites/paperball.png")
        this.body = Bodies.circle(x, y, radius, options)
        this.radius = radius
        World.add(world, this.body)
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y)
        imageMode(CENTER)
        image(paperimage,0,0,this.radius*2, this.radius*2)
        pop();
    }
}