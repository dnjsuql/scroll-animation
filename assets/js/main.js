var CommonAnimationDirection = (function() {

  var init = function () {
    if ($('[data-animation="active"]').length < 1) {
      return;
    }
    action();
  }

  var action = function () {

    var controller = new ScrollMagic.Controller();
    var active = 'active'
    var bottom = $('[data-animation="bottom"]')
    for(var i = 0; i < bottom.length; i++) {
      new ScrollMagic.Scene({
        triggerElement: bottom[i],
        offset: -150,
        triggerHook: 0.7,
        reverse: false
      })
      .on('start', function(e) {
        bottom.each(function(){
          var delay = $(this).data('animation-delay') / 1000;
          $(this).css({transition : 'all ' + delay + 's' + ' ease-out'})
        })
      })
      .setClassToggle(bottom[i], active)
      .addIndicators({ name: 'bottom' })
      .addTo(controller);
    }
  }
  return {
    init: init
  };
})();

$(document).ready(function () {
  CommonAnimationDirection.init();
});