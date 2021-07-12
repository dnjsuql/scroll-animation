const CommonAnimationDirection = (() => {

  const init = () => {
    const animationActive = document.querySelector('[data-animation="active"]').length;
    if (animationActive < 1) {
      return;
    }
    action();
  }

  const action = () => {
    const controller = new ScrollMagic.Controller();
    const active = 'active'

    // const left = $('[data-animation="left"]')
    // for(let i = 0; i < left.length; i++) {
    //   new ScrollMagic.Scene({
    //     triggerElement: left[i],
    //     offset: 0,
    //     triggerHook: 0.7,
    //     reverse: false
    //   })
    //   .on('start', function(e) {
    //     left.each(function(){
    //       const delay = $(this).data('animation-delay') / 1000;
    //       $(this).css({transition : 'all ' + delay + 's' + ' ease-out'})
    //     })
    //   })
    //   .setClassToggle(left[i], active)
    //   .addIndicators({ name: 'left' })
    //   .addTo(controller);
    // }

    // const right = $('[data-animation="right"]')
    // for(let i = 0; i < right.length; i++) {
    //   new ScrollMagic.Scene({
    //     triggerElement: right[i],
    //     offset: 0,
    //     triggerHook: 0.7,
    //     reverse: false
    //   })
    //   .on('start', function(e) {
    //     right.each(function(){
    //       const delay = $(this).data('animation-delay') / 1000;
    //       $(this).css({transition : 'all ' + delay + 's' + ' ease-out'})
    //     })
    //   })
    //   .setClassToggle(right[i], active)
    //   .addIndicators({ name: 'right' })
    //   .addTo(controller);
    // }

    const bottom = document.querySelectorAll('[data-animation="bottom"]');
    for(let i = 0; i < bottom.length; i++) {
      new ScrollMagic.Scene({
        triggerElement: bottom[i],
        offset: 0,
        triggerHook: 0.7,
        reverse: false
      })
      .on('start', () => {
        bottom.forEach((item, index) => {
          let delay = bottom[index].dataset.animationDelay / 1000;
          bottom[index].style.transition = 'all ' + delay + 's' + ' ease-out'
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

document.addEventListener("DOMContentLoaded", () => {
  CommonAnimationDirection.init();
});

