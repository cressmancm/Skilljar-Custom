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

    $('#lpLeftNavBackground').css({
      'top': headerHeight + 'px',
      'left': 0
    });
  }

  var nav = $('#subNav').detach();

  if ($('.sj-page-catalog, .sj-page-curriculum').length > 0) {
    $('#main-container #header').after(nav);
    positionElements();
    $(window).resize(positionElements);
  }

  nav = null;
});
