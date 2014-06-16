var recording = false;

function startOrStopRecordingGyroscope() {
	
	if (recording) {
		recording = false;
		window.removeEventListener('deviceorientation', gyroscopeHandler);
	}
	else {
		recording = true;
		window.addEventListener('deviceorientation', gyroscopeHandler, false); 
	}
}

function gyroscopeHandler(eventData) {
	
	document.getElementById("alphaGyroscope").innerHTML = eventData.alpha;
	document.getElementById("betaGyroscope").innerHTML = eventData.beta;
	document.getElementById("gammaGyroscope").innerHTML = eventData.gamma;
	document.getElementById("intervalGyroscope").innerHTML = eventData.interval;
	console.log(eventData);
}
