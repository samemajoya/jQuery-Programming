$(document).ready(function(){

    $('.child').parents('.grandparent').css('background-color', '#e74c3c');

    $('.child').parents().css('border', '2px dashed #ffffff');
});