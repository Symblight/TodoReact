import { REQUEST_ADD_NOTE, SUCCESS_ADD_NOTE, INVALID_ADD_NOTE } from '../constants/AppConstants'
import api from '../api/index'

const requsetNote = () =>{
	return {
		type: REQUEST_ADD_NOTE
	}
};

const successNote = (json) =>{
	return {
		type: SUCCESS_ADD_NOTE,
		payload: json.data
	}
}

const invalidNote = () =>{
	return {
		type: INVALID_ADD_NOTE
	}
}

export const fetchAddNote = (data) => {
	return (dispatch) =>{
		dispatch(requsetNote())
		return api.addNote(data)
		.then((res)=>{
			dispatch(successNote(res));
		})
		.catch((err)=>{
			dispatch(invalidNote());
		})
	}
}