import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

  let action;

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
  const kegData = {
    kegName: 'Quarter-Barrel',
    kegBrand: 'Miller Lite',
    kegPintQuantity: 124,
    kegAlcoholContent: "25.6%",
    kegPrice: "12.99",
    id: 1
  }
  // Test for state
  test('Should return the default state if it doesnt regonize any action types passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  })

  // Test for ADD_KEG action
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
  });  

  // Test for DELETE_KEG action
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

  // Test for BUY_PINT action
  test('Should successfully buy a pint', () => {
    const { kegName, kegBrand, kegPintQuantity, kegAlcoholContent, kegPrice, id } = kegData;
    action = {
      type: 'BUY_PINT',
      kegName,
      kegBrand,
      kegPintQuantity,
      kegAlcoholContent,
      kegPrice,
      id
    };
    expect(kegListReducer(kegData, action)).toMatchObject({
      1: 
      {
        kegName: 'Quarter-Barrel',
        kegBrand: 'Miller Lite',
        kegPintQuantity: 123,
        kegAlcoholContent: "25.6%",
        kegPrice: "12.99",
        id: 1
      }
    });
  });
  // Test for RESTOCK_KEG action
  // test('Should restock a keg', () => {
  //   const { kegName, kegBrand, kegPintQuantity, kegAlcoholContent, kegPrice, id } = kegData;
  //   action = {
  //     type: 'RESTOCK_KEG',
  //     kegName,
  //     kegBrand,
  //     kegPintQuantity: 0,
  //     kegAlcoholContent,
  //     kegPrice,
  //     id
  //   };
  //   expect(kegListReducer(kegData, action)).toMatchObject({
  //     1: 
  //     {
  //       kegName: 'Quarter-Barrel',
  //       kegBrand: 'Miller Lite',
  //       kegPintQuantity: 124,
  //       kegAlcoholContent: "25.6%",
  //       kegPrice: "12.99",
  //       id: 1
  //     }
  //   });
  // });
});
