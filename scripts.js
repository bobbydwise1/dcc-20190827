/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Amazon.

Given a string, find the longest palindromic contiguous substring. If there are more than one with the maximum length, return any one.

For example, the longest palindromic substring of "aabcdcb" is "bcdcb". The longest palindromic substring of "bananas" is "anana".
*/

const reverseString = (yourString) => {
  let output = '';
  for ( i = yourString.length-1; i >= 0; i-- ) {
    output = output + yourString[i]
  }
  return output;
}

const findFirst = (yourString,searchTerm) => {
  return yourString.indexOf(searchTerm)
}

const findLast = (yourString,searchTerm) => {
  return yourString.lastIndexOf(searchTerm)
}

const findReplace = (yourString,searchTerm,replaceTerm) => {
  return yourString.replace(searchTerm,replaceTerm)
}

const chopInHalf = (yourString,leftBool) => {
  if (leftBool == 1) {
    return yourString.slice(0,Math.ceil(yourString.length/2))
  } else {
    return yourString.slice(Math.floor(yourString.length/2))
  }
}

const detectPally = (yourString) => {
  if ((yourString.length == 0) || (yourString.length == 1)) {
    return null;
  } else {
    if (yourString.slice(0,Math.floor(yourString.length/2)) == reverseString(yourString.slice(Math.ceil(yourString.length/2)))) {
      return true;
    }
      return false
    }
  }

const findPallySub = (yourString) => {
  let temp = yourString.slice();
  let chopped;
  for ( i = 0; i < temp.length; i++ ) {
    chopped = temp.slice(i+1)
    chopped = chopInHalf(chopped)
    console.log(chopped)
  }
  return 1
}

let test0 = 'aabcdcb'
let result0 = 'bcdcb'
let test1 = 'bannanas'
let result1 = 'anana'

// console.log(findPallySub(test0))

$(document).ready(function() {
  $('#form1').submit(function(event){
    event.preventDefault()
    let output0 = 1
    console.log(output1)
    $('#output-section-0').text(output0)
  })
});
