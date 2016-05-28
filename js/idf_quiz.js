
window.onload = function() {

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
		asked: 0
	},{
		question: "401B",
		answer: "ACCIDENT WITH INJURY",
		asked: 0
	},{
		question: "ACCIDENT WITH INJURY",
		answer: "401B",
		asked: 0
	},{
		question: "401C",
		answer: "ACCIDENT (PRIVATE PROPERTY)",
		asked: 0
	},{
		question: "ACCIDENT (PRIVATE PROPERTY)",
		answer: "401C",
		asked: 0
	},{
		question: "401M",
		answer: "ACCIDENT (VEHICLES MOVED)",
		asked: 0
	},{
		question: "ACCIDENT (VEHICLES MOVED)",
		answer: "401M",
		asked: 0
	},{
		question: "402",
		answer: "FIRE",
		asked: 0
	},{
		question: "FIRE",
		answer: "402",
		asked: 0
	},{
		question: "403",
		answer: "PROWLER"
	},{
		question: "PROWLER",
		answer: "403"
	},{
		question: "404",
		answer: "UNKNOWN TROUBLE"
	},{
		question: "UNKNOWN TROUBLE",
		answer: "404"
	},{
		question: "404A",
		answer: "9-1-1 DISCONNECT"
	},{
		question: "9-1-1 DISCONNECT",
		answer: "404A"
	},{
		question: "405",
		answer: "SUICIDE"
	},{
		question: "SUICIDE",
		answer: "405"
	},{
		question: "406",
		answer: "BURGLARY"
	},{
		question: "BURGLARY",
		answer: "406"
	},{
		question: "406A",
		answer: "BURGLARY ALARM"
	},{
		question: "BURGLARY ALARM",
		answer: "406A"
	},{
		question: "406V",
		answer: "AUTO BURGLARY"
	},{
		question: "AUTO BURGLARY",
		answer: "406V"
	},{
		question: "407",
		answer: "ROBBERY"
	},{
		question: "ROBBERY",
		answer: "407"
	},{
		question: "407A",
		answer: "ROBBERY ALARM"
	},{
		question: "ROBBERY ALARM",
		answer: "407A"
	},{
		question: "407B",
		answer: "ROBBERY INVOLVING B-PACK"
	},{
		question: "ROBBERY INVOLVING B-PACK",
		answer: "407B"
	},{
		question: "408",
		answer: "DRUNK"
	},{
		question: "DRUNK",
		answer: "408"
	},{
		question: "409",
		answer: "DRUNK DRIVER"
	},{
		question: "DRUNK DRIVER",
		answer: "409"
	},{
		question: "410",
		answer: "RECKLESS DRIVER"
	},{
		question: "RECKLESS DRIVER",
		answer: "410"
	},{
		question: "411",
		answer: "STOLEN MOTOR VEHICLE"
	},{
		question: "STOLEN MOTOR VEHICLE",
		answer: "411"
	},{
		question: "411A",
		answer: "RECOVERED STOLEN VEHICLE"
	},{
		question: "RECOVERED STOLEN VEHICLE",
		answer: "411A"
	},{
		question: "411B",
		answer: "STOLEN DEPT. BAIT CAR"
	},{
		question: "STOLEN DEPT. BAIT CAR",
		answer: "411B"
	},{
		question: "413",
		answer: "PERSON WITH A GUN"		
	},{
		question: "PERSON WITH A GUN",
		answer: "413"
	},{
		question: "413A",
		answer: "PERSON WITH A KNIFE"
	},{
		question: "PERSON WITH A KNIFE",
		answer: "413A"
	},{
		question: "413B",
		answer: "PERSON WITH OTHER DEADLY WEAPON"
	},{
		question: "PERSON WITH OTHER DEADLY WEAPON", 
		answer: "413B"
	},{
		question: "414", 
		answer: "GRAND LARCENY"
	},{
		question: "GRAND LARCENY", 
		answer: "414"
	},{
		question: "414A", 
		answer: "PETIT LARCENY"
	},{
		question: "PETIT LARCENY", 
		answer: "414A"
	},{
		question: "414C", 
		answer: "LARCENY FROM PERSON"
	},{
		question: "LARCENY FROM PERSON", 
		answer: "414C"
	},{
		question: "415",
		answer: "ASSAULT/BATTERY"		
	},{
		question: "ASSAULT/BATTERY",
		answer: "415"
	},{
		question: "415A",
		answer: "ASSAULT/BATTERY WITH A GUN"
	},{
		question: "ASSAULT/BATTERY WITH A GUN",
		answer: "415A"
	},{
		question: "415B",
		answer: "ASSAULT/BATTERY WITH OTHER DEADLY WEAPON"
	},{
		question: "ASSAULT/BATTERY WITH OTHER DEADLY WEAPON",
		answer: "415B"
	},{
		question: "415C",
		answer: "ASSAULT BATTERY/NEGATIVE INJURY DRIVE-BY SHOOTING"
	},{
		question: "ASSAULT BATTERY/NEGATIVE INJURY DRIVE-BY SHOOTING",
		answer: "415C"
	},{
		question: "416",
		answer: "FIGHT"		
	},{
		question: "FIGHT",
		answer: "416"
	},{
		question: "416A",
		answer: "JUVENILE DISTURBANCE"
	},{
		question: "JUVENILE DISTURBANCE",
		answer: "416A"
	},{
		question: "416B",
		answer: "OTHER DISTURBANCE"
	},{
		question: "OTHER DISTURBANCE",
		answer: "416B"
	},{
		question: "416F",
		answer: "FIREWORKS DISTURBANCE"
	},{
		question: "FIREWORKS DISTURBANCE",
		answer: "416F"
	},{
		question: "417",
		answer: "FAMILY DISTURBANCE"		
	},{
		question: "FAMILY DISTURBANCE",
		answer: "417"
	},{
		question: "418",
		answer: "MISSING PERSON"
	},{
		question: "MISSING PERSON",
		answer: "418"
	},{
		question: "418A",
		answer: "FOUND PERSON"
	},{
		question: "FOUND PERSON",
		answer: "418A"
	},{
		question: "418B",
		answer: "RUNAWAY"
	},{
		question: "RUNAWAY",
		answer: "418B"
	},{
		question: "419",
		answer: "DEAD BODY"		
	},{
		question: "DEAD BODY",
		answer: "419"
	},{
		question: "420",
		answer: "HOMICIDE"
	},{
		question: "HOMICIDE",
		answer: "420"
	},{
		question: "421",
		answer: "SICK OR INJURED PERSON"		
	},{
		question: "SICK OR INJURED PERSON",
		answer: "421"
	},{
		question: "421A",
		answer: "MENTALLY ILL PERSON"
	},{
		question: "MENTALLY ILL PERSON",
		answer: "421A"
	},{
		question: "421C",
		answer: "SICK OR INJURED PERSON WITH COMMUNICABLE DISEASE"
	},{
		question: "SICK OR INJURED PERSON WITH COMMUNICABLE DISEASE",
		answer: "421C"
	},{
		question: "422",
		answer: "INJURED OFFICER"		
	},{
		question: "INJURED OFFICER",
		answer: "422"
	},{
		question: "423",
		answer: "SEE PERSON FOR INFO."
	},{
		question: "SEE PERSON FOR INFO.",
		answer: "423"
	},{
		question: "424",
		answer: "ABUSE/NEGLECT"
	},{
		question: "ABUSE/NEGLECT",
		answer: "424"
	},{
		question: "425",
		answer: "SUSPICIOUS SITUATION"		
	},{
		question: "SUSPICIOUS SITUATION",
		answer: "425"
	},{
		question: "425A",
		answer: "SUSPICIOUS PERSON"
	},{
		question: "SUSPICIOUS PERSON",
		answer: "425A"
	},{
		question: "425B",
		answer: "SUSPICIOUS VEHICLE"
	},{
		question: "SUSPICIOUS VEHICLE",
		answer: "425B"
	},{
		question: "425H",
		answer: "SUSPICIOUS SUBSTANCE"
	},{
		question: "SUSPICIOUS SUBSTANCE",
		answer: "425H"
	},{
		question: "426",
		answer: "SEXUAL ASSAULT"		
	},{
		question: "SEXUAL ASSAULT",
		answer: "426"
	},{
		question: "427",
		answer: "KIDNAP"
	},{
		question: "KIDNAP",
		answer: "427"
	},{
		question: "428",
		answer: "CHILD MOLEST"
	},{
		question: "CHILD MOLEST",
		answer: "428"
	},{
		question: "429",
		answer: "INDECENT EXPOSURE"
	},{
		question: "INDECENT EXPOSURE",
		answer: "429"
	},{
		question: "430",
		answer: "ANIMAL COMPLAINT"
	},{
		question: "ANIMAL COMPLAINT",
		answer: "430"
	},{
		question: "431",
		answer: "MISSING/FOUND PROPERTY"		
	},{
		question: "MISSING/FOUND PROPERTY",
		answer: "431"
	},{
		question: "432",
		answer: "FRAUD"
	},{
		question: "FRAUD",
		answer: "432"
	},{
		question: "433",
		answer: "STOLEN PROPERTY"
	},{
		question: "STOLEN PROPERTY",
		answer: "433"
	},{
		question: "434",
		answer: "ILLEGAL SHOOTING"
	},{
		question: "ILLEGAL SHOOTING",
		answer: "434"
	},{
		question: "437",
		answer: "KEEP THE PEACE"
	},{
		question: "KEEP THE PEACE",
		answer: "437"
	},{
		question: "438",
		answer: "TRAFFIC PROBLEM"		
	},{
		question: "TRAFFIC PROBLEM",
		answer: "438"
	},{
		question: "439",
		answer: "ASSIST CITIZEN"
	},{
		question: "ASSIST CITIZEN",
		answer: "439"
	},{
		question: "440",
		answer: "WANTED SUSPECT"
	},{
		question: "WANTED SUSPECT",
		answer: "440"
	},{
		question: "441",
		answer: "MALICIOUS DESTRUCTION OF PROPERTY"
	},{
		question: "MALICIOUS DESTRUCTION OF PROPERTY",
		answer: "441"
	},{
		question: "442",
		answer: "AIRPLANE EMERGENCY"
	},{
		question: "AIRPLANE EMERGENCY",
		answer: "442"
	},{
		question: "443",
		answer: "ASSIST AN OFFICER"		
	},{
		question: "ASSIST AN OFFICER",
		answer: "443"
	},{
		question: "444",
		answer: "OFFICER NEEDS HELP - EMERGENCY"
	},{
		question: "OFFICER NEEDS HELP - EMERGENCY",
		answer: "444"
	},{
		question: "444A",
		answer: "PANIC ALARM AT METRO FACILITY"
	},{
		question: "PANIC ALARM AT METRO FACILITY",
		answer: "444A"
	},{
		question: "445",
		answer: "EXPLOSIVE DEVICE"
	},{
		question: "EXPLOSIVE DEVICE",
		answer: "445"
	},{
		question: "446",
		answer: "NARCOTICS"
	},{
		question: "NARCOTICS",
		answer: "446"
	},{
		question: "447",
		answer: "CIVIL MATTER"
	},{
		question: "CIVIL MATTER",
		answer: "447"
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

