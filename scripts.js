/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Amazon.

Given a string, find the longest palindromic contiguous substring. If there are more than one with the maximum length, return any one.

For example, the longest palindromic substring of "aabcdcb" is "bcdcb". The longest palindromic substring of "bananas" is "anana".
*/

const reverseString = (yourString) => {
  let output = '';
  for ( j = yourString.length-1; j >= 0; j-- ) {
    output = output + yourString[j]
  }
  return output;
}

const detectPally = (candString) => {
  if ((candString.length == 0) || (candString.length == 1)) {
    return false;
  } else {
    if (candString.slice(0,Math.floor(candString.length/2)) == reverseString(candString.slice(Math.ceil(candString.length/2)))) {
      return true;
    }
      return false
    }
  }

const findPallySub = (yourString) => {
  let temp = yourString.slice()
  let chopped;
  let output = [];
  for (let k = 0; k < yourString.length-1; k++) {
    if ( k == 0 ) {
      temp = yourString.slice(0)
    } else {
      temp = yourString.slice(0,-k)
    }
    //console.log(temp)
    for (let i = 0; i < temp.length-1; i++ ) {
      chopped = temp.slice(i)
      //console.log('i is: ', i, ' , chopped is: ', chopped)
      if (detectPally(chopped)) {
        output.push(chopped)
      }
    }
  }
  return output;
}

const findLargestWord = (yourArrayOfStrings) => {
  let output = '';
  for (let q = 0; q < yourArrayOfStrings.length; q++) {
    if (yourArrayOfStrings[q].length > output.length) {
      output = yourArrayOfStrings[q]
    }
    //console.log(output)
  }
  return output;
}

let test0 = 'aabcdcb'
let expResult0 = 'bcdcb'
let test1 = 'bananas'
let expResult1 = 'anana'

let result0 = findPallySub(test0)
let result1 = findPallySub(test1)

console.log(result0)
console.log(result1)
console.log(findLargestWord(result0))


$(document).ready(function() {
  $('#form1').submit(function(event){
    event.preventDefault()
    let output0 = 1
    console.log(output1)
    $('#output-section-0').text(output0)
  })
});
