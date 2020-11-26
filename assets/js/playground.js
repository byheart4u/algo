/**

Add upto N numbers

*/

const addUptoUsingForLoop = (n) => {
  let total = 0;
  for (let i = 0; i < n; i++) {
    total += i;
  }
  return total;
};

const addUptoUsingFormula = (n) => {
  return (n * (n + 1)) / 2;
};

const setValue = (id, val) => {
  let el = document.getElementById(id);
  el.innerText = val;
};

let t1 = performance.now();
setValue("result-1", addUptoUsingForLoop(1000));
let t2 = performance.now();
console.log(t2 - t1 + " seconds elapsed");

let t3 = performance.now();

setValue("result-2", addUptoUsingFormula(1000));
let t4 = performance.now();

console.log(t4 - t3 + " seconds elapsed");
