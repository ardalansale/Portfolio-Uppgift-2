let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');

let number = [Math.floor(Math.random() * 10)]

btn.addEventListener('click', function(){
    let input = document.getElementById('userInput').value;
    if (input == number){
        //Template string
        output.innerHTML = `That's correct! The number is ${number}`;
    } else if (input < number){
        output.innerHTML = "The number is to low"
    };
    if (input > number){
        output.innerHTML = "The number is to high"
    }
});