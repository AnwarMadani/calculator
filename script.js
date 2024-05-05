const numbers = document.querySelectorAll(".num");
const operations = document.querySelectorAll(".operation")
const equalBtn = document.querySelector(".equal")
const delBtn = document.querySelector(".del")
const clearBtn = document.querySelector(".clear")
const currBtn = document.querySelector(".curr")
let expression = ""

numbers.forEach(button => {
    button.addEventListener('click', () => {
        if(button.textContent == "." && expression.includes(".")){
            return;
        }
        currBtn.textContent += button.textContent;
        expression += button.textContent;
    }
    )
})


operations.forEach(button => {
    button.addEventListener('click', () => {
        currBtn.textContent += button.textContent;
        expression += button.textContent;
    }
    )
})

equalBtn.addEventListener('click', () =>{
    console.log(eval(expression));
    expression = eval(expression);
    currBtn.textContent = expression;
})


clearBtn.addEventListener('click', () =>{
    currBtn.textContent = "";
    expression = "";
})

delBtn.addEventListener('click', () =>{
    expression = expression.toString().slice(0, -1);
    currBtn.textContent = expression;
})