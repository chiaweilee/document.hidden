let timer

export default function (opt) {
  const opts = Object.assign({
    shown: function () {},
    hidden: function () {},
    delay: 3000
  }, opt)

  document.addEventListener('visibilitychange', function () {
    const isHidden = document.hidden
    const {delay, hidden, shown} = opts

    if (isHidden === true) {
      if (delay > 0) {
        timer = setTimeout(function () {
          hidden()
          timer = null
        }, delay)
        return
      }

      hidden()
    } else if (isHidden === false) {
      if (delay > 0 && timer) {
        clearTimeout(timer)
        timer = null
        return
      }

      shown()
    }
  })
}
