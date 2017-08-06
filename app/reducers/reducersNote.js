import { REQUEST_ADD_NOTE, SUCCESS_ADD_NOTE, INVALID_ADD_NOTE } from '../constants/AppConstants'

const initialState = {
	notes:[],
	note:{
		title:'',
		description:'',
		color:'',
		createAt:'',
		author:''
	},
	isFetching: false,
	didInvalid: false,
};

const reducerNote = (state=initialState, action) => {
	switch(action.type){
		case REQUEST_ADD_NOTE:{
			return Object.assign({}, state, {
				isFetching: true,
				didInvalid: false
			})
		}

		case SUCCESS_ADD_NOTE:{
			return Object.assign({}, state, {
				notes:[
					...state.notes,
					action.payload
				],
				isFetching: false,
				didInvalid: false,
			})
		}
		case INVALID_ADD_NOTE:{
			return Object.assign({}, state, {
				isFetching: false,
				didInvalid: true
			})
		}
		default:{
			return state
		}
	}
}

export default reducerNote