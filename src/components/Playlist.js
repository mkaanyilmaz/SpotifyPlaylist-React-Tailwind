import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Song from "./Song";

const Playlist = () => {
  const playlist = useSelector((state) => state.playlist);
  const track = useSelector((state) => state.tracklist);
  useEffect(() => {}, [playlist, track]);

  return (
    <>
      {playlist.playlistSongs && (
        <div className="w-full h-[calc(100%-7rem)] bg-playlistBg overflow-auto">
          <div className="text-white px-6">
            {track.trackLists.map((item) => (
              <Song track={item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Playlist;
