jQuery(document).ready(function($) {

  if ($('.sj-page-catalog').length == 0) {
    $('#tileSort').remove();
    return;
  }

  var sort = $('#tileSort').detach();

  $('#main-container #catalog-content #catalog-courses').before(sort);

  $(sort).find('li').each(function(index, el) {
    $(this).data('sort-order-default', index);
  });

  $(sort).click(function(e) {
    var current = $(this).find('li:visible');
    current = cycleLabel(current);
    var direction = $(current).data('sort');
    doSort(direction);
  });

  function cycleLabel(current) {
    var lis = $(current).parent().children();
    var next = lis.eq(($(current).index() + 1) % lis.length);

    $(current).hide();
    $(next).show();

    return next;
  }

  function doSort(direction) {
    if (direction == 'asc') {
      tinysort('#catalog-courses>a', {
        selector: '.coursebox-text',
        order: 'asc'
      });
    }
    else if (direction == 'desc') {
      tinysort('#catalog-courses>a', {
        selector: '.coursebox-text',
        order: 'desc'
      });
    }
    else if (direction == 'default') {
      tinysort('#catalog-courses>a', {
        data: 'order',
        order: 'asc'
      });
    }
  }
});
