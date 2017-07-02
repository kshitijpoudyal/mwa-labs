/**
 * Created by kcp on 6/27/17.
 */
String.prototype.filter = function (words) {
    let str = this.toString();
    for(let i in words){
        str = str.replace(words[i],"***");
    }
    return str;
}

let result = "This house is nice!".filter(["house","nice"]);
console.log(result);
