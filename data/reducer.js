import { combineReducers } from 'redux';
import {ACTIONS} from './actions';

const initialState = {
    fontSize: 20,
}

function rootStore(state = initialState, action) {
    switch(action.type) {
        case ACTIONS.SET_FONTSIZE: {
            return {
                fontSize: action.fontSize
            }
        }

        default:
            return state;
    }
}

const reducer = combineReducers({
    rootStore,
})

export default reducer;