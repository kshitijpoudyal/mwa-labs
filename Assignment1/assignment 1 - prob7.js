/**
 * Created by kcp on 6/27/17.
 */
Array.prototype.bubbleSort = function () {
    let a = this;
    let swapped;
    do {
        swapped = false;
        for (let i=0; i < a.length-1; i++) {
            if (a[i] > a[i+1]) {
                let temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return a;
}

console.log([6,4,0,3,-2,1].bubbleSort());