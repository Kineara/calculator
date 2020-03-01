// function declarations
function clearDisplay() {
    display.textContent = "";
}

function clearAll() {
    input = [];
    clearDisplay();
}

function addition(displayVal = 0) {
    return acc + (displayVal * 1);
}

// Store inputs
let input = [];
let acc = 0;

// Number buttons
let numBtnList = document.querySelectorAll(".numBtn");
let display = document.querySelector("#screenTextCtr");
for (const numBtn of numBtnList) {
    numBtn.addEventListener('click', (e) => display.textContent += e.target.textContent);
}

// Clear button
let clrBtn = document.querySelector(".clrBtn");
clrBtn.addEventListener('click', () => clearDisplay());

// Delete button
let delBtn = document.querySelector(".delBtn");
delBtn.addEventListener('click', () => display.textContent = display.textContent.substring(0, display.textContent.length - 1));

// Equals button
let equalsBtn = document.querySelector(".equalsBtn");
equalsBtn.addEventListener('click', function() {
    clearDisplay();
});

// Function buttons
let funcBtnList = document.querySelectorAll(".funcBtn");
for (const funcBtn of funcBtnList) {
    funcBtn.addEventListener('click', function(e) {

        // append display contents to input array
        switch(e.target.textContent) {
            case "+":
                const addNum = display.textContent;
                clearDisplay();
                acc = addition(addNum);
                clearDisplay();
                display.textContent = acc;
                break;
            case "-":
                input.push("-");
                break;
            case "/":
                input.push("/");
                break;
            case "*":
                input.push("*");
                break;
        }
    })
}


// Theme button
let themeBtn = document.querySelector(".themeBtn");
themeBtn.addEventListener('click', function() {
    const screen = document.querySelector("#screenContainer");
    console.log(screen.style.backgroundColor);
    screen.style.backgroundColor === "white"
    ? screen.style.backgroundColor = "black"
    : screen.style.backgroundColor = "white";
})
