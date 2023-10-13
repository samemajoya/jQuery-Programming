$(document).ready(function(){
    $('#sampleText').text('Welcome to the jquery magic show!');

    $('#contentContainer').append('<p>New content added dynamically! </p>');

    $('#contentContainer h2').html('<em>Updated</em> Heading');

    $('#sampleImage').attr('alt', 'Updated Image');
});