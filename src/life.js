const countNeighbours = grid => ([y, x]) => {
  const sum = (a, b) => a + b

  const area = (grid, y, x) => {
    const [yf, xf] = [y, x].map(c => Math.max(0, c - 1))
    const [yt, xt] = [y, x].map(c => c + 2)
    return grid
      .slice(yf, yt)
      .map(row => row.slice(xf, xt))
  }

  const areaSum =
    area(grid, y, x)
      .map(row =>
        row.reduce(sum, 0))
      .reduce(sum, 0)

  return [areaSum - grid[y][x], grid[y][x]]
}

/**
  * Any live cell with fewer than two live neighbours dies, as if by underpopulation.
  * Any live cell with more than three live neighbours dies, as if by overpopulation.
  * Any live cell with two or three live neighbours lives on to the next generation.
  * Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
  */
const deadOrAlive = ([neighbours, cell]) => {
  if (cell && neighbours < 2) return 0
  if (cell && neighbours > 3) return 0
  if (cell && [2, 3].includes(neighbours)) return 1
  if (!cell && neighbours === 3) return 1
  else return 0
}

const lifeStep = grid =>
  grid.map((row, y) =>
    row
      .map((_, x) => [y, x])
      .map(countNeighbours(grid))
      .map(deadOrAlive))

module.exports = {
  countNeighbours,
  lifeStep,
  deadOrAlive
}
