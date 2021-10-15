class SlingShot{
    
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.image1= loadImage("sprites/sling1.png")
        this.image2= loadImage("sprites/sling2.png")
        this.image3= loadImage("sprites/sling3.png")

        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push()
            if(pointA.x<220){
            strokeWeight(7);
            stroke(48,22,8)
            line(pointA.x-25, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x, pointA.y, pointB.x, pointB.y)
            image(this.image3, pointA.x-30, pointA.y-10, 15, 30);
            }else{
             strokeWeight(3)
             stroke(48,22,8)
            line(pointA.x-25, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x, pointA.y, pointB.x, pointB.y)
            image(this.image3, pointA.x-30, pointA.y-10, 15, 30);
            }
            pop()
            image(this.image1, 200, 20, this.width, this.height);
            image(this.image2, 175, 20, this.width, this.height);
            image(this.image3, 200, 55, this.width, this.height);
        }

    }
    
}