//declare vars

var taster = undefined;
var adult = undefined;
var improver = undefined;
var leading = undefined;
var parents = undefined;

var divs = [taster, adult, improver, leading, parents]
var buttons = [];
var buttonFunctions = [tasterClicked, adultClicked, improverClicked, leadingClicked, parentsClicked]

var pressedID = -1;

window.onload = function(){

    //get all buttons
    for(i = 0; i < document.getElementById('courseSelection').childNodes.length; i ++){

        currentElement = document.getElementById('courseSelection').childNodes[i];
        if(currentElement.nodeName == "LI"){
            buttons.push(currentElement)
        }
    }


    //map buttons to functions
    for(i = 0; i < buttons.length; i++){

        buttons[i].addEventListener('click', buttonFunctions[i], false);
    }


    //get the actual divs to change
    taster = document.getElementById('taster');
    adult = document.getElementById('adult');
    improver = document.getElementById('improver');
    leading = document.getElementById('leading');
    parents = document.getElementById('parents');
    divs = [taster, adult, improver, leading, parents]


}


//taster
function tasterClicked(){
    pressedID = 0;
    showText()
}

//adult
function adultClicked(){
    pressedID = 1;
    showText()
}


//improver
function improverClicked(){
    pressedID = 2;
    showText()
}


//leading
function leadingClicked(){
    pressedID = 3;
    showText()
}


//parents
function parentsClicked(){
    pressedID = 4;
    showText()
}


//hides and shows the text
function showText(){

    if(pressedID == -1){
        return;
    }


    for(i = 0; i < divs.length; i++){
        divs[i].style.display = "none";
        //buttons[i].style.backgroundColor  = "black";
    }

    divs[pressedID].style.display = "inline";
    //buttons[pressedID].style.backgroundColor = "rgb(154, 98, 91)";
}
