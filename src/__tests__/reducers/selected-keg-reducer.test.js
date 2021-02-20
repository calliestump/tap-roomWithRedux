import selectedKegReducer from '../../reducers/selected-keg-reducer';
import * as a from '../../actions';
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

  test('should return specific keg when SELECT_KEG is triggered', () => {
    const action = a.selectKeg(keg);
    expect(selectedKegReducer({}, action)).toEqual(keg);
  });
});