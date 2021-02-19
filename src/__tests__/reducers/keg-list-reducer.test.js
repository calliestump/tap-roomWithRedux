import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {
  test('Should return the default state if it doesnt regonize any action types passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  })
})