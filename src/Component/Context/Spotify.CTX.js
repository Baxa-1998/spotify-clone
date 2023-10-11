import { createContext } from "react";

export const spotify = createContext({
    client_id: '10198f0f3c404c80aa40b2db5a786d4a',
    user_id: '31xggoj5rvzzshyi4mkydnxcnffa',
    REDIRECT_URI: 'http://localhost:5173',
    AUTH_ENDPOINT: 'https://accounts.spotify.com/authorize',
    RESPONSE_TYPE: 'token',
    SCOPES : ["user-read-currently-playing", "user-follow-read", "user-read-email", "user-read-private","user-library-read", "user-read-recently-played", "playlist-modify-public", "playlist-modify-private", "playlist-read-private", "user-top-read"]
 
})