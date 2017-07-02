/**
 * Created by kcp on 6/27/17.
 */
function Person() {
    name = "name";
}

let TeacherA = new Person();
let TeacherB = new Person();

Person.prototype.teach=function (subject) {
    console.log(`${this.name} is now teaching ${subject}`);
}
TeacherA.name="Kshitij";
TeacherA.teach("MWA");