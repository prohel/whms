
questionNumber = 0;
questions = new Array();
pollOpen = 'Open';

function storequestion() {
var form = document.getElementById("question");
var JSONObject = {
  "question": form.elements["Question"].value,
  "choicea": form.elements["Answer A"].value, 
  "choiceb": form.elements["Answer B"].value,
  "choicec": form.elements["Answer C"].value,
  "choiced": form.elements["Answer D"].value,
  "choicee": form.elements["Answer E"].value
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
        alert(JSON.parse(xmlhttp.responseText)); //need to print user code and admin code
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
    createNewId.innerHTML = '<button id="next" onclick="savedPopUp(); storequestion()">next</button><button id="finished" onclick="sendToMarco()">I\'m done!</button>'; 

    qAndAId = document.getElementById('questionAndAnswer');
    qAndAId.innerHTML = '<div id ="questionAndAnswer">Insert Question Text Here:<form id="question" onsubmit="return false;"><textarea name="Question" style="height:200px;width:40%"></textarea><br><br>A: <input type="text" name="Answer A"><br>B: <input type="text" name="Answer B"><br>C: <input type="text" name="Answer C"><br>D: <input type="text" name="Answer D"><br>E: <input type="text" name="Answer E"><br></form></div>'


}

function savedPopUp() {
    window.alert('Question Saved.');
}

function createStudentPage() {
    headingElement = document.getElementById('title'); //assign heading element
    headingElement.innerHTML = 'Poll is ' + pollOpen; //change heading element

    eventId = document.getElementById('event');
    eventId.innerHTML = ''; //clear student div

    createNewId = document.getElementById('professor'); 
    createNewId.innerHTML = ''; //clear prof div

    answerOptionId = document.getElementById('event');
    answerOptionId.innerHTML = '<h2>Answer the Question</h2><button name="A" type="button">A</button><br><button name="B" type="button">B</button> <br><button name="C" type="button">C</button> <br><button name="D" type="button">D</button> <br><button name="E" type="button">E</button>';


}

