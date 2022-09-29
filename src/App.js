import axios from "axios";
import React, { useEffect } from "react";
import Spotify from "./util/services";
import { useDispatch } from "react-redux";
import { addPlaylist } from "./store/playlist";
import { addTrackLists } from "./store/trackLists";
import Footer from "./components/Footer";
import Playlist from "./components/Playlist";
import TopTitle from "./components/TopTitle";
import { addDevices } from "./store/devices";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getSongs();
  }, []);

  const getSongs = async () => {
    let accessToken;
    accessToken = await Spotify.getAccessToken();
    console.warn(accessToken, "accesss");
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    await axios
      .get(`https://api.spotify.com/v1/playlists/37i9dQZF1DX1tyCD9QhIWF`, {
        headers: headers,
      })
      .then((response) => {
        var trackLists = [];
        var playlistResult = response.data;
        let tempTrackLists = [];
        response.data.tracks.items.forEach((item) => {
          let trackItem = {
            id: item.track.id,
            name: item.track.name,
            artist: item.track.artists[0].name,
            album: item.track.album.name,
            uri: item.track.uri,
            imageSrc: item.track.album.images.filter((x) => x.height === 300)[0]
              .url,
            albumUri: item.track.album.uri,
          };
          trackLists.push(trackItem);
        });
        trackLists.push(tempTrackLists);
        dispatch(addPlaylist(playlistResult));
        dispatch(addTrackLists(trackLists));
      })
      .catch((err) => {
        console.log(err);
      });
    await axios
      .get(`https://api.spotify.com/v1/me/player/devices`, {
        headers: headers,
      })
      .then((res) => {
        dispatch(addDevices(res.data.devices));
      });
  };

  return (
    <div className="w-4/12 h-screen mx-auto relative">
      <TopTitle />
      <Playlist />
      <Footer />
    </div>
  );
};

export default App;
