jQuery(document).ready(function($) {

  function positionElements() {

    var subNavHeight = $('#subNav').height();
    var headerHeight = $('#header').height();

    $('#catalog-left-nav').css({
      'margin-top': subNavHeight + 'px'
    });

    $('#skilljar-content').css({
      'padding-top': subNavHeight + headerHeight + 'px'
    });
  }

  var nav = $('#subNav').detach();
  $('#main-container #header').after(nav);

  positionElements();

  $(window).resize(positionElements);

});
