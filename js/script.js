// A $( document ).ready() block.
$( document ).ready(function() {
	$('.btn-huge').click(function(e) {
  		var txt = $(e.target).text();
  		
  		if (txt == "Worker Health, Hygiene, and Training") {
  			var $textAndPic = $('<div></div>');
       		$textAndPic.append('Who\'s this? <br />');
        	$textAndPic.append('<img src="./images/pig.ico" />');
        
        	BootstrapDialog.show({
            	title: 'Guess who that is',
            	message: $textAndPic,
            	buttons: [{
                	label: 'Acky',
                	action: function(dialogRef){
                    	dialogRef.close();
                	}
            	}, 	{
                		label: 'Robert',
                		action: function(dialogRef){
                    		dialogRef.close();
                		}
            	}]
        	});
  		}
	});
});

