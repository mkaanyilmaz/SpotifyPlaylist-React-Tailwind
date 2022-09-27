import axios from 'axios';
import React, { Component, useEffect } from 'react';
import Footer from './components/Footer';
import Playlist from './components/Playlist';
import TopTitle from './components/TopTitle';
import Spotify from './util/services';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state= {
      "playlistResult": {},
      "trackList":[]
    }
  }
  componentDidMount() {
    if(this.state.playlistResult) {
      let accessToken;
      
      accessToken = Spotify.getAccessToken();
      console.warn(accessToken,'accesss');
      const headers = {
        Authorization: `Bearer ${accessToken}`
      };
      
      return axios.get(`https://api.spotify.com/v1/playlists/37i9dQZF1DX1tyCD9QhIWF`, { headers: headers }).then((response) => {
          this.state.playlistResult = response.data;
          this.setState({playlistResult: response.data});
          console.warn(this.state.playlistResult);
          let trackLists = [];
          response.data.tracks.items.forEach(item => {
            let trackItem = {
              id: item.track.id,
					    name: item.track.name,
					    artist: item.track.artists[0].name,
					    album: item.track.album.name,
					    uri: item.track.uri,
              imageSrc: item.track.album.images.filter(x => x.height === 300)[0].url
            }
            trackLists.push(trackItem);
          });
          this.state.trackList.push(trackLists);
          this.setState({trackList:trackLists});
          console.warn(this.state.trackList)
      });
    }
    
  }
  render() {
      return (
      <>
      <div className="w-4/12 h-screen mx-auto relative">
        <TopTitle title={this.state.playlistResult.name}/>
        <Playlist trackList={this.state.trackList.map(item => item)}/>
        <Footer/>
      </div>
      </>
    )
  }
}
