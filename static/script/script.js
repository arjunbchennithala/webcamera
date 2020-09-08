//document.write("In script.js file")

var flag = 0;
//document.write("Flag variable initialised to ",flag)
var video = document.querySelector('video')
function frontcam(){
	//document.write("In frontcam function")
	if(navigator.mediaDevices.getUserMedia){
		//document.write("In frontcam function if block")
		navigator.mediaDevices.getUserMedia({video:{facingMode:'user'}})
	.then(function(stream){
		video.srcObject = stream;
	})
	.catch(function(error){
		document.write("Error1 : ",error)
	});
	}
	flag = 1;
	//document.write("Frontcam function flag assigned with value 1")
	document.getElementById('switcher').innerHTML = "Switch Camera";
	//document.write("Inner HTML changed")
}
function backcam(){
	//document.write("In backcam function")
	if(navigator.mediaDevices.getUserMedia){
	//document.write("In backcam function if block")
	navigator.mediaDevices.getUserMedia({video:{facingMode:'environment'}})
	.then(function(stream){
		video.srcObject = stream;
	})
	.catch(function(error){
		document.write("Error2 : ",error)
	});
	}
	flag = 2;
	//document.write("In backcam function flag assigned with value 2")
}

function stopp(){
	//document.write("In stopp function")
   if(flag === 0){
	   //document.write("In stop function if block")
	   frontcam()
   }
   else{
	//document.write("In stopp funtion else block")
	var stream = video.srcObject;
	var tracks = stream.getTracks();
	for(var i=0;i<=tracks.length;i++){
		//document.write("In stopp function else block for loop block")
		var track = tracks[i];
		track.stop();
		//video.srcObject = null;
		if(flag === 1){
			//document.write("In stopp function else block loop block if block")
			backcam()
		}
		else if(flag === 2){
			//document.write("In stopp function else block loop block else if block")
			frontcam()
		}
	}
   }
}
