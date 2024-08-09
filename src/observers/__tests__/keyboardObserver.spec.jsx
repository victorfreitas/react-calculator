import { describe, it, expect } from '@jest/globals'
import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { act } from 'react'

import { keyboardObserver } from '../keyboardObserver'
import { keyboard$ } from '../../observables/keyboardObservable'
import Button from '../../components/Button'

describe('should test the keyboard observer', () => {
  it('#keyboardObserver to be called with 1', async () => {
    const { container } = render(
      <Button className="digit" value="1" label="1" name="digit" />
    )
    const observer = jest.fn(keyboardObserver)

    expect(container).toBeInTheDocument()

    const subscribe = keyboard$.subscribe(observer)

    await userEvent.keyboard('1')
    expect(observer).toHaveBeenCalledWith('1')

    // Wait for the setTimeout to complete class removal from the button
    await act(() => new Promise(resolve => setTimeout(resolve, 100)))

    subscribe.unsubscribe()
  })

  it('#keyboardObserver to be called with negate', async () => {
    const { container } = render(
      <Button
        className="operator-control"
        value="negate"
        label="±"
        name="negate"
      />
    )

    expect(container).toBeInTheDocument()

    const observer = jest.fn(keyboardObserver)
    const subscribe = keyboard$.subscribe(observer)

    await userEvent.keyboard('{Alt>}-')
    expect(observer).toHaveBeenCalledWith('negate')

    subscribe.unsubscribe()
  })

  it('#keyboardObserver not to be called', async () => {
    const { container } = render(
      <Button className="digit" value="1" label="1" name="digit" />
    )
    const observer = jest.fn(keyboardObserver)

    expect(container).toBeInTheDocument()

    const subscription = keyboard$.subscribe(observer)

    await userEvent.keyboard('a')

    expect(observer).not.toBeCalled()

    subscription.unsubscribe()
  })
})
