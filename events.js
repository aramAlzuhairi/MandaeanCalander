// Move the the particolor element
$.fn.scrollView = function () {
    return this.each(function () {
        $('html, body').animate({
            scrollTop: $(this).offset().top - 250
        }, 1000);
    });
}