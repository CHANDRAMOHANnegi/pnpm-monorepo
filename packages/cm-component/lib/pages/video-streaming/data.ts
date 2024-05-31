export type VideoProp = {
    id: string
    thumbnail_url: string,
    title: string,
    description: string,
    updated_on: string,
    created_on: string,
    chapters: [],
    video_url: string
    publisher_details: object,
    video_meta: {
        available_speed: [],
        playback: [],
        subtitles: [],
        closed_captions: []
    }
}

export const videoList: Record<string, VideoProp> = {
    "1234": {
        id: "1234",
        thumbnail_url: "cm",
        title: "abcd",
        description: "cm",
        updated_on: "",
        created_on: "",
        chapters: [],
        video_url: "http://localhost:8000/uploads/courses/3f610c76-5178-4dc7-aad1-654f429dd85c/index.m3u8",
        publisher_details: {},
        video_meta: {
            available_speed: [],
            playback: [],
            subtitles: [],
            closed_captions: []
        }
    },
    "4321": {
        id: "4321",
        thumbnail_url: "cm",
        title: "abcd",
        description: "cm",
        updated_on: "",
        created_on: "",
        chapters: [],
        video_url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        publisher_details: {},
        video_meta: {
            available_speed: [],
            playback: [],
            subtitles: [],
            closed_captions: []
        }
    },
    "421": {
        id: "421",
        thumbnail_url: "cm",
        title: "abcd",
        description: "cm",
        updated_on: "",
        created_on: "",
        chapters: [],
        video_url: "http://localhost:8000/uploads/courses/3f610c76-5178-4dc7-aad1-654f429dd85c/index.m3u8",
        publisher_details: {},
        video_meta: {
            available_speed: [],
            playback: [],
            subtitles: [],
            closed_captions: []
        }
    },
    "41": {
        id: "41",
        thumbnail_url: "cm",
        title: "abcd",
        description: "cm",
        updated_on: "",
        created_on: "",
        chapters: [],
        video_url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        publisher_details: {},
        video_meta: {
            available_speed: [],
            playback: [],
            subtitles: [],
            closed_captions: []
        }
    },
    "42": {
        id: "42",
        thumbnail_url: "cm",
        title: "abcd",
        description: "cm",
        updated_on: "",
        created_on: "",
        chapters: [],
        video_url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        publisher_details: {},
        video_meta: {
            available_speed: [],
            playback: [],
            subtitles: [],
            closed_captions: []
        }
    },
    "21": {
        id: "21",
        thumbnail_url: "cm",
        title: "abcd",
        description: "cm",
        updated_on: "",
        created_on: "",
        chapters: [],
        video_url: "http://localhost:8000/uploads/courses/3f610c76-5178-4dc7-aad1-654f429dd85c/index.m3u8",
        publisher_details: {},
        video_meta: {
            available_speed: [],
            playback: [],
            subtitles: [],
            closed_captions: []
        }
    },
    "1": {
        id: "1",
        thumbnail_url: "cm",
        title: "abcd",
        description: "cm",
        updated_on: "",
        created_on: "",
        chapters: [],
        video_url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        publisher_details: {},
        video_meta: {
            available_speed: [],
            playback: [],
            subtitles: [],
            closed_captions: []
        }
    }
}
