/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Amazon.

Given a string, find the longest palindromic contiguous substring. If there are more than one with the maximum length, return any one.

For example, the longest palindromic substring of "aabcdcb" is "bcdcb". The longest palindromic substring of "bananas" is "anana".
*/

const findFirst = (yourString,searchTerm) => {
  return yourString.indexOf(searchTerm)
}

const findLast = (yourString,searchTerm) => {
  return yourString.lastIndexOf(searchTerm)
}

const cleanReplace = (yourString,searchTerm,replaceTerm) => {
  let temp = yourstring.slice();
  return temp.replace(searchTerm,replaceTerm)
}

const findPallySub = (yourString) => {
  return yourString.search('bcd'.reverse())
}

let test0 = 'aabcdcb'
let result0 = 'bcdcb'
let test1 = 'bannanas'
let result1 = 'anana'

console.log(findPallySub(test0))

$(document).ready(function() {
  $('#form1').submit(function(event){
    event.preventDefault()
    let output0 = 1
    console.log(output1)
    $('#output-section-0').text(output0)
  })
});
