import * as actionTypes from './actionTypes'


export const getCarList = () => (dispatch) => {
    fetch('/api/cars')
        .then(result => result.json())
        .then(rowData => {
            dispatch({
                type: actionTypes.GET_CAR_DETAILS,
                payload: rowData
            })
        })
}