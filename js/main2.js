$(function() {
  $('.rain').ripples({
    resolution: 512,
    dropRadius: 30, //px
    perturbance: 0.01,
    interactive: false,
  });
  $('.box-top').ripples({
    resolution: 256,
    dropRadius: 20, //px
    perturbance: 0.01,
  });
});

setInterval(function() {
  var $obj = $('.rain');
  var x = Math.random() * $obj.outerWidth();
  var y = Math.random() * $obj.outerHeight();
  var dropRadius = 20;
  var strength = 0.03 + Math.random() * 0.05;
  $obj.ripples('drop', x, y, dropRadius, strength);
}, 400);

// --humbureger

$(function(){
  $('.menu-btn').on('click', function(){
    $('.menu').toggleClass('is-active');
  });
}());