//javascript function that decides if poll is open

pollOpen = 'Open';

function createPollPage() {
    headingElement = document.getElementById('title'); //assign heading element
    headingElement.innerHTML = 'Create A Poll'; //change heading element

    eventId = document.getElementById('event');
    eventId.innerHTML = ''; //clear student div

    createNewId = document.getElementById('professor');//clear prof div and put in buttons
    createNewId.innerHTML = '<button id="next" onclick="storequestion()">next</button><button id="finished" onclick="">I\'m done!</button>'; 

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
    answerOptionId.innerHTML = '<h2>Answer the Question</h2><button name="A" type="button">A</button><br><button name="B" type="button">B</button> <br><button name="C" type="button">C</button> <br><button name="D" type="button">D</button> <br><button name="E" type="button">E</button>';


}
