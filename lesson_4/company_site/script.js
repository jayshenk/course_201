$(function() {

  $('#team li a').click(function(e) {
    e.preventDefault();
    var $overlay = $(this).parent().find('.overlay');
    var $modal = $(this).parent().find('.modal');
    var top_position = (+$(window).scrollTop() + 90).toString() + 'px';

    $modal.css("top", top_position);
    $overlay.fadeIn();
    $modal.fadeIn();
  });

  $('.overlay').click(function() {
    $(this).fadeOut();
    $('.modal').fadeOut();
  });

  $('.close').click(function(e) {
    e.preventDefault;
    $('.overlay').trigger('click');
  });

  $('body').keyup(function(e) {
    if (e.which === 27) {
      $('.overlay').trigger('click');
    }
  });

});