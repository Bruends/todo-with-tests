export const add = (text) => ({
  type: 'ADD_TODO',
  text
});

export const del = (id) => ({
  type: 'DELETE_TODO',
  id 
});

export const toggle = (id) => ({
  type: 'TOGGLE_TODO',
  id 
});