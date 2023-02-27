//declare vars

var dcTrophyButton = undefined;
var scTrophyButton = undefined;
var mTrophyButton = undefined;
var ghTrophyButton = undefined;

window.onload = function(){



    //get the dcTrophy button
    dcTrophyButton = document.getElementById('trophImg1');
    dcTrophyButton.addEventListener('mouseover', dcHovered, false); 
    dcTrophyButton.addEventListener('mouseleave', dcDeHovered, false); 

    //get the scTrophy button
    scTrophyButton = document.getElementById('trophImg2');
    scTrophyButton.addEventListener('mouseover', scHovered, false); 
    scTrophyButton.addEventListener('mouseleave', scDeHovered, false)

    //get the mTrophy button
    mTrophyButton = document.getElementById('trophImg3');
    mTrophyButton.addEventListener('mouseover', mHovered, false); 
    mTrophyButton.addEventListener('mouseleave', mDeHovered, false)

    //get the ghTrophy button
    ghTrophyButton = document.getElementById('trophImg4');
    ghTrophyButton.addEventListener('mouseover', ghHovered, false); 
    ghTrophyButton.addEventListener('mouseleave', ghDeHovered, false)


}


//dcTrophy
function dcHovered(){
    dcTrophyButton.src = "images/fadedTrophy1.png";
}

function dcDeHovered(){
    dcTrophyButton.src = "images/trophy1.jpg";
}

//scTrophy
function scHovered(){
    scTrophyButton.src = "images/fadedTrophy2.png";
}

function scDeHovered(){
    scTrophyButton.src = "images/trophy2.png";
}

//mTrophy
function mHovered(){
    mTrophyButton.src = "images/fadedTrophy3.png";
}

function mDeHovered(){
    mTrophyButton.src = "images/trophy3.jpg";
}

//ghTrophy
function ghHovered(){
    ghTrophyButton.src = "images/fadedTrophy4.png";
}

function ghDeHovered(){
    ghTrophyButton.src = "images/trophy4.jpg";
}
