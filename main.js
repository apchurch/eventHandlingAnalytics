$(document).ready(function(){
	// var logTheEvent = function(event){
 //        console.log(event)
 //    }
 //    var logTheTextAreaValue = function(event){
 //        console.log(event.type, ' ', theTextArea.val())
 //    }
	// var theTextArea = $('#theTextArea')
 //    theTextArea.on('keydown', logTheEvent)
 //    theTextArea.on('keyup', logTheEvent)
 //    theTextArea.on('keypress', logTheEvent)

// 	var last, diff
// 	$('div').click(function(event) {
//   if ( last ) {
//     diff = event.timeStamp - last
//     $('div').append('time since last event: ' + diff + '')
//   } else {
//     $('div').append('Click again.')
//   }
//   last = event.timeStamp
// })
	// var start
	// Date.getTime = function(){
	// 	for(i = 0; i < Date; i++)
	// 	start = Date.getTime()
	// 	$(window).unload(function() {
 //     	 	end = Date.getTime()
 //      	$.ajax({ 
        	
 //        	data: {'timeSpent': end - start}
 //      })
 //   })
	// }

	
	var vowels = ['a', 'e', 'i', 'o','u']
	$('textarea').on('keyup', function(){
		
		console.log(this)
				
		})

			


    // var start
    // Date.getTime = function(){
    // 	for(i = 0; i < Date; i++)
    // 		start = Date.getTime()
    // 	$(window).unload(function(){
    // 		end = Date.getTime()
    // 		$.ajax({
    // 			data: {'timeSpent': end - start}
    		
    // 		})
    // 	}) 
    // }   
    $('#facebook').on('click', function(){
    	console.log('facebook link was clicked')
    })
    $('#amazon').on('click', function(){
    	console.log('amazon link was clicked')
    })
	$('#google').on('click', function(){
    	console.log('google link was clicked')
    })

	$('.railRoad').hover(function(){
		console.log('mouse is hovering over railRoad image')
	})
	$('textarea').hover(function(){
		console.log('mouse is hovering over text area')
	})
	$('#facebook').hover(function(){
		console.log('mouse is hovering over facebook link')
	})
	$('#amazon').hover(function(){
		console.log('mouse is hovering over amazon link')
	})
	$('#google').hover(function(){
		console.log('mouse is hovering over google link')
	})
	$('.sky').hover(function(){
		console.log('mouse is hovering over sky image')
	})
	$('.number6').hover(function(){
		console.log('mouse is hovering over number 6 image')
	})
	$('.stockPhoto').hover(function(){
		console.log('mouse is hovering over stock photo image')
	})
	$('h1').hover(function(){
		console.log('mouse is hovering over the information text')
	})
	$('#textBlock').hover(function(){
		console.log('mouse is hovering over text block 1')
	})
	$('#textBlock2').hover(function(){
		console.log('mouse is hovering over text block 2')
	})
	$('.railRoad').mouseover(function () {
    var $this = $(this);
    var count = parseInt($this.data('count'), 10) + 1;
    $this.data('count', count);
    console.log($this.data('count'));
});

		
	
})






