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
    <div className="bg-BackgroundColor pt-16 md:pt-24 lg:pt-32 pb-6 md:pb-8 lg:pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-max-width mx-auto">
        <div className="relative w-full aspect-video rounded-lg md:rounded-xl overflow-hidden shadow-md md:shadow-lg lg:shadow-xl">
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
            playsInline // Better mobile experience
          ></video>

          {/* Overlay with Play Button and Text */}
          {!isPlaying && (
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center transition-opacity duration-300 p-4 sm:p-6 md:p-8">
              <div
                className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-BasicOrange rounded-full flex items-center justify-center cursor-pointer hover:bg-BasicOrange/90 transition-transform duration-300 hover:scale-110 mb-2 sm:mb-3 md:mb-4 lg:mb-6"
                onClick={handlePlayClick}
                aria-label="Play video"
              >
                <FaPlay className="text-white text-sm sm:text-base md:text-lg lg:text-2xl ml-0.5 sm:ml-1 md:ml-1.5 lg:ml-2" />
              </div>

              {/* Text below play button */}
              <div className="text-center max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg">
                <h3 className="text-BasicOrange text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 font-Oxanium">
                  FASTEST DELIVERY
                </h3>
                <p className="text-white/90 text-xs sm:text-sm md:text-base lg:text-lg font-Raleway">
                  You can get your valuable item in the fastest period of time
                  with safety. Because your emergency is our first priority.
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
