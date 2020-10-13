const first = document.querySelector("#first-list");
const second = document.querySelector("#second-list");
const btn = document.querySelector("#btn");
const display = document.querySelector('#display');
btn.addEventListener('click', mergeArrays);
function mergeArrays() {  
  const arr1= first.value.split("-");
  const arr2 = second.value.split("-");
  
  arr2.forEach(element => {
  arr1.push(element)
  });  
  
  const result = arr1.sort(function(a, b){return a-b})
  display.innerText = `Merged List: ${result}`

};


// function mergeArrays() {
//   const arr1 = [first.value]
//   const arr2 = [second.value]
//   console.log(arr1,arr2)
//   arr1.forEach(element => {
//   arr2.push(element) 
//   });
//   console.log(arr2.sort(function(a, b){return a-b}))
//   return arr2.sort(function(a, b){return a-b})

// };








































