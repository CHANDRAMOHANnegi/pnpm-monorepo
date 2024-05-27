"use client"
import { MyButtonComponent, CMVideoPlayer as VideoPlayer } from "cm-component";
import { useRef } from "react";
import videojs from "video.js";
import Player from "video.js/dist/types/player";

function App() {
  const playerRef = useRef<Player | null>(null);
  const videoLink =
    "http://localhost:8000/uploads/courses/4d92fb21-1ec9-44c3-be53-6382d6a75414/index.m3u8";
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
      {/* <MyButtonComponent /> */}
    </>
  );
}

export default App;