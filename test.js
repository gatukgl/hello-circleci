import { add } from './index'

describe('Adding', () => {
  it('should return 0 if there is no input', () => {
    const actual = add()
    expect(actual).toBe(0)
  })

  it('should return 0 if inputs are 0', () => {
    const actual = add(0, 0)
    expect(actual).toBe(0)
  })

  it('should return 1 if first input is 1 and second input is 0', () => {
    const actual = add(1, 0)
    expect(actual).toBe(1)
  })

  it('should return 1 if receive 1 as a input only', () => {
    const actual = add(1)
    expect(actual).toBe(1)
  })
})
