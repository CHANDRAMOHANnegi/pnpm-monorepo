const videoLink =
    "http://localhost:8000/uploads/courses/3f610c76-5178-4dc7-aad1-654f429dd85c/index.m3u8";
export const videoPlayerOptions = {
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