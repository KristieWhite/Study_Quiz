

	function quizConstructor(question, answer, enabled, asked) {
		this.question = question;
		this.answer = answer;
		this.enabled = enabled;
		this.asked = asked;
	}

	var quiz = [{
		question: "401",
		answer: "ACCIDENT",
		enabled: true,
		asked: 0
	},{
		question: "ACCIDENT",
		answer: "401",
		enabled: true,
		asked: 0
	},{
		question: "401A",
		answer: "HIT AND RUN",
		enabled: true,
		asked: 0
	},{
		question: "HIT AND RUN",
		answer: "401A",
		enabled: true,
		asked: 0
	},{
		question: "401B",
		answer: "ACCIDENT WITH INJURY",
		enabled: true,
		asked: 0
	},{
		question: "ACCIDENT WITH INJURY",
		answer: "401B",
		enabled: true,
		asked: 0
	},{
		question: "401C",
		answer: "ACCIDENT (PRIVATE PROPERTY)",
		enabled: true,
		asked: 0
	},{
		question: "ACCIDENT (PRIVATE PROPERTY)",
		answer: "401C",
		enabled: true,
		asked: 0
	},{
		question: "401M",
		answer: "ACCIDENT (VEHICLES MOVED)",
		enabled: true,
		asked: 0
	},{
		question: "ACCIDENT (VEHICLES MOVED)",
		answer: "401M",
		enabled: true,
		asked: 0
	},{
		question: "402",
		answer: "FIRE",
		enabled: true,
		asked: 0
	},{
		question: "FIRE",
		answer: "402",
		enabled: true,
		asked: 0
	},{
		question: "403",
		answer: "PROWLER",
		enabled: true,
		asked: 0
	},{
		question: "PROWLER",
		answer: "403",
		enabled: true,
		asked: 0
	},{
		question: "404",
		answer: "UNKNOWN TROUBLE",
		enabled: true,
		asked: 0
	},{
		question: "UNKNOWN TROUBLE",
		answer: "404",
		enabled: true,
		asked: 0
	},{
		question: "404A",
		answer: "9-1-1 DISCONNECT",
		enabled: true,
		asked: 0
	},{
		question: "9-1-1 DISCONNECT",
		answer: "404A",
		enabled: true,
		asked: 0
	},{
		question: "405",
		answer: "SUICIDE",
		enabled: true,
		asked: 0
	},{
		question: "SUICIDE",
		answer: "405",
		enabled: true,
		asked: 0
	},{
		question: "406",
		answer: "BURGLARY",
		enabled: true,
		asked: 0
	},{
		question: "BURGLARY",
		answer: "406",
		enabled: true,
		asked: 0
	},{
		question: "406A",
		answer: "BURGLARY ALARM"
		enabled: true,
		asked: 0
	},{
		question: "BURGLARY ALARM",
		answer: "406A",
		enabled: true,
		asked: 0
	},{
		question: "406V",
		answer: "AUTO BURGLARY",
		enabled: true,
		asked: 0
	},{
		question: "AUTO BURGLARY",
		answer: "406V",
		enabled: true,
		asked: 0
	},{
		question: "407",
		answer: "ROBBERY",
		enabled: true;
		asked: 0
	},{
		question: "ROBBERY",
		answer: "407",
		enabled: true,
		asked: 0
	},{
		question: "407A",
		answer: "ROBBERY ALARM",
		enabled: true,
		asked: 0
	},{
		question: "ROBBERY ALARM",
		answer: "407A",
		enabled: true,
		asked: 0
	},{
		question: "407B",
		answer: "ROBBERY INVOLVING B-PACK",
		enabled: true,
		asked: 0
	},{
		question: "ROBBERY INVOLVING B-PACK",
		answer: "407B",
		enabled: true,
		asked: 0
	},{
		question: "408",
		answer: "DRUNK",
		enabled: true,
		asked: 0
	},{
		question: "DRUNK",
		answer: "408",
		enabled: true,
		asked: 0
	},{
		question: "409",
		answer: "DRUNK DRIVER",
		enabled: true,
		asked: 0
	},{
		question: "DRUNK DRIVER",
		answer: "409",
		enabled: true,
		asked: 0
	},{
		question: "410",
		answer: "RECKLESS DRIVER",
		enabled: true,
		asked: 0
	},{
		question: "RECKLESS DRIVER",
		answer: "410",
		enabled: true,
		asked: 0
	},{
		question: "411",
		answer: "STOLEN MOTOR VEHICLE",
		enabled: true,
		asked: 0
	},{
		question: "STOLEN MOTOR VEHICLE",
		answer: "411",
		enabled: true,
		asked: 0
	},{
		question: "411A",
		answer: "RECOVERED STOLEN VEHICLE",
		enabled: true,
		asked: 0
	},{
		question: "RECOVERED STOLEN VEHICLE",
		answer: "411A",
		enabled: true,
		asked: 0
	},{
		question: "411B",
		answer: "STOLEN DEPT. BAIT CAR",
		enabled: true,
		asked: 0
	},{
		question: "STOLEN DEPT. BAIT CAR",
		answer: "411B",
		enabled: true,
		asked: 0
	},{
		question: "413",
		answer: "PERSON WITH A GUN"	,
		enabled: true,
		asked: 0	
	},{
		question: "PERSON WITH A GUN",
		answer: "413",
		enabled: true,
		asked: 0
	},{
		question: "413A",
		answer: "PERSON WITH A KNIFE",
		enabled: true,
		asked: 0
	},{
		question: "PERSON WITH A KNIFE",
		answer: "413A",
		enabled: true,
		asked: 0
	},{
		question: "413B",
		answer: "PERSON WITH OTHER DEADLY WEAPON",
		enabled: true,
		asked: 0
	},{
		question: "PERSON WITH OTHER DEADLY WEAPON", 
		answer: "413B",
		enabled: true,
		asked: 0
	},{
		question: "414", 
		answer: "GRAND LARCENY",
		enabled: true,
		asked: 0
	},{
		question: "GRAND LARCENY", 
		answer: "414",
		enabled: true,
		asked: 0
	},{
		question: "414A", 
		answer: "PETIT LARCENY",
		enabled: true,
		asked: 0
	},{
		question: "PETIT LARCENY", 
		answer: "414A",
		enabled: true,
		asked: 0
	},{
		question: "414C", 
		answer: "LARCENY FROM PERSON",
		enabled: true,
		asked: 0
	},{
		question: "LARCENY FROM PERSON", 
		answer: "414C",
		enabled: true,
		asked: 0
	},{
		question: "415",
		answer: "ASSAULT/BATTERY",
		enabled: true,
		asked: 0,	
	},{
		question: "ASSAULT/BATTERY",
		answer: "415",
		enabled: true,
		asked: 0
	},{
		question: "415A",
		answer: "ASSAULT/BATTERY WITH A GUN",
		enabled: true,
		asked: 0
	},{
		question: "ASSAULT/BATTERY WITH A GUN",
		answer: "415A",
		enabled: true,
		asked: 0
	},{
		question: "415B",
		answer: "ASSAULT/BATTERY WITH OTHER DEADLY WEAPON",
		enabled: true,
		asked: 0
	},{
		question: "ASSAULT/BATTERY WITH OTHER DEADLY WEAPON",
		answer: "415B",
		enabled: true,
		asked: 0
	},{
		question: "415C",
		answer: "ASSAULT BATTERY/NEGATIVE INJURY DRIVE-BY SHOOTING",
		enabled: true,
		asked: 0
	},{
		question: "ASSAULT BATTERY/NEGATIVE INJURY DRIVE-BY SHOOTING",
		answer: "415C",
		enabled: true,
		asked: 0
	},{
		question: "416",
		answer: "FIGHT",
		enabled: true,
		asked: 0		
	},{
		question: "FIGHT",
		answer: "416",
		enabled: true,
		asked: 0
	},{
		question: "416A",
		answer: "JUVENILE DISTURBANCE",
		enabled: true,
		asked: 0
	},{
		question: "JUVENILE DISTURBANCE",
		answer: "416A",
		enabled: true,
		asked: 0
	},{
		question: "416B",
		answer: "OTHER DISTURBANCE",
		enabled: true,
		asked: 0
	},{
		question: "OTHER DISTURBANCE",
		answer: "416B",
		enabled: true,
		asked: 0
	},{
		question: "416F",
		answer: "FIREWORKS DISTURBANCE",
		enabled: true,
		asked: 0
	},{
		question: "FIREWORKS DISTURBANCE",
		answer: "416F",
		enabled: true,
		asked: 0
	},{
		question: "417",
		answer: "FAMILY DISTURBANCE",
		enabled: true,
		asked: 0		
	},{
		question: "FAMILY DISTURBANCE",
		answer: "417",
		enabled: true,
		asked: 0
	},{
		question: "418",
		answer: "MISSING PERSON",
		enabled: true,
		asked: 0
	},{
		question: "MISSING PERSON",
		answer: "418",
		enabled: true,
		asked: 0
	},{
		question: "418A",
		answer: "FOUND PERSON",
		enabled: true,
		asked: 0
	},{
		question: "FOUND PERSON",
		answer: "418A",
		enabled: true,
		asked: 0
	},{
		question: "418B",
		answer: "RUNAWAY",
		enabled: true,
		asked: 0
	},{
		question: "RUNAWAY",
		answer: "418B",
		enabled: true,
		asked: 0
	},{
		question: "419",
		answer: "DEAD BODY",
		enabled: true,
		asked: 0		
	},{
		question: "DEAD BODY",
		answer: "419",
		enabled: true,
		asked: 0
	},{
		question: "420",
		answer: "HOMICIDE",
		enabled: true,
		asked: 0
	},{
		question: "HOMICIDE",
		answer: "420",
		enabled: true,
		asked: 0
	},{
		question: "421",
		answer: "SICK OR INJURED PERSON",
		enabled: true,
		asked: 0		
	},{
		question: "SICK OR INJURED PERSON",
		answer: "421",
		enabled: true,
		asked: 0
	},{
		question: "421A",
		answer: "MENTALLY ILL PERSON",
		enabled: true,
		asked: 0
	},{
		question: "MENTALLY ILL PERSON",
		answer: "421A",
		enabled: true,
		asked: 0
	},{
		question: "421C",
		answer: "SICK OR INJURED PERSON WITH COMMUNICABLE DISEASE",
		enabled: true,
		asked: 0
	},{
		question: "SICK OR INJURED PERSON WITH COMMUNICABLE DISEASE",
		answer: "421C",
		enabled: true,
		asked: 0
	},{
		question: "422",
		answer: "INJURED OFFICER",
		enabled: true,
		asked: 0		
	},{
		question: "INJURED OFFICER",
		answer: "422",
		enabled: true,
		asked: 0
	},{
		question: "423",
		answer: "SEE PERSON FOR INFO.",
		enabled: true,
		asked: 0
	},{
		question: "SEE PERSON FOR INFO.",
		answer: "423",
		enabled: true,
		asked: 0
	},{
		question: "424",
		answer: "ABUSE/NEGLECT",
		enabled: true,
		asked: 0
	},{
		question: "ABUSE/NEGLECT",
		answer: "424",
		enabled: true,
		asked: 0
	},{
		question: "425",
		answer: "SUSPICIOUS SITUATION",
		enabled: true,
		asked: 0		
	},{
		question: "SUSPICIOUS SITUATION",
		answer: "425",
		enabled: true,
		asked: 0
	},{
		question: "425A",
		answer: "SUSPICIOUS PERSON",
		enabled: true,
		asked: 0
	},{
		question: "SUSPICIOUS PERSON",
		answer: "425A",
		enabled: true,
		asked: 0
	},{
		question: "425B",
		answer: "SUSPICIOUS VEHICLE",
		enabled: true,
		asked: 0
	},{
		question: "SUSPICIOUS VEHICLE",
		answer: "425B",
		enabled: true,
		asked: 0
	},{
		question: "425H",
		answer: "SUSPICIOUS SUBSTANCE",
		enabled: true,
		asked: 0
	},{
		question: "SUSPICIOUS SUBSTANCE",
		answer: "425H",
		enabled: true,
		asked: 0
	},{
		question: "426",
		answer: "SEXUAL ASSAULT",
		enabled: true,
		asked: 0		
	},{
		question: "SEXUAL ASSAULT",
		answer: "426",
		enabled: true,
		asked: 0
	},{
		question: "427",
		answer: "KIDNAP",
		enabled: true,
		asked: 0
	},{
		question: "KIDNAP",
		answer: "427",
		enabled: true,
		asked: 0
	},{
		question: "428",
		answer: "CHILD MOLEST",
		enabled: true,
		asked: 0
	},{
		question: "CHILD MOLEST",
		answer: "428",
		enabled: true,
		asked: 0
	},{
		question: "429",
		answer: "INDECENT EXPOSURE",
		enabled: true,
		asked: 0
	},{
		question: "INDECENT EXPOSURE",
		answer: "429",
		enabled: true,
		asked: 0
	},{
		question: "430",
		answer: "ANIMAL COMPLAINT",
		enabled: true,
		asked: 0
	},{
		question: "ANIMAL COMPLAINT",
		answer: "430",
		enabled: true,
		asked: 0
	},{
		question: "431",
		answer: "MISSING/FOUND PROPERTY",
		enabled: true,
		asked: 0		
	},{
		question: "MISSING/FOUND PROPERTY",
		answer: "431",
		enabled: true,
		asked: 0
	},{
		question: "432",
		answer: "FRAUD",
		enabled: true,
		asked: 0
	},{
		question: "FRAUD",
		answer: "432",
		enabled: true,
		asked: 0
	},{
		question: "433",
		answer: "STOLEN PROPERTY",
		enabled: true,
		asked: 0
	},{
		question: "STOLEN PROPERTY",
		answer: "433",
		enabled: true,
		asked: 0
	},{
		question: "434",
		answer: "ILLEGAL SHOOTING",
		enabled: true,
		asked: 0
	},{
		question: "ILLEGAL SHOOTING",
		answer: "434",
		enabled: true,
		asked: 0
	},{
		question: "437",
		answer: "KEEP THE PEACE",
		enabled: true,
		asked: 0
	},{
		question: "KEEP THE PEACE",
		answer: "437",
		enabled: true,
		asked: 0
	},{
		question: "438",
		answer: "TRAFFIC PROBLEM",
		enabled: true,
		asked: 0		
	},{
		question: "TRAFFIC PROBLEM",
		answer: "438",
		enabled: true,
		asked: 0
	},{
		question: "439",
		answer: "ASSIST CITIZEN",
		enabled: true,
		asked: 0
	},{
		question: "ASSIST CITIZEN",
		answer: "439",
		enabled: true,
		asked: 0
	},{
		question: "440",
		answer: "WANTED SUSPECT",
		enabled: true,
		asked: 0
	},{
		question: "WANTED SUSPECT",
		answer: "440",
		enabled: true,
		asked: 0
	},{
		question: "441",
		answer: "MALICIOUS DESTRUCTION OF PROPERTY",
		enabled: true,
		asked: 0
	},{
		question: "MALICIOUS DESTRUCTION OF PROPERTY",
		answer: "441",
		enabled: true,
		asked: 0
	},{
		question: "442",
		answer: "AIRPLANE EMERGENCY",
		enabled: true,
		asked: 0
	},{
		question: "AIRPLANE EMERGENCY",
		answer: "442",
		enabled: true,
		asked: 0
	},{
		question: "443",
		answer: "ASSIST AN OFFICER",
		enabled: true,
		asked: 0		
	},{
		question: "ASSIST AN OFFICER",
		answer: "443",
		enabled: true,
		asked: 0
	},{
		question: "444",
		answer: "OFFICER NEEDS HELP - EMERGENCY",
		enabled: true,
		asked: 0
	},{
		question: "OFFICER NEEDS HELP - EMERGENCY",
		answer: "444",
		enabled: true,
		asked: 0
	},{
		question: "444A",
		answer: "PANIC ALARM AT METRO FACILITY",
		enabled: true,
		asked: 0
	},{
		question: "PANIC ALARM AT METRO FACILITY",
		answer: "444A",
		enabled: true,
		asked: 0
	},{
		question: "445",
		answer: "EXPLOSIVE DEVICE",
		enabled: true,
		asked: 0
	},{
		question: "EXPLOSIVE DEVICE",
		answer: "445",
		enabled: true,
		asked: 0
	},{
		question: "446",
		answer: "NARCOTICS",
		enabled: true,
		asked: 0
	},{
		question: "NARCOTICS",
		answer: "446",
		enabled: true,
		asked: 0
	},{
		question: "447",
		answer: "CIVIL MATTER",
		enabled: true,
		asked: 0
	},{
		question: "CIVIL MATTER",
		answer: "447",
		enabled: true,
		asked: 0
	},{
		question: "461",
		answer: "NON-CRIMINAL DETAIL",
		enabled: true,
		asked: 0		
	},{
		question: "NON-CRIMINAL DETAIL",
		answer: "461",
		enabled: true,
		asked: 0
	},{
		question: "462",
		answer: "DIRECTED PATROL ACTIVITY",
		enabled: true,
		asked: 0
	},{
		question: "DIRECTED PATROL ACTIVITY",
		answer: "462",
		enabled: true,
		asked: 0
	},{
		question: "463",
		answer: "INVESTIGATION/FOLLOW-UP",
		enabled: true,
		asked: 0
	},{
		question: "INVESTIGATION/FOLLOW-UP",
		answer: "463",
		enabled: true,
		asked: 0
	},{
		question: "465",
		answer: "STAKE OUT",
		enabled: true,
		asked: 0
	},{
		question: "STAKE OUT",
		answer: "465",
		enabled: true,
		asked: 0
	},{
		question: "467",
		answer: "VEHICLE STOP",
		enabled: true,
		asked: 0
	},{
		question: "VEHICLE STOP",
		answer: "467",
		enabled: true,
		asked: 0
	},{
		question: "468",
		answer: "PERSON ON FOOT",
		enabled: true,
		asked: 0
	},{
		question: "PERSON ON FOOT",
		answer: "468",
		enabled: true,
		asked: 0
	},{
		question: "469",
		answer: "BAR/PERIMETER CHECK",
		enabled: true,
		asked: 0
	},{
		question: "BAR/PERIMETER CHECK",
		answer: "469",
		enabled: true,
		asked: 0
	},{
		question: "480",
		answer: "MAINTENANCE",
		enabled: true,
		asked: 0
	},{
		question: "MAINTENANCE",
		answer: "480",
		enabled: true,
		asked: 0
	},{
		question: "481",
		answer: "DETAIL",
		enabled: true,
		asked: 0
	},{
		question: "DETAIL",
		answer: "481",
		enabled: true,
		asked: 0
	},{
		question: "482",
		answer: "LUNCH",
		enabled: true,
		asked: 0
	},{
		question: "LUNCH",
		answer: "482",
		enabled: true,
		asked: 0
	},{
		question: "483",
		answer: "COFFEE",
		enabled: true,
		asked: 0
	},{
		question: "COFFEE",
		answer: "483",
		enabled: true,
		asked: 0
	},{
		question: "484",
		answer: "COURT",
		enabled: true,
		asked: 0
	},{
		question: "COURT",
		answer: "484",
		enabled: true,
		asked: 0
	},{
		question: "485",
		answer: "COMMUNITY CONTRACT",
		enabled: true,
		asked: 0
	},{
		question: "COMMUNITY CONTRACT",
		answer: "485",
		enabled: true,
		asked: 0
	},{
		question: "486",
		answer: "RANGE",
		enabled: true,
		asked: 0
	},{
		question: "RANGE",
		answer: "486",
		enabled: true,
		asked: 0
	},{
		question: "492",
		answer: "TRANSPORT",
		enabled: true,
		asked: 0
	},{
		question: "TRANSPORT",
		answer: "492",
		enabled: true,
		asked: 0
	},{
		question: "494",
		answer: "OUT OF VEHICLE",
		enabled: true,
		asked: 0
	},{
		question: "OUT OF VEHICLE",
		answer: "494",
		enabled: true,
		asked: 0
	},{
		question: "495",
		answer: "MISC. ADMIN. MATTER",
		enabled: true,
		asked: 0
	},{
		question: "MISC. ADMIN. MATTER",
		answer: "495",
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

	
	//USE THE ENTER KEY
	// function doClick(next, e) {
	// 	if (e.keyCode == 13) {
	// 		var nextQues = document.getElementById(next);
	// 		if (nextQues) {
	// 			nextQues.click();
	// 			return false;
	// 		}
	// 	}
	// }

