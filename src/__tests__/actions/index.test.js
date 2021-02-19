import * as actions from './../../actions';

describe('tap room actions', () => {
  it('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: 'DELETE_KEG',
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });

  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({kegName: 'Quarter-Barrel', kegBrand: 'Miller Lite', kegPintQuantity: 124, kegAlcoholContent: "25.6%", kegPrice: "12.99", id: 1})).toEqual({
      type: 'ADD_KEG',
      kegName: 'Quarter-Barrel',
      kegBrand: 'Miller Lite',
      kegPintQuantity: 124,
      kegAlcoholContent: "25.6%",
      kegPrice: "12.99",
      id: 1
    });
  });
  
});