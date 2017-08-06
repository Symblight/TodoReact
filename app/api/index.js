import axios from 'axios'

export default {
	addNote(data){
		return axios.post('/add', data);
	}
}