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

    const left = document.querySelectorAll('[data-animation="left"]');
    for(let i = 0; i < left.length; i++) {
      new ScrollMagic.Scene({
        triggerElement: left[i],
        offset: 0,
        triggerHook: 0.7,
        reverse: false
      })
      .on('start', () => {
        const delay = left[i].dataset.animationDelay / 1000;
        const effect = left[i].dataset.animationEffect
        if(effect === undefined){
          left[i].style.transition = 'all ' + delay + 's ' + 'ease-in-out'; // effect 미입력 시, ease-in-out 효과 기본값
        } else {
          left[i].style.transition = 'all ' + delay + 's ' + effect
        }
      })
      .setClassToggle(left[i], active)
      .addIndicators({ name: 'left' })
      .addTo(controller);
    }

    const right = document.querySelectorAll('[data-animation="right"]');
    for(let i = 0; i < right.length; i++) {
      new ScrollMagic.Scene({
        triggerElement: right[i],
        offset: 0,
        triggerHook: 0.7,
        reverse: false
      })
      .on('start', () => {
        const delay = right[i].dataset.animationDelay / 1000;
        const effect = right[i].dataset.animationEffect
        if(effect === undefined){
          right[i].style.transition = 'all ' + delay + 's ' + 'ease-in-out'; // effect 미입력 시, ease-in-out 효과 기본값
        } else {
          right[i].style.transition = 'all ' + delay + 's ' + effect
        }
      })
      .setClassToggle(right[i], active)
      .addIndicators({ name: 'right' })
      .addTo(controller);
    }

    const bottom = document.querySelectorAll('[data-animation="bottom"]');
    for(let i = 0; i < bottom.length; i++) {
      new ScrollMagic.Scene({
        triggerElement: bottom[i],
        offset: 0,
        triggerHook: 0.7,
        reverse: false
      })
      .on('start', () => {
        const delay = bottom[i].dataset.animationDelay / 1000;
        const effect = bottom[i].dataset.animationEffect
        if(effect === undefined){
          bottom[i].style.transition = 'all ' + delay + 's ' + 'ease-in-out'; // effect 미입력 시, ease-in-out 효과 기본값
        } else {
          bottom[i].style.transition = 'all ' + delay + 's ' + effect
        }
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

document.addEventListener('DOMContentLoaded', () => {
  CommonAnimationDirection.init();
});

