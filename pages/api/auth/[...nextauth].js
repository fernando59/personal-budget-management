import NextAuth from "next-auth"
import LinkedInProvider from "next-auth/providers/linkedin";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET
    })
    // ...add more providers here
  ],
})