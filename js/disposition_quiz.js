
// window.onload = function() {

	function quizConstructor(question, answer, enabled, asked) {
		this.question = question;
		this.answer = answer;
		this.enabled = enabled;
		this.asked = asked;
	}

	var quiz = [{
		question: "A",
		answer: "ARRESTED",
		enabled: true,
		asked: 0
	},{
		question: "ARRESTED",
		answer: "A",
		enabled: true,
		asked: 0
	},{
		question: "B",
		answer: "CITATION ISSUED",
		enabled: true,
		asked: 0
	},{
		question: "CITATION ISSUED",
		answer: "B",
		enabled: true,
		asked: 0
	},{
		question: "C",
		answer: "INCDT./ CRIME REPORT (PRIMARY)",
		enabled: true,
		asked: 0
	},{
		question: "INCDT./ CRIME REPORT (PRIMARY)",
		answer: "C",
		enabled: true,
		asked: 0
	},{
		question: "D",
		answer: "INCDT./ CRIME REPORT (PRIMARY) ARREST MADE",
		enabled: true,
		asked: 0
	},{
		question: "INCDT./ CRIME REPORT (PRIMARY) ARREST MADE",
		answer: "D",
		enabled: true,
		asked: 0
	},{
		question: "E",
		answer: "INCDT./ CRIME REPORT (PRIMARY) CITATION ISSUED",
		enabled: true,
		asked: 0
	},{
		question: "INCDT./ CRIME REPORT (PRIMARY) CITATION ISSUED",
		answer: "E",
		enabled: true,
		asked: 0
	},{
		question: "F",
		answer: "UNFOUNDED",
		enabled: true,
		asked: 0
	},{
		question: "UNFOUNDED",
		answer: "F",
		enabled: true,
		asked: 0
	},{
		question: "G",
		answer: "DISPATCH CANCELLED",
		enabled: true,
		asked: 0
	},{
		question: "DISPATCH CANCELLED",
		answer: "G",
		enabled: true,
		asked: 0
	},{
		question: "H",
		answer: "GONE ON ARRIVAL",
		enabled: true,
		asked: 0
	},{
		question: "GONE ON ARRIVAL",
		answer: "H",
		enabled: true,
		asked: 0
	},{
		question: "I",
		answer: "UNABLE TO LOCATE",
		enabled: true,
		asked: 0
	},{
		question: "UNABLE TO LOCATE",
		answer: "I",
		enabled: true,
		asked: 0
	},{
		question: "J",
		answer: "SETTLED AT SCENE",
		enabled: true,
		asked: 0
	},{
		question: "SETTLED AT SCENE",
		answer: "J",
		enabled: true,
		asked: 0
	},{
		question: "K",
		answer: "REPORT TAKEN OTHER THAN INCDT./ CRIME REPORT (DO NOT USE IF AN INCDT./ CRIME REPORT WAS TAKEN)",
		enabled: true,
		asked: 0
	},{
		question: "REPORT TAKEN OTHER THAN INCDT./ CRIME REPORT (DO NOT USE IF AN INCDT./ CRIME REPORT WAS TAKEN)",
		answer: "K",
		enabled: true,
		asked: 0
	},{
		question: "L",
		answer: "HANDLED BY OTHER JURISDICTION",
		enabled: true,
		asked: 0
	},{
		question: "HANDLED BY OTHER JURISDICTION",
		answer: "L",
		enabled: true,
		asked: 0
	},{
		question: "M",
		answer: "WARNING AND/OR SUBJECT ADVISED",
		enabled: true,
		asked: 0
	},{
		question: "WARNING AND/OR SUBJECT ADVISED",
		answer: "M",
		enabled: true,
		asked: 0
	},{
		question: "O",
		answer: "FALSE ALARM",
		enabled: true,
		asked: 0
	},{
		question: "FALSE ALARM",
		answer: "O",
		enabled: true,
		asked: 0
	},{
		question: "P",
		answer: "REFUSED TO SIGN COMPLAINT",
		enabled: true,
		asked: 0
	},{
		question: "REFUSED TO SIGN COMPLAINT",
		answer: "P",
		enabled: true,
		asked: 0
	},{
		question: "Q",
		answer: "HANDLED BY UNIT OTHER THAN PATROL (INDICATE SPECIFIC UNIT)",
		enabled: true,
		asked: 0
	},{
		question: "HANDLED BY UNIT OTHER THAN PATROL (INDICATE SPECIFIC UNIT)",
		answer: "Q",
		enabled: true,
		asked: 0
	},{
		question: "R",
		answer: "RADIO BROADCAST ONLY",
		enabled: true,
		asked: 0
	},{
		question: "RADIO BROADCAST ONLY",
		answer: "R",
		enabled: true,
		asked: 0
	},{
		question: "S",
		answer: "NON-CRIMINAL DETAIL COMPLETE",
		enabled: true,
		asked: 0
	},{
		question: "NON-CRIMINAL DETAIL COMPLETE",
		answer: "S",
		enabled: true,
		asked: 0
	},{
		question: "T",
		answer: "REPORT TAKEN UNDER PREVIOUS EVENT #",
		enabled: true,
		asked: 0
	},{
		question: "REPORT TAKEN UNDER PREVIOUS EVENT #",
		answer: "T",
		enabled: true,
		asked: 0
	},{
		question: "Z",
		answer: "INSURANCE REPORT (CAD EVENT ONLY)",
		enabled: true,
		asked: 0
	},{
		question: "INSURANCE REPORT (CAD EVENT ONLY)",
		answer: "Z",
		enabled: true,
		asked: 0
	},{
		question: "CODE 3",
		answer: "RESPOND WITH LIGHTS AND SIREN",
		enabled: true,
		asked: 0
	},{
		question: "RESPOND WITH LIGHTS AND SIREN",
		answer: "CODE 3",
		enabled: true,
		asked: 0
	},{
		question: "CODE 4",
		answer: "TO BE UTILIZED WHEN THERE IS NO LONGER AN EXISTING EMERGENCY AND WHEN NECESSARY TO CLEAR THE CHANNEL",
		enabled: true,
		asked: 0
	},{
		question: "TO BE UTILIZED WHEN THERE IS NO LONGER AN EXISTING EMERGENCY AND WHEN NECESSARY TO CLEAR THE CHANNEL",
		answer: "CODE 4",
		enabled: true,
		asked: 0
	},{
		question: "CODE 5",
		answer: "REQUEST FOR CAMERA IN JAIL TO BE ACTIVATED",
		enabled: true,
		asked: 0		
	},{
		question: "REQUEST FOR CAMERA IN JAIL TO BE ACTIVATED",
		answer: "CODE 5",
		enabled: true,
		asked: 0
	},{
		question: "CODE RED",
		answer: "EMERGENCY EXISTS - EMERGENCY TRAFFIC ONLY",
		enabled: true,
		asked: 0
	},{
		question: "EMERGENCY EXISTS - EMERGENCY TRAFFIC ONLY",
		answer: "CODE RED",
		enabled: true,
		asked: 0
	},{
		question: "CODE 30",
		answer: "DOES NOT CONFORM TO PROPER PROCEDURES",
		enabled: true,
		asked: 0
	},{
		question: "DOES NOT CONFORM TO PROPER PROCEDURES", 
		answer: "CODE 30",
		enabled: true,
		asked: 0					
	}];

	
	//GENERATE QUESTION
	quiz = quiz.map(function(el) {
		return new quizConstructor(el.question, el.answer, el.enabled, el.asked);
	});

		do {
			var randomNum = Math.floor(Math.random() * quiz.length);
		} while (quiz[randomNum].enabled == false || quiz[randomNum].asked ==1);

		var question = quiz[randomNum].question;
		var answer = quiz[randomNum].answer;

		document.getElementById("questionP").innerHTML = question;
		document.getElementById("answerP").innerHTML = answer;
		document.getElementById("answerP").style.visibility = "hidden";
	
	//SHOW ANSWER
	function getAnswer() {
		document.getElementById("answerP").style.visibility = "visible";
	}

	//NEXT QUESTION
	function nextQuestion(quizConstructor){

		do {
			var randomNum = Math.floor(Math.random() * quiz.length);
		} while (quiz[randomNum].enabled == false || quiz[randomNum].asked ==1);

		var question = quiz[randomNum].question;
		var answer = quiz[randomNum].answer;

		document.getElementById("questionP").innerHTML = question;
		document.getElementById("answerP").innerHTML = answer;
		document.getElementById("answerP").style.visibility = "hidden";
		// window.location.reload();
	}

