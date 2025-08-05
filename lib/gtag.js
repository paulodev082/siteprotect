export const GA_TRACKING_ID = "G-FGK9366ZBT";

// Pageview
export const pageview = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};
