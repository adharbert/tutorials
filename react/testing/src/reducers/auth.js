import * as actionTypes from 'actions/types'

export default function(state = false, action) {
    switch(action.type) {
        case actionTypes.CHANGE_AUTH:
            return action.payload;
        default: 
            return state;
    }
}