import axios, { AxiosResponse } from 'axios';

const client_id = process.env.SPOTIFY_CLIENT_ID || '';
const client_secret = process.env.SPOTIFY_CLIENT_SECRET || '';
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN || '';

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;
const CURRENT_TRACK_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

const getAccessToken = async () => {
  return axios.post<string, AxiosResponse<{ access_token: string } & unknown>>(
    TOKEN_ENDPOINT,
    new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token
    }).toString(),
    {
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
  );
};

export const getTopTracks = async () => {
  const { access_token } = (await getAccessToken()).data;

  return axios.get(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  });
};
export const getNowPlaying = async () => {
  const { access_token } = (await getAccessToken()).data;

  return axios.get(CURRENT_TRACK_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  });
};
