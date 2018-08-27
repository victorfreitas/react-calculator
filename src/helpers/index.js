export const btnLabels = [
  { name: 'AC', class: 'double', type: 'clear' },
  { name: '%', class: '', type: 'perc' },
  { name: '/', class: 'operator', type: 'operation' },
  { name: '7', class: '', type: '' },
  { name: '8', class: '', type: '' },
  { name: '9', class: '', type: '' },
  { name: '*', class: 'operator', type: 'operation' },
  { name: '4', class: '', type: '' },
  { name: '5', class: '', type: '' },
  { name: '6', class: '', type: '' },
  { name: '-', class: 'operator', type: 'operation' },
  { name: '1', class: '', type: '' },
  { name: '2', class: '', type: '' },
  { name: '3', class: '', type: '' },
  { name: '+', class: 'operator', type: 'operation' },
  { name: '0', class: 'double', type: '' },
  { name: '.', class: '', type: '' },
  { name: '=', class: 'operator', type: 'result' },
]

export const operations = {
  '/': (a, b) => a / b,
  '*': (a, b) => a * b,
  '-': (a, b) => a - b,
  '+': (a, b) => a + b,
}

export const parseNumber = value => value.replace(/[^\d]+/g, '')

export const formatNumber = value =>
  new Intl.NumberFormat('en-US').format(parseFloat(value))
