
$(document).ready(function() {
    
    $('#animate-btn').click(function() {
      $('#animated-element').animate({
        opacity: 0.3,
        width: '50%',
        fontSize: '24px'
      }, 1000); 
    });
  });
  