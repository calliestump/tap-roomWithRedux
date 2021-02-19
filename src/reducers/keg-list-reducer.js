export default (state = {}, action) => {
  const { kegName, kegBrand, kegPintQuantity, kegAlcoholContent, kegPrice, id } = action;
  switch (action.type) {
  case 'ADD_KEG':
    return Object.assign({}, state, {
      [id] : {
        kegName,
        kegBrand,
        kegPintQuantity,
        kegAlcoholContent,
        kegPrice,
        id
      }
    });
  case 'BUY_PINT':
    return Object.assign({}, state, {
      [id]: {
        kegName,
        kegBrand,
        kegPintQuantity: kegPintQuantity - 1,
        kegAlcoholContent,
        kegPrice,
        id
      }
    });
  case 'RESTOCK_KEG':
    return Object.assign({}, state, {
      [id]: {
        kegName,
        kegBrand,
        kegPintQuantity: kegPintQuantity + 124,
        kegAlcoholContent,
        kegPrice,
        id
      }
    });
  case 'DELETE_KEG':
    let newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};