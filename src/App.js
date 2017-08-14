import React from 'react';
import PlayList from './containers/PlayList';
import AddSong from  './components/AddSong'

export default class App extends React.Component{
	constructor(props){
		super(props);
		this.state={
			playlist:['Shape of You','Horror', 'Mas Horror']
		};
		this.addSongToPlaylist = this.addSongToPlaylist.bind(this);
	}
	addSongToPlaylist(song){
		let playlist = this.state.playlist;
		playlist.push(song);
		this.setState({
			playlist:playlist
		});
	}
  render(){
  	const songs=this.state.playlist;
    return (
      <div>
      <h1>Spotirank</h1>
      <AddSong addSongToPlaylist={this.addSongToPlaylist}/>
      <PlayList songs={songs}/>
      
      </div>
      );
  }
}
