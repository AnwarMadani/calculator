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
