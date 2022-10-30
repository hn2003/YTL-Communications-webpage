/*--------------
    Author: Hem
    Version: 2.0
------------------------ */    

!(function (t) {
    "use strict";
    var a = t(window);
    function s() {
        var e, s;
        (e = t(".full-screen")), (s = a.height()), e.css("min-height", s), (e = t("header").height()), (s = t(".screen-height")), (e = a.height() - e), s.css("height", e);
    }
    t("#preloader").fadeOut("normall", function () {
        t(this).remove();
    }),
        a.on("scroll", function () {
            var e = a.scrollTop(),
                s = t(".navbar-brand img"),
                o = t(".navbar-brand.logodefault img");
            e <= 50 ? (t("header").removeClass("scrollHeader").addClass("fixedHeader"), s.attr("src", "img/logos/logo-inner.png")) : (t("header").removeClass("fixedHeader").addClass("scrollHeader"), s.attr("src", "img/logos/logo.png")),
                o.attr("src", "img/logos/logo.png");
        }),
        a.on("scroll", function () {
            500 < t(this).scrollTop() ? t(".scroll-to-top").fadeIn(400) : t(".scroll-to-top").fadeOut(400);
        }),
        t(".scroll-to-top").on("click", function (e) {
            e.preventDefault(), t("html, body").animate({ scrollTop: 0 }, 600);
        }),
        t(".parallax,.bg-img").each(function (e) {
            t(this).attr("data-background") && t(this).css("background-image", "url(" + t(this).data("background") + ")");
        }),
        t(".story-video").magnificPopup({ delegate: ".video", type: "iframe" }),
        t(".popup-social-video").magnificPopup({ disableOn: 700, type: "iframe", mainClass: "mfp-fade", removalDelay: 160, preloader: !1, fixedContentPos: !1 }),
        t(".source-modal").magnificPopup({ type: "inline", mainClass: "mfp-fade", removalDelay: 160 }),
        new WOW({ boxClass: "wow", animateClass: "animated", offset: 0, mobile: !1, live: !0 }).init(),
        0 !== t(".tilt").length && t(".tilt").tilt({ maxTilt: 9, perspective: 1e3, scale: 1, speed: 300, reset: !0 }),
        a.resize(function (e) {
            setTimeout(function () {
                s();
            }, 500),
                e.preventDefault();
        }),
        0 !== t(".copy-clipboard").length &&
            (new ClipboardJS(".copy-clipboard"),
            t(".copy-clipboard").on("click", function () {
                var e = t(this);
                e.text();
                e.text("Copied"),
                    setTimeout(function () {
                        e.text("Copy");
                    }, 2e3);
            })),
        s(),
        t(document).ready(function () {
            var e;
            t(".testimonial-carousel").owlCarousel({
                loop: !0,
                responsiveClass: !0,
                autoplay: !0,
                autoplayTimeout: 3e3,
                smartSpeed: 1500,
                nav: !1,
                dots: !0,
                center: !1,
                margin: 15,
                items: 1,
                responsive: { 0: { nav: !1, dots: !1 }, 991: { nav: !1, dots: !0 } },
            }),
                t(".testimonial2-carousel").owlCarousel({
                    loop: !0,
                    responsiveClass: !0,
                    autoplay: !0,
                    autoplayTimeout: 5e3,
                    smartSpeed: 1500,
                    nav: !1,
                    dots: !0,
                    center: !1,
                    margin: 30,
                    responsive: { 0: { items: 1, dots: !1 }, 768: { items: 1 }, 992: { items: 2 }, 1200: { items: 3 } },
                }),
//                
                t(".testimonials-style2").owlCarousel({
                    loop: !0,
                    responsiveClass: !0,
                    autoplay: !0,
                    smartSpeed: 1500,
                    nav: !1,
                    dots: !0,
                    center: !1,
                    margin: 20,
                    responsive: { 0: { items: 1, dots: !1 }, 575: { items: 1 }, 992: { items: 1 }, 1200: { items: 1 } },
                }),
                t(".slider-fade2").owlCarousel({
                    items: 1,
                    loop: !0,
                    dots: !0,
                    margin: 0,
                    nav: !1,
                    autoplay: !0,
                    smartSpeed: 1500,
                    mouseDrag: !1,
                    animateIn: "fadeIn",
                    animateOut: "fadeOut",
                    responsive: { 0: { items: 1, dots: !1 }, 767: { nav: !1, dots: !0 } },
                }),
                t(".slider-fade3").owlCarousel({ items: 1, loop: !0, dots: !0, margin: 0, nav: !1, autoplay: !0, smartSpeed: 1500, mouseDrag: !1, animateIn: "fadeIn", animateOut: "fadeOut" }),
                t(".service-carousel").owlCarousel({ loop: !0, responsiveClass: !0, autoplay: !0, smartSpeed: 1500, nav: !1, dots: !0, center: !0, margin: 20, responsive: { 0: { items: 1 }, 768: { items: 1 }, 992: { items: 2 } } }),
                t(".service2-carousel").owlCarousel({
                    loop: !0,
                    responsiveClass: !0,
                    autoplay: !0,
                    smartSpeed: 1500,
                    nav: !0,
                    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                    dots: !1,
                    center: !1,
                    margin: 0,
                    responsive: { 0: { items: 1, nav: !1 }, 768: { items: 2 }, 1200: { items: 3 } },
                }),
                t(".project-details").owlCarousel({
                    loop: !0,
                    responsiveClass: !0,
                    autoplay: !0,
                    smartSpeed: 900,
                    nav: !1,
                    dots: !0,
                    center: !1,
                    margin: 30,
                    responsive: { 0: { items: 1 }, 576: { items: 2, margin: 15 }, 768: { items: 2, margin: 15 }, 992: { items: 3 } },
                }),
                t(".blog-post-carousel").owlCarousel({ loop: !0, responsiveClass: !0, autoplay: !0, autoplayTimeout: 5e3, smartSpeed: 900, nav: !1, dots: !1, items: 1, margin: 15 }),
                t(".blog-carousel").owlCarousel({ loop: !0, responsiveClass: !0, autoplay: !0, autoplayTimeout: 5e3, smartSpeed: 1500, nav: !1, dots: !0, center: !1, margin: 15, items: 1 }),
                t(".blog2-carousel").owlCarousel({
                    loop: !0,
                    responsiveClass: !0,
                    autoplay: !0,
                    autoplayTimeout: 5e3,
                    smartSpeed: 1500,
                    nav: !1,
                    dots: !0,
                    center: !1,
                    margin: 30,
                    responsive: { 0: { items: 1, dots: !1 }, 768: { items: 1 }, 992: { items: 2 } },
                }),
                t(".certificate-carousel").owlCarousel({
                    loop: !0,
                    responsiveClass: !0,
                    autoplay: !0,
                    smartSpeed: 1500,
                    nav: !1,
                    dots: !0,
                    center: !1,
                    margin: 15,
                    responsive: { 0: { items: 1, margin: 0, dots: !1 }, 768: { items: 2 }, 1200: { items: 3 } },
                }),
                t(".client-carousel").owlCarousel({ loop: !0, responsiveClass: !0, autoplay: !0, autoplayTimeout: 5e3, smartSpeed: 900, nav: !1, dots: !1, items: 1, margin: 15 }),
                t(".common-banner .owl-carousel").owlCarousel({
                    items: 1,
                    loop: !0,
                    dots: !1,
                    nav: !0,
                    navText: ['<span class="fas fa-chevron-left"></span>', '<span class="fas fa-chevron-right"></span>'],
                    margin: 0,
                    autoplay: !0,
                    smartSpeed: 500,
                    mouseDrag: !1,
                    thumbs: !1,
                    animateIn: "fadeIn",
                    animateOut: "fadeOut",
                    responsive: { 0: { nav: !1, dots: !1 }, 991: { nav: !0, dots: !1 }, 1200: { nav: !0, dots: !1 } },
                }),
                t(".brand-carousel").owlCarousel({
                    loop: !0,
                    responsiveClass: !0,
                    autoplay: !0,
                    smartSpeed: 900,
                    nav: !1,
                    dots: !1,
                    center: !1,
                    margin: 0,
                    responsive: { 0: { items: 1 }, 575: { items: 2 }, 992: { items: 3 }, 1200: { items: 4 } },
                }),
                t(".team-carousel").owlCarousel({
                    loop: !0,
                    responsiveClass: !0,
                    autoplay: !0,
                    smartSpeed: 900,
                    nav: !1,
                    dots: !0,
                    center: !1,
                    margin: 20,
                    responsive: { 0: { items: 1 }, 575: { items: 2 }, 992: { items: 3 }, 1200: { items: 4 } },
                }),
                t(".why-choose-carousel").owlCarousel({
                    loop: !0,
                    responsiveClass: !0,
                    autoplay: !0,
                    smartSpeed: 1500,
                    nav: !1,
                    dots: !0,
                    center: !1,
                    margin: 30,
                    responsive: { 0: { items: 1, dots: !1 }, 768: { items: 2 }, 1200: { items: 3 } },
                }),
                t(".related-products").owlCarousel({
                    loop: !0,
                    responsiveClass: !0,
                    autoplay: !0,
                    smartSpeed: 900,
                    nav: !1,
                    dots: !0,
                    center: !1,
                    margin: 0,
                    responsive: { 0: { items: 1 }, 767: { items: 2 }, 768: { items: 2 }, 992: { items: 4 } },
                }),
                t(".banner3 .owl-carousel").owlCarousel({
                    loop: !0,
                    responsiveClass: !0,
                    autoplay: !0,
                    smartSpeed: 900,
                    nav: !0,
                    navText: ['<span class="fas fa-chevron-left"></span>', '<span class="fas fa-chevron-right"></span>'],
                    dots: !1,
                    center: !1,
                    items: 1,
                    margin: 0,
                }),
                t(".owl-carousel").owlCarousel({ items: 1, loop: !0, dots: !1, margin: 0, autoplay: !0, smartSpeed: 1500 }),
                t(".common-banner").on("changed.owl.carousel", function (e) {
                    e = e.item.index - 2;
                    t("h1").removeClass("animated fadeInUp"),
                        t("h2").removeClass("animated fadeInUp"),
                        t(".text-animations").removeClass("animated"),
                        t(".butn").removeClass("animated fadeInUp"),
                        t(".owl-item").not(".cloned").eq(e).find(".text-animations").addClass("animated"),
                        t(".owl-item").not(".cloned").eq(e).find("h1").addClass("animated fadeInUp"),
                        t(".owl-item").not(".cloned").eq(e).find("h2").addClass("animated fadeInUp"),
                        t(".text-animations").textillate("in"),
                        t(".owl-item").not(".cloned").eq(e).find(".butn").addClass("animated fadeInUp");
                }),
                0 !== t("#rev_slider_1").length &&
                    (e = jQuery)(document).ready(function () {
                        null == e("#rev_slider_1").revolution
                            ? revslider_showDoubleJqueryError("#rev_slider_1")
                            : e("#rev_slider_1")
                                  .show()
                                  .revolution({
                                      sliderLayout: "fullwidth",
                                      delay: 12e3,
                                      responsiveLevels: [4096, 1400, 1200, 768, 576],
                                      gridwidth: [1340, 1200, 990, 570, 420],
                                      gridheight: [700, 700, 700, 550, 500],
                                      hideThumbs: 10,
                                      fullScreenAutoWidth: "on",
                                      fullScreenOffsetContainer: "header",
                                      navigation: {
                                          onHoverStop: "off",
                                          touch: { touchenabled: "on", swipe_threshold: 75, swipe_min_touches: 1, swipe_direction: "horizontal", drag_block_vertical: !1 },
                                          arrows: {
                                              enable: !0,
                                              style: "zeus",
                                              tmp: '<div class="tp-arr-allwrapper">  <div class="tp-arr-imgholder"></div> <div class="tp-arr-titleholder">{{title}}</div> </div>',
                                              left: { h_align: "left", v_align: "center", h_offset: 50, v_offset: -40 },
                                              right: { h_align: "right", v_align: "center", h_offset: 50, v_offset: -40 },
                                          },
                                          bullets: {
                                              style: "",
                                              enable: !1,
                                              hide_onmobile: !1,
                                              hide_onleave: !0,
                                              hide_delay: 200,
                                              hide_delay_mobile: 1200,
                                              hide_under: 0,
                                              hide_over: 9999,
                                              direction: "horizontal",
                                              space: 12,
                                              h_align: "center",
                                              v_align: "bottom",
                                              h_offset: 0,
                                              v_offset: 30,
                                              tmp: "",
                                          },
                                      },
                                      spinner: "spinner4",
                                  });
                    }),
                0 !== t("#rev_slider_151_1").length &&
                    (e = jQuery)(document).ready(function () {
                        null == e("#rev_slider_151_1").revolution
                            ? revslider_showDoubleJqueryError("#rev_slider_151_1")
                            : e("#rev_slider_151_1")
                                  .show()
                                  .revolution({
                                      sliderType: "standard",
                                      jsFileLocation: "revolution/js/",
                                      sliderLayout: "fullscreen",
                                      dottedOverlay: "none",
                                      delay: 9e3,
                                      navigation: {
                                          keyboardNavigation: "off",
                                          keyboard_direction: "vertical",
                                          mouseScrollNavigation: "off",
                                          mouseScrollReverse: "default",
                                          onHoverStop: "off",
                                          touch: { touchenabled: "on", swipe_threshold: 75, swipe_min_touches: 1, swipe_direction: "horizontal", drag_block_vertical: !1 },
                                          arrows: {
                                              style: "uranus",
                                              enable: !0,
                                              hide_onmobile: !1,
                                              hide_over: 479,
                                              hide_onleave: !1,
                                              tmp: "",
                                              left: { h_align: "left", v_align: "center", h_offset: 0, v_offset: 0 },
                                              right: { h_align: "right", v_align: "center", h_offset: 0, v_offset: 0 },
                                          },
                                      },
                                      responsiveLevels: [1240, 1024, 778, 480],
                                      visibilityLevels: [1240, 1024, 778, 480],
                                      gridwidth: [1240, 1024, 778, 480],
                                      gridheight: [868, 768, 960, 720],
                                      lazyType: "none",
                                      scrolleffect: { blur: "on", maxblur: "20", on_slidebg: "on", direction: "top", multiplicator: "2", multiplicator_layers: "2", tilt: "10", disable_on_mobile: "off" },
                                      parallax: { type: "scroll", origo: "slidercenter", speed: 400, levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55] },
                                      shadow: 0,
                                      spinner: "spinner3",
                                      stopLoop: "off",
                                      stopAfterLoops: -1,
                                      stopAtSlide: -1,
                                      shuffle: "off",
                                      autoHeight: "off",
                                      fullScreenAutoWidth: "off",
                                      fullScreenAlignForce: "off",
                                      fullScreenOffsetContainer: "",
                                      fullScreenOffset: "0",
                                      hideThumbsOnMobile: "off",
                                      hideSliderAtLimit: 0,
                                      hideCaptionAtLimit: 0,
                                      hideAllCaptionAtLilmit: 0,
                                      debugMode: !1,
                                      fallbacks: { simplifyAll: "off", nextSlideOnWindowFocus: "off", disableFocusListener: !1 },
                                  });
                    }),
                0 !== t(".horizontaltab").length &&
                    t(".horizontaltab").easyResponsiveTabs({
                        type: "default",
                        width: "auto",
                        fit: !0,
                        tabidentify: "hor_1",
                        activate: function (e) {
                            var s = t(this),
                                o = t("#nested-tabInfo");
                            t("span", o).text(s.text()), o.show();
                        },
                    }),
                0 !== t(".verticaltab").length &&
                    t(".verticaltab").easyResponsiveTabs({
                        type: "vertical",
                        width: "auto",
                        fit: !0,
                        closed: "accordion",
                        tabidentify: "hor_1",
                        activate: function (e) {
                            var s = t(this),
                                o = t("#nested-tabInfo2");
                            t("span", o).text(s.text()), o.show();
                        },
                    }),
                t(".countup").counterUp({ delay: 25, time: 2e3 }),
                t(".countdown").countdown({ date: "01 Dec 2024 00:01:00", format: "on" }),
                t(".form_date").datetimepicker({ language: "en", weekStart: 1, todayBtn: 1, autoclose: 1, todayHighlight: 1, startView: 2, minView: 2, forceParse: 0 }),
                t(".form_time").datetimepicker({ language: "en", weekStart: 1, todayBtn: 1, autoclose: 1, todayHighlight: 1, startView: 1, minView: 0, maxView: 1, forceParse: 0 }),
                t(".current-year").text(new Date().getFullYear());
        }),
        a.on("load", function () {
            t(".portfolio-gallery").isotope({});
            t(".portfolio-gallery").lightGallery(),
                t(".portfolio-link").on("click", (e) => {
                    e.stopPropagation();
                }),
                a.stellar();
        });
})(jQuery);
