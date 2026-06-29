export const canonicalSiteUrl = "https://offer.zodev.live/";
export const canonicalSiteOrigin = "https://offer.zodev.live";

export function resolveCanonicalUrl(pathname = "/") {
  return new URL(pathname, canonicalSiteUrl).href;
}
