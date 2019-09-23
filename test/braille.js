import test from 'ava'

import {
  patternToBraille,
  arrToPattern,
  gridToArrs
} from '../src/braille'

/* PatternToBraille */

;[
  ['00101110', '⡦'],
  ['10101110', '⡧'],
  ['01000110', '⡨'],
  ['11000110', '⡩'],
  ['01100110', '⡪'],
  ['11100110', '⡫'],
  ['01001110', '⡬'],
  ['11001110', '⡭']
].forEach(([params, exp]) =>
  test('PatternToBraille: ' + params, t =>
    t.is(
      patternToBraille(params),
      exp)))

/* Array to pattern */

const arr0 = [
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0]]

const arr1 = [
  [1, 0],
  [0, 1],
  [1, 0],
  [0, 1]]

;[
  [arr0, '00000000'],
  [arr1, '10011001']
].forEach(([params, exp]) =>
  test('Count neighbours: ' + params, t =>
    t.is(
      arrToPattern(params),
      exp)))

/* gridToArrs */

const grid1 = [
  [0, 0, 1, 0],
  [0, 0, 0, 1],
  [0, 0, 1, 0],
  [0, 0, 0, 1]]

test('Two arrs, one grid', t =>
  t.deepEqual(
    gridToArrs(grid1),
    [[arr0, arr1]]))

const grid2 = [
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [1, 0],
  [0, 1],
  [1, 0],
  [0, 1]]

test('Two arrs, another one grid', t =>
  t.deepEqual(
    gridToArrs(grid2), [
      [arr0],
      [arr1]]))
