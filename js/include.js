
questionNumber = 0;
questions = new Array();
pollOpen = 'Open';
answerACount = 0;
answerBCount = 0;
answerCCount = 0;
answerDCount = 0;
answerECount = 0;

function storequestion() {
var form = document.getElementById("question");
var JSONObject = {
  "question": form.elements["Question"].value,
  "choice a": form.elements["Answer A"].value, 
  "choice b": form.elements["Answer B"].value,
  "choice c": form.elements["Answer C"].value,
  "choice d": form.elements["Answer D"].value,
  "choice e": form.elements["Answer E"].value
};
questions[questionNumber] = JSONObject;
questionNumber+=1;
form.reset();
}

function sendToMarco() {
storequestion();
var JSONObject = {
  "command":"ADDPOLL",
  "count":questionNumber,
  "questions":questions
};
var xmlhttp;
  xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById('').innerHTML=JSON.parse(xmlhttp.responseText); //need to print user code and admin code
    }
  }
  xmlhttp.open("POST","UpdateDB.php?REQUEST=" + JSONObject,true);
  xmlhttp.send();
};

function createPollPage() {
    headingElement = document.getElementById('title'); //assign heading element
    headingElement.innerHTML = 'Create A Poll'; //change heading element

    eventId = document.getElementById('event');
    eventId.innerHTML = ''; //clear student div

    createNewId = document.getElementById('professor');//clear prof div and put in buttons
    createNewId.innerHTML = '<button id="next" onclick="savedPopUp(); storequestion()">next</button><button id="finished" onclick="">I\'m done!</button>'; 

    qAndAId = document.getElementById('questionAndAnswer');
    qAndAId.innerHTML = '<div id ="questionAndAnswer"><form id="question" onsubmit="return false;"><br><textarea name="Question" style="height:200px;width:80%"></textarea><br>Insert Question Text Above<br><br>A: <input type="text" name="Answer A"><br>B: <input type="text" name="Answer B"><br>C: <input type="text" name="Answer C"><br>D: <input type="text" name="Answer D"><br>E: <input type="text" name="Answer E"><br><br></form></div>'


}

function savedPopUp() {
    window.alert('Question Saved.');
}

// function flip() {
//     $("#flipbox").flip({
//     direction:'tb'
// })
// }

function addOneToA() {
    answerACount++;
} //call func when student presses A

function addOneToB() {
    answerBCount++;
} //call func when student presses B

function addOneToC() {
    answerCCount++;
} //call func when student presses C

function addOneToD() {
    answerDCount++;
} //call func when student presses D

function addOneToE() {
    answerECount++;
} //call func when student presses E


/**
*
*Student Page Functions
*/

function createStudentPage() {

    eventID = document.getElementById('event_id').value; //set to first word of box

    if (eventID.charAt(0) == 'U') { //take them to the student page
        headingElement = document.getElementById('title'); //assign heading element
        headingElement.innerHTML = 'Poll is ' + pollOpen; //change heading element

        eventId = document.getElementById('event');
        eventId.innerHTML = ''; //clear student div

        createNewId = document.getElementById('professor'); 
        createNewId.innerHTML = ''; //clear prof div

        answerOptionId = document.getElementById('event');
        answerOptionId.innerHTML = '<h2>Answer the Question</h2><button name="A" type="button">A</button><br><button name="B" type="button">B</button> <br><button name="C" type="button">C</button> <br><button name="D" type="button">D</button> <br><button name="E" type="button">E</button>';
    }

    else if (eventID.charAt(0) == 'A') { //take to admin view page
        headingElement = document.getElementById('title'); //assign heading element
        headingElement.innerHTML = 'Question #' + ++questionNumber; //change heading element
    
        eventId = document.getElementById('event');
        eventId.innerHTML = ''; //clear student div

        createNewId = document.getElementById('professor'); 
        createNewId.innerHTML = ''; //clear prof div

        questionDisplayId = document.getElementById('event');
        questionDisplayId.innerHTML = '<h3>this is the question that should appear. then students select multiple choice answers. where have you been?</h3><br><button name="resultsButton" type="button" onclick="showResults()" align="center">Show Results.</button>';
    }

    else {
        window.alert('Not a valid code. Please try again.');
    }
  }

   function showResults() {
        headingElement = document.getElementById('title'); //assign heading element
        headingElement.innerHTML = 'Here Are the Results'; //change heading element

        eventId = document.getElementById('event');
        eventId.innerHTML = ''; //clear student div

        createNewId = document.getElementById('professor'); 
        createNewId.innerHTML = ''; //clear prof div
   }

   function tabulateData() {
      data = new Array();
      data[0] = answerACount;
      data[1] = answerBCount;
      data[2] = answerCCount;
      data[3] = answerDCount;
      data[4] = answerECount;
   }



