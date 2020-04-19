function divNums (int) {
  let arr = [];
  for( var i = 1; i <= int; i++ ) {
    if (i%2 === 0 && i%3 !== 0 && i%5 !== 0) {
        arr.push("yu");
    } else if (i%2 !== 0 && i%3 == 0 && i%5 !== 0) {
        arr.push("gi");
    } else if (i%2 !== 0 && i%3 !== 0 && i%5 === 0) {
        arr.push("oh");
    } else if (i%2 === 0 && i%3 === 0 && i%5 !== 0) {
        arr.push("yu-gi");
    } else if (i%2 === 0 && i%3 !== 0 && i%5 === 0) {
        arr.push("yu-ho");
    } else if (i%2 !== 0 && i%3 === 0 && i%5 === 0) {
        arr.push("gi-ho");
    } else if (i%2 === 0 && i%3 === 0 && i%5 === 0) {
        arr.push("yu-gi-oh");
    } else {
        arr.push(i);
   }
 }
    return arr;
}

// divNums(100);
// divNums(20);

console.log(divNums(100));
console.log(divNums(20));
