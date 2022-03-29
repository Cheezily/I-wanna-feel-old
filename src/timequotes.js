const QUOTES = [
  {
    'quote': 'Time flies over us, but leaves its shadow behind.',
    'by': 'Nathaniel Hawthorne'
  },
  {
    'quote': 'You may delay, but time will not.',
    'by': 'Benjamin Franklin'
  },
  {
    'quote': 'Make use of time, let not advantage slip.',
    'by': 'William Shakespeare'
  },
  {
    'quote': 'I wasted time, and now doth time waste me.',
    'by': "William Shakespeare, 'Richard II, part V'"
  },
  {
    'quote': 'The minutes rushed past, without compassion for my enthusiasm.',
    'by': "Nicola Lecca"
  },
  {
    'quote': 'Time brings all things to pass.',
    'by': "Aeschylus"
  },
  {
    'quote': "Don't use time and words carelessly - neither can be retrieved.",
    'by': "Lecrae"
  },
  {
    'quote': "The trouble is you think you have time.",
    'by': "Gautama Buddha"
  },
]

function getTimeQuote() {
  return QUOTES[Math.floor(Math.random() * QUOTES.length)]
}

export { getTimeQuote }