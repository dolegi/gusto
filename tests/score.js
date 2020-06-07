const assert = require('assert').strict
const { score } = require('../src/index')

// Positive
assert.equal(score('This is utterly excellent!'), 3)
assert.equal(score('This cat is totally awesome'), 4)

// Negative
assert.equal(score('This horrible cake tastes disgusting'), -6)

// Positive Negation
assert.equal(score('This cake is not bad'), 3)
assert.equal(score('Don\'t complain about what isn\'t bad'), 5)

// Emoticon support
assert.equal(score('I saw that yesterday :)', { emoticons: true }), 2)
