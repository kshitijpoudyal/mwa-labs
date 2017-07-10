/**
 * Created by kcp on 7/10/17.
 */
class Car{
    acceleration: number =0;

    constructor(public name:string){}

    honk(){
        console.log(`${this.name} is saying: Toooooooooooot!`);
    }
    accelerate(speed:number){
        this.acceleration += speed;
    }
}

var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(60);
console.log(car.acceleration);
