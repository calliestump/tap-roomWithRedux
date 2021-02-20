import * as c from './ActionTypes';
 
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

export const buyPint = (keg) => {
  const {kegName, kegBrand, kegPintQuantity, kegAlcoholContent, kegPrice, id} = keg;
  return {
    type: 'BUY_PINT',
    kegName,
    kegBrand,
    kegPintQuantity,
    kegAlcoholContent,
    kegPrice,
    id
  }
}

export const selectKeg = (keg) => ({
  type: c.SELECT_KEG,
  keg
});