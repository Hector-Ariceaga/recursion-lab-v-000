// Code your solution here!

function printString(string) {
  console.log(string[0])
  let remainder = string.substring(1, string.length)

  if (string.length > 1) {
    printString(remainder)
  } else {
    return true
  }
}

function reverseString(string) {
  if (string < 2) {
    return string
  } else {
    return reverseString(string.substring(1)) + string[0]
  }
}

function isPalindrome(string) {
  if (string.length < 2) {
    return true
  } else if (string[0] === string[string.length - 1]) {
    return isPalindrome(string.substring(1, string.length - 1))
  }  else {
    return false
  }
}

function addUpTo(array, index) {
  if (index > 0) {
    return addUpTo(array.substring(1, index - 1)) + array[index]
  } else {
    array[index]
  }
}