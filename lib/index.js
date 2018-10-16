var timer
var option = {
    shown: function () {},
    hidden: function () {},
    delay: 3000
}

export default function (opt) {
    // update option
    Object.keys(opt).forEach(function (name) {
        if (option.hasOwnProperty(name)) {
            if (typeof option[name] === typeof opt[name]) {
                option[name] = opt[name]
            } else if (process.env.NODE_ENV !== 'production') {
                console.warn(`Can not merge option of ${name}, due different types.`)
            }
        }
    })
    document.addEventListener('visibilitychange', function () {
        if (document.hidden === true) {
            // hidden
            if (option.delay > 0) {
                // delay
                timer = setTimeout(function () {
                    option.hidden()
                    timer = null
                }, option.delay)
                return
            }
            // sync
            option.hidden()
        } else if (document.hidden === false) {
            if (option.delay > 0 && timer) {
                // clear delay
                clearTimeout(timer)
                timer = null
                return
            }
            // sync
            option.shown()
        }
    })
}
