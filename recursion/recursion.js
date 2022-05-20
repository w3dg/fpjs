/*
Recursion

Recursion is when a function calls itself until it doesn't.

Some important terms

- Base case - Some condition to stop recursion.
- Recursive Case - The statement to call function recursively.

*/

function countDownFrom(x) {
  if (x <= 0) {
    return;
  }
  console.log(x);
  countDownFrom(x - 1);
}

countDownFrom(10);
