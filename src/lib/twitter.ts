import axios, { AxiosResponse } from 'axios';

export const getTweets = async (ids: any[]) => {
  if (ids.length === 0) {
    return [];
  }

  const queryParams = new URLSearchParams({
    ids: ids.join(','),
    expansions:
      'author_id,attachments.media_keys,referenced_tweets.id,referenced_tweets.id.author_id',
    'tweet.fields':
      'attachments,author_id,public_metrics,created_at,id,in_reply_to_user_id,referenced_tweets,text',
    'user.fields': 'id,name,profile_image_url,protected,url,username,verified',
    'media.fields': 'duration_ms,height,media_key,preview_image_url,type,url,width,public_metrics'
  }).toString();

  const response = await axios.get<any, AxiosResponse<any>>(
    `https://api.twitter.com/2/tweets?${queryParams}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`
      }
    }
  );

  const tweets = response.data;

  const getAuthorInfo = (author_id: any) => {
    return tweets.includes.users.find((user: { id: any }) => user.id === author_id);
  };

  const getReferencedTweets = (mainTweet: {
    attachments: { media_keys: any[] };
    author_id: any;
    referenced_tweets: any[];
  }) => {
    return (
      mainTweet?.referenced_tweets?.map((referencedTweet: { id: any; type: any }) => {
        const fullReferencedTweet = tweets.includes.tweets.find(
          (tweet: { id: any }) => tweet.id === referencedTweet.id
        );

        return {
          type: referencedTweet.type,
          author: getAuthorInfo(fullReferencedTweet.author_id),
          ...fullReferencedTweet
        };
      }) || []
    );
  };

  return tweets.data.reduce(
    (
      allTweets: any,
      tweet: { attachments: { media_keys: any[] }; author_id: any; referenced_tweets: any[] }
    ) => {
      const tweetWithAuthor = {
        ...tweet,
        media:
          tweet?.attachments?.media_keys.map((key: any) =>
            tweets.includes.media.find((media: { media_key: any }) => media.media_key === key)
          ) || [],
        referenced_tweets: getReferencedTweets(tweet),
        author: getAuthorInfo(tweet.author_id)
      };

      return [tweetWithAuthor, ...allTweets];
    },
    []
  );
};
