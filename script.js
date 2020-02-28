input = []

// Number buttons
let numBtnList = document.querySelectorAll(".numBtn");
let display = document.querySelector("#screenTextCtr");
for (const btn of numBtnList) {
    btn.addEventListener('click', (e) => display.textContent += e.target.textContent);
}

// Clear button
let clrBtn = document.querySelector(".clrBtn");
clrBtn.addEventListener('click', () => display.textContent = "");

// Delete button
let delBtn = document.querySelector(".delBtn");
delBtn.addEventListener('click', () => display.textContent = display.textContent.substring(0, display.textContent.length - 1));

// Equals button
let equalsBtn = document.querySelector(".equalsBtn");
equalsBtn.addEventListener('click', function() {
    input.push(display.textContent);
    display.textContent = "";   // need to define a clear function to use for clr and =
});

// Theme button
let themeBtn = document.querySelector(".themeBtn");
themeBtn.addEventListener('click', () => document.querySelector("#screenContainer").style.backgroundColor = "white");
