//declare vars

var rockButton = undefined;

window.onload = function(){



    //get the rock button
    rockButton = document.getElementById('actualImg1');
    rockButton.addEventListener('mouseover', rockHovered, false); 
    rockButton.addEventListener('mouseleave', rockDeHovered, false); 



    //get the bloc button
    blocButton = document.getElementById('actualImg2');
    blocButton.addEventListener('mouseover', blocHovered, false); 
    blocButton.addEventListener('mouseleave', blocDeHovered, false)


}


//rock
function rockHovered(){
    rockButton.src = "images/alienRockHidden.png";
}

function rockDeHovered(){
    rockButton.src = "images/alienRock.png";
}

//bloc
function blocHovered(){
    blocButton.src = "images/alienBlocHidden.png";
}

function blocDeHovered(){
    blocButton.src = "images/alienBloc.png";
}