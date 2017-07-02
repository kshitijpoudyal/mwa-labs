/**
 * Created by kcp on 6/27/17.
 */
//[1,2,3,4,5,6,7,8]

Array.prototype.odd = function () {
   return this.filter(a => ( a % 2 != 0));
}

Array.prototype.even = function () {
    return this.filter(a => (a % 2 == 0));
}

console.log([1,2,3,4,5,6,7,8].odd());
console.log([1,2,3,4,5,6,7,8].even());