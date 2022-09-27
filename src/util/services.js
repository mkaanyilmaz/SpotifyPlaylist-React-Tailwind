import React, { Component } from 'react'
const CLIENT_ID = "57cbe3a4c1064ac1a8eabf59e28ff797";
const REDIRECT_URI = "http://localhost:3000";
let accessToken = '';
  const Spotify = {
    getAccessToken() {
      if (!accessToken) {
        if (accessToken) {
          return accessToken;
        }
        const newAccessToken = window.location.href.match(/access_token=([^&]*)/);
        const newExpiresIn = window.location.href.match(/expires_in=([^&]*)/);
        if (newAccessToken && newExpiresIn) {
          accessToken = newAccessToken[1];
          const expiresIn = Number(newExpiresIn[1]);
          window.setTimeout(() => (accessToken = ''), expiresIn * 1000);
          window.history.pushState('Access Token', null, '/');
          return accessToken
        } else {
          const accessUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&scope=playlist-modify-public&show_dialog=true&redirect_uri=${REDIRECT_URI}`;
          window.location = accessUrl;
        }
      }
    }
  }
export default Spotify;
