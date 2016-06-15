/*jshint browser: true, devel: true, jquery: true*/
$(document).ready(function(){

 
    // Close starting instructions box
    $('#test-start .close-btn').on('click', function(){
        $('.overlay').addClass('off');
        $('.test-instructions').addClass('off');
    });
        
    
    //Initialise bootstrap popover tooltip
     $('[data-toggle="tooltip"]').tooltip({
        placement: 'bottom',
        html: true
     });
    

    //Open/Close tag menu drawer
    $('#drawer-toggle').on('click', function(){
        var drawerPosition = $('#drawer-menu').css('right');
        console.log(drawerPosition);
        
        if (drawerPosition == '-9999px') {   
            $('#drawer-menu').animate({
                right: "+=9999"
            }, 300);
        } else if (drawerPosition == '0px') {
           $('#drawer-menu').animate({
            right: "-=9999"
        });    
        }
    });
    
    $('#drawer-menu .close').on('click', function(){
       $('#drawer-menu').animate({
            right: "-=9999"
        });
    });
    
});

