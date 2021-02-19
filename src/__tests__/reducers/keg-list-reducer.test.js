import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

  let action;
  const kegData = {
    kegName: 'Quarter-Barrel',
    kegBrand: 'Miller Lite',
    kegPintQuantity: 124,
    kegAlcoholContent: "25.6%",
    kegPrice: "12.99",
    id: 1
  }

  const currentState = {
    1: 
    {
      kegName: 'Quarter-Barrel',
      kegBrand: 'Miller Lite',
      kegPintQuantity: 124,
      kegAlcoholContent: "25.6%",
      kegPrice: "12.99",
      id: 1
    },
    2:
    {
      kegName: 'Half-Barrel',
      kegBrand: 'Bud Light',
      kegPintQuantity: 124,
      kegAlcoholContent: "28.5%",
      kegPrice: "13.99",
      id: 2
    }
  }
  test('Should return the default state if it doesnt regonize any action types passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  })

  test('Should successfully add a new keg data to masterKegList', () => {
    const { kegName, kegBrand, kegPintQuantity, kegAlcoholContent, kegPrice, id } = kegData;
    action = {
      type: 'ADD_KEG',
      kegName,
      kegBrand,
      kegPintQuantity,
      kegAlcoholContent,
      kegPrice,
      id
    };
    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        kegName,
        kegBrand,
        kegPintQuantity,
        kegAlcoholContent,
        kegPrice,
        id
      }
    });

    test('Should successfully delete a keg', () => {
      action = {
        type: 'DELETE_KEG',
        id: 1
      };
      expect(kegListReducer(currentState, action)).toEqual({
        2:
        {
          kegName: 'Half-Barrel',
          kegBrand: 'Bud Light',
          kegPintQuantity: 124,
          kegAlcoholContent: "28.5%",
          kegPrice: "13.99",
          id: 2
        }
      });
    });
  });
});
