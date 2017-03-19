var vlpp_vars = { "prettyPhoto_rel": "wp-video-lightbox", "animation_speed": "fast", "slideshow": "5000", "autoplay_slideshow": "false", "opacity": "0.80", "show_title": "true", "allow_resize": "true", "allow_expand": "true", "default_width": "640", "default_height": "480", "counter_separator_label": "\/", "theme": "pp_default", "horizontal_padding": "20", "hideflash": "false", "wmode": "opaque", "autoplay": "false", "modal": "false", "deeplinking": "false", "overlay_gallery": "true", "overlay_gallery_max": "30", "keyboard_shortcuts": "true", "ie6_fallback": "true" };

jQuery(document).ready(function () {
    // CUSTOM AJAX CONTENT LOADING FUNCTION
    var ajaxRevslider = function (obj) {

        // obj.type : Post Type
        // obj.id : ID of Content to Load
        // obj.aspectratio : The Aspect Ratio of the Container / Media
        // obj.selector : The Container Selector where the Content of Ajax will be injected. It is done via the Essential Grid on Return of Content

        var content = "";

        data = {};

        data.action = 'revslider_ajax_call_front';
        data.client_action = 'get_slider_html';
        data.token = 'dd48b7575a';
        data.type = obj.type;
        data.id = obj.id;
        data.aspectratio = obj.aspectratio;

        // SYNC AJAX REQUEST
        jQuery.ajax({
            type: "post",
            url: "http://seiba.vancitythinktank.com/wp-admin/admin-ajax.php",
            dataType: 'json',
            data: data,
            async: false,
            success: function (ret, textStatus, XMLHttpRequest) {
                if (ret.success == true)
                    content = ret.data;
            },
            error: function (e) {
                console.log(e);
            }
        });

        // FIRST RETURN THE CONTENT WHEN IT IS LOADED !!
        return content;
    };

    // CUSTOM AJAX FUNCTION TO REMOVE THE SLIDER
    var ajaxRemoveRevslider = function (obj) {
        return jQuery(obj.selector + " .rev_slider").revkill();
    };

    // EXTEND THE AJAX CONTENT LOADING TYPES WITH TYPE AND FUNCTION
    var extendessential = setInterval(function () {
        if (jQuery.fn.tpessential != undefined) {
            clearInterval(extendessential);
            if (typeof (jQuery.fn.tpessential.defaults) !== 'undefined') {
                jQuery.fn.tpessential.defaults.ajaxTypes.push({ type: "revslider", func: ajaxRevslider, killfunc: ajaxRemoveRevslider, openAnimationSpeed: 0.3 });
                // type:  Name of the Post to load via Ajax into the Essential Grid Ajax Container
                // func: the Function Name which is Called once the Item with the Post Type has been clicked
                // killfunc: function to kill in case the Ajax Window going to be removed (before Remove function !
                // openAnimationSpeed: how quick the Ajax Content window should be animated (default is 0.3)
            }
        }
    }, 30);
});

jQuery(document).ready(function ($) {

    var windowObj = $(window);
    var body = $('body');
    var bodyOffsetBottom = windowObj.scrollBottom();             // 1
    var bodyHeightAdjustment = body.height() - bodyOffsetBottom;     // 2
    var bodyHeightAdjusted = body.height() - bodyHeightAdjustment; // 3
    var scrollTopAnchor = $('.x-scroll-top');

    function sizingUpdate() {
        var bodyOffsetTop = windowObj.scrollTop();
        if (bodyOffsetTop > (bodyHeightAdjusted * 0.25)) {
            scrollTopAnchor.addClass('in');
        } else {
            scrollTopAnchor.removeClass('in');
        }
    }

    windowObj.bind('scroll', sizingUpdate).resize(sizingUpdate);
    sizingUpdate();

    scrollTopAnchor.click(function () {
        $('html,body').animate({ scrollTop: 0 }, 850, 'easeInOutExpo');
        return false;
    });

});

jQuery(window).load(function () { // makes sure the whole site is loaded
    jQuery('#preloader').addClass("show"); // show logo animation
    jQuery('#preloader').delay(2000).fadeOut('slow'); // will fade out the white DIV that covers the website.
    jQuery('body').delay(1000).css({ 'overflow': 'visible' });
})

var _wpcf7 = { "loaderUrl": "http:\/\/seiba.vancitythinktank.com\/wp-content\/plugins\/contact-form-7\/images\/ajax-loader.gif", "recaptchaEmpty": "Please verify that you are not a robot.", "sending": "Sending ..." };

var x_email_forms = { "ajaxurl": "http:\/\/seiba.vancitythinktank.com\/wp-admin\/admin-ajax.php" };

jQuery(document).ready(function ($) { var envira_container_311 = ''; envira_container_311 = $('#envira-gallery-311').enviratope({ itemSelector: '.envira-gallery-item', masonry: { columnWidth: '.envira-gallery-item' } }); envira_container_311.imagesLoaded(function () { envira_container_311.enviratope('layout'); }); envira_container_311 = $('#envira-gallery-311').imagesLoaded(function () { $('.envira-gallery-item img').fadeTo('slow', 1); }); $('.envira-gallery-311').envirabox({ arrows: 1, aspectRatio: 1, loop: 1, mouseWheel: 1, preload: 1, nextEffect: 'fade', prevEffect: 'fade', tpl: { wrap: '<div class="envirabox-wrap" tabIndex="-1"><div class="envirabox-skin envirabox-theme-base"><div class="envirabox-outer"><div class="envirabox-inner"></div></div></div></div>', image: '<img class="envirabox-image" src="{href}" alt="" data-envira-title="" data-envira-caption="" data-envira-index="" data-envira-data="" />', iframe: '<iframe id="envirabox-frame{rnd}" name="envirabox-frame{rnd}" class="envirabox-iframe" frameborder="0" vspace="0" hspace="0" allowtransparency="true"\></iframe>', error: '<p class="envirabox-error">The requested content cannot be loaded.<br/>Please try again later.</p>', closeBtn: '<a title="Close" class="envirabox-item envirabox-close" href="javascript:;"></a>', next: '<a title="Next" class="envirabox-nav envirabox-next envirabox-arrows-inside" href="javascript:;"><span></span></a>', prev: '<a title="Previous" class="envirabox-nav envirabox-prev envirabox-arrows-inside" href="javascript:;"><span></span></a>' }, helpers: { title: { type: 'float' }, thumbs: { width: 75, height: 50, source: function (current) { return $(current.element).data('thumbnail'); }, position: 'bottom' }, buttons: { tpl: '<div id="envirabox-buttons"><ul><li><a class="btnPrev" title="Previous" href="javascript:;"></a></li><li><a class="btnNext" title="Next" href="javascript:;"></a></li><li><a class="btnClose" title="Close" href="javascript:;"></a></li></ul></div>', position: 'top', padding: '' }, }, beforeLoad: function () { this.title = $(this.element).data('envira-caption'); }, afterLoad: function () { }, beforeShow: function () { $(window).on({ 'resize.envirabox': function () { $.envirabox.update(); } }); var gallery_id = this.element.find('img').data('envira-gallery-id'); var gallery_item_id = this.element.find('img').data('envira-item-id'); var alt = this.element.find('img').attr('alt'); var title = this.element.find('img').parent().attr('title'); var caption = this.element.find('img').parent().data('envira-caption'); var index = this.element.find('img').data('envira-index'); this.inner.find('img').attr('alt', alt).attr('data-envira-gallery-id', gallery_id).attr('data-envira-item-id', gallery_item_id).attr('data-envira-title', title).attr('data-envira-caption', caption).attr('data-envira-index', index); }, afterShow: function () { $('.envirabox-wrap').swipe({ swipe: function (event, direction, distance, duration, fingerCount, fingerData) { if (direction === 'left') { $.envirabox.next(direction); } else if (direction === 'right') { $.envirabox.prev(direction); } else if (direction === 'up') { } } }); }, beforeClose: function () { }, afterClose: function () { $(window).off('resize.envirabox'); }, onUpdate: function () { var envira_buttons_311 = $('#envirabox-buttons li').map(function () { return $(this).width(); }).get(), envira_buttons_total_311 = 0; $.each(envira_buttons_311, function (i, val) { envira_buttons_total_311 += parseInt(val, 10); }); $('#envirabox-buttons ul').width(envira_buttons_total_311); $('#envirabox-buttons').width(envira_buttons_total_311).css('left', ($(window).width() - envira_buttons_total_311) / 2); }, onCancel: function () { }, onPlayStart: function () { }, onPlayEnd: function () { } }); });

