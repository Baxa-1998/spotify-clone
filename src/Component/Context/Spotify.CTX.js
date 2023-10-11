import { createContext } from "react";

export const spotify = createContext({
    client_id: import.meta.env.VITE_API_KEY,
    user_id: import.meta.env.VITE_API_USER_ID,
    REDIRECT_URI: 'http://localhost:5173',
    AUTH_ENDPOINT: 'https://accounts.spotify.com/authorize',
    RESPONSE_TYPE: 'token',
    SCOPES : ["user-read-currently-playing", "user-follow-read", "user-read-email", "user-read-private","user-library-read", "user-read-recently-played", "playlist-modify-public", "playlist-modify-private", "playlist-read-private", "user-top-read"]
 
})