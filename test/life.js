import test from 'ava'

import {
  countNeighbours,
  deadOrAlive,
  lifeStep
} from '../src/life'

test('Count neighbours', t => {
  const grid = [
    [0, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]

  const cn = countNeighbours(grid)
  t.deepEqual(cn([0, 0]), [0, 0])
  t.deepEqual(cn([0, 1]), [1, 0])
  t.deepEqual(cn([0, 2]), [1, 0])
  t.deepEqual(cn([1, 1]), [2, 0])
  t.deepEqual(cn([2, 2]), [2, 0])
  t.deepEqual(cn([1, 2]), [1, 1])
})

test('Dead or alive: from 0 to...', t => {
  t.is(deadOrAlive([0, 0]), 0)
  t.is(deadOrAlive([2, 0]), 0)
  t.is(deadOrAlive([3, 0]), 1)
  t.is(deadOrAlive([4, 0]), 0)
  t.is(deadOrAlive([8, 0]), 0)
})

test('Dead or alive: from 1 to...', t => {
  t.is(deadOrAlive([0, 1]), 0)
  t.is(deadOrAlive([1, 1]), 0)
  t.is(deadOrAlive([2, 1]), 1)
  t.is(deadOrAlive([3, 1]), 1)
  t.is(deadOrAlive([4, 1]), 0)
  t.is(deadOrAlive([5, 1]), 0)
})

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
