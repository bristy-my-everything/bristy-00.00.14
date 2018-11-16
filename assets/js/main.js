//////////////////////////////////////////////////////
// =================== Main Js ==================== //
(function ($) {
  "use strict";


  ////////////////////////////////////////////////////
  // Avoid console errors in browsers
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});
  while (length--) {
    method = methods[length];
    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  };



  //////////////////////////////////////////////////////
  // Preloader js
  window.addEventListener('DOMContentLoaded', function () {
    QueryLoader2(document.querySelector("body"), {
      barColor: "#efefef",
      backgroundColor: "#111",
      percentage: true,
      barHeight: 1,
      minimumTime: 200,
      fadeOutTime: 1000
    });
  });



  ////////////////////////////////////////////////////
  // scrollToTop
  //Check to see if the window is top if not then display button
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 500) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });
  //Click event to scroll to top
  $('.scrollToTop').on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });



  ////////////////////////////////////////////////////
  // Smooth Scroll
  $('a.smooth-scroll').on('click', function (event) {
    event.preventDefault();
    var section_smooth = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(section_smooth).offset().top
    }, 1250, 'easeInOutExpo');
  });



  ////////////////////////////////////////////////////
  // WOW Js
  new WOW().init();



  ////////////////////////////////////////////////////
  // sticky js
  $(".oilymenu").sticky({
    topSpacing: 0
  });



  ////////////////////////////////////////////////////
  // oilymenu4 for mobile (Part 03 - End)
  $('#menu').slicknav({
    'label': '',
    'closedSymbol': '&#10010;',
    'openedSymbol': '&#9866;',
    'appendTo': '.oilymenu-mobile'
    // 'prependTo' : '.oilymenu4'
  });



})(jQuery);










//////////////////////////////////////////////////////
// new document ready function
// (function ($) {
//   "use strict";
// })(jQuery);



//////////////////////////////////////////////////////
// waypoint
// (function ($) {
//   "use strict";
//   $("#prog-bar").waypoint(function () {
//     // Your code will be go here
//   }, {
//     offset: 'bottom-in-view'
//   });
// })(jQuery);



//////////////////////////////////////////////////////
// old document ready function (Place not use it)
// $(document).ready(function () {
//   'use strict';
// });



//////////////////////////////////////////////////////
// window load function
// (function ($) {
//   "use strict";
//   $(window).on("load", function () {
//   });
// })(jQuery);