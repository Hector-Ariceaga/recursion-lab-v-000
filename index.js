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
