$.noConflict();
jQuery(document).ready(($) => {

    let count = 0;
    $('#arrow').on('click', () => {
        count++;
        if (count % 2 == 1) {
            $('#slideUp').css({ height: '62px' });
            $('#arrow svg path').css({ fill: 'white' });
            $('#arrow').css({ background: 'hsl(214, 17%, 51%)' });
        } else {
            $('#slideUp').css({ height: '0' });
            $('#arrow svg path').css({ fill: '#6E8098' });
            $('#arrow').css({ background: 'hsl(210, 46%, 95%)' });

        }
    })

});