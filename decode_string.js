function decodeString(s) {
  let stack = [];
  let currentNum = 0;
  let currentString = '';
  for (let char of s) {
    if (!isNaN(char)) {
      currentNum = currentNum * 10 + parseInt(char);
    } else if (char === '[') {
      stack.push(currentString);
      stack.push(currentNum);
      currentString = '';
      currentNum = 0;
    } else if (char === ']') {
      let num = stack.pop();
      let prevString = stack.pop();
      currentString = prevString + currentString.repeat(num);
    } else {
      currentString += char;
    }
  }
  return currentString;
}