import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";    
import AppleProvider from "next-auth/providers/apple";
export default NextAuth({
    providers:[
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
          }),
          AppleProvider({
            clientId: process.env.APPLE_ID,
            clientSecret: process.env.APPLE_SECRET
          }),
        ],
        secret: process.env.NEXTAUTH_SECRET,
})