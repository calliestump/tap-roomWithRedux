import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  const { selectedKeg } = action;
  switch(action.type){
    case c.SELECT_KEG:
      return selectedKeg;
    default:
      return state;
  }    
}