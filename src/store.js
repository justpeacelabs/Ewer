import { createStore } from 'redux';
  /*
const rumour = {
        id,
        title: '',
        content: '',
        tags: [],
        geo: {
                town, province, region, country
        },
        likes: 0
};
*/
let ACTIONS = {
  ADD_TODO: ({ todos, ...state }, { text }) => ({
    todos: [...todos, {
      id: Math.random().toString(36).substring(2),
      text
    }],
    ...state
  }),

  REMOVE_TODO: ({ todos, ...state }, { todo }) => ({
    todos: todos.filter( i => i!==todo ),
    ...state
  })
};

const INITIAL = {
  rumours: []
};

export default createStore((state, action) => {
  if (action && ACTIONS[action.type]) {
    return ACTIONS[action.type](state, action);
  }
  return state;
}, INITIAL, window.devToolsExtension && window.devToolsExtension());
