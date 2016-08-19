remap-keys
===========

[![](https://img.shields.io/badge/made%20by-Protocol%20Labs-blue.svg?style=flat-square)](http://ipn.io)
[![](https://img.shields.io/badge/freenode-%23ipfs-blue.svg?style=flat-square)](http://webchat.freenode.net/?channels=%23ipfs)
[![Build Status](https://travis-ci.org/diasdavid/remap-keys.svg?style=flat-square)](https://travis-ci.org/diasdavid/remap-keys)
[![Dependency Status](https://david-dm.org/diasdavid/remap-keys.svg?style=flat-square)](https://david-dm.org/diasdavid/remap-keys)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)

> Rename the keys of a JavaScript Object simply by using a map/dict to do it

# Usage

```
var remapKeys = require('remap-keys')

var obj = {
  data: 'aaah the data'
}

obj = remapKeys(obj, {
  data: 'newKey'
})

console.log(obj)
// { newKey: 'aaah the data'
```

# Credits

While I was looking for a solution to remap keys in a JS obj, I found an [incomplete version](http://stackoverflow.com/a/31664783/520516) in Stack Overflow by [`tldr`](http://stackoverflow.com/users/1375688/tldr) which I used as inspiration for this module.
