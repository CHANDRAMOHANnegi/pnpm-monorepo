const videoLink =
    "http://localhost:8000/uploads/courses/edeeb903-90fb-4539-bfbb-60537291ffc8/index.m3u8";
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