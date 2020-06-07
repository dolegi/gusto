const afinnList = require('../data/AFINN-en-165.json')
const afinnEmoticons = require('../data/AFINN-emoticon-8')
const negators = require('../data/negators.json')
const afinnListMap = new Map()
const negatorsMap = new Map()
const emoticonsMap = new Map()

const symbols = ['"', '.',',','!','?',';',':','[',']','{','}','(',')', '/', '#', '%', '^', '&', '*', '=', '_', '`', '~']

Object.entries(afinnList).forEach(([k, v]) => {
  afinnListMap.set(k, v)
  afinnListMap.set(k.toUpperCase(), v)
  afinnListMap.set(k.split('').map((x, i) => i === 0? x.toUpperCase(): x).join(''), v);
  symbols.forEach(symbol => {
    afinnListMap.set(`${symbol}${k}`, v)
    afinnListMap.set(`${k}${symbol}`, v)
  })
  afinnListMap.set(`[${k}]`, v)
  afinnListMap.set(`(${k})`, v)
  afinnListMap.set(`{${k}}`, v)
})

Object.entries(negators).forEach(([k, v]) => {
  negatorsMap.set(k, v)
  negatorsMap.set(k.toUpperCase(), v)
  negatorsMap.set(k.split('').map((x, i) => i === 0? x.toUpperCase(): x).join(''), v)
  negatorsMap.set(k.split('').map((x, i) => i === 0? x.toUpperCase(): x).join(''), v);
  symbols.forEach(symbol => {
    negatorsMap.set(`${symbol}${k}`, v)
    negatorsMap.set(`${k}${symbol}`, v)
  })
  negatorsMap.set(`[${k}]`, v)
  negatorsMap.set(`(${k})`, v)
  negatorsMap.set(`{${k}}`, v)
})

Object.entries(afinnList).concat(Object.entries(afinnEmoticons)).forEach(([k, v]) => {
  emoticonsMap.set(k, v)
  emoticonsMap.set(k.toUpperCase(), v)
  emoticonsMap.set(k.split('').map((x, i) => i === 0? x.toUpperCase(): x).join(''), v)
  emoticonsMap.set(k.split('').map((x, i) => i === 0? x.toUpperCase(): x).join(''), v);
  symbols.forEach(symbol => {
    emoticonsMap.set(`${symbol}${k}`, v)
    emoticonsMap.set(`${k}${symbol}`, v)
  })
  emoticonsMap.set(`[${k}]`, v)
  emoticonsMap.set(`(${k})`, v)
  emoticonsMap.set(`{${k}}`, v)
})

function score (input, options = {}) {
  let prev = ''
  const map = options.emoticons ? emoticonsMap : afinnListMap
  return input
    .split(' ')
    .reduce((currentScore, word) => {
      if (!map.has(word) || /^\s+$/.test(word)) {
        prev = word
        return currentScore
      }

      if (negatorsMap.has(prev)) {
        prev = word
        return currentScore - map.get(word)
      }
      prev = word
      return currentScore + map.get(word)
    }, 0)
}

module.exports = {
  score 
}
