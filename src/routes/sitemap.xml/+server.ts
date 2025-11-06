import { PUBLIC_SITE_URL } from '$env/static/public';
import type { RequestHandler } from './$types';

const siteUrl = (PUBLIC_SITE_URL ?? 'https://lesatelierstendresse.re').replace(/\/$/, '');

const pages = [
    '/',
    '/projet',
    '/les-ateliers',
    '/le-cadre',
    '/qui-suis-je',
    '/accompagnement-individuel',
    '/tarifs',
    '/FAQ',
    '/tendresse',
    '/playfight'
];

export const GET: RequestHandler = () => {
    const urlEntries = pages
        .map((p) => {
            const loc = `${siteUrl}${p === '/' ? '' : p}`;
            return `<url>
  <loc>${loc}</loc>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>`;
        })
        .join('\n');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;

    return new Response(xml, {
        headers: { 'Content-Type': 'application/xml', 'Cache-Control': 'public, max-age=3600' }
    });
};