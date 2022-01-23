import React, { useRef } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import { useOutside } from './useOutside'

function FakeComponent({ action }) {
  const fakeRef = useRef()

  useOutside(fakeRef, () => action())

  return (
    <>
      <div>This will be the part of the component that trigger something</div>
      <div>some other element</div>
      <div ref={fakeRef}>
        This will be the part of the component that does nothing
        <button>Test</button>
      </div>
    </>
  )
}

describe('useOutside hook', () => {
  const mockFn = jest.fn()

  beforeEach(() => {
    mockFn.mockRestore()
  })

  it('should trigger specific action when click is not inside ref', () => {
    render(<FakeComponent action={mockFn} />)
    fireEvent.mouseDown(screen.getByText('some other element'))
    expect(mockFn).toHaveBeenCalled()
    fireEvent.mouseDown(screen.getByText('This will be the part of the component that trigger something'))
    expect(mockFn).toHaveBeenCalled()
  })

  it('should trigger specific action when escape keydown', () => {
    render(<FakeComponent action={mockFn} />)
    fireEvent.keyDown(screen.getByText('some other element'), {
      key: 'Escape',
      code: 'Escape'
    })
    expect(mockFn).toHaveBeenCalled()
  })

  it('should do nothing when is ref', () => {
    render(<FakeComponent action={mockFn} />)
    fireEvent.mouseDown(screen.getByText('Test'))
    expect(mockFn).not.toHaveBeenCalled()
    fireEvent.mouseDown(screen.getByText('This will be the part of the component that does nothing'))
    expect(mockFn).not.toHaveBeenCalled()
  })

  it('should do nothing when not escape keydown', () => {
    render(<FakeComponent action={mockFn} />)
    fireEvent.keyDown(screen.getByText('some other element'), {
      key: 'Enter',
      code: 'Enter'
    })
    expect(mockFn).not.toHaveBeenCalled()
  })
})
