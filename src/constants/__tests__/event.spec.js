import { test, expect } from '@jest/globals'

import * as EventName from '../event'

test('should valid calculator click event name', () => {
  expect(EventName.CLICK_CALCULATOR.startsWith('events:')).toBe(true)
})
