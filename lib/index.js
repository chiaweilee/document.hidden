"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var timer;

function _default(opt) {
  var opts = Object.assign({
    shown: function shown() {},
    hidden: function hidden() {},
    delay: 3000
  }, opt);

  if ('visibilitychange' in window) {
    document.addEventListener('visibilitychange', function () {
      var isHidden = document.hidden;
      var delay = opts.delay,
          hidden = opts.hidden,
          shown = opts.shown;

      if (isHidden === true) {
        if (delay > 0) {
          timer = setTimeout(function () {
            hidden();
            timer = null;
          }, delay);
          return;
        }

        hidden();
      } else if (isHidden === false) {
        if (delay > 0 && timer) {
          clearTimeout(timer);
          timer = null;
          return;
        }

        shown();
      }
    });
  }
}