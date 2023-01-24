import { Client } from "twitter-api-sdk"

export default async function handler(req, res) {
  const { user } = req.query
  const client = new Client(process.env.TWITTER_API_BEARER)

  if (!user) {
    return res.status(400).json({ message: 'Missing required query params' })
  }

  const response = await client.tweets.usersIdTweets(user)

  res.status(200).json({ result: response.data })
}
