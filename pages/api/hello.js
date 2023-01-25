// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {getToken} from 'next-auth/jwt'

export default async function handler(req, res) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET
  })
  
  // res.status(200).json({ hello: 'world' })
}
