import { handleAuth } from '@auth0/nextjs-auth0';

if (!process.env.AUTH0_SECRET) {
  throw new Error("Missing AUTH0_SECRET environment variable");
}

export default handleAuth({
  cookieSecret: process.env.AUTH0_SECRET,
  cookieSecure: process.env.NODE_ENV === 'production',
});
