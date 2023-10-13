$(document).ready(function(){

    let headingText = $('#contentContainer h2').text();
    console.log('Heading Text: ', headingText);

    $('#contentContainer h2').text('Mastering jQuery');

    let imageUrl = $('#sampleImage').attr('src');
    console.log('Image URL:', imageUrl);

    $('#sampleImage').attr('src', 'img/sample.jpg');
});