const {
  lifeStep
} = require('./src/life')

const {
  gridToArrs,
  arrToPattern,
  patternToBraille
} = require('./src/braille')

/* */

const rnd = _ =>
  (2 * Math.random()) | 0

const randomGrid = (h, w) =>
  Array(h).fill().map(_ =>
    Array(w).fill().map(_ =>
      rnd()))

/* */

process.stdout.write('\x1Bc')

const { rows, columns } = process.stdout
let grid = lifeStep(
  randomGrid(rows * 4, columns * 2))

setInterval(_ => {
  const img = []
    .concat(...gridToArrs(grid))
    .map(arrToPattern)
    .map(patternToBraille)
    .join``

  process.stdout.cursorTo(0, 0)
  process.stdout.write(img)

  grid = lifeStep(grid)
}, 500)
