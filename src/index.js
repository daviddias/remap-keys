var _ = require('underscore')

exports = module.exports = remapKeys

function remapKeys (obj, keyMap) {
  return _.reduce(obj, remap, {})

  function remap (newObj, val, oldKey) {
    var newKey
    if (keyMap[oldKey]) {
      newKey = keyMap[oldKey]
    } else {
      newKey = oldKey
    }

    if (val instanceof Object && !Buffer.isBuffer(val)) {
      newObj[newKey] = _.reduce(val, remap, {})
    } else {
      newObj[newKey] = val
    }
    return newObj
  }
}
