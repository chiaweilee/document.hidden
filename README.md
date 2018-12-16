# document.hidden
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
