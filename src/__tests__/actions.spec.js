import {add, del, toggle}  from '../actions/todoActions';

describe('testing actions', () => {
  test('all actions should return a object', () => {
    expect(typeof add()).toBe('object')
    expect(typeof del()).toBe('object')
    expect(typeof toggle()).toBe('object')
  })
  
  test('all actions should have a type', () =>{
    expect(add().type).toBeDefined()
    expect(del().type).toBeDefined()
    expect(toggle().type).toBeDefined()
  })

  test('all types should be strings', () => {
    expect(typeof add().type).toBe('string')
    expect(typeof del().type).toBe('string')
    expect(typeof toggle().type).toBe('string')
  })
})