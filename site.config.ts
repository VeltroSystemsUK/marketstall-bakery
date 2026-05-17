import type { SiteConfig } from "@/lib/site-config.types";

const config: SiteConfig = {
  mode: "single-store",

  brand: {
    name: "Hearth & Grain Bakery",
    tagline: "Slow-fermented, wood-fired artisan bread from Lincolnshire",
    description:
      "We bake every loaf using long fermentation and traditional stone-milling. No commercial yeast, no shortcuts — just flour, water, salt, and time. Baked fresh every morning and delivered across the county.",
    email: "hello@hearthandgrain.co.uk",
    location: "Lincoln, Lincolnshire",
    foundedYear: 2016,
    socialInstagram: "https://instagram.com/hearthandgrainbakery",
    socialFacebook: "https://facebook.com/hearthandgrain",
  },

  features: {
    producerOnboarding: false,
    adminPanel: false,
    multiProducer: false,
    stripeConnect: false,
    reviews: true,
  },

  stats: [
    { value: "400+", label: "Loaves Baked Weekly" },
    { value: "18+", label: "Bread Varieties" },
    { value: "4.8★", label: "Average Rating" },
    { value: "Est. 2016", label: "Lincolnshire" },
  ],
};

export default config;
