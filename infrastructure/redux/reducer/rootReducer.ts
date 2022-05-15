import {combineReducers} from 'redux'
import favoriteReducer from "./favoriteReducer";

const rootReducer = combineReducers({
	favorite: favoriteReducer,
})

export default rootReducer
