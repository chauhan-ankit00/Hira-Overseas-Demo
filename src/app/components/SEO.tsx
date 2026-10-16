import { useEffect } from 'react';
import { getCanonicalUrl, siteConfig } from '../../lib/siteConfig';

type SEOProps = {
  title: string;
  description: string;
  path: string;
  image?: string;
  robots?: string;
};

function ensureMetaTag(selector: string, attributes: Record<string, string>) {
  let tag = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!tag) {
    tag = document.createElement('meta');
    document.head.appendChild(tag);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    tag?.setAttribute(key, value);
  });

  return tag;
}

function ensureLinkTag(rel: string, attributes: Record<string, string>) {
  let tag = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;

  if (!tag) {
    tag = document.createElement('link');
    document.head.appendChild(tag);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    tag?.setAttribute(key, value);
  });

  return tag;
}

export function SEO({ title, description, path, image, robots }: SEOProps) {
  useEffect(() => {
    const canonicalUrl = getCanonicalUrl(path);
    const fullTitle = title.includes(siteConfig.siteName)
      ? title
      : `${title} | ${siteConfig.siteName}`;
    const socialImage = image ?? new URL(siteConfig.logoPath, siteConfig.siteUrl).toString();
    const robotsValue = robots ?? 'index, follow';

    document.title = fullTitle;
    ensureMetaTag('meta[name="description"]', {
      name: 'description',
      content: description,
    });
    ensureMetaTag('meta[name="robots"]', {
      name: 'robots',
      content: robotsValue,
    });
    ensureMetaTag('meta[property="og:title"]', {
      property: 'og:title',
      content: fullTitle,
    });
    ensureMetaTag('meta[property="og:description"]', {
      property: 'og:description',
      content: description,
    });
    ensureMetaTag('meta[property="og:type"]', {
      property: 'og:type',
      content: 'website',
    });
    ensureMetaTag('meta[property="og:url"]', {
      property: 'og:url',
      content: canonicalUrl,
    });
    ensureMetaTag('meta[property="og:image"]', {
      property: 'og:image',
      content: socialImage,
    });
    ensureMetaTag('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    });
    ensureMetaTag('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: fullTitle,
    });
    ensureMetaTag('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: description,
    });
    ensureMetaTag('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: socialImage,
    });

    ensureLinkTag('canonical', {
      rel: 'canonical',
      href: canonicalUrl,
    });
  }, [description, image, path, robots, title]);

  return null;
}
