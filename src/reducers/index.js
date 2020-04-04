import {combineReducers} from 'redux';
import {itemsState} from './itemReducer';
import {selectionState} from './cartSelectionReducer'
import {categoriesState} from './categoryReducer'
import {filterState} from './filterReducer'
import {cartState} from './cartReducer'
export default combineReducers(
    {
        itemsState,selectionState,categoriesState,filterState,cartState
    }
)