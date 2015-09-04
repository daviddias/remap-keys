var Lab = require('lab')
var Code = require('code')
var lab = exports.lab = Lab.script()

var test = lab.test
var expect = Code.expect

var remapKeys = require('../src')

test('remap a key', function (done) {
  var obj = {
    data: 'aaah the data'
  }

  obj = remapKeys(obj, {data: 'newKey'})

  var expected = {
    newKey: 'aaah the data'
  }

  expect(obj).to.deep.equal(expected)
  done()
})

test('remap a key to a buffer val', function (done) {
  var obj = {
    data: new Buffer('buffer mumbo jumbo')
  }

  obj = remapKeys(obj, {data: 'newKey'})

  var expected = {
    newKey: new Buffer('buffer mumbo jumbo')
  }

  expect(obj).to.deep.equal(expected)
  done()
})

test('remap two key', function (done) {
  var obj = {
    a: 'a',
    b: 'b',
    c: 123
  }

  obj = remapKeys(obj, {
    a: 'aaa',
    c: 'ccc'
  })

  var expected = {
    aaa: 'a',
    b: 'b',
    ccc: 123
  }

  expect(obj).to.deep.equal(expected)
  done()
})

test('remap a nested key', function (done) {
  var obj = {
    nested: {
      key: 'bananas'
    }
  }

  obj = remapKeys(obj, {
    key: 'fruits'
  })

  var expected = {
    nested: {
      fruits: 'bananas'
    }
  }

  expect(obj).to.deep.equal(expected)
  done()
})

