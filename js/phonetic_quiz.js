
window.onload = function() {

	function quizConstructor(question, answer, enabled, asked) {
		this.question = question;
		this.answer = answer;
		this.enabled = enabled;
		this.asked = asked;
	}

	var quiz = [{
		question: "A",
		answer: "ADAM",
		enabled: true,
		asked: 0
	},{
		question: "B",
		answer: "BAKER",
		enabled: true,
		asked: 0
	},{
		question: "C",
		answer: "CHARLIE",
		enabled: true,
		asked: 0
	},{
		question: "D",
		answer: "DAVID",
		enabled: true,
		asked: 0
	},{
		question: "E",
		answer: "EASY",
		enabled: true,
		asked: 0
	},{
		question: "F",
		answer: "FRANK",
		enabled: true,
		asked: 0
	},{
		question: "G",
		answer: "GEORGE",
		enabled: true,
		asked: 0
	},{
		question: "H",
		answer: "HENRY",
		enabled: true,
		asked: 0
	},{
		question: "I",
		answer: "IDA",
		enabled: true,
		asked: 0
	},{
		question: "J",
		answer: "JOHN",
		enabled: true,
		asked: 0
	},{
		question: "K",
		answer: "KING",
		enabled: true,
		asked: 0
	},{
		question: "L",
		answer: "LINCOLN",
		enabled: true,
		asked: 0
	},{
		question: "M",
		answer: "MARY",
		enabled: true,
		asked: 0
	},{
		question: "N",
		answer: "NORA",
		enabled: true,
		asked: 0
	},{
		question: "O",
		answer: "OCEAN",
		enabled: true,
		asked: 0
	},{
		question: "P",
		answer: "PAUL",
		enabled: true,
		asked: 0
	},{
		question: "Q",
		answer: "QUEEN",
		enabled: true,
		asked: 0
	},{
		question: "R",
		answer: "ROBERT",
		enabled: true,
		asked: 0
	},{
		question: "S",
		answer: "SAM",
		enabled: true,
		asked: 0
	},{
		question: "T",
		answer: "TOM",
		enabled: true,
		asked: 0
	},{
		question: "U",
		answer: "UNION",
		enabled: true,
		asked: 0
	},{
		question: "V",
		answer: "VICTOR",
		enabled: true,
		asked: 0
	},{
		question: "W",
		answer: "WILLIAM",
		enabled: true,
		asked: 0
	},{
		question: "X",
		answer: "X-RAY",
		enabled: true,
		asked: 0		
	},{
		question: "Y",
		answer: "YELLOW",
		enabled: true,
		asked: 0
	},{
		question: "Z",
		answer: "ZEBRA",
		enabled: true,
		asked: 0
	}];

	
	quiz = quiz.map(function(el) {
		return new quizConstructor(el.question, el.answer, el.enabled, el.asked);
	});

	do {
		var randomNum = Math.floor(Math.random() * quiz.length);
	} while (quiz[randomNum].enabled == false || quiz[randomNum].asked ==1);
	
		var question = quiz[randomNum].question + " ";
		var answer = quiz[randomNum].answer + " ";
	
		// document.getElementById("qa").innerHTML += "<p>" + question + answer + "</p>";
		document.getElementById("questionP").innerHTML = question;
		document.getElementById("answerP").innerHTML = answer;
		document.getElementById("answerP").style.visibility = "hidden";

	
}//closes onload function


	function getAnswer(){
		document.getElementById("answerP").style.visibility = "visible";
	}

	// function.getAnswer(getBtn, e) {
	// 	document.getElementById('answerP').style.visibility = 'visible';
	// 	if ( e.keyCode == 13) {
	// 		var getBtn = document.getElementById(getBtn);
	// 		if (getBtn) {
	// 			getBtn.click();
	// 			return false;
	// 		}
	// 	}
	// }
	
	function refreshPage(){
		window.location.reload();
	}

	// function doClick(next, e) {
	// 	if (e.keyCode == 13) {
	// 		var nextQues = document.getElementById(next);
	// 		if (nextQues) {
	// 			nextQues.click();
	// 			return false;
	// 		}
	// 	}
	// }

