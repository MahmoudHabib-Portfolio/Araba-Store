$(document).ready(function() {

    $('.firstA').click(function() {
        $('.dropbtn').html('English<img src="images/home/British.png" alt="uk-flag" class="drp-flag" />');
        $('.drp-flag').css('max-width', '25px');
        $('.drp-flag2').css('max-width', '25px');
    });

    $('.lastA').click(function() {
        $('.dropbtn').html('Deutsch<img src="images/home/germany.png" alt="de-flag" class="drp-flag drp-flag2" />');
        $('.drp-flag').css('max-width', '25px');
        $('.drp-flag2').css('max-width', '25px');
    });

    // init ScrollMagic    
    var controller = new ScrollMagic.Controller();

    // build a Scene
    var ourSceneTwo = new ScrollMagic.Scene({
        triggerElement: '#OnTrigger',
        triggerHook: 0.5,
        reverse: true
    })

    .setClassToggle('.Scroll', 'fadein')
        .addTo(controller);

    //show car list
    $('.sorting').click(function() {
        $('.select-hide').css('display', 'block');
    });

    $('.select-items').mouseleave(function() {
        $('.select-hide').css('display', 'none');
    });

    $('.flickity-prev-next-button.previous').html('<img src="images/home/left-arrow.png" alt="left-arrow"/>');
    $('.flickity-prev-next-button.next').html('<img src="images/home/right-arrow.png" alt="right-arrow"/>');

    $('.star1').click(function() {
        $('.starone').text('1');
        $('.starfour').text('1');
    });

    $('.star2').click(function() {
        $('.starone').text('2');
        $('.starfour').text('2');
    });

    $('.star3').click(function() {
        $('.starone').text('3');
        $('.starfour').text('3');
    });

    $('.star4').click(function() {
        $('.starone').text('4.5');
        $('.starfour').text('4.5');
    });

    $('.star5').click(function() {
        $('.starone').text('5');
        $('.starfour').text('5');
    });

    $('.star6').click(function() {
        $('.startwo').text('1');
        $('.starfive').text('1');
    });

    $('.star7').click(function() {
        $('.startwo').text('2');
        $('.starfive').text('2');
    });

    $('.star8').click(function() {
        $('.startwo').text('3');
        $('.starfive').text('3');
    });

    $('.star9').click(function() {
        $('.startwo').text('4.5');
        $('.starfive').text('4.5');
    });

    $('.star10').click(function() {
        $('.startwo').text('5');
        $('.starfive').text('5');
    });

    $('.star11').click(function() {
        $('.starthree').text('1');
        $('.starsix').text('1');
    });

    $('.star12').click(function() {
        $('.starthree').text('2');
        $('.starsix').text('2');
    });

    $('.star13').click(function() {
        $('.starthree').text('3');
        $('.starsix').text('3');
    });

    $('.star14').click(function() {
        $('.starthree').text('4.5');
        $('.starsix').text('4.5');
    });

    $('.star15').click(function() {
        $('.starthree').text('5');
        $('.starsix').text('5');
    });

    $('.star31').click(function() {
        $('.starseven').text('1');
    });

    $('.star32').click(function() {
        $('.starseven').text('2');
    });

    $('.star33').click(function() {
        $('.starseven').text('3');
    });

    $('.star34').click(function() {
        $('.starseven').text('4.5');
    });

    $('.star35').click(function() {
        $('.starseven').text('5');
    });

    $('.star36').click(function() {
        $('.stareight').text('1');
    });

    $('.star37').click(function() {
        $('.stareight').text('2');
    });

    $('.star38').click(function() {
        $('.stareight').text('3');
    });

    $('.star39').click(function() {
        $('.stareight').text('4.5');
    });

    $('.star40').click(function() {
        $('.stareight').text('5');
    });

    $('.star41').click(function() {
        $('.starnine').text('1');
    });

    $('.star42').click(function() {
        $('.starnine').text('2');
    });

    $('.star43').click(function() {
        $('.starnine').text('3');
    });

    $('.star44').click(function() {
        $('.starnine').text('4.5');
    });

    $('.star45').click(function() {
        $('.starnine').text('5');
    });

    $('.star46').click(function() {
        $('.starten').text('1');
    });

    $('.star47').click(function() {
        $('.starten').text('2');
    });

    $('.star48').click(function() {
        $('.starten').text('3');
    });

    $('.star49').click(function() {
        $('.starten').text('4.5');
    });

    $('.star50').click(function() {
        $('.starten').text('5');
    });

    $('.star51').click(function() {
        $('.stareleven').text('1');
    });

    $('.star52').click(function() {
        $('.stareleven').text('2');
    });

    $('.star53').click(function() {
        $('.stareleven').text('3');
    });

    $('.star54').click(function() {
        $('.stareleven').text('4.5');
    });

    $('.star55').click(function() {
        $('.stareleven').text('5');
    });

    $('.star56').click(function() {
        $('.startwelve').text('1');
    });

    $('.star57').click(function() {
        $('.startwelve').text('2');
    });

    $('.star58').click(function() {
        $('.startwelve').text('3');
    });

    $('.star59').click(function() {
        $('.startwelve').text('4.5');
    });

    $('.star60').click(function() {
        $('.startwelve').text('5');
    });

    /* Marquee Plugin Options */

    $('.marquee').marquee({

        //speed in milliseconds of the marquee
        duration: 8500,
        //gap in pixels between the tickers
        gap: 0,
        //time in milliseconds before the marquee will start animating
        delayBeforeStart: 0,
        //'left' or 'right'
        direction: 'left',
        //true or false - should the marquee be duplicated to show an effect of continues flow
        duplicated: true

    });

    /* Controlling Loging Form */
    $('.SignIn').click(function() {
        $('.loginform').css('display', 'block');
        /*Adding GSAP Animation*/
        var tl = new TimelineLite();
        var form = $('.loginform');
        tl.from(form, 0.5, { y: -30, autoAlpha: 0, ease: Power2.easeOut }, '+=0.5');
    });

    /* Controlling Cart Form */
    $('.Cart').click(function() {
        $('.CartShow').css('display', 'block');
        /*Adding GSAP Animation*/
        var tl2 = new TimelineLite();
        var cart = $('.CartShow');
        tl2.from(cart, 0.5, { y: -30, autoAlpha: 0, ease: Power2.easeOut }, '+=0.5');
    });

    /* Controlling Search Form */
    $('.search').click(function() {
        $('.SearchBlock').css('display', 'block');
        /*Adding GSAP Animation*/
        var tl3 = new TimelineLite();
        var search = $('.SearchBlock');
        tl3.from(search, 0.5, { y: -30, autoAlpha: 0, ease: Power2.easeOut }, '+=0.5');
    });

    /* Scroll Bounce */
    var tl4 = new TimelineLite();
    var bounce = $('.Bounce');
    tl4.from(bounce, 1, { ease: Bounce.easeOut, y: -10 });
    tl4.repeat(Infinity);

    $('.ScrollBtn').click(function() {
        tl4.repeat(0);
    });

    $('.ScrollBtn').click(function() {
        $('body').css('overflow', 'visible');
    });

    $('.clear').click(function() {
        $('.CartShow').css('display', 'none');
    });

    $('.cancel').click(function() {
        $('.loginform').css('display', 'none');
    });

    $('.cancelsearch').click(function() {
        $('.SearchBlock').css('display', 'none');
    });

    /* ScrollTrigger Pinning 

    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".panel").forEach((panel, i) => {
        ScrollTrigger.create({
            trigger: panel,
            start: "top top",
            pin: true,
            pinSpacing: false
        });
    });

    ScrollTrigger.create({
        snap: 1 / 4 // snap whole page to the closest section!
    });
    
    */

    /*
    if ($(window).width() <= 1320) {
        $('.SignIn').click(function() {
            $('.loginform').css('display', 'none');
        });
        $('.SignIn').html('<a href="index.html" style="text-decoration:none;color:black;"><b class="sign">Sign In</b>&nbsp;&nbsp;<img src="images/home/password.png" alt="login" class="login" /></a>');
    }
    */
});