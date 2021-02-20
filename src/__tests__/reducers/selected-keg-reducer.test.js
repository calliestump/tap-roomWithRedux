import selectedKegReducer from '../../reducers/selected-keg-reducer';

describe('selectedKegReducer', () => {
  const keg = {
    kegName: 'Quarter-Barrel',
    kegBrand: 'Miller Lite',
    kegPintQuantity: 124,
    kegAlcoholContent: "25.6%",
    kegPrice: "12.99",
    id: 1
  }
  test('should return default state if no type is recognized', () =>{
    expect(selectedKegReducer({}, {type:null})).toEqual({})
  });
});