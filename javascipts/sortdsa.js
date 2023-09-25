// this module includes sort section of Data Structure Algorithms in JS. it is for learning and is as for
// Algorithm insert Sort of Array
let currentIndex;
let unsortedCurrentItem;
let args;
function insertSort(inputArray) {
  let tempIndex;
  console.log("start master algo", typeof inputArray);
  for (currentIndex = 1; currentIndex < inputArray.length; currentIndex++) {
    unsortedCurrentItem = inputArray[currentIndex];
    tempIndex = currentIndex - 1;
    while (tempIndex >= 0 && inputArray[tempIndex] > unsortedCurrentItem) {
      inputArray[tempIndex + 1] = inputArray[tempIndex];
      tempIndex--;
    }
    inputArray[tempIndex + 1] = unsortedCurrentItem;
  }

  postMessage(inputArray);
  return inputArray;
}
self.addEventListener(
  "message",
  function (e) {
    // do whatever you need with the arguments
    args = e.data;
    insertSort(args);
  },
  false
);
