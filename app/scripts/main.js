$(document).ready(function() {
  // Header minimize on scroll
  $('.show-on-scroll').hide();
  $(window).scroll(function() {
    if ($(this).scrollTop()<0) {
      console.log('down');
      $('.show-on-scroll').fadeOut();
    } else {
      console.log('up');
      $('.show-on-scroll').fadeIn();
    }
  });

  // Hide feature detail text
  $('.feature-detail').hide();
  $('#features-grid').children('div')
    .hover(function(){
        $(this).addClass('features-grid-hover'),
        $(this).find('.screen-shoot').animate({ height: 'toggle', opacity: 'toggle' }, 'slow'),
        $(this).find('.feature-detail').fadeIn('slow');
      }, function() {
        $(this).removeClass('features-grid-hover'),
        $(this).find('.screen-shoot').animate({ height: 'toggle', opacity: 'toggle' }, 'slow'),
        $(this).find('.feature-detail').fadeOut('slow');
      });
});
