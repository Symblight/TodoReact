import React, { Component } from 'react'
import EditTextField from './EditForm'
import Note from './Note'
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux'
import { fetchAddNote } from '../../actions/actionNote'

class FormNoteEdit extends Component{
	constructor(props){
		super(props);
		this.state = {
			valueTitle:'',
			valueDiscription: '',
			Notes:[]
		};

		this.changeTextTitle = this.changeTextTitle.bind(this);
		this.changeTextDiscription = this.changeTextDiscription.bind(this);
		this.onSubmitForm = this.onSubmitForm.bind(this); 
	}

	componentDidMount(){
		let note = {
			title:this.state.valueTitle,
			description: this.state.valueDiscription,
			author: 'admin',
			color: 'red'
		};
	}

	changeTextTitle(e){
		this.setState({valueTitle:e.target.value});
	}

	changeTextDiscription(e){
		this.setState({valueDiscription:e.target.value});
	}

	onSubmitForm(){
		let note = {
			title:this.state.valueTitle,
			description: this.state.valueDiscription,
			author: 'admin',
			color: 'red'
		};
		this.props.onAddNote(note).then(()=>{
			this.setState({Notes: this.props.storeNote})
		})
	}

	render(){
		return <div>
				<div className='style-form-edit'>
					<EditTextField
						onChangeTitle={this.changeTextTitle} 
						onChangeDiscription={this.changeTextDiscription}
						title = {this.state.valueTitle}
						discription = {this.state.valueDiscription}
					/>
					 <FlatButton label="Primary" primary={true} onClick={this.onSubmitForm}/>
				 </div>
					{
						 this.state.Notes.map((el, i)=>
						 	<Note
						 		id={el._id}
						 		title={el.title}
								description={el.description}
								author={el.author}
								color={el.color}
								createAt={el.createAt}
						 	/>
						 )
					}
			</div>
	}
}

const mapStateToProps = (state) =>{
	return {
		storeNote: state.reducerNote.notes
	}
}

const mapDispatchToProp = (dispatch) =>{
	return {
		onAddNote: (data) => dispatch(fetchAddNote(data))
	}
}

export default connect(mapStateToProps, mapDispatchToProp)(FormNoteEdit);