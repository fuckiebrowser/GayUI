const DEFAULT_OPTION = {
  class: '', // Animation container className
  center: false, // Position of animation
  duration: 500, // Duration of animation  (unit: ms)
  color: '', // Background color of Animation
  radius: '' // Radius of Animation ( default: the longer between width and height )
};

function style($el, value) {
  const el = $el;
  ['transform', 'webkitTransform'].forEach((i) => {
    el.style[i] = value;
  });
}

function show(e) {
  const el = this;

  const {
    rippleClass,
    rippleColor,
    rippleCenter,
    rippleRadius,
    rippleDuration
  } = this.dataset;

  const container = document.createElement('span');
  const animation = document.createElement('span');

  container.appendChild(animation);
  container.className = 'ripple-container';

  // Add the animation container className
  if (rippleClass) {
    container.className += ` ${rippleClass}`;
  }
  // Set the radius of animation
  const size = rippleRadius ||
    (el.clientWidth > el.clientHeight ? el.clientWidth : el.clientHeight);
  animation.className = 'ripple-animation';
  const isCenter = rippleCenter === 'true';
  const radius = `${size * 2}px`;
  animation.style.width = radius;
  animation.style.height = radius;
  // Set the duration of animation
  animation.style.transitionDuration = `${+rippleDuration || 500}ms`;
  // Set the background color of animation
  animation.style.background = rippleColor || 'currentColor';

  el.appendChild(container);
  const computed = window.getComputedStyle(el);
  if (computed.position !== 'absolute' && computed.position !== 'fixed') el.style.position = 'relative';

  const offset = el.getBoundingClientRect();
  const x = isCenter ? '50%' : `${e.clientX - offset.left}px`;
  const y = isCenter ? '50%' : `${e.clientY - offset.top}px`;

  animation.classList.add('ripple-animation--enter');
  animation.classList.add('ripple-animation--visible');

  // Set the position of animation
  animation.style.left = x;
  animation.style.top = y;

  style(animation, 'translate(-50%, -50%) scale3d(0.01,0.01,0.01)');
  // save the event timestamp
  animation.dataset.activated = Date.now();

  setTimeout(() => {
    animation.classList.remove('ripple-animation--enter');
    style(animation, 'translate(-50%, -50%) scale3d(0.99,0.99,0.99)');
  }, 0);
}

function hide() {
  const el = this;
  const ripples = el.getElementsByClassName('ripple-animation');

  const { rippleDuration } = this.dataset;

  if (ripples.length === 0) return;
  const animation = ripples[ripples.length - 1];
  const diff = Date.now() - Number(animation.dataset.activated);
  let delay = rippleDuration - diff;
  delay = delay < 0 ? 0 : delay;

  setTimeout(() => {
    animation.classList.remove('ripple-animation--visible');

    setTimeout(() => {
      // Need to figure out a new way to do this
      try {
        // reset the position of element
        if (ripples.length < 1) el.style.position = null;
        // remove the container
        if (animation.parentNode) el.removeChild(animation.parentNode);
      } catch (e) {
        // do nothing
      }
    }, 300);
  }, delay);
}

function bind(el, { value = DEFAULT_OPTION }) {
  const keys = Object.keys(value);
  keys.forEach((key) => {
    el.setAttribute(`data-ripple-${key}`, value[key]);
  });

  el.addEventListener('mousedown', show, false);

  [
    'tap',
    'touchend',
    'touchcancel',
    'mouseup',
    'mouseleave',
    'dragstart'
  ].forEach(en => el.addEventListener(en, hide, false));
}

function unbind(el, { value = DEFAULT_OPTION }) {
  // remove show event handler
  el.removeEventListener('touchstart', e => show(e, el, value), false);
  el.removeEventListener('mousedown', e => show(e, el, value), false);
  // remove hide event handler
  [
    'tap',
    'touchend',
    'touchcancel',
    'mouseup',
    'mouseleave',
    'dragstart'
  ].forEach(en => el.removeEventListener(en, () => hide(el, value), false));
}

function update(el, { value = DEFAULT_OPTION }) {
  const keys = Object.keys(value);
  keys.forEach((key) => {
    el.setAttribute(`data-ripple-${key}`, value[key]);
  });
}

function install(vue) {
  vue.directive(this.name, this);
}

export default {
  name: 'ripple',
  bind,
  unbind,
  update,
  install
};
