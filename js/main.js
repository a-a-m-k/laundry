/**
 * Water ripple effect.
 * Original code (Java) by Neil Wallis 
 * @link http://www.neilwallis.com/java/water.html
 * 
 * @author Sergey Chikuyonok (serge.che@gmail.com)
 * @link http://chikuyonok.ru
 */
$(document).ready(function() {
    try {
        $('body').ripples({
            resolution: 512,
            dropRadius: 20, //px
            perturbance: 0.04,
        });
        $('main').ripples({
            resolution: 128,
            dropRadius: 10, //px
            perturbance: 0.04,
        });
    }
    catch (e) {
        $('.error').show().text(e);
    }

    $('.disable').show().on('click', function() {
        $('body, main').ripples('destroy');
        $(this).hide();
    });

    // Automatic drops
    setInterval(function() {
        var $el = $('main');
        var x = Math.random() * $el.outerWidth();
        var y = Math.random() * $el.outerHeight();
        var dropRadius = 20;
        var strength = 0.04 + Math.random() * 0.04;
        
        $el.ripples('drop', x, y, dropRadius, strength);
    }, 400);
});