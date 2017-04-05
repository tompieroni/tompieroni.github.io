
var answers = ["C","A","A","D","A","C","D","A","B","B"], // Answers for questions in order ("Q1", "Q2", "Q3", etc)
    tot = answers.length;

function getCheckedValue( radioName ){
    var radios = document.getElementsByName( radioName ); // Get radio group by-name
    for(var y=0; y<radios.length; y++){
      if(radios[y].checked) {
        return radios[y].value;  // return the checked value
      } 
    }
}

function getScore(){
  var score = 0;
  for (var i=0; i<tot; i++)
    if(getCheckedValue("question"+i)===answers[i]) score += 1; // increment only
  return score;
}

function testComplete() { // Counts how many questions have been answered
    var inputs = document.getElementById("form").elements;
    var count  = 0;
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type == 'radio' && inputs[i].checked) {
            count++;
        }
    }
    return count;
}

function returnScore(){
 	  if(testComplete()<=9){
  		alert("Please answer all questions before submitting"); // force all questions to be answered before revealing score and feedback
  	}
  	else {
  		toggle_visibility('score');  // if all questions have been answered, hide questions, show feedback and score
  		toggle_visibility('quiz');
  		toggle_visibility('feedback');
  		document.getElementById('showScore').innerHTML="Your score is "+ getScore() +"/"+ tot;
  	}
}

//=======================SHOW INPUT ANSWERS==============================================//
function getAnswerQ1() {
    var answers = document.getElementById("form").elements;
    for(var i = 0; i < answers.length; i++){
      if (answers[i].checked && answers[i].name == "question0") {
        inputs = document.querySelector('input[name="question0"]:checked').value
      }
    }
    document.getElementById('showAnswerQ1').innerHTML="You Answered: "+ inputs;
    return inputs;
}

function getAnswerQ2() {
    var answers = document.getElementById("form").elements;
    for(var i = 0; i < answers.length; i++){
      if (answers[i].checked && answers[i].name == "question1") {
        inputs = document.querySelector('input[name="question1"]:checked').value
      }
    }
    document.getElementById('showAnswerQ2').innerHTML="You Answered: "+ inputs;
    return inputs;
}

function getAnswerQ3() {
    var answers = document.getElementById("form").elements;
    for(var i = 0; i < answers.length; i++){
      if (answers[i].checked && answers[i].name == "question2") {
        inputs = document.querySelector('input[name="question2"]:checked').value
      }
    }
    document.getElementById('showAnswerQ3').innerHTML="You Answered: "+ inputs;
    return inputs;
}

function getAnswerQ4() {
    var answers = document.getElementById("form").elements;
    for(var i = 0; i < answers.length; i++){
      if (answers[i].checked && answers[i].name == "question3") {
        inputs = document.querySelector('input[name="question3"]:checked').value
      }
    }
    document.getElementById('showAnswerQ4').innerHTML="You Answered: "+ inputs;
    return inputs;
}

function getAnswerQ5() {
    var answers = document.getElementById("form").elements;
    for(var i = 0; i < answers.length; i++){
      if (answers[i].checked && answers[i].name == "question4") {
        inputs = document.querySelector('input[name="question4"]:checked').value
      }
    }
    document.getElementById('showAnswerQ5').innerHTML="You Answered: "+ inputs;
    return inputs;
}

function getAnswerQ6() {
    var answers = document.getElementById("form").elements;
    for(var i = 0; i < answers.length; i++){
      if (answers[i].checked && answers[i].name == "question5") {
        inputs = document.querySelector('input[name="question5"]:checked').value
      }
    }
    document.getElementById('showAnswerQ6').innerHTML="You Answered: "+ inputs;
    return inputs;
}

function getAnswerQ7() {
    var answers = document.getElementById("form").elements;
    for(var i = 0; i < answers.length; i++){
      if (answers[i].checked && answers[i].name == "question6") {
        inputs = document.querySelector('input[name="question6"]:checked').value
      }
    }
    document.getElementById('showAnswerQ7').innerHTML="You Answered: "+ inputs;
    return inputs;
}

function getAnswerQ8() {
    var answers = document.getElementById("form").elements;
    for(var i = 0; i < answers.length; i++){
      if (answers[i].checked && answers[i].name == "question7") {
        inputs = document.querySelector('input[name="question7"]:checked').value
      }
    }
    document.getElementById('showAnswerQ8').innerHTML="You Answered: "+ inputs;
    return inputs;
}

function getAnswerQ9() {
    var answers = document.getElementById("form").elements;
    for(var i = 0; i < answers.length; i++){
      if (answers[i].checked && answers[i].name == "question8") {
        inputs = document.querySelector('input[name="question8"]:checked').value
      }
    }
    document.getElementById('showAnswerQ9').innerHTML="You Answered: "+ inputs;
    return inputs;
}

function getAnswerQ10() {
    var answers = document.getElementById("form").elements;
    for(var i = 0; i < answers.length; i++){
      if (answers[i].checked && answers[i].name == "question9") {
        inputs = document.querySelector('input[name="question9"]:checked').value
      }
    }
    document.getElementById('showAnswerQ10').innerHTML="You Answered: "+ inputs;
    return inputs;
}

function viewResults(){
  returnScore();
  getAnswerQ1();
  getAnswerQ2();
  getAnswerQ3();
  getAnswerQ4();
  getAnswerQ5();
  getAnswerQ6();
  getAnswerQ7();
  getAnswerQ8();
  getAnswerQ9();
  getAnswerQ10();
  //getAnswer();
}

function reset() {    // call clearRadioGroups
   	clearRadioGroup("question0");
  	clearRadioGroup("question1");
   	clearRadioGroup("question2");
  	clearRadioGroup("question3");
   	clearRadioGroup("question4");
   	clearRadioGroup("question5");
   	clearRadioGroup("question6");
   	clearRadioGroup("question7");
   	clearRadioGroup("question8");
   	clearRadioGroup("question9");
    toggle_visibility('score');
    toggle_visibility('quiz');
  	toggle_visibility('feedback');
}

function clearRadioGroup(GroupName) {
  	var ele = document.getElementsByName(GroupName);
	  for(var i=0;i<ele.length;i++){
      ele[i].checked = false;
    }
}

function toggle_visibility(id) { // toggle div visibility (block or none)
    var e = document.getElementById(id);
    if(e.style.display == 'block') {
        e.style.display = 'none';
    }
    else {
        e.style.display = 'block';
    }
}