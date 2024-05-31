import { useRef, useState } from "react";
import videojs from "video.js";
import Player from "video.js/dist/types/player";
import 'video.js/dist/video-js.css';
import { Chip, D2List, CMVideoPlayer as VideoPlayer } from '../../index'
import LinearList from "../../components/list/h-linear-list";
import { videoList, VideoProp } from "./data";

export function VideoStreaming() {
    const playerRef = useRef<Player | null>(null);

    const [currentVideo, setCurrentVideo] = useState(videoList['1234'])

    const videoPlayerOptions = {
        controls: true,
        responsive: true,
        fluid: true,
        sources: [
            {
                src: currentVideo.video_url,
                // type: "mp4",
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

    const handleVideoClick = (video: object) => {
        setCurrentVideo(video as VideoProp)
    }

    console.log(currentVideo);


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
                <LinearList>
                    <Chip text="cm" type="filled" />
                    <Chip text="cm" type="outlined" />
                    <Chip text="cm" type="filled" />
                </LinearList>
                <D2List
                    onCardClick={handleVideoClick}
                    data={Object.values(videoList)} />
            </div>
        </>
    );
}

export default VideoStreaming;