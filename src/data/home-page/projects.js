/**
 * Project data for looping through and displaying on the home page's "My Projects" section
 */
export const projects = [
  {
    title: "CustomerLift Shopify App",
    url: "https://apps.shopify.com/customer-lift",
    github: null,
    imgNameForGraphQl: "projImg4",
    imgAlt: "CustomerLift screenshot",
    span: "Featured project",
    technologies: ["Next.js", "TypeScript", "Laravel", "Postgres"],
    bulletPoints: [
      "Published to the Shopify App store.",
      "When store signs up, initiate request to download all store's orders (potentially millions of rows), Shopify sends the backend a webhook upon completion, dispatch Laravel job to download JSONL data and store to Postgres.",
      "Multi-tenant Postgres structure for fast queries -- one schema per store.",
      "TypeScript, Tailwind and Next.js frontend. Chart.js and HTML Canvas for the dashboard's complex charts, graphs and displays.",
    ],
  },
  {
    title: "60 Days of Meditation App",
    url: "https://play.google.com/store/apps/details?id=com.navalsmeditations",
    github: "https://github.com/DoableDanny/Meditation-App-ReactNative",
    imgNameForGraphQl: "projImg1",
    imgAlt: "60 Days of Meditation app screenshot",
    span: "Featured project",
    technologies: ["React Native", "Firebase", "Google Play"],
    bulletPoints: [
      "A React Native app published to the Google play store with 100s of active users.",
      "Meditation gamified: complete the current day to unlock the next. Bonus meditations for day streaks and stars!",
      "Stats such as day streak and average session time saved to local storage.",
      "Firebase for analytics and crashlytics.",
    ],
  },
]
