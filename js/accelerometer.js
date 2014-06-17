var recording = false;
var lastTimestamp = 0;

function startOrStopRecordingAccelerometer() {
	if (recording) {
		recording = false;
		lastTimestamp = 0;
		window.removeEventListener('devicemotion', accelerometerHandler);
	}
	else {
		recording = true;
		window.addEventListener('devicemotion', accelerometerHandler, false);
	}
}

function accelerometerHandler(eventData) {
	
	if (printData) {
		document.getElementById("xAcceleration").innerHTML = eventData.accelerationIncludingGravity.x;
		document.getElementById("yAcceleration").innerHTML = eventData.accelerationIncludingGravity.y;
		document.getElementById("zAcceleration").innerHTML = eventData.accelerationIncludingGravity.z;
	}
	if (printInterval) {
		if (lastTimestamp != 0) {
			document.getElementById("intervalAcceleration").innerHTML = eventData.timeStamp - lastTimestamp;
		}
		lastTimestamp = eventData.timeStamp;
	}
}
