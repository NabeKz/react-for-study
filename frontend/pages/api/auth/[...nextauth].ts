import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        usercode: {
          label: "User ID",
          type: "text",
          placeholder: "User ID",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials, req) => {
        const postData = {
          user_code: credentials?.usercode,
          password: credentials?.password,
        };

	      const res = await postSigninUser(postData);

        if (res.message === "no data") {
          // throw new Error(res);
          return null;
        } else {
          const user = {
            name: res.data[0].shimei,
            email: res.data[0].user_code,
          };
          return user;
        }
      },
    }),
  ],
  callbacks: {
    session({ session, token, user }) {
      return session; // The return type will match the one returned in `useSession()`
    },
  },
});
