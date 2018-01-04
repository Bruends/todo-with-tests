import todoReducer from '../reducers/todoReducer';
import { add, del, toggle } from '../actions/todoActions';
import store from '../store';

describe('testing reducers: ', () => {
  
  test('should return the store when an undefined action is used', () => {
    const testStore = [{id: '1', text: 'learn tdd', completed: false}];
    expect(todoReducer(testStore, 'UNDEFINED_ACTION'))
      .toEqual(testStore)
  })

  test('should add a new todo, when ADD_TODO action is used', () => {
    const initialStore = [{id:1, text: 'old todo', completed: false}]
    const expectedStore = [
      {id:1, text: 'old todo', completed: false},
      {id:2, text: 'new todo', completed: false},
    ]

    expect(todoReducer(initialStore, add('new todo')))
      .toEqual(expectedStore)
  })

  test('should delete a  todo, when action DELETE_TODO action is used', () => {
    const initialStore = [
      {id:1, text: 'todo', completed: false},
      {id:2, text: 'todo to be deleted', completed: false},
    ]
    const expectedStore = [{id:1, text: 'todo', completed: false}]
    
    expect(todoReducer(initialStore, del(2)))
      .toEqual(expectedStore)
  })

  test('should toggle a todo completed state, when TOGGLE_TODO action is used', () => {
    let falseTodo = [{id: 1, text: 'todo', completed: false}]
    const trueTodo = [{id: 1, text: 'todo', completed: true}]
    expect(todoReducer(falseTodo, toggle(1)))
      .toEqual(trueTodo)
    
    // recuperando o valor para o proximo teste
    falseTodo = [{id: 1, text: 'todo', completed: false}]
    
    expect(todoReducer(trueTodo, toggle(1)))
      .toEqual(falseTodo)     
  });
});
