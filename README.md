# document.hidden
Listen document hidden &amp; shown

<a href="https://npmcharts.com/compare/document.hidden?minimal=true"><img src="https://img.shields.io/npm/dm/document.hidden.svg" alt="Downloads"></a>
<a href="https://www.npmjs.com/package/document.hidden"><img src="https://img.shields.io/npm/v/document.hidden.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/document.hidden"><img src="https://img.shields.io/npm/l/document.hidden.svg" alt="License"></a>

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
