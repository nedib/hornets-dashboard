import { handleAuth } from '@auth0/nextjs-auth0';

export default handleAuth({
    cookieSecret: process.env.AUTH0_SECRET,
    cookieSecure: process.env.NODE_ENV === 'production',
});
