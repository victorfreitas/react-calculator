import { describe, it, expect } from '@jest/globals'

import * as parser from '../parser'

const operators = [
  { k: 'add', vp: 110, vn: -110, vf: 110.51 },
  { k: 'subtract', vp: 90, vn: -90, vf: 90.21 },
  { k: 'multiply', vp: 1000, vn: 1000, vf: 1018.654 },
  { k: 'divide', vp: 10, vn: 10, vf: 9.88768472906404 },
  { k: 'percent', vp: 10, vn: 10, vf: 10.18654 }
]

describe('should test the parsers', () => {
  it('should test the operator', () => {
    const error = new Error("The digit's value must be a valid number")

    operators.forEach(({ k, vp, vn, vf }) => {
      expect(parser.calculation[k](100, 10)).toStrictEqual(vp)
      expect(parser.calculation[k]('100', 10)).toStrictEqual(vp)
      expect(parser.calculation[k](100, '10')).toStrictEqual(vp)
      expect(parser.calculation[k]('100', '10')).toStrictEqual(vp)
      expect(parser.calculation[k](-100, -10)).toStrictEqual(vn)
      expect(parser.calculation[k](100.36, 10.15)).toStrictEqual(vf)
      expect(parser.calculation[k](100, 10)).not.toStrictEqual(100)
      expect(() => parser.calculation[k]('AC', 10)).toThrow(error)
      expect(() => parser.calculation[k]('AC')).toThrow(error)
      expect(() => parser.calculation[k](null)).toThrow(error)
      expect(() => parser.calculation[k]()).toThrow(error)
      expect(() => parser.calculation[k]({}, {})).toThrow(error)
      expect(() => parser.calculation[k]({}, 10)).toThrow(error)
      expect(() => parser.calculation[k](10, null)).toThrow(error)
      expect(() => parser.calculation[k]('', '')).toThrow(error)
    })
  })

  it('should test the parse number', () => {
    expect(parser.parseNumber('123DE')).toStrictEqual('123')
    expect(parser.parseNumber('AB123FG')).toStrictEqual('123')
    expect(parser.parseNumber('AB123')).toStrictEqual('123')
    expect(parser.parseNumber('AB-123')).toStrictEqual('123')
    expect(parser.parseNumber('AB-123/||?</{}')).toStrictEqual('123')
    expect(parser.parseNumber('AB')).toStrictEqual('')
    expect(parser.parseNumber('')).toStrictEqual('')
    expect(parser.parseNumber(0)).toStrictEqual('0')
    expect(parser.parseNumber({})).toStrictEqual('')
    expect(parser.parseNumber(null)).toStrictEqual('')
    expect(parser.parseNumber()).toStrictEqual('')
  })

  it('should test the format value', () => {
    expect(parser.formatNumber(365.45)).toStrictEqual('365.45')
    expect(parser.formatNumber(1365.45)).toStrictEqual('1,365.45')
    expect(parser.formatNumber(1000000)).toStrictEqual('1,000,000')
    expect(parser.formatNumber('123DE')).toStrictEqual('NaN')
    expect(parser.formatNumber('AB123FG')).toStrictEqual('NaN')
    expect(parser.formatNumber('AB123')).toStrictEqual('NaN')
    expect(parser.formatNumber('AB-123')).toStrictEqual('NaN')
    expect(parser.formatNumber('AB-123/||?</{}')).toStrictEqual('NaN')
    expect(parser.formatNumber('AB')).toStrictEqual('NaN')
    expect(parser.formatNumber('')).toStrictEqual('0')
    expect(parser.formatNumber(0)).toStrictEqual('0')
    expect(parser.formatNumber({})).toStrictEqual('NaN')
    expect(parser.formatNumber(null)).toStrictEqual('0')
    expect(parser.formatNumber()).toStrictEqual('NaN')
  })
})
