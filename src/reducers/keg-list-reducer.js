export default (state = {}, action) => {
  const { kegName, kegBrand, kegPintQuantity, kegAlcoholContent, kegPrice, id } = action;
  switch (action.type) {
  case c.ADD_KEG:
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
  case c.BUY_PINT:
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
  case c.RESTOCK_KEG:
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
  case c.DELETE_KEG:
    const newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};