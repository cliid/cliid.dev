import axios, { AxiosResponse } from 'axios';

const UNSPLASH_STATISTICS_ENDPOINT = `https://api.unsplash.com/users/cliid/statistics`;

export const getUnsplashStatistics = async () => {
  const access_token = process.env.UNSPLASH_ACCESS_TOKEN;

  return axios.get<
    undefined,
    AxiosResponse<{ downloads: { total: number }; views: { total: number } } & unknown>
  >(UNSPLASH_STATISTICS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  });
};
