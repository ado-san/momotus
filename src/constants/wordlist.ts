import { CONFIG } from './config'

export const WORDS = [
  'accent', 
  'bongos',
  'coucou',
  'djembe',
  'encore',
  'fouffe',
  'gitans',
  'hahaha',
  'ignare',
  'jacuzi',
  'kabyle',
  'louxor',
  'medley',
  'naines',
  'oompah',
  'putain',
  'quinte',
  'romain',
  'sonate',
  'tamtam',
  'unison',
  'vodkas',
  'whisky',
  'zigoto',
  'adrien',
  'betise',
  'cornet',
  'pixuli',
  'tonale',
  'timbre',
  'tomtom',
  'pierre',
  'amants',
  'violon',
  'bugles',
  'benoit',
  'basile',
  'tekila',
  'chloet',
  'titine',
  'phrase',
  'accord',
  'erwann',
  'volume',
  'gypsie',
  'presto',
  'sextet',
  'sergio',
  'perrin',
  'accent',
  'oliver',
  'pedale',
  'tempos',
  'pompes',
  'piotre',
  'ballet',
  'thomas',
  'triade',
  'grunge',
  'gammes',
  'bemols',
  'triton',
  'chorus',
  'dieses',
  'entree',
  'finale',
  'doigte',
  'groove',
  'legato',
  'jammer',
  'mesure',
  'motifs',
  'fugues',
  'octave',
  'piston',
  'tuplet',
  'aubade',
  'arpege',
  'septet',
  'mihail',
  'nuance',
  'tampon',
  'mineur',
  'jerome',
  'majeur',
  'tuning',
  'vivace',
  'tenors',
  'pastis',
  'tetris',
  'bambin',
  'aviron',
  'copain',
  'vielle',
  'celine',
  'dreams',
  'gowest',
  'griego',
  'chatte',
  'adagio',
  'malika',
]

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
