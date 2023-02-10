import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
	providers: [
		Providers.Google({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			authorizationUrl:
				"https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code",
			scope: "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/fitness.heart_rate.read",
		}),
	],
	jwt: {
		encryption: true,
	},
	secret: process.env.SECRET,
	callbacks: {
		async jwt(token, user, account) {
			if (account) {
				token.user = user;
				token.accessToken = account.accessToken;
				token.refreshToken = account.refreshToken;
				token.accessTokenExpires = Date.now() + account.expires_in * 1000;
			}
			return token;
		},
		async session(session, token) {
			if (token) {
				session.user = token.user;
				session.accessToken = token.accessToken;
				session.refreshToken = token.refreshToken;
				session.accessTokenExpires = token.accessTokenExpires;
			}
			return session;
		},
	},
});