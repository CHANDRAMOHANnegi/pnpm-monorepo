"use client"
import VideoPlayer from "@/components/video-player";
import { useRef } from "react";
import videojs from "video.js";
import Player from "video.js/dist/types/player";

function App() {
  const playerRef = useRef<Player>(null);
  const videoLink =
    "http://localhost:8000/uploads/courses/edeeb903-90fb-4539-bfbb-60537291ffc8/index.m3u8";
  const videoPlayerOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: videoLink,
        type: "application/x-mpegURL",
      },
    ],
  };
  const handlePlayerReady = (player: Player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };
  return (
    <>
      <div>
        <h1>Video player</h1>
      </div>

      <VideoPlayer
        options={videoPlayerOptions}
        onReady={handlePlayerReady}
      />
    </>
  );
}

export default App;