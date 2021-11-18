var video = document.querySelector("video");
	// video.autostart = "false";

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", VideoPlay);
document.querySelector("#pause").addEventListener("click", VideoPause);
document.querySelector("#slower").addEventListener("click", VideoSlow);
document.querySelector("#faster").addEventListener("click", VideoFast);
document.querySelector("#skip").addEventListener("click", VideoSkip);
document.querySelector("#mute").addEventListener("click", VideoMute);
document.querySelector("#slider").addEventListener("click", slider);
document.querySelector("#vintage").addEventListener("click", vintage);
document.querySelector("#orig").addEventListener("click", origin);
// {
// 	console.log("Play Video")
// });

function VideoPlay(){
	console.log("Play Video");
	video.play();
	document.getElementById("volume").innerHTML = video.volume*100+'%';
}

function VideoPause(){
	console.log("Pause Video");
	video.pause();
}

function VideoSlow(){
	// console.log("Clicked Slow");
	// var speed = video.playbackRate;
	video.playbackRate = video.playbackRate*0.95;
	console.log("new speed is " + video.playbackRate);
}

function VideoFast(){
	// console.log("Clicked Fast");
	// var speed = video.playbackRate;
	video.playbackRate = video.playbackRate*(1/0.95);
	console.log("current speed" + video.playbackRate);
}

function VideoSkip(){
	console.log("Original lcation " + video.currentTime);

	if(video.currentTime+15> video.duration){
		video.currentTime = 0;
		video.play();
		console.log("Going Back to begining");
	}
	else{
		video.currentTime = video.currentTime +15;
	}
	console.log("New Location " + video.currentTime);
}

function VideoMute(){
	console.log("Clicked Mute");
	if(video.muted === true){
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
	}
	else{
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
	}
	
}
function slider(){
	console.log("selected slider")
	var x = document.getElementById("slider");
	video.volume = (x.value)/100;
	console.log("current volume: " + video.volume);
	document.getElementById("volume").innerHTML = video.volume*100+'%';
}

function vintage(){
	console.log("Vintage Style");
	video.classList.add("oldSchool");
}

function origin(){
	console.log("Original Style");
	video.classList.remove("oldSchool");
}
