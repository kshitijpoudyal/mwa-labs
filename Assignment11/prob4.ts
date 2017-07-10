class person{
    private _firstname:string="";
    get firstname(){
        return this._firstname;
    }
    set firstname(value){
        this._firstname = value.toUpperCase();
    }
}

var per = new person();
per.firstname = "Asaad";
console.log(per.firstname);