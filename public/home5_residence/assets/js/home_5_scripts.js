$( function() {
    
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


    // h-accordion__panel 
    var panel = $('.acc-li');
        panel.click( function(){
        // console.log('click');
        panel.removeClass('is-open');

        $(this).addClass('is-open');
    });


});


// ------------ swiper sliders -----------
$(document).ready(function() {

    // tc-location-style5
    var swiper = new Swiper('.tc-location-style5 .location-slider', {
        slidesPerView: 0,
        spaceBetween: 30,
        effect: "fade",
        centeredSlides: true,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 6000,
        },
        loop: true,
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

    // const tl = gsap.timeline();

    //     tl.from(".title h2", 1.8, {
    //     y: 100,
    //     ease: "power4.out",
    //     delay: 1,
    //     skewY: 7,
    //     stagger: {
    //         amount: 0.3
    //     }
    // })
});

