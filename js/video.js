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
	console.log("video duration" + video.duration);
	// var i;
	// while( video.currentTime+15 < video.ended){
	// 	video.currentTime = video.currentTime+15;
	// 	console.log("Current time " + video.currentTime);
	// 	return;
	// }

	video.currentTime = video.currentTime+15;
	if(video.currentTime > video.duration){
		video.currentTime = 0;
		// video.play();
	}
	console.log("Current time " + video.currentTime);
	video.play();
}