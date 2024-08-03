import { describe, it, expect } from '@jest/globals'
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'
import { waitFor } from '@testing-library/react'

import reportWebVitals from '../reportWebVitals'

jest.mock('web-vitals', () => ({
  getCLS: jest.fn(),
  getFID: jest.fn(),
  getFCP: jest.fn(),
  getLCP: jest.fn(),
  getTTFB: jest.fn()
}))

describe('must be call web vitals', () => {
  it('must call all web-vitals functions when onPerfEntry is a function', async () => {
    const onPerfEntry = jest.fn()

    await waitFor(() => reportWebVitals(onPerfEntry))

    expect(getCLS).toHaveBeenCalledWith(onPerfEntry)
    expect(getFID).toHaveBeenCalledWith(onPerfEntry)
    expect(getFCP).toHaveBeenCalledWith(onPerfEntry)
    expect(getLCP).toHaveBeenCalledWith(onPerfEntry)
    expect(getTTFB).toHaveBeenCalledWith(onPerfEntry)
  })

  it('must not call all web-vitals functions when onPerfEntry is not provide', async () => {
    await waitFor(() => reportWebVitals())

    expect(getCLS).not.toHaveBeenCalled()
    expect(getFID).not.toHaveBeenCalled()
    expect(getFCP).not.toHaveBeenCalled()
    expect(getLCP).not.toHaveBeenCalled()
    expect(getTTFB).not.toHaveBeenCalled()
  })
})
