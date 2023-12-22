import type { NextAuthConfig } from 'next-auth';
import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next"
// import type { NextAuthOptions } from "next-auth"
// import getServerSession from "next-auth"

 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      // does user have to change to person?
      const isLoggedIn = !!auth?.user;
      const isOnHomePage = nextUrl.pathname === '/';
      // const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnHomePage) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/', nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;

// Use it in server contexts
// export function auth(...args: [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]] | [NextApiRequest, NextApiResponse] | []) {
//   return getServerSession(authConfig)
// }