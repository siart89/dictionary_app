const init = JSON.parse(localStorage.getItem('myWords'));

export default (state = (init && new Set(init)) || new Set(), action) => {
  let tmpSet;
  switch (action.type) {
  case 'ADD_WORD':
    tmpSet = new Set(state);
    tmpSet.add(action.payload);
    return tmpSet;
  case 'REMOVE_WORD':
    tmpSet = new Set(state);
    tmpSet.delete(action.payload);
    return tmpSet;
  case 'ADD_TOLOCALSTORAGE':
    localStorage.setItem('myWords', JSON.stringify([...state]));
    return state;
  default:
    return state;
  }
};
