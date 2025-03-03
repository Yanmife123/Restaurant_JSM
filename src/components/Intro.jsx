import { useState, useRef } from "react";
import { images, meal } from "../constants";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef();

  return (
    <div className=" md:h-[500px] h-[auto] relative">
      <video
        src={meal}
        ref={videoRef}
        typeof="video/mp4"
        muted
        loop
        controls={false}
        className="h-full w-full md:object-cover object-contain md:object-center object-top z-1"
      ></video>
      <div className="absolute h-full w-full bg-transparent z-2 top-0 left-0 flex justify-center items-center">
        <img
          src={!playVideo ? images.Play : images.pause}
          alt=""
          className="md:h-[100px] md:w-[100px] h-[70px] w-[70px]"
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              videoRef.current.pause();
            } else {
              videoRef.current.play();
            }
          }}
        />
      </div>
    </div>
  );
};

export default Intro;
