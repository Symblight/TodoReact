import thunk from 'redux-thunk'
import Reducers from '../reducers/index'
import { createStore, applyMiddleware } from 'redux'

const configurationStore = (initialState) =>{
	let store = createStore(
		Reducers,
		initialState,
		applyMiddleware(thunk)
	)

	return store
};

export default  configurationStore;