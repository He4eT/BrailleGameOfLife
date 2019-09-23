import test from 'ava'

import {
  countNeighbours,
  deadOrAlive,
  lifeStep
} from '../src/life'

/* countNeighbours */

const grid = [
  [0, 0, 0],
  [0, 0, 1],
  [0, 1, 0]]

;[
  [[0, 0], [0, 0]],
  [[0, 1], [1, 0]],
  [[0, 2], [1, 0]],
  [[1, 1], [2, 0]],
  [[2, 2], [2, 0]],
  [[1, 2], [1, 1]]
].forEach(([params, exp]) =>
  test('Count neighbours: ' + params, t =>
    t.deepEqual(
      countNeighbours(grid)(params),
      exp)))

/* deadOrAlive */

;[
  [[0, 0], 0],
  [[2, 0], 0],
  [[3, 0], 1],
  [[4, 0], 0],
  [[8, 0], 0]
].forEach(([params, exp]) =>
  test('Dead or alive: from 0: ' + params, t =>
    t.is(deadOrAlive(params), exp)))

;[
  [[0, 1], 0],
  [[1, 1], 0],
  [[2, 1], 1],
  [[3, 1], 1],
  [[4, 1], 0],
  [[5, 1], 0]
].forEach(([params, exp]) =>
  test('Dead or alive: from 1: ' + params, t =>
    t.is(deadOrAlive(params), exp)))

/* lifeStep */

test('Life step: block', t => {
  const block = [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0]]

  t.deepEqual(lifeStep(block), block)
})

test('Life step: blinker', t => {
  const blinker1 = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0]]

  const blinker2 = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]]

  t.deepEqual(lifeStep(blinker1), blinker2)
  t.deepEqual(lifeStep(blinker2), blinker1)
})
