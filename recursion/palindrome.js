function isPalindrome(word) {
  word = word.toLowerCase();
  if (word.length < 2) {
    return true;
  }
  if (word.charAt(0) == word.charAt(word.length - 1)) {
    return isPalindrome(word.substring(1, word.length - 1));
  } else {
    return false;
  }
}

console.log(isPalindrome("MADAM"));
console.log(isPalindrome("DAD"));
console.log(isPalindrome("DOG"));
