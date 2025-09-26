$(function () {

    // ------------ team images width same height -----------
    var images = $(".tc-team-style1 .team-card .img, .img_sm_h");
    images.each(function () {
        var width = $(this).width();
        $(this).height(width);
    });
});


// ------------ swiper sliders -----------
$(document).ready(function () {

    // ------------ tc-header-slider1 -----------
    var swiper = new Swiper(".tc-header-style1 .header-slider", {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,
        speed: 1500,
        parallax: true,
        pagination: {
            el: ".header-slider .swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".header-slider .swiper-button-next",
            prevEl: ".header-slider .swiper-button-prev",
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 6000,
        },
        loop: true,
        on: {
            init: function () {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    $(swiper.slides[i])
                        .find(".img")
                        .attr({
                            "data-swiper-parallax": 0.75 * swiper.width,
                        });
                }
            },
            resize: function () {
                this.update();
            },
        },
    });

    // ------------ tc-testimonials-slider1 -----------
    var swiper = new Swiper(".tc-testimonials-style1 .clients-slider1", {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,
        speed: 1000,
        pagination: {
            el: ".tc-clients-style1 .swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".tc-clients-style1 .swiper-button-next",
            prevEl: ".tc-clients-style1 .swiper-button-prev",
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 6000,
        },
        loop: true,
    });

    // ------------ tc-projects-slider1 -----------
    var swiper = new Swiper(".tc-projects-style1 .projects-slider", {
        slidesPerView: 1,
        spaceBetween: 30,
        // centeredSlides: true,
        speed: 1000,
        pagination: false,
        navigation: false,
        mousewheel: false,
        keyboard: true,
        loop: false,
        autoplay: false,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 1.5,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
            },
        },
    });

    // ------------ tc-testimonials-style1 -----------
    var swiper = new Swiper(".tc-testimonials-style1 .marq-slider", {
        slidesPerView: "auto",
        spaceBetween: 140,
        centeredSlides: true,
        slidesPerView: "auto",
        speed: 10000,
        autoplay: {
            delay: 1,
        },
        loop: true,
        //   allowTouchMove: false,
        disableOnInteraction: true,
    });

    // ------------ tc-blog-slider1 -----------
    var swiper = new Swiper(".tc-blog-style1 .blog-slider", {
        slidesPerView: 1,
        spaceBetween: 100,
        // centeredSlides: true,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-blog-style1 .swiper-button-next',
            prevEl: '.tc-blog-style1 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        loop: false,
        autoplay: {
            delay: 6000,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 1.5,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
            },
        },
    });

});



// ----------- side menu -----------
$(document).ready(function () {
    $(".side_menu_btn").on("click", function () {
        $(this).toggleClass("active");
        $(".side_menu4_overlay").toggleClass("show");
        $(".side_menu4_overlay2").toggleClass("show");
        $(".side_menu_style4").toggleClass("show");
    });

    $(".side_menu_style4 .clss").on("click", function () {
        $(".side_menu4_overlay").toggleClass("show");
        $(".side_menu4_overlay2").toggleClass("show");
        $(".side_menu_style4").toggleClass("show");
    });
});


// ------------ gsap scripts -----------
$(function () {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // create the smooth scroller FIRST!
    const smoother = ScrollSmoother.create({
        content: "#scrollsmoother-container",
        smooth: 2,
        normalizeScroll: true,
        ignoreMobileResize: true,
        effects: true,
        //preventDefault: true,
        //ease: 'power4.out',
        //smoothTouch: 0.1,
    });

    // smoother.effects("img", { speed: "auto" });

    let headings = gsap.utils.toArray(".js-title").reverse();
    headings.forEach((heading, i) => {
        let headingIndex = i + 1;
        let mySplitText = new SplitText(heading, { type: "chars" });
        let chars = mySplitText.chars;

        chars.forEach((char, i) => {
            smoother.effects(char, { lag: (i + headingIndex) * 0.1, speed: 1 });
        });
    });

    let splitTextLines = gsap.utils.toArray(".js-splittext-lines");

    splitTextLines.forEach((splitTextLine) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: splitTextLine,
                start: "top 90%",
                duration: 2,
                end: "bottom 60%",
                scrub: false,
                markers: false,
                toggleActions: "play none none none",
                // toggleActions: 'play none play reset'
            },
        });

        const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
        gsap.set(splitTextLine, { perspective: 400 });
        itemSplitted.split({ type: "lines" });
        // tl.from(itemSplitted.lines, { y: 100, delay: 0.2, opacity: 0, stagger: 0.1, duration: 1, ease: 'inOut' });
        // tl.from(itemSplitted.lines, { y: 100, opacity: 0, stagger: 0.05, duration: 1, ease: 'back.inOut' });
        tl.from(itemSplitted.lines, {
            duration: 1,
            delay: 0.5,
            opacity: 0,
            rotationX: -80,
            force3D: true,
            transformOrigin: "top center -50",
            stagger: 0.1,
        });
    });
});
