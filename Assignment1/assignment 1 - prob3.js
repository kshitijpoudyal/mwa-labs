/**
 * Created by kcp on 6/26/17.
 */
function prob3() {
  const numbers = [3,62,234,7,23,74,23,76,92];

  function greater(num) {
      return num>70;
  }
  let numbers70 = numbers.filter(greater);
  console.log(numbers70);
}

prob3();