const INITIAL_STORE = [
  {id: '1', text: 'Click in the todo to check', completed: false},
  {id: '2', text: 'Graduate', completed: true},
  {id: '3', text: 'Get a JS JOB', completed: false},
  {id: '4', text: 'Learn GraphQL', completed: false},
  {id: '5', text: 'Learn english properly', completed: false},
  {id: '6', text: 'Other stuff', completed: false},
];

export default ( store = INITIAL_STORE, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      // atribui o id do ultimo item da lista de todo
      // ou 1 caso a lista esteja vazia
      let lastId = 1;
      if(store.length > 0) {
        lastId = store[store.length -1].id;
      }

      return [...store, {id: lastId + 1, text: action.text, completed: false }];
    
      case 'DELETE_TODO':
      return store.filter((todo) => {
        return todo.id !== action.id;
      })
    
      case 'TOGGLE_TODO':
      return store.map((todo) => {
        if (todo.id === action.id) {
          // invertendo estado do todo
         todo.completed = (todo.completed) ? false : true;         
        }
        return todo;
      })
       
    default:
      return store;
  }
}