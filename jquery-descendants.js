$(document).ready(function(){
    $('.ancestor').children('.descendant').css('background-color', '#3498db');

    $('.ancestor').find('*').css('border', '2px dashed #ffffff');
});