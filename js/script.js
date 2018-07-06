$(document).ready(function() {
    $(".btn").click(function() {
        let target = $(this)[0].dataset.target;
        $(`#${target}`).fadeIn();
    })

    $(".close-btn").click(function() {
        $(".modal").fadeOut();
    })
})