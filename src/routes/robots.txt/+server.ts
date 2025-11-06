import { PUBLIC_SITE_URL } from '$env/static/public';
import type { RequestHandler } from './$types';

const siteUrl = (PUBLIC_SITE_URL ?? 'https://lesatelierstendresse.re').replace(/\/$/, '');

export const GET: RequestHandler = () => {
    const body = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
Host: ${siteUrl}
`;

    return new Response(body, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=86400'
        }
    });
};