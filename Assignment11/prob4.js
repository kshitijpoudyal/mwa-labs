var person = (function () {
    function person() {
        this._firstname = "";
    }
    Object.defineProperty(person.prototype, "firstname", {
        get: function () {
            return this._firstname;
        },
        set: function (value) {
            this._firstname = value.toUpperCase();
        },
        enumerable: true,
        configurable: true
    });
    return person;
}());
var per = new person();
per.firstname = "Asaad";
console.log(per.firstname);
