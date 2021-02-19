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
    default:
      return state;
  }
};