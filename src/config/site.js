export const canonicalSiteUrl = "https://service.zodev.live/";
export const canonicalSiteOrigin = "https://service.zodev.live";

export function resolveCanonicalUrl(pathname = "/") {
  return new URL(pathname, canonicalSiteUrl).href;
}
