var IRKIT_API = 'http://192.168.10.4/messages';


var DATA_TV_ONOFF = {"format":"raw","freq":38,"data":[640,4107,640,4107,640,4107,640,1738,640,1738,640,1738,640,4107,640,1738,640,1738,640,4107,640,1738,640,1738,640,1738,640,1738,640,1738,640,1738,640,52381,640,4107,640,4107,640,4107,640,1738,640,1738,640,1738,640,4107,640,1738,640,1738,640,4107,640,1738,640,1738,640,1738,640,1738,640,1738,640,1738,640]}

var DATA_TV_CHIDEJI = {"format":"raw","freq":38,"data":[5408,4107,640,4107,640,1738,640,1738,640,1738,640,4107,686,1679,640,4107,686,1679,640,4107,640,4107,640,1738,640,4107,640,4107,640,4107,640,41171,686,4107,640,4107,640,4107,640,1679,640,1679,640,1679,640,4107,640,1738,686,4107,640,1738,640,4107,686,4107,686,1738,686,4107,640,4107,640,4107,640,41171,640,4107,686,4107,686,4107,686,1738,640,1738,640,1738,640,4107,640,1738,686,4107,640,1738,640,4107,640,4107,640,1738,640,4107,640,4107,640,4107,640,41171,640,4107,640,4107,640,4107,640,1738,640,1738,640,1738,640,4107,640,1738,640,4107,640,1738,640,4107,640,4107,640,1738,640,4107,686,4107,686,4107,686,41171,640,4107,686,4107,686,4107,686,1738,640,1738,640,1738,640,4107,640,1738,640,4107,640,1738,686,4107,640,4107,640,1738,640,4107,640,4107,640,4107,640]}

var DATA_TV_CH_PLUS = {"format":"raw","freq":38,"data":[640,4107,640,4107,640,4107,640,1738,640,1738,640,1738,640,4107,663,1738,663,1738,663,4107,663,1738,663,4107,663,1738,710,1738,640,1738,640,1738,640,50610,663,4107,663,4107,663,4107,663,1738,663,1738,663,1738,663,4107,640,1738,640,1738,640,4107,640,1738,640,4107,640,1738,640,1738,640,1738,640,1738,640]}

var DATA_TV_CH_MINUS = {"format":"raw","freq":38,"data":[686,4107,686,4107,686,4107,686,1738,640,1738,640,1738,640,4107,640,1738,640,1738,640,4107,640,1738,640,1738,640,4107,640,1738,686,1738,686,1738,686,50610,640,4107,640,4107,640,4107,640,1679,640,1679,640,1679,640,4107,640,1738,640,1738,640,4107,686,1679,619,1679,619,4107,640,1738,640,1738,640,1738,640]}

var DATA_AUDIO_TV = {"format":"raw","freq":38,"data":[4713,1111,1232,1111,2451,1111,1232,1111,2451,1111,1232,1111,2451,1111,2451,1111,1232,1111,1232,1111,1232,1111,1232,1111,2451,1111,2451,1111,1232,1111,1232,41171,4713,1111,1232,1111,2451,1111,1232,1111,2451,1111,1232,1111,2451,1111,2451,1111,1232,1111,1232,1111,1232,1111,1232,1111,2451,1111,2451,1111,1232,1111,1232,41171,4713,1111,1232,1111,2451,1111,1232,1111,2451,1111,1232,1111,2451,1111,2451,1111,1232,1111,1232,1111,1232,1111,1232,1111,2451,1111,2451,1111,1232,1111,1232,41171,4713,1111,1232,1111,2451,1111,1232,1111,2451,1111,1232,1111,2451,1111,2451,1111,1232,1111,1232,1111,1232,1111,1232,1111,2451,1111,2451,1111,1232,1111,1232]}

var DATA_TV_HDMI = {"format":"raw","freq":38,"data":[640,4107,640,4107,640,4107,640,1738,640,1738,640,1738,640,4107,640,1738,640,1738,640,4107,640,1738,640,4107,640,1738,640,4107,640,1738,640,4107,640,45647,640,4107,640,4107,640,4107,640,1738,640,1738,640,1738,640,4107,640,1738,640,1738,640,4107,640,1738,640,4107,640,1738,640,4107,640,1738,640,4107,640,45647,640,4107,640,4107,640,4107,640,1738,640,1738,640,1738,640,4107,640,1738,640,1738,640,4107,640,1738,640,4107,640,1738,640,4107,640,1738,640,4107,640]}

var DATA_AUDIO_HDMI = {"format":"raw","freq":38,"data":[4713,1111,1232,1111,2451,1111,2451,1111,1232,1111,2451,1111,1232,1111,1232,1111,1232,1111,1232,1111,1232,1111,1232,1111,2451,1111,1232,1111,1232,1111,1232,1111,2451,1111,1232,1111,2451,1111,1232,1111,1232,29187,4713,1111,1232,1111,2451,1111,2451,1111,1232,1111,2451,1111,1232,1111,1232,1111,1232,1111,1232,1111,1232,1111,1232,1111,2451,1111,1232,1111,1232,1111,1232,1111,2451,1111,1232,1111,2451,1111,1232,1111,1232,29187,4713,1111,1232,1111,2451,1111,2451,1111,1232,1111,2451,1111,1232,1111,1232,1111,1232,1111,1232,1111,1232,1111,1232,1111,2451,1111,1232,1111,1232,1111,1232,1111,2451,1111,1232,1111,2451,1111,1232,1111,1232,29187,4713,1111,1232,1111,2451,1111,2451,1111,1232,1111,2451,1111,1232,1111,1232,1111,1232,1111,1232,1111,1232,1111,1232,1111,2451,1111,1232,1111,1232,1111,1232,1111,2451,1111,1232,1111,2451,1111,1232,1111,1232]}

var DATA_AUDIO_VOLUME_UP = {"format":"raw","freq":38,"data":[4713,1111,1232,1111,2368,1111,1232,1111,1232,1111,2368,1111,1232,1111,1232,1111,1232,1111,1232,1111,1232,1111,1232,1111,2368,1111,2368,1111,1232,1111,1232,44103,4713,1111,1275,1111,2368,1111,1232,1111,1232,1111,2368,1111,1232,1111,1232,1111,1232,1111,1232,1111,1232,1111,1232,1111,2368,1111,2368,1111,1232,1111,1232,44103,4713,1111,1232,1111,2368,1111,1232,1111,1232,1111,2368,1111,1232,1111,1232,1111,1232,1111,1232,1111,1232,1111,1232,1111,2368,1111,2368,1111,1232,1111,1232]}

var DATA_AUDIO_VOLUME_DOWN = {"format":"raw","freq":38,"data":[4713,1111,2451,1111,2451,1111,1232,1111,1232,1111,2451,1111,1232,1111,1232,1111,1232,1111,1232,1111,1232,1111,1232,1111,2451,1111,2451,1111,1232,1111,1232,42612,4713,1111,2451,1111,2451,1111,1232,1111,1232,1111,2451,1111,1232,1111,1232,1111,1232,1111,1232,1111,1232,1111,1232,1111,2451,1111,2451,1111,1232,1111,1232,42612,4713,1111,2451,1111,2451,1111,1232,1111,1232,1111,2451,1111,1232,1111,1232,1111,1232,1111,1232,1111,1232,1111,1232,1111,2451,1111,2451,1111,1232,1111,1232]}


$(function() {

    function sendToIRKit(data) {
        return $.ajax({
            url: IRKIT_API,
            type: 'POST',
            data: JSON.stringify(data)
        });
    }

    function buttonUIControll(promise, $el) {
        $el.addClass('active');
        promise.done(function() {
            handleConnectionSuccess();
        }).fail(function(e) {
            handleConnectionFail();
        }).always(function() {
            $el.removeClass('active');
        });
    }

    $('#tvonoff').click(function() {
        var promise = sendToIRKit(DATA_TV_ONOFF);
        buttonUIControll(promise, $(this));
    });

    $('#tvchideji').click(function() {
        var promise = sendToIRKit(DATA_TV_CHIDEJI);
        buttonUIControll(promise, $(this));
    });

    $('#tvhdmi').click(function() {
        var promise = sendToIRKit(DATA_TV_HDMI);
        buttonUIControll(promise, $(this));
    });

    $('#channelminus').click(function() {
        var promise = sendToIRKit(DATA_TV_CH_MINUS);
        buttonUIControll(promise, $(this));
    });

    $('#channelplus').click(function() {
        var promise = sendToIRKit(DATA_TV_CH_PLUS);
        buttonUIControll(promise, $(this));
    });


    $('#audiotv').click(function() {
        var promise = sendToIRKit(DATA_AUDIO_TV);
        buttonUIControll(promise, $(this));
    });

    $('#audiohdmi').click(function() {
        var promise = sendToIRKit(DATA_AUDIO_HDMI);
        buttonUIControll(promise, $(this));
    });

    $('#volumeup').click(function() {
        var promise = sendToIRKit(DATA_AUDIO_VOLUME_UP);
        buttonUIControll(promise, $(this));
    });

    $('#volumedown').click(function() {
        var promise = sendToIRKit(DATA_AUDIO_VOLUME_DOWN);
        buttonUIControll(promise, $(this));
    });


    function handleConnectionSuccess() {
        var $el = $('#message');
        if (!$el.hasClass('success')) {
            $el.addClass('success')
            .removeClass('fail')
            .text('Successfully connected to IRKit');
        }
    }

    function handleConnectionFail() {
        var $el = $('#message');
        if (!$el.hasClass('fail')) {
            $el.addClass('fail')
            .removeClass('success')
            .text('Failed to connect IRKit. Plese use home wifi AP');
        }
    }

    var attachFastClick = Origami.fastclick;
    attachFastClick(document.body);
});
