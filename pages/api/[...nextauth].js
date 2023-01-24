import NextAuth from 'next-auth'
import TwitterProvider from 'next-auth/providers/twitter'

export default NextAuth({
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
      version: '2.0'
    }),
  ],
  callbacks: {
    async jwt({token, user, account, profile, isNewUser}) {
      if (profile) {
        token['userProfile'] = {
          userID: profile.data.id,
          username: profile.data.username,
          name: profile.data.name,
          profileImage: profile.data.profile_image_url,
        }
      }
      return token
    },
    async session({session, token, user}) {
      // Send properties to the client, like an access_token from a provider
      return {
        ...session,
        user: token.userProfile
      }
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
})