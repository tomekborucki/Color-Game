var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var h1 = document.querySelector("h1");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setupModeButtons();
    setupSquares();
    reset();
};

function setupModeButtons(){
    for(i=0; i<modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        });
    };
};

function setupSquares(){
    for(i=0; i<squares.length; i++){
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor){
                h1.style.backgroundColor = clickedColor;
                this.style.backgroundColor = pickedColor;
                changeColors(clickedColor);
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play again?";
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Wrong!";
            };
        });
    };
    reset();
};

function reset(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        };
    };
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
};

resetButton.addEventListener("click", function(){
    reset();
});

function changeColors(color){
    for(i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    };
};

function pickColor(){
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
};

function generateRandomColors(num){
    var arr = [];
    for(i=0; i<num; i++){
        arr.push(randomColor());
    };
    return arr;
};

function randomColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
};

