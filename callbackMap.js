//CallbackMap Exercise

// 1. Implement your own version of "map" function.
// 2. Yours will take two arguments
//    a. The first will be an array to map
//    b. The second will be a callback function
// 3. The function will return a new array based on the results of the callback function.

function map (handle, doSomething) {
  var newArray = [];
  for (var i = 0; i< handle.length; i++){
    newArray.push(doSomething(handle[i]));
  }
  console.log(newArray);
}

var words = ["ground", "control", "to", "major", "tom"];

let result1 = map(words, function(word) {
  return word.length;
});

let result2 = map(words, function(word) {
  return word.toUpperCase();
});


let result3 = map(words, function(word) {
  return word.split('').reverse().join('');
});
