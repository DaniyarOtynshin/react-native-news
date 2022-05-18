import {SET_FAVORITE, REMOVE_FAVORITE} from '../action/actionType'

const initialState = {
	favorites: []
}

const favoriteReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case SET_FAVORITE:
			return {
				favorites: [...state.favorites, action.post]
			}
		case REMOVE_FAVORITE:
			const filteredFavorites = state.favorites.filter((post) => {
				// @ts-ignore
				return post.id !== action.id
			})

			return {
				favorites: filteredFavorites
			}
		default:
			return state
	}
}

export default favoriteReducer
