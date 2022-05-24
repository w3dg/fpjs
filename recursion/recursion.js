/*
Recursion

Recursion is when a function calls itself until it doesn't.

Some important terms

- Base case - Some condition to stop recursion.
- Recursive Case - The statement to call function recursively.

*/

function countDownFrom(x) {
  // base case
  if (x <= 0) {
    return;
  }
  console.log(x);
  // recursive case
  countDownFrom(x - 1);
}

countDownFrom(10);
