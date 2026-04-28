import { defineMiddleware } from 'astro:middleware';

const AUTH_COOKIE  = 'vl_auth';
const AUTH_TOKEN   = 'vl_granted';
const SITE_PASSWORD = import.meta.env.SITE_PASSWORD || 'Lcr51582!';

export const onRequest = defineMiddleware((context, next) => {
    const { pathname } = context.url;

    // Always allow the login page and its POST handler through
    if (pathname === '/login') return next();

    const cookie = context.cookies.get(AUTH_COOKIE);
    if (cookie?.value === AUTH_TOKEN + ':' + SITE_PASSWORD) return next();

    return context.redirect('/login');
});
