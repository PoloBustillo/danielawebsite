import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import InstagramProvider from "next-auth/providers/instagram";

const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FB_CLIENT_ID,
      clientSecret: process.env.FB_CLIENT_SECRET,
    }),
    InstagramProvider({
      clientId: process.env.INS_CLIENT_ID,
      clientSecret: process.env.INS_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/perfil",
    signOut: "/",
    error: "/auth/error", // Error code passed in query string as ?error=
    newUser: "/perfil", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    // session: async (session, user) => {
    //   console.log("SESION", sesion);
    //   console.log("USER", user);
    //   session.jwt = user.jwt;
    //   session.id = user.id;
    //   return Promise.resolve(session);
    // },
    jwt: async ({ token, user, account }) => {
      const isSignIn = user ? true : false;
      if (isSignIn) {
        const response = await fetch(
          `https://daniela-cms-2.herokuapp.com/auth/google/callback?access_token=${account?.access_token}`
        );
        const data = await response.json();
      }
      return token;
    },
  },
};

const Auth = (req, res) => NextAuth(req, res, options);

export default Auth;
