var reduce = require('lodash.reduce')

exports = module.exports = remapKeys

function remapKeys (obj, keyMap) {
  return reduce(obj, remap, {})

  function remap (newObj, val, oldKey) {
    var newKey
    if (keyMap[oldKey]) {
      newKey = keyMap[oldKey]
    } else {
      newKey = oldKey
    }

    if (val instanceof Object && !Buffer.isBuffer(val)) {
      newObj[newKey] = reduce(val, remap, {})
    } else {
      newObj[newKey] = val
    }
    return newObj
  }
}
