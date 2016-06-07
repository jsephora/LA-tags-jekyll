/*jshint browser: true, devel: true, jquery: true*/
$(document).ready(function(){

 
    // Close starting instructions box
    $('#test-start .close-btn').on('click', function(){
        $('.overlay').addClass('off');
        $('.test-instructions').addClass('off');
    });
        
    
    //Initialise bootstrap popover tooltip
     $('[data-toggle="popover"]').popover({
        placement: 'bottom',
        html: true
     });
    

});

