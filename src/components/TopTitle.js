import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const TopTitle = () => {
  const playlist = useSelector((state) => state.playlist);
  useEffect(() => {}, [playlist]);

  return (
    <>
      {playlist.playlistSongs && (
        <div className="w-full h-12 bg-title-color">
          <div className="w-full py-1 px-20">
            <p className="text-base font-nunito leading-normal normal-case text-white">
              {playlist.playlistSongs.name}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default TopTitle;
