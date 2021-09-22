let text = "css";

function testVariableScope() {
  let text = "html";
  
  return text;
}

console.log(testVariableScope());
/* переменная "html" имеет приоритет потому что находиться в обасти видимости*/