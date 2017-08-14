import React from 'react';
import Song from '../components/Song';

export default class PlayList extends  React.Component{
	render(){
		const playlist=this.props.songs;
		return(
			<ul>
				{playlist.map(item => <Song name={item} />)}

			</ul>
			);
	}
}