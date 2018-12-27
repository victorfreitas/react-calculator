export const operations = {
  '/': (a, b) => a / b,
  '*': (a, b) => a * b,
  '-': (a, b) => a - b,
  '+': (a, b) => a + b,
}

export const parseNumber = value => value.replace(/[^\d]+/g, '')
export const formatNumber = value => (
  new Intl.NumberFormat('en-US').format(parseFloat(value))
)
