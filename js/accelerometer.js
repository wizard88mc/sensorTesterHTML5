var recording = false;

function startOrStopRecordingAccelerometer() {
	if (recording) {
		recording = false;
		window.removeEventListener('devicemotion', accelerometerHandler);
	}
	else {
		recording = true;
		window.addEventListener('devicemotion', accelerometerHandler, false);
	}
}

function accelerometerHandler(eventData) {
	
	var acceleration = eventData.accelerationIncludingGravity;
	document.getElementById("xAcceleration").innerHTML = acceleration.x;
	document.getElementById("yAcceleration").innerHTML = acceleration.y;
	document.getElementById("zAcceleration").innerHTML = acceleration.z;
	document.getElementById("intervalAcceleration").innerHTML = eventData.interval;
}
