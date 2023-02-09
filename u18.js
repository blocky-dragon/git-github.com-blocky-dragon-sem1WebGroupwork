console.log("Hello world!");

//declare vars


var ageBtn = undefined;
var ageList = [];
var currentAgeIndex = -1;
window.onload = function(){

    getAgeList()


    //get the age button
    ageBtn = document.getElementById('ageSelect');
    ageBtn.addEventListener('click', selectAge, false); 

    //get the ages button
    firstAgeBtn = document.getElementById('firstAge');
    firstAgeBtn.addEventListener('click', firstAgePressed, false); 

    secondAgeBtn = document.getElementById('secondAge');
    secondAgeBtn.addEventListener('click', secondAgePressed, false); 

    lastAgeBtn = document.getElementById('lastAge');
    lastAgeBtn.addEventListener('click', lastAgePressed, false); 
    
}




function getAgeList(){

    for(i = 0; i < document.getElementById('ageList').childNodes.length; i ++){

        currentElement = document.getElementById('ageList').childNodes[i];
        if(currentElement.nodeName == "LI"){
            ageList.push(currentElement)
        }
    }

}




//when an age is selected

function firstAgePressed(){
    currentAgeIndex = 0;
    ageSelected();
}

function secondAgePressed(){
    currentAgeIndex = 1;
    ageSelected();
}


function lastAgePressed(){
    currentAgeIndex = 2;
    ageSelected();
}


function ageSelected(){

    //hide the stuff
    for(i = 0; i < ageList.length; i ++){
        ageList[i].style.display = "none";
    }
    

    console.log("selected age = " + currentAgeIndex)

    switch(currentAgeIndex){

        case 0:
            ageBtn.innerHTML = "Age: 7 or younger";
            break;

        case 1:
            ageBtn.innerHTML = "Age: 8+";
            break;

        case 2:
            ageBtn.innerHTML = "Age: 14+";
            break;
    }
}



//when age is hit
function selectAge(){


    ageBtn.innerHTML = "Select:"

    for(i = 0; i < ageList.length; i ++){
        ageList[i].style.display = "block";
    }
}





