let count=0;
let countId=document.getElementById("count-el")
function increment(){
    count=count+1
    countId.innerText=count
    console.log(countId)
}

function save(){
    console.log(count)
}
const originalFunc = (num) => { return num + 2 };
console.log(originalFunc(5))
const newFunc = originalFunc;
console.log(newFunc)
let k=(newFunc.isMathFunction = true);
console.log(k)
const functionNameLength = (func) => { return func.name.length }; 
functionNameLength(originalFunc); 
console.log(functionNameLength)
const returnFunc = () => { return newFunc };
returnFunc(); 
console.log(returnFunc)
const arrayOfNumbers = [1, 2, 3, 4];

const sum = arrayOfNumbers.reduce((accumulator, currentValue) => {  
  return accumulator + currentValue;
});

console.log(sum); // 10
const randomNumbers = [4, 11, 42, 14, 39];
const filteredArray = randomNumbers.filter(n => {  
  return n > 5;
});
console.log(filteredArray);
const finalParticipants = ['Taylor', 'Donald', 'Don', 'Natasha', 'Bobby'];

// add string after each final participant
const announcements = finalParticipants.map(member => {
  return member + ' joined the contest.';
})

console.log(announcements);