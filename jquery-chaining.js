// jquery-chaining.js

$(document).ready(function() {
    // Crafting Seamless Web Interactions - A Live Demo
    $('.box').hover(function() {
      // Chaining fadeIn, animate, and css methods for a fluid interaction
      $(this).fadeIn(500).animate({
        width: '+=50px',
        height: '+=50px'
      }, 500).css('background-color', '#e74c3c');
    }, function() {
      // Reversing the chain on hover out
      $(this).fadeOut(500).animate({
        width: '-=50px',
        height: '-=50px'
      }, 500).css('background-color', '#3498db');
    });
  });
  