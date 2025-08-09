/**
* Accessibility Tool at bottom left of the page
*
 * Making the page able to resize in font size
* or make it grayscale per filter
*
 */
 
// Handling the opening and hiding
 
const fontElements = ["p", "a"];
 
const toolObjectTrigger = document.querySelector(".fa-accessible-icon");
const toolObjects = document.querySelector(".tool-objects");
 
toolObjectTrigger.addEventListener("click", (e) => {
    toolObjects.classList.toggle("show")
})
 
// making font size bigger
const biggerFontButton = document.querySelector(".tool .fa-plus");
const smallerFontButton = document.querySelector(".tool .fa-minus");
 
function fontSizeResizer(e) {
    // check for actual font size of root
    let actualFontSize = parseInt(getComputedStyle(document.querySelector("html")).fontSize);
 
    // Checkinf which button clicked and if font is now too small or too big
    if(this.classList.contains("fa-plus") && actualFontSize < 30) {
        document.querySelector("html").style.fontSize = `${actualFontSize +1}px`;
        smallerFontButton.classList.remove("inactive");
    } else if(this.classList.contains("fa-minus") && actualFontSize > 10) {
        document.querySelector("html").style.fontSize = `${actualFontSize -1}px`;
        biggerFontButton.classList.remove("inactive");
    } else {
        this.classList.add("inactive");
    }
}
 
// setting EventListener for the buttons
biggerFontButton.addEventListener("click", fontSizeResizer);
smallerFontButton.addEventListener("click", fontSizeResizer);
 
// Grayscale function
const grayScaleButton = document.querySelector(".tool .fa-circle-half-stroke");
let actualGrayScale = false;
 
function grayscaleWholePage() {
    if(actualGrayScale) {
        document.querySelector("*").style.filter="grayscale(0%)";
        actualGrayScale = false;
    } else {
        document.querySelector("*").style.filter="grayscale(100%)";
        actualGrayScale = true;
    }
}
 
grayScaleButton.addEventListener("click", grayscaleWholePage);
 
// Testing Switch function
const switchContainer = document.querySelector(".switch-container");
const switcher = document.querySelector(".switch");
 
switchContainer.addEventListener("click", e => {
    switcher.classList.toggle("active")
})