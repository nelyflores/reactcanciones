import React from 'react';
export default class AddSong extends React.Component{
	constructor(props){
		super(props);
		this.state= {
			newSong:""
		};


	}


	handleSubmit(e){
		e.preventDefault();
		const newSong= this.state.newSong;
		this.props.addSongToPlaylist(newSong);

	}
	updateState(e){
		const newSong =e.target.value;
		console.log(newSong);
		//console.log(this);
		this.setState({
			newSong:newSong
		});

	}
	render(){
		return(
			<form onSubmit={this.handleSubmit.bind(this)}>
			<input type="text"onChange={this.updateState.bind(this)} />

			<button type="submit">Crear</button>
			</form>
		);
	}
}