const repeatString = function() {
let number = 3
let string = "hey"

  for (let i = 0; i < number; i++) {
  string += string + string
  return string
  }
};

// Do not edit below this line
module.exports = repeatString;
