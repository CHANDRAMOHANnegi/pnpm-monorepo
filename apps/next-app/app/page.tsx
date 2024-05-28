"use client"
import { CMVideoPlayer as VideoPlayer, } from "../components/video-player";
import { D2List } from 'cm-component'
import { useRef } from "react";
import videojs from "video.js";
import Player from "video.js/dist/types/player";
import 'video.js/dist/video-js.css';

function App() {
  const playerRef = useRef<Player | null>(null);
  const videoLink = "http://localhost:8000/uploads/courses/3f610c76-5178-4dc7-aad1-654f429dd85c/index.m3u8";
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
      <div className="flex justify-center items-center flex-col">
        <h1 className="">Video player</h1>
        <div className="border ">
          <VideoPlayer
            options={videoPlayerOptions}
            onReady={handlePlayerReady}
          />
        </div>
        <div>
          <D2List data={[
            { key: "1", label: "hello", url: videoLink },
            { key: "2", label: "hello 2", url: videoLink },
            { key: "3", label: "hello 3", url: videoLink },
            { key: "4", label: "hello", url: videoLink },
            { key: "5", label: "hello 2", url: videoLink },
            { key: "6", label: "hello 3", url: videoLink },
          ]} />
        </div>
      </div>
    </>
  );
}

export default App;