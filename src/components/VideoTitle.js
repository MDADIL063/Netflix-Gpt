import React from "react";
// ⏸️
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-16 absolute w-screen aspect-video text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl mb-5">{title}</h1>
      <p className="text-lg w-1/3">{overview}</p>
      <div className="mt-6">
        <button className="bg-white text-black text-xl p-2 px-9  rounded-md hover:bg-opacity-75">▷ Play</button>
        <button className="bg-gray-500 mx-2 text-white text-xl p-2 px-9 bg-opacity-40 rounded-md hover:bg-opacity-25">ⓘ More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
