const calculator = document.querySelector(".calculator")
const keys = calculator.querySelector(".calculator__keys")
const display = document.querySelector('.calculator__display')


keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        if (!action) {
            if (displayedNum === '0') {
                display.textContent = keyContent
            } else {
                // appending a number by concatenating a string 
                display.textContent = displayedNum + keyContent
            }
        }
        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            key.classList.add('is-depressed')
        }
        if (action === 'decimal') {
            // concatenate the decimsl to the string of numbers 
            display.textContent = displayedNum + '.'
        }
        if (action === 'clear') {
            console.log('clear')
        }
        if (action === 'calculate') {
            console.log('calculate')
        }
    }
})