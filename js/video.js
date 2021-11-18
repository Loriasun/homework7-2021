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
	console.log("Clicked Play");
	video.play();
}

function VideoPause(){
	console.log("Clicked Pause");
	video.pause();
}

function VideoSlow(){
	console.log("Clicked Slow");
	// var speed = video.playbackRate;
	video.playbackRate = video.playbackRate*0.95;
	console.log("current speed" + video.playbackRate);
}

function VideoFast(){
	console.log("Clicked Fast");
	// var speed = video.playbackRate;
	video.playbackRate = video.playbackRate*(1/0.95);
	console.log("current speed" + video.playbackRate);
}

function VideoSkip(){
	console.log("Clicked Skip");

	if(video.currentTime+15> video.duration){
		video.currentTime = 0;
		video.play();
	}
	else{
		video.currentTime = video.currentTime +15;
	}
	console.log("Current time " + video.currentTime);
}

function VideoMute(){
	console.log("Clicked Mute");
	video.muted = true;
	
}
function slider(){
	console.log("selected slider")
	var x = document.getElementById("slider");
	video.volume = (x.value)/100;
	console.log("current volume: " + video.volume);
}

function vintage(){
	console.log("Vintage Style");
	video.classList.add("oldSchool");
}

function origin(){
	console.log("Original Style");
	video.classList.remove("oldSchool");
}
