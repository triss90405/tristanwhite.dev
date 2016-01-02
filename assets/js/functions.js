$( document ).ready(function() {

   // Responsive Navigation
   $('.toggle-menu').on('click', function() {
      $('#navigation').toggleClass('nav-active');
      $(this).toggleClass('cross');
      $(this).toggleClass('toggle-menu-active');
   });

   $('#navigation nav a').on('click', function() {
      $('#navigation').toggleClass('nav-active');
      $('.toggle-menu').removeClass('toggle-menu-active');
   });

   $(window).resize(function(){
      var wWidth = $(this).width();
      if( wWidth > 992) {
         $('#navigation').removeClass('nav-active');
         $('.toggle-menu').removeClass('cross');
         $('.toggle-menu').removeClass('toggle-menu-active');
      }
   });

});
