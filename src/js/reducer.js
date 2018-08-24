const initialState = {
  selected: null,
};

const Actions = {
  conversionClick({ selected },  { id }) {
    return { selected: id === selected ? null : id };
  },
};

const update = () => {
  const { selected } = store.getState();
  document.querySelectorAll('.mainConversion').forEach((element, index) => {
    element.classList[selected === index ? 'add' : 'remove']('mainConversion--toggled');
  });
};

// dispatch => action => subscriptions
const store = Redux.createStore((state = initialState, action) => (Actions[action.type] || ((s) => s))(state, action));

store.subscribe(update);
