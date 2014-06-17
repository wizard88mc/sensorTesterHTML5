var recording = false;
var lastTimestamp = 0;

function startOrStopRecordingGyroscope() {
	
	if (recording) {
		recording = false; lastTimestamp = 0;
		window.removeEventListener('deviceorientation', gyroscopeHandler);
	}
	else {
		recording = true;
		window.addEventListener('deviceorientation', gyroscopeHandler, false); 
	}
}

function gyroscopeHandler(eventData) {
	
	if (printData) {
		document.getElementById("alphaGyroscope").innerHTML = eventData.alpha;
		document.getElementById("betaGyroscope").innerHTML = eventData.beta;
		document.getElementById("gammaGyroscope").innerHTML = eventData.gamma;
	}
	if (printInterval) {
		if (lastTimestamp != 0) {
			 document.getElementById("intervalGyroscope").innerHTML = eventData.timeStamp - lastTimestamp;
		}
		lastTimestamp = eventData.timeStamp;
	}
}
