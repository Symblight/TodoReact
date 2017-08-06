import React from 'react'
import TextField from 'material-ui/TextField';

const EditForm = ({
	onChangeTitle,
	onChangeDiscription,
	title,
	discription,
})=>(
	<div>			
		<TextField
			hintText="Hint Text"
			onChange={onChangeTitle}
			value={title}
		/><br />

		<TextField
			hintText="Message Field"
			loatingLabelText="MultiLine and FloatingLabel"
			multiLine={true}
			rows={2}
			onChange={onChangeDiscription}
			value={discription}
			/><br />
	</div>
);

export default EditForm;