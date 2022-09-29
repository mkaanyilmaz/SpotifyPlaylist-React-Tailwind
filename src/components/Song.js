import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentTrack } from "../store/currentTrack";

const Song = (track) => {
  const dispatch = useDispatch();

  const [isActive, setActive] = useState(false);
  const currentTrack = useSelector((state) => state.currentTrack);
  const devices = useSelector((state) => state.devices);

  const setCurrentMusic = async () => {
    dispatch(addCurrentTrack(track));
    setTimeout(() => {
      setActive(!isActive);
    }, 100);
    var bear = localStorage.getItem("acc");
    await axios.put(
      `https://api.spotify.com/v1/me/player/play?device_id=${devices.devices[0].id}`,
      {
        context_uri: currentTrack.currentTrack.track.albumUri,
        offset: {
          uri: currentTrack.currentTrack.track.uri,
        },
        position_ms: 0,
      },
      {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + bear,
          "Content-Type": "application/json",
        },
      }
    );
  };

  useEffect(() => {
    setActive(false);
  }, [currentTrack]);

  return (
    <>
      <div className="grid grid-cols-6 pt-6">
        <div className="h-14 bg-playlistBg">
          <img
            width={56}
            height={24}
            className="max-w-full max-h-full"
            src={track.track?.imageSrc}
            onClick={setCurrentMusic}
            alt=""
          ></img>
        </div>
        <div className="col-span-4 bg-playlistBg">
          <div className="grid-row-2 mt-1">
            <div
              className={
                isActive
                  ? "bg-blackplaylistBg text-green-400"
                  : "bg-blackplaylistBg text-white"
              }
            >
              {track.track?.name}
            </div>
            <div className="bg-playlistBg text-sm text-gray-400">
              <span className=" bg-gray-400 text-xs rounded-sm text-black mr-2 font-normal px-px">
                LYRICS
              </span>
              {track.track?.artist}
            </div>
          </div>
        </div>
        <div className="bg-playlistBg flex justify-center py-4 pl-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Song;
