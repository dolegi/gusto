const Benchmark = require('benchmark')

const Sentiment = require('sentiment')
const sentiment = new Sentiment()
const sentimental = require('Sentimental')
const gusto = require('../src/index')

const stringShort = 'This cat is totally awesome'
const stringLong = require('./data/corpus')

new Benchmark.Suite()
  .add('sentiment (5.0.2) - Short ', function () {
    sentiment.analyze(stringShort)
  })
  .add('Sentimental (1.0.1) - Short', function () {
    sentimental.analyze(stringShort)
  })
  .add('Gusto short', function () {
    gusto.score(stringShort)
  })
  .on('cycle', function (event) {
    process.stdout.write(String(event.target) + '\n')
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run({
    minSamples: 1000,
    delay: 2
  })

new Benchmark.Suite()
  .add('sentiment (5.0.2) - Long  ', function () {
    sentiment.analyze(stringLong)
  })
  .add('Sentimental (1.0.1) - Long ', function () {
    sentimental.analyze(stringLong)
  })
  .add('Gusto long', function () {
    gusto.score(stringLong)
  })
  .on('cycle', function (event) {
    process.stdout.write(String(event.target) + '\n')
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run()
