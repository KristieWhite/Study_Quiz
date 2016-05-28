
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
		question: "ADAM",
		answer: "A",
		enabled: true,
		asked: 0
	},{
		question: "B",
		answer: "BAKER",
		enabled: true,
		asked: 0
	},{
		question: "BAKER",
		answer: "B",
		enabled: true,
		asked: 0
	},{
		question: "C",
		answer: "CHARLIE",
		enabled: true,
		asked: 0
	},{
		question: "CHARLIE",
		answer: "C",
		enabled: true,
		asked: 0
	},{
		question: "D",
		answer: "DAVID",
		enabled: true,
		asked: 0
	},{
		question: "DAVID",
		answer: "D",
		enabled: true,
		asked: 0
	},{
		question: "E",
		answer: "EASY",
		enabled: true,
		asked: 0
	},{
		question: "EASY",
		answer: "E",
		enabled: true,
		asked: 0
	},{
		question: "F",
		answer: "FRANK",
		enabled: true,
		asked: 0
	},{
		question: "FRANK",
		answer: "F",
		enabled: true,
		asked: 0
	},{
		question: "G",
		answer: "GEORGE",
		enabled: true,
		asked: 0
	},{
		question: "GEORGE",
		answer: "G",
		enabled: true,
		asked: 0
	},{
		question: "H",
		answer: "HENRY",
		enabled: true,
		asked: 0
	},{
		question: "HENRY",
		answer: "H",
		enabled: true,
		asked: 0
	},{
		question: "I",
		answer: "IDA",
		enabled: true,
		asked: 0
	},{
		question: "IDA",
		answer: "I",
		enabled: true,
		asked: 0
	},{
		question: "J",
		answer: "JOHN",
		enabled: true,
		asked: 0
	},{
		question: "JOHN",
		answer: "J",
		enabled: true,
		asked: 0
	},{
		question: "K",
		answer: "KING",
		enabled: true,
		asked: 0
	},{
		question: "KING",
		answer: "K",
		enabled: true,
		asked: 0
	},{
		question: "L",
		answer: "LINCOLN",
		enabled: true,
		asked: 0
	},{
		question: "LINCOLN",
		answer: "L",
		enabled: true,
		asked: 0
	},{
		question: "M",
		answer: "MARY",
		enabled: true,
		asked: 0
	},{
		question: "MARY",
		answer: "M",
		enabled: true,
		asked: 0
	},{
		question: "N",
		answer: "NORA",
		enabled: true,
		asked: 0
	},{
		question: "NORA",
		answer: "N",
		enabled: true,
		asked: 0	
	},{
		question: "O",
		answer: "OCEAN",
		enabled: true,
		asked: 0
	},{
		question: "OCEAN",
		answer: "O",
		enabled: true,
		asked: 0
	},{
		question: "P",
		answer: "PAUL",
		enabled: true,
		asked: 0
	},{
		question: "PAUL",
		answer: "P",
		enabled: true,
		asked: 0
	},{
		question: "Q",
		answer: "QUEEN",
		enabled: true,
		asked: 0
	},{
		question: "QUEEN",
		answer: "Q",
		enabled: true,
		asked: 0
	},{
		question: "R",
		answer: "ROBERT",
		enabled: true,
		asked: 0
	},{
		question: "ROBERT",
		answer: "R",
		enabled: true,
		asked: 0
	},{
		question: "S",
		answer: "SAM",
		enabled: true,
		asked: 0
	},{
		question: "SAM",
		answer: "S",
		enabled: true,
		asked: 0
	},{
		question: "T",
		answer: "TOM",
		enabled: true,
		asked: 0
	},{
		question: "TOM",
		answer: "T",
		enabled: true,
		asked: 0
	},{
		question: "U",
		answer: "UNION",
		enabled: true,
		asked: 0
	},{
		question: "UNION",
		answer: "U",
		enabled: true,
		asked: 0
	},{
		question: "V",
		answer: "VICTOR",
		enabled: true,
		asked: 0
	},{
		question: "VICTOR",
		answer: "V",
		enabled: true,
		asked: 0
	},{
		question: "W",
		answer: "WILLIAM",
		enabled: true,
		asked: 0
	},{
		question: "WILLIAM",
		answer: "W",
		enabled: true,
		asked: 0
	},{
		question: "X",
		answer: "X-RAY",
		enabled: true,
		asked: 0		
	},{
		question: "X-RAY",
		answer: "X",
		enabled: true,
		asked: 0
	},{
		question: "Y",
		answer: "YELLOW",
		enabled: true,
		asked: 0
	},{
		question: "YELLOW",
		answer: "Y",
		enabled: true,
		asked: 0
	},{
		question: "Z",
		answer: "ZEBRA",
		enabled: true,
		asked: 0
	},{
		question: "ZEBRA", 
		answer: "Z",
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

