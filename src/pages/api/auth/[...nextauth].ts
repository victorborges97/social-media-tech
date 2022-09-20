import prisma from '@/lib/prisma';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
// import GoogleProvider from "next-auth/providers/google"
// import EmailProvider from "next-auth/providers/email"
console.log({
  clientId: process.env.NEXT_PUBLIC_GITHUB_ID!,
  clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET!,
});
// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/configuration/providers
  adapter: PrismaAdapter(prisma),
  providers: [
    // EmailProvider({
    //   server: process.env.EMAIL_SERVER,
    //   from: process.env.EMAIL_FROM,
    // }),
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: {
    //     appleId: process.env.APPLE_ID,
    //     teamId: process.env.APPLE_TEAM_ID,
    //     privateKey: process.env.APPLE_PRIVATE_KEY,
    //     keyId: process.env.APPLE_KEY_ID,
    //   },
    // }),
    GithubProvider({
      // @ts-ignore
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
      // @ts-ignore
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET,
      // @ts-ignore
      scope: 'read:user',
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET,
    // }),
  ],
  secret: process.env.NEXT_PUBLIC_SECRET,
  session: {
    strategy: 'jwt',
    // Seconds - How long until an idle session expires and is no longer valid.
    // maxAge: 30 * 24 * 60 * 60, // 30 days
    // Note: This option is ignored if using JSON Web Tokens
    // updateAge: 24 * 60 * 60, // 24 hours
  },

  /*jwt: {
    secret: process.env.SECRET,
    // Set to true to use encryption (default: false)
    // encryption: true,
    // You can define your own encode/decode functions for signing and encryption
    // if you want to override the default behaviour.
    // encode: async ({ secret, token, maxAge }) => {},
    // decode: async ({ secret, token, maxAge }) => {},
  },*/

  pages: {
    //signIn: '/app', // Displays signin buttons
    //signOut: '/', // Displays form with sign out button
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },

  callbacks: {
    // async signIn({ user, account, profile, email, credentials }) { return true },
    // async redirect({ url, baseUrl }) { return baseUrl },
    async session({ session, token, user }) {
      // @ts-ignore
      session.user.id = token.sub;
      console.log({ session, user });
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (isNewUser) {
        const accounts = await prisma.tenant.findFirst({
          where: {
            userOnTenant: {
              every: {
                // @ts-ignore
                userId: user.id,
              },
            },
          },
        });
        if (!accounts) {
          await prisma.tenant.create({
            data: {
              image: '',
              name: 'Meu tenant',
              plan: 'free',
              // @ts-ignore
              slug: 'meutenant',
              userOnTenant: {
                create: {
                  // @ts-ignore
                  userId: user.id,
                  role: 'owner',
                },
              },
            },
          });
        } else {
          console.log('Contains tenant in userOnTenant');
        }
      } else {
        console.log('user already created');
      }
      return token;
    },
  },

  events: {},

  debug: false,
});
