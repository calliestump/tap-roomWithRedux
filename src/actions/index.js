export const deleteKeg = id => ({
  type: 'DELETE_KEG',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addKeg = (keg) => {
  const { kegName, kegBrand, kegPintQuantity, kegAlcoholContent, kegPrice, id } = keg;
  return {
    type: 'ADD_KEG',
    kegName,
    kegBrand,
    kegPintQuantity,
    kegAlcoholContent,
    kegPrice,
    id
  }
}