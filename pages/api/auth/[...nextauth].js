import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: "430433931632815",
      clientSecret: "f7243f8e0ae6ff9aec2e52d10761038f",
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
      console.log("POLO1", token);
      console.log("POLO2", user);
      console.log("POLO3", account);

      const isSignIn = user ? true : false;
      if (isSignIn) {
        const response = await fetch(
          `https://daniela-cms-2.herokuapp.com/auth/google/callback?access_token=${account?.access_token}`
        );
        const data = await response.json();
        console.log("DARTA", data);
      }
      return token;
    },
  },
};

const Auth = (req, res) => NextAuth(req, res, options);

export default Auth;
