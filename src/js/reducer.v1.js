const Actions = {
  increment({count}){
    return {count: count + 1};
  },
  decrement({count}){
    return {count: count - 1};
  },
  reset(){
    return {count: 0};
  },
  default(state){
    return state;
  }
};

const reducer = (state = {count: 0}, { type }) => {
  return (Actions[type] || Actions.default)(state);
}

const store = Redux.createStore(reducer);
store.subscribe(() => {
  document.getElementById('reduxAttempt').textContent = store.getState().count;
});

// dispatch => reducer => action => subscriptions



