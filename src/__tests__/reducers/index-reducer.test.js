import rootReducer from '../../reducers/index';

describe("rootReducer", () => {

  test('Should return default state if no action type is recongized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterKegList: {},
      formVisibleOnPage: false
    })
  })
})