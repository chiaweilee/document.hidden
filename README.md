# document.hidden

[![Greenkeeper badge](https://badges.greenkeeper.io/chiaweilee/document.hidden.svg)](https://greenkeeper.io/)

Listen document hidden &amp; shown

# Install
```js
npm install document.hidden
```

# Usage
```js
import hidden from 'document.hidden'
hidden({
  delay: 3000,
  hidden () {
    console.log('document hidden more than 3000ms')
  },
  shown () {
    console.log('shown after hidden')
    // if hidden less than 3000ms and shown next, shown() will not been called.
  }
})
```

# Example
```js
import hidden from 'document.hidden'
hidden({
  delay: 10000,
  hidden () {
    WS.close() // close websocket connection if document hidden
  },
  shown () {
    WS.connect()
  }
})
```
