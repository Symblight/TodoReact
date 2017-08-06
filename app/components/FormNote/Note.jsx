import React from 'react'

const NoteContainer = ({
		title,
		description,
		color,
		createAt,
		author,
})=>(
	<div className='style-note'>
	<h4>{title}</h4>
	<h4>{description}</h4>
	<h4>{color}</h4>
	<h4>{author}</h4>
	<h4>{author}</h4>
	</div>
);

export default NoteContainer;