import React, { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa"; // Make sure to install react-icons
import video from "/public/video.mp4";

const PlayVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="bg-BackgroundColor pt-32 pb-10">
      <div className="max-w-max-width mx-auto">
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl">
          {/* Video Element */}
          <video
            ref={videoRef}
            src={video}
            className={`w-full h-full object-cover ${
              !isPlaying ? "blur-sm scale-105" : ""
            }`}
            onEnded={handleVideoEnd}
            controls={isPlaying}
            muted={!isPlaying} // Mute when not playing (in overlay mode)
          ></video>

          {/* Overlay with Play Button and Text */}
          {!isPlaying && (
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center transition-opacity duration-300">
              <div
                className="w-20 h-20 bg-BasicOrange rounded-full flex items-center justify-center cursor-pointer hover:bg-BasicOrange/90 transition-transform duration-300 hover:scale-110 mb-6"
                onClick={handlePlayClick}
              >
                <FaPlay className="text-white text-2xl ml-2" />
              </div>

              {/* Text below play button */}
              <div className="text-center max-w-lg px-4">
                <h3 className="text-white text-2xl font-bold mb-2">
                  Watch Our Story
                </h3>
                <p className="text-white/90 text-lg">
                  Learn how we've been delivering excellence across the nation
                  for over a decade
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
