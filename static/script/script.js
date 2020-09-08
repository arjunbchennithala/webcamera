
var flag = 0;
var video = document.querySelector('#video1')
//var video2 = document.querySelector('#video2')
//var param1 = {video:{facingMode:'environment'}}
//var param2 = {video:{facingMode:'user'}}
function stopp(){
   if(flag === 0){
	   frontcam()
   }
   else{
	var stream = video.srcObject;
	var tracks = stream.getTracks();
	for(var i=0;i<=tracks.length;i++){
		var track = tracks[i];
		track.stop();
		//video.srcObject = null;
		if(flag === 1){
			backcam()
		}
		else if(flag === 2){
			frontcam()
		}
	}
   }
}
function backcam(){
	if(navigator.mediaDevices.getUserMedia){
	navigator.mediaDevices.getUserMedia({video:{facingMode:'environment'}})
	.then(function(stream){
		video.srcObject = stream;
	})
	.catch(function(error){
		console.log("Error1")
	});
	}
	flag = 2;
}
function frontcam(){
	if(navigator.mediaDevices.getUserMedia){
		navigator.mediaDevices.getUserMedia({video:{facingMode:'user'}})
	.then(function(stream){
		video.srcObject = stream;
	})
	.catch(function(error){
		console.log("Error2")
	});
	}
	flag = 1;
	document.getElementById('switcher').innerHTML = "Switch Camera";
}
