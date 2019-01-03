$(document).ready(function() {
  $("#reviews-carousel").owlCarousel({  	
    nav : true,
    loop:true,
    responsive : {
    // breakpoint from 0 up
    0 : {
        items : 1,        
    },
    // breakpoint from 480 up
    800 : {
        items : 2,        
    }
	}
  });
});
