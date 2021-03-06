import * as actionTypes from '../actions/actionTypes';

const initialState = [];

export default function(state = initialState, action) {
    switch(action.type) {
        case actionTypes.GET_CAR_DETAILS:
            return action.payload
        default:
            return state;
    }
}