import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import carReducer from './carReducer'


const rootReducer = combineReducers({
    form: formReducer,
    car: carReducer
})

export default rootReducer;