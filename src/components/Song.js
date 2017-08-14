import React from 'react';

export default class Song extends React.Component{
	render(){
		const name=this.props.name
		return(
			<li>{name}</li>


			)
	}
}