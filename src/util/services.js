const CLIENT_ID = "57cbe3a4c1064ac1a8eabf59e28ff797";
const REDIRECT_URI = "http://localhost:3000";

let accessToken = "";
const Spotify = {
  getAccessToken() {
    var scopes =
      "user-read-private user-read-email playlist-modify-public user-read-playback-state user-read-currently-playing";
    if (!accessToken) {
      const newAccessToken = window.location.href.match(/access_token=([^&]*)/);
      const newExpiresIn = window.location.href.match(/expires_in=([^&]*)/);
      if (newAccessToken && newExpiresIn) {
        accessToken = newAccessToken[1];
        localStorage.setItem("acc", accessToken);
        window.history.pushState("Access Token", null, "/");
        return accessToken;
      } else {
        const accessUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&scope=${scopes}&show_dialog=true&redirect_uri=${REDIRECT_URI}`;
        window.location = accessUrl;
      }
    }
  },
};
export default Spotify;
