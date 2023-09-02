// DOM
const resetEl = document.querySelector(".js-reset");
// const bracketsEl = document.querySelector(".js-brackets");
const percentageEl = document.querySelector(".js-percentage");
const deviceEl = document.querySelector(".js-device");
const sevenEl = document.querySelector(".js-7");
const eightEl = document.querySelector(".js-8");
const nineEl = document.querySelector(".js-9");
const multiplyEl = document.querySelector(".js-multiply");
const fourEl = document.querySelector(".js-4");
const fiveEl = document.querySelector(".js-5");
const sixEl = document.querySelector(".js-6");
const minusEl = document.querySelector(".js-minus");
const oneEl = document.querySelector(".js-1");
const twoEl = document.querySelector(".js-2");
const threeEl = document.querySelector(".js-3");
const plusEl = document.querySelector(".js-plus");
const zeroEl = document.querySelector(".js-zero");
const doubleZeroEl = document.querySelector(".js-double-zero");
const doteEl = document.querySelector(".js-dote");
const equalEl = document.querySelector(".js-equal");
const resultEl = document.querySelector(".result");
// DOM

let num = "";
let currentOperation = null;  
let leftOperand = null;

//the btn functions

// const bracketsClick = () => {
//   num += "( )";
//   resultEl.value = num;
// };

const percentageClick = () => {
  if (num !== '') {
    const numValue = parseFloat(num);
    num = (numValue / 100).toString();
    resultEl.value = num;
  }
};


const sevenClick = () => {
  num += "7";
  resultEl.value = num;
};

const eightClick = () => {
  num += "8";
  resultEl.value = num;
};

const nineClick = () => {
  num += "9";
  resultEl.value = num;
};


const fourClick = () => {
  num += "4";
  resultEl.value = num;
};

const fiveClick = () => {
  num += "5";
  resultEl.value = num;
};

const sixClick = () => {
  num += "6";
  resultEl.value = num;
};


const oneClick = () => {
  num += "1";
  resultEl.value = num;
};

const twoClick = () => {
  num += "2";
  resultEl.value = num;
};

const threeClick = () => {
  num += "3";
  resultEl.value = num;
};

const zeroClick = () => {
  num += "0";
  resultEl.value = num;
};

const doubleZeroClick = () => {
  num += "00";
  resultEl.value = num;
};

const doteClick = () => {
  num += ".";
  resultEl.value = num;
};

const operatorClick = (operator) => {
    if (num !== "") {
      leftOperand = parseFloat(num);
      currentOperation = operator;
      num = ''; 
    }
  };

const equalClick = () => {
        if (currentOperation && num !== "") {
          const rightOperand = parseFloat(num);
          let result = 0;
      
          switch (currentOperation) {
            case "+":
              result = leftOperand + rightOperand;
              break;
            case "-":
              result = leftOperand - rightOperand;
              break;
            case "*":
              result = leftOperand * rightOperand;
              break;
            case "/":
              result = leftOperand / rightOperand;
              break;
          }
      
          num = result.toString();
          resultEl.value = num;
          currentOperation = null;
          leftOperand = null;
        } else {
            resultEl.value = 'Error';
        }
};
      
 
const resetClick = () => {
  num = "";
  resultEl.value = num;
};

//add event listtener
resetEl.addEventListener("click", resetClick);
// bracketsEl.addEventListener("click", bracketsClick);
percentageEl.addEventListener("click", percentageClick);

sevenEl.addEventListener("click", sevenClick);
eightEl.addEventListener("click", eightClick);
nineEl.addEventListener("click", nineClick);

fourEl.addEventListener("click", fourClick);
fiveEl.addEventListener("click", fiveClick);
sixEl.addEventListener("click", sixClick);

oneEl.addEventListener("click", oneClick);
twoEl.addEventListener("click", twoClick);
threeEl.addEventListener("click", threeClick);

zeroEl.addEventListener("click", zeroClick);
doubleZeroEl.addEventListener("click", doubleZeroClick);
doteEl.addEventListener("click", doteClick);
equalEl.addEventListener("click", equalClick);

// operator click listeners
plusEl.addEventListener("click", () => operatorClick('+'));
minusEl.addEventListener("click", () => operatorClick('-'));
multiplyEl.addEventListener("click", () => operatorClick('*'));
deviceEl.addEventListener("click", () => operatorClick('/'));


//tester
console.log("test");
