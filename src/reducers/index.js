import formVisibleReducer from './form-visible-reducer';
import kegListReducer from './keg-list-reducer';
import { combineReducers } from 'redux';
import selectedKegReducer from './selected-keg-reducer';
import editingReducer from './keg-editing-reducer';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterKegList: kegListReducer,
  selectedKeg : selectedKegReducer,
  editing: editingReducer
});

export default rootReducer;