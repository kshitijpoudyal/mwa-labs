/**
 * Created by kcp on 7/10/17.
 */
class baseObject{
    width:number=0;
    length:number=0;
}

class rectangle extends baseObject{
    constructor(){
        super();
        this.width=5;
        this.length=2;
    }
    calcSize(){
        return this.width*this.length;
    }
}

console.log(new rectangle().calcSize());