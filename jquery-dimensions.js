$(document).ready(function(){

    var boxWidth = $('#magicBox').width();
    var boxHeight = $('#magicBox').height();
    $('#elementContainer').append('<p>Box Width: ' + boxWidth + 'px</p>');
    $('#elementContainer').append('<p>Box Height: ' + boxHeight + 'px</p>');

    var boxInnerWidth = $('#magicBox').innerWidth();
    var boxInnerHeight = $('#magicBox').innerHeight();
    $('#elementContainer').append('<p>Box Inner Width: ' + boxInnerWidth + 'px</p>');
    $('#elementContainer').append('<p>Box Inner Height: ' + boxInnerHeight + 'px</p>');

    var boxPosition = $('magicBox').position();
    $('#elementContainer').append('<p>Box Position - Top: ' + boxPosition.top + 'px</p>');
    $('#elementContainer').append('<p>Box Position - Left: ' + boxPosition.left + 'px</p>');




});