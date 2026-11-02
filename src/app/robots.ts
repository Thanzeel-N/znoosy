import type { MetadataRoute } from 'next';
export const dynamic = 'force-static';
export default function robots(): MetadataRoute.Robots { return { rules:{userAgent:'*',allow:'/'}, sitemap:'https://znoosy-sleep-atelier.harilalhari9910.chatgpt.site/sitemap.xml' }; }
