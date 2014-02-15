
questionNumber = 0;
questions = new Array();

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