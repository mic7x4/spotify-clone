export const authEndpoint = 
"https://accounts.spotify.com/authorize";

const redirectURL = "http://localhost:3000";
const clientId = "e0bc3456ba624c7b868bc02a1340185e";

const scopes =[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

