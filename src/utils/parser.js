const toNum = v => {
  if ((v !== 0 && !v) || isNaN(v)) {
    throw new Error("The digit's value must be a valid number")
  }

  return Number(v)
}

export const calculation = {
  add: (a, b) => toNum(a) + toNum(b),
  subtract: (a, b) => toNum(a) - toNum(b),
  divide: (a, b) => toNum(a) / toNum(b),
  multiply: (a, b) => toNum(a) * toNum(b),
  percent: (a, b) => calculation.multiply(a, calculation.percentToDecimal(b)),
  percentToDecimal: percent => calculation.divide(percent, 100)
}

export const parseNumber = value => String(value).replace(/[^\d]+/g, '')
export const formatNumber = value =>
  new Intl.NumberFormat('en-US', { maximumSignificantDigits: 14 }).format(value)
