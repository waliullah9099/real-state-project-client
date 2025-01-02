import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import mongoClientPromise from "./src/database/mongoClientPromis";
import { userModel } from "./src/models/user-model";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: MongoDBAdapter(mongoClientPromise, {
    databaseName: process.env.ENVIRONMENT,
  }),
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (credentials == null) return null;

        try {
          const user = await userModel.findOne({ email: credentials.email });
          if (!user) {
            throw new Error("No user found with that email address.");
          }

          const isMatch = user.email === credentials.email;
          if (isMatch) {
            return user;
          } else {
            throw new Error("email or password mismatch");
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      //   scope: ["profile", "email"],
    }),
  ],
});
