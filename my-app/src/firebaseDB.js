var config = {
    apiKey: "AIzaSyACfX0Swr7rHxyRXBF5bR5ZhFlYalO-hXI",
    authDomain: "pill-dispenser-5000.firebaseapp.com",
    databaseURL: "https://enactushacks-1b6b8.firebaseio.com/",
    projectId: "enactushacks-1b6b8",
    storageBucket: "gs://enactushacks-1b6b8.appspot.com",
    messagingSenderId: "1081768023793"
};

firebase.initializeApp(config);

var database = firebase.database();

var ref = database.ref('pills');

ref.on('value', gotData, errData);

function gotData(data){

	var pills = data.val();
	var keys = Object.keys(pills);


	for (var i = 0; i<keys.length; i++){
		var k = keys[i];

		var name = pills[k].name;
		var time = "Time: " + pills[k].time;
		var isConsumed = pills[k].isConsumed;

		if (isConsumed == false){
			isConsumed = "Not Taken";
		} else {
			isConsumed = "Taken";
		};

		var holder = document.getElementById("currentSchedule");
		var newPill = document.createElement("div");
		newPill.classList.add("pill");
    	var newName = document.createElement("h1");
    	newName.classList.add("mainTitle");
    	newName.innerHTML = name;
    	var newTime = document.createElement("h3");
    	newTime.classList.add("subTitle");
    	newTime.innerHTML = time;
    	var newConsumption = document.createElement("h1");
    	newConsumption.classList.add("subTitle");
    	newConsumption.innerHTML = isConsumed;

    	holder.appendChild(newPill);
    	newPill.appendChild(newName);
    	newPill.appendChild(newTime);
    	newPill.appendChild(newConsumption);
	}

}

function errData(err){
  console.log("Error");
  console.log(err);
}

function takeResult(resultSpeech){
	console.log(resultSpeech);

	converted = resultSpeech.toString();

	firstCut = converted.split("pill");

	console.log(firstCut);

	secondCut = firstCut[1].split(" ");

	console.log(secondCut);

	firstName = secondCut[1].toString();
	firstTime = secondCut[3].toString();

	thirdCut = firstCut[2].split(" ");

	secondName = thirdCut[1].toString();
	secondTime = thirdCut[3].toString();

	fourthCut = firstCut[3].split(" ");

	thirdName = fourthCut[1].toString();
	thirdTime = fourthCut[3].toString();


	console.log(firstName, secondName, thirdName);
	console.log(firstTime, secondTime, thirdTime);

	var count = 1;

	var nameForPill = firstName;

	var currentName = firstName;
  	// var timeForPill = request.body.time;

	var newPill = ref.child("pill"+count);

  	newPill.set({
  		isConsumed: false,
  		time: null,
  		name: nameForPill
  	});

  	var timeForPill = firstTime;

  	var existingPill = ref.child("pill"+count);

 	existingPill.set({
 		isConsumed: false,
 		name: currentName,
 		time: timeForPill
 	})

 	count = count+1;

  	if (count==5){
  		count=1;
  	};

  	currentName = null;


  	var nameForPill = secondName;

	var currentName = secondName;
  	// var timeForPill = request.body.time;

	var newPill = ref.child("pill"+count);

  	newPill.set({
  		isConsumed: false,
  		time: null,
  		name: nameForPill
  	});

  	var timeForPill = secondTime;

  	var existingPill = ref.child("pill"+count);

 	existingPill.set({
 		isConsumed: false,
 		name: currentName,
 		time: timeForPill
 	})

 	count = count+1;

  	if (count==5){
  		count=1;
  	};

  	currentName = null;

  	var nameForPill = thirdName;

	var currentName = thirdName;
  	// var timeForPill = request.body.time;

	var newPill = ref.child("pill"+count);

  	newPill.set({
  		isConsumed: false,
  		time: null,
  		name: nameForPill
  	});

  	var timeForPill = thirdTime;

  	var existingPill = ref.child("pill"+count);

 	existingPill.set({
 		isConsumed: false,
 		name: currentName,
 		time: timeForPill
 	})

 	count = count+1;

  	if (count==4){
  		count=1;
  	};

  	currentName = null;

  	location.reload();

}
