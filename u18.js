console.log("Hello world!");

//declare vars

var ageBtn = undefined;
var ageList = [];
var currentAgeIndex = -1;
var currentActivityIndex = -1;
var activityBtn = undefined;
var activityList = [];
var outputHeading = undefined;
var outputGeneral = undefined;
var outputDetails = undefined;
var outputBooking = undefined;
var outputDetailsTitle = undefined;
var outputBookingDetails = undefined;
var headingString1 = "";
var headingString2 = "";

window.onload = function(){

    getAgeList()
    getActivityList()

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

    //get activity button
    activityBtn = document.getElementById('typeSelect');
    activityBtn.addEventListener('click', selectActivity, false); 

    //get the activities button
    firstAgeBtn = document.getElementById('alienBlockSelect');
    firstAgeBtn.addEventListener('click', alienBlocSelected, false); 

    secondAgeBtn = document.getElementById('alienOneSelect');
    secondAgeBtn.addEventListener('click', alienOneSelected, false); 

    lastAgeBtn = document.getElementById('kidsClubSelect');
    lastAgeBtn.addEventListener('click', kidsClubSelected, false); 


    //outputs
    outputHeading = document.getElementsByClassName('outputHeading');
    outputGeneral = document.getElementById('outputGeneral');
    outputDetails = document.getElementById('outputDetails');
    outputBooking = document.getElementById('outputBooking');
    outputBookingDetails = document.getElementById('outputBookingDetails');
    outputDetailsTitle = document.getElementById('outputDetailsTitle');
}




function getAgeList(){

    for(i = 0; i < document.getElementById('ageList').childNodes.length; i ++){

        currentElement = document.getElementById('ageList').childNodes[i];
        if(currentElement.nodeName == "LI"){
            ageList.push(currentElement)
        }
    }

}


function getActivityList(){

    for(i = 0; i < document.getElementById('typeList').childNodes.length; i ++){

        currentElement = document.getElementById('typeList').childNodes[i];
        if(currentElement.nodeName == "LI"){
            activityList.push(currentElement)
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


//when an activity is selected

function alienBlocSelected(){
    currentActivityIndex = 0;
    activitySelected();
}


function alienOneSelected(){
    currentActivityIndex = 1;
    activitySelected();
}


function kidsClubSelected(){
    currentActivityIndex = 2;
    activitySelected();
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
            headingString2 = "for ages 7 or younger"
            break;

        case 1:
            ageBtn.innerHTML = "Age: 8 - 13";
            headingString2 = "for ages 8 to 13"
            break;

        case 2:
            ageBtn.innerHTML = "Age: 14+";
            headingString2 = "for ages 14 or over"
            break;
    }
    changeText()
}


function activitySelected(){

    //hide the stuff
    for(i = 0; i < activityList.length; i ++){
        activityList[i].style.display = "none";
    }
    

    console.log("selected activity = " + currentActivityIndex)

    switch(currentActivityIndex){

        case 0:
            activityBtn.innerHTML = "Alien Bloc";
            headingString1 = "Alien Bloc "
            break;

        case 1:
            activityBtn.innerHTML = "Alien One";
            headingString1 = "Alien One "
            break;

        case 2:
            activityBtn.innerHTML = "Kids Club";
            headingString1 = "Kids Club "
            break;
    }
    changeText()
}



//when age is hit
function selectAge(){


    ageBtn.innerHTML = "Select:"

    for(i = 0; i < ageList.length; i ++){
        ageList[i].style.display = "block";
    }
}




//when select activity is hit
function selectActivity(){


    activityBtn.innerHTML = "Select:"

    for(i = 0; i < activityList.length; i ++){
        activityList[i].style.display = "block";
    }
}





function changeText(){


    if(currentActivityIndex == -1 || currentAgeIndex == -1){
        console.log("not both have been selected")
        return
    }


    outputDetails.style.display = "none";
    outputDetailsTitle.style.display = "none";
    outputBooking.style.display = "none";
    outputBookingDetails.style.display = "none";
    outputGeneral.style.display = "block";
    outputHeading[0].style.display = "block";

    outputHeading[0].innerHTML = headingString1 + headingString2;


    switch(currentActivityIndex){

    
        
        //block
        case 0:
            updateForBloc()
            break;

        //one just like the variable name :)
        case 1:
            updateForOne()
            break;

        //kids club
        case 2:
            updateForKidsClub()
            break;
    }
}



function updateForBloc(){
    

    if(currentAgeIndex == 0){
        outputGeneral.innerHTML = "Unfortunately for safety reasons we cannot allow children under 8 onto any of the matted areas at anytime, no matter if their parents are members or not.<br> <br> Please consider using alien one as an alternative."
    }

    else if(currentAgeIndex == 1){
        outputGeneral.innerHTML = "Children from 8 - 13 may use alien bloc provided they are supervised by an adult. <br> <br> Note: Each adult can supervise a maximum of two children. <br> <br>"
        outputDetailsTitle.style.display = "block";
        outputDetailsTitle.innerHTML = "organised groups at alien bloc"
        outputDetails.style.display = "block";
        outputDetails.innerHTML = "<br> Monday to Friday: Groups may pre book and use alien bloc until 6pm. <Br> Saturday and Sundays: groups may use alien bloc until 2pm. <br> All groups of children must be supervised at a ratio of 1 adult to 2 children unless being supervised by a qualified and insured instructor where the maximum ratio permitted will be 1:9. <br> Please phone before bringing any groups."
        showBookings()
    }

    else if(currentAgeIndex == 2){
        outputGeneral.innerHTML = "Children 14 or older may use alien bloc unsupervised as long as they meet the following requirements. <br> <br> The child must fill in the digital registration on our premises with their parent or Guardian present. <br> The youngester will then be assessed by an alien rock staff member."
        outputDetailsTitle.style.display = "block";
        outputDetailsTitle.innerHTML = "organised groups at alien bloc"
        outputDetails.style.display = "block";
        outputDetails.innerHTML = "<br> Monday to Friday: Groups may pre book and use alien bloc until 6pm. <Br> Saturday and Sundays: groups may use alien bloc until 2pm. <br> All groups of children must be supervised at a ratio of 1 adult to 2 children unless being supervised by a qualified and insured instructor where the maximum ratio permitted will be 1:9. <br> Please phone before bringing any groups."
        showBookings()
    }
}

function updateForKidsClub(){
    if(currentAgeIndex == 0){
        outputGeneral.innerHTML = "Unfortunately Kids Club is not available for kids under the age of 8.<br> <br> Please consider using alien one as an alternative."
    }

    else{
        outputGeneral.innerHTML = "Tuition is given in small groups with a maximum ratio of six kids per instructor. <br> Kids are taught how to climb and look after themselves and others in an exciting, energetic environment.<br> Sessions run most Saturday and Sunday mornings. <br> These are usually extremely popular so please book well in advance to avoid the chance of your child being disappointed at the last minute. <br>" 
        outputDetailsTitle.style.display = "block";
        outputDetailsTitle.innerHTML = "Pricing"
        outputDetails.style.display = "block";
        outputDetails.innerHTML = "<br> Introduction to kids club is £67.50, to cover the first 4 session introductory course. This includes a one off additional cost of registration in the National indoor climbing achievement scheme NICAS and all equipment. <br> Otherwise the cost per session is £15.00 (includes all required equipment)"
        showBookings()
    }
}


function updateForOne(){
    if(currentAgeIndex == 0){
        outputGeneral.innerHTML = "Children older than 7 are able to use alien one when they are directly supervised by a parent/guardian and the parent has the appropriate knowledge of climbing to do this safely. <br> They may also be supervised by an alien rock approved climbing instructor within a taster session or or during private instruction.<br> Note: instructor must be pre - booked. <br> All children within a birthday party must be 8 or over."
    }

    else if(currentAgeIndex == 1){
        outputGeneral.innerHTML = "Children can either be supervised by an experienced parent/guardian as above or be supervised by an alien rock approved climbing instructor.<br> Note: instructor must be pre - booked."
        showBookings()
    }

    else if(currentAgeIndex == 2){
        outputGeneral.innerHTML = "Experienced youngsters may use the centre unsupervised as long as the following conditions are met: <br> <br> They must fill in the digital registration on our premises with their parent or Guardian present. <br> The youngster will then be assessed by an alien rock staff member."
        showBookings()
    }

    outputDetailsTitle.style.display = "block";
    outputDetailsTitle.innerHTML = "Details"
    outputDetails.style.display = "block";
    outputDetails.innerHTML = "Parents that require training to gain an appropriate knowledge of climbing should consider an alien rock adult beginners course, or parents belaying course. <br> Note: maximum of 2 youngsters per supervising adult. <br>"

}



//booking var
var bookingEnd = " <br> For all bookings telephone 0131 552 7211, enquiries email us at aliens@alienrock.co.uk";

function showBookings(){
    outputDetails.style.display = "block";
    outputDetailsTitle.style.display = "block";
    outputDetailsTitle.innerHTML = "Bookings"


    //KC
    if(currentActivityIndex == 2){
        outputDetails.innerHTML = "Bookings are required for kids club." + bookingEnd;
    }

    //bloc
    else if(currentActivityIndex == 0 && currentAgeIndex > 0){
        outputDetails.innerHTML = "Bookings are required for groups." + bookingEnd;
    }

    //one
    else if(currentActivityIndex == 1 && currentAgeIndex > 0){
        outputDetails.innerHTML = "Booking is advised." + bookingEnd;
    }

}