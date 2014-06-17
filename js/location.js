var recording = false;
var lastTimestamp = 0;

function startOrStopRecordingLocation() {
	if (recording) {
		recording = false; lastTimestamp = 0;
	}
	else {
		recording = true;
		navigator.geolocation.getCurrentPosition(handlerPosition);
	}
}

function handlerPosition(position) {
	if (printData) {
		document.getElementById("latitudeLocation").innerHTML = position.coords.latitude;
		document.getElementById("longitudeLocation").innerHTML = position.coords.longitude;
	}
	if (printInterval) {
		if (lastTimestamp != 0) {
			document.getElementById("intervalLocation").innerHTML = position.timeStamp - lastTimestamp;
		}
		lastTimestamp = position.timeStamp;
	}
}
