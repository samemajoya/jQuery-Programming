// jquery-remove-elements.js

$(document).ready(function() {
    // Removing Elements with jQuery
  
    // Removing the last list item
    $('#dynamicList li:last-child').remove();
  
    // Removing specific item by text
    $('#dynamicList li:contains("Item 2")').remove();
  
    // Removing all list items
    // Uncomment the line below to remove all list items
    // $('#dynamicList').empty();
  });
  