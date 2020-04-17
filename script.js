$(document).ready(function() {
    $('.menu-toggle').on('click', function() {
        $('.nav').toggleClass('showing');
        $('.nav ul').toggleClass('showing');
    })
})

//the link above is jquery. Remember to add Jquery cdn to your index.html before using it