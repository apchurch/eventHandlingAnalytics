$(document).ready(function(){
	var logTheEvent = function(event){
        console.log(event)
    }
    var logTheTextAreaValue = function(event){
        console.log(event.type, ' ', theTextArea.val())
    }
	var theTextArea = $('#theTextArea')
    theTextArea.on('keydown', logTheEvent)
    theTextArea.on('keyup', logTheEvent)
    theTextArea.on('keypress', logTheEvent)


var last, diff;
$('div').click(function(event) {
  if ( last ) {
    diff = event.timeStamp - last
    $('div').append('time since last event: ' + diff + '');
  } else {
    $('div').append('Click again.');
  }
  last = event.timeStamp;
});



})