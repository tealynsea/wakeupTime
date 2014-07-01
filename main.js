$(document).on('ready', function() {
  


var outerShell = $('<div class="outer-shell"></div>');
var innerShell = $('<div class="inner-shell"></div>'); 
var timeLabels = $('<div class="time-labels"><br>PM<br><br><br><br>AUTO<br></div>');
var clockScreen = $('<div class="clock-screen"></div>');
var clockText = $('<div class ="clock-text">10:00</div>');
var amLablFreq = $('<div class ="am-lable">AM       53  60 90  110  140  170</div>');
var fmLablFreq = $('<div class ="fm-lable">FM 88 92 96 101 104 107<div>');

$('.container').append(outerShell);

outerShell.append(innerShell);
innerShell.append(timeLabels);
timeLabels.append(clockScreen);
clockScreen.append(clockText);
clockText.append(amLablFreq);
amLablFreq.append(fmLablFreq);






});