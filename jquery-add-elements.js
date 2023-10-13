// jquery-add-elements.js

$(document).ready(function() {
    // Adding Elements with jQuery
  
    // Adding a new list item
    $('#dynamicList').append('<li>New Item</li>');
  
    // Adding multiple list items
    var newItemArray = ['Item 3', 'Item 4', 'Item 5'];
    $.each(newItemArray, function(index, value) {
      $('#dynamicList').append('<li>' + value + '</li>');
    });
  
    // Adding a heading dynamically
    $('#elementContainer').prepend('<h3>Added Heading</h3>');
  });
  