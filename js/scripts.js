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
    

    //Open & Close tag menu drawer with arrow on page
    $('#drawer-toggle').on('click', function(){
        //var drawerPosition = $('#drawer-menu').css('right');
        
        if ($(this).hasClass('open')){
            $(this).removeClass('open');
            $('#drawer-menu').animate({
            right: "-=9999"
            });
        }
        else {
            $(this).addClass('open');
            $('#drawer-menu').animate({
                right: "+=9999"
            }, 300);                          
        }
        
    });
    
    //Close menu drawer with close button inside drawer
    $('#drawer-menu .close').on('click', function(){
        $('#drawer-menu').animate({
            right: "-=9999"
        });
        $('#drawer-toggle').removeClass('open');
    });
    
    
    //Toggle drawer dropdown menus
    $('.dropdown-toggle').on('click', function(){
        if( $(this).next('.dropdown-content').hasClass('on') ) {
            //Close any open menus
            $('.dropdown-content').removeClass('on');
            $('.dropdown-toggle').removeClass('open');
            //Open the required menu
            $(this).next('.dropdown-content').removeClass('on');
            $(this).removeClass('open');
        } else {
            //Close any open menus
            $('.dropdown-content').removeClass('on');
            //Open the required menu
            $('.dropdown-toggle').removeClass('open');
            $(this).next('.dropdown-content').addClass('on');
            $(this).addClass('open');
        }
        
    });
    
});

