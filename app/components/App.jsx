import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Editor from './FormNote/index'

export default class App extends Component{
	render(){
		return <section>
			<AppBar
				    title="Title"
				    iconClassNameRight="muidocs-icon-navigation-expand-more"
				    className = "style-navbar-css"
				  />
				  <Editor/>
			  </section>
	}
}