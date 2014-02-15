
questionNumber = 0;
questions = new Array();
pollOpen = 'Open';

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
};

function sendToMarco() {
storequestion();
for(int i = 1; i <= questionNumber; i++)
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
return false;
};

function createPollPage() {
    headingElement = document.getElementById('title'); //assign heading element
    headingElement.innerHTML = 'Create A Poll'; //change heading element

    eventId = document.getElementById('event');
    eventId.innerHTML = ''; //clear student div

    createNewId = document.getElementById('professor');
    createNewId.innerHTML = ''; //clear prof div

    questionTextBoxId = document.getElementById("questionTextBox");
    questionTextBoxId.innerHTML = 'Insert Question Text Here:<form><textarea name="Question" style="height:200px;width:40%"></textarea><br><br>';

    answerTextBoxId = document.getElementById("answerTextBox");
    answerTextBoxId.innerHTML = 'A: <input type="text" name="Answer A"><br>B: <input type="text" name="Answer B"><br>C: <input type="text" name="Answer C"><br>D: <input type="text" name="Answer D"><br>E: <input type="text" name="Answer E"><br></form>'; 
}

function createStudentPage() {
    headingElement = document.getElementById('title'); //assign heading element
    headingElement.innerHTML = 'Poll is ' + pollOpen; //change heading element

    eventId = document.getElementById('event');
    eventId.innerHTML = ''; //clear student div

    createNewId = document.getElementById('professor');
    createNewId.innerHTML = ''; //clear prof div

    answerOptionId = document.getElementById('event');
    answerOptionId.innerHTML = '<h2>Answer the Question</h2><button name="A" type="button">A</button><br><button name="B" type="button">B</button> <br><button name="C" type="button">C</button> <br><button name="D" type="button">D</button> <br><button name="E" type="button">E</button> <br><button onclick="storequestion()">next</button><button onclick="">I\'m done!</button>';


}

