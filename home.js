//declare vars

var divs = [];
var homeImgs = [];

window.onload = function(){




    divs = document.getElementsByClassName('actualImage');
    homeImgs = document.getElementsByClassName('homeImg');

    //bloc
    divs[0].addEventListener('mouseover', blocHovered, false); 
    divs[0].addEventListener('mouseleave', blocDeHovered, false); 

    //comp
    divs[1].addEventListener('mouseover', compHovered, false); 
    divs[1].addEventListener('mouseleave', compDeHovered, false); 

    //one
    divs[2].addEventListener('mouseover', oneHovered, false); 
    divs[2].addEventListener('mouseleave', oneDeHovered, false); 





}


//bloc
function blocHovered(){
    homeImgs[0].src = "images/homeBlocHidden.png";
}

function blocDeHovered(){
    homeImgs[0].src = "images/homeBloc.png";
}




//comp
function compHovered(){
    homeImgs[1].src = "images/homeCompHidden.png";
}

function compDeHovered(){
    homeImgs[1].src = "images/homeComp.png";
}



//one
function oneHovered(){
    homeImgs[2].src = "images/homeOneHidden.png";
}

function oneDeHovered(){
    homeImgs[2].src = "images/homeOne.png";
}

