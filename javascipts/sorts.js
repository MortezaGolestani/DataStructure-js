// this module includes sort section of Data Structure Algorithms in JS. it is for learning and is as for

// Algorithm insert Sort of Array
let currentIndex;
let unsortedCurrentItem;
function insertSort(inputArray) {
  let tempIndex;
  console.log("start master algo");
  for (currentIndex = 1; currentIndex < inputArray.length; currentIndex++) {
    unsortedCurrentItem = inputArray[currentIndex];
    tempIndex = currentIndex - 1;
    while (tempIndex >= 0 && inputArray[tempIndex] > unsortedCurrentItem) {
      inputArray[tempIndex + 1] = inputArray[tempIndex];
      tempIndex--;
    }
    inputArray[tempIndex + 1] = unsortedCurrentItem;
  }
  console.log("sort finished");
  return inputArray;
}

let unsortedArray = [];
let sortedArray = [];
let minNumber;
let maxNumber;
let countArrayItems = 0;
let myInterval;

let sec = 0;
function arrayInsertSort() {
  return insertSort(unsortedArray);
}
function onClickedButton() {
  minNumber = Number(document.getElementById("minval").value);

  // minNumber = 0;
  maxNumber = Number(document.getElementById("maxval").value);
  // maxNumber = 100000;
  // countArrayItems = num;
  countArrayItems = Number(document.getElementById("num").value);
  // countArrayItems = 100000;
  for (let i = 0; i < countArrayItems; i++) {
    const random = minNumber + Math.floor(Math.random() * maxNumber);
    unsortedArray[i] = random;
  }

  document.getElementById("unsortedarray").innerText = unsortedArray.join(", ");
  return unsortedArray;
}

function getResult() {
  document.getElementById("times").innerText = sec.toString();
  sec++;
}
function timer1() {
  myInterval = setInterval(getResult, 1000);
}
function killTimer1() {
  clearInterval(myInterval);
}
