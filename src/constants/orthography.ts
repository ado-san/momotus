import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  'z',
  'e',
  'r',
  't',
  'y',
  'u',
  'i',
  'o',
  'p',
  'q',
  's',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  'm',
  'w',
  'x',
  'c',
  'v',
  'b',
  'n',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
