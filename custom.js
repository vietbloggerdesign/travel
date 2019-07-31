$(document).ready(function() {
  "use strict";
  var h = $(window).height();
  //Revolution Slider home 1
  jQuery('#rev_slider_1').show().revolution({
    sliderLayout: 'auto',
    gridheight: h,
    navigation: {
      arrows: {
        enable: true,
        style: 'gyges',
        tmp: '',
        rtl: false,
        hide_onleave: false,
        hide_onmobile: true,
        hide_under: 0,
        hide_over: 9999,
        hide_delay: 200,
        hide_delay_mobile: 1200,
        left: {
          container: 'slider',
          h_align: 'right',
          v_align: 'center',
          h_offset: 80,
          v_offset: 80
        },
        right: {
          container: 'slider',
          h_align: 'right',
          v_align: 'center',
          h_offset: 80,
          v_offset: 0
        }
      }
    },
  });
  //Revolution Slider home 5
  jQuery('#rev_slider_5').show().revolution({
    sliderLayout: 'auto',
    gridheight: h
  });
});
(function($) {
  "use strict";
  $(window).on('load', function() {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('fast');
  });
  $('[data-countdown]').each(function() {
    var $this = $(this),
      finalDate = $(this).data('countdown');
    $this.countdown(finalDate, function(event) {
      $this.html(event.strftime('<ul><li><span class="cdown days"><span class="time-count">%-D</span><p class="day-css">Days</p></span></li><li><span class="cdown hour"><span class="time-count">%-H</span> <p class="day-css">Hour</p></span><l/i><li><span class="cdown minutes"><span class="time-count">%M</span> <p class="day-css">Min</p></span></li><li> <span class="cdown second"><span class="time-count">%S</span> <p class="day-css">Sec</p></span></li></ul>'));
    });
  });
  $('.mapp').addClass('scrolloff');
  $('#overlay').on("mouseup", function() {
    $('.mapp').addClass('scrolloff');
  });
  $('#overlay').on("mousedown", function() {
    $('.mapp').removeClass('scrolloff');
  });
  $(".map").mouseleave(function() {
    $('.mapp').addClass('scrolloff');
  });
  jQuery('nav').meanmenu();
  new WOW().init();
  $(function() {
    var b = "fadeInLeft";
    var c;
    var a;
    d($("#myTab1 a"), $("#tab-content1"));

    function d(e, f, g) {
      e.click(function(i) {
        i.preventDefault();
        $(this).tab("show");
        var h = $(this).data("easein");
        if (c) {
          c.removeClass(a);
        }
        if (h) {
          f.find("div.active").addClass("animated " + h);
          a = h;
        } else {
          if (g) {
            f.find("div.active").addClass("animated " + g);
            a = g;
          } else {
            f.find("div.active").addClass("animated " + b);
            a = b;
          }
        }
        c = f.find("div.active");
      });
    }
    $("a[rel=popover]").popover().click(function(f) {
      f.preventDefault();
      if ($(this).data("easein") != undefined) {
        $(this).next().removeClass($(this).data("easein")).addClass("animated " + $(this).data("easein"));
      } else {
        $(this).next().addClass("animated " + b);
      }
    });
  });
  $(function() {
    var b = "fadeInLeft";
    var c;
    var a;
    d($("#myTab2 a"), $("#tab-content2"));

    function d(e, f, g) {
      e.click(function(i) {
        i.preventDefault();
        $(this).tab("show");
        var h = $(this).data("easein");
        if (c) {
          c.removeClass(a);
        }
        if (h) {
          f.find("div.active").addClass("animated " + h);
          a = h;
        } else {
          if (g) {
            f.find("div.active").addClass("animated " + g);
            a = g;
          } else {
            f.find("div.active").addClass("animated " + b);
            a = b;
          }
        }
        c = f.find("div.active");
      });
    }
    $("a[rel=popover]").popover().click(function(f) {
      f.preventDefault();
      if ($(this).data("easein") != undefined) {
        $(this).next().removeClass($(this).data("easein")).addClass("animated " + $(this).data("easein"));
      } else {
        $(this).next().addClass("animated " + b);
      }
    });
  });
  $("#datepicker").datepicker();
  $("#datepicker1").datepicker();
  $("#datepicker2").datepicker();
  $("#datepicker3").datepicker();
  $("#datepicker4").datepicker();
  $("#pickupdate").datepicker();
  $("#shippickupdate").datepicker();
  $("#daperture_date").datepicker();
  $("#return_date").datepicker();
  $("#booking-date").datepicker();
  $("#standard1").customselect();
  $("#standard2").customselect();
  $("#standard3").customselect();
  $("#standard4").customselect();
  $("#nosearch").customselect({
    search: false
  });
  $("#nosearch1").customselect({
    search: false
  });
  $("#nosearch2").customselect({
    search: false
  });
  jQuery('.to-top').on('click', function(event) {
    jQuery('html,body').animate({
      scrollTop: 0
    }, 1000);
  });
  jQuery(window).scroll(function() {
    if (jQuery(window).scrollTop() > 100) {
      jQuery('.to-top').fadeIn(1000);
    } else {
      jQuery('.to-top').fadeOut(1000);
    };
  });
  $('.testimonial-5-active').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 11000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
  $(".location-results").select2({
    minimumResultsForSearch: Infinity
  });

  $(".location-search").select2({
    maximumSelectionLength: 3
  });
})(jQuery);
