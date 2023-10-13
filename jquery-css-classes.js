$(document).ready(function(){

    var currentClasses = $('#elementContainer').attr('class');
    console.log('Current classes: ', currentClasses);

    $('#elementContainer').addClass('updatedClass');

    var updatedClasses = $('#elementContainer').attr('class');
    console.log('updated classes: ', updatedClasses);
});