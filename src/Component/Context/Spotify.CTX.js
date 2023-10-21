import { createContext } from 'react';

//  const actualURL = import.meta.url.split('/src')[0]

export const spotify = createContext({
  client_id: import.meta.env.VITE_API_KEY,
  user_id: import.meta.env.VITE_API_USER_ID,
  REDIRECT_URI: import.meta.env.VITE_REDIRECT_URL,
  client_secret: import.meta.env.VITE_CLIENT_SECRET, 

  AUTH_ENDPOINT: 'https://accounts.spotify.com/authorize',
  RESPONSE_TYPE: 'token',
  SCOPES: [
    'user-read-currently-playing',
    'user-follow-read',
    'user-read-email',
    'user-read-private',
    'user-library-read',
    'user-read-recently-played',
    'playlist-modify-public',
    'playlist-modify-private',
    'playlist-read-private',
    'user-top-read',
  ],
});
