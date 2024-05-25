export default function sitemap() {
  return [
    {
      url: "https://www.fu-dever.com/",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://www.fu-dever.com/activity",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://www.fu-dever.com/project",
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: "https://www.fu-dever.com/member",
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: "https://www.fu-dever.com/leaderboard",
      lastModified: new Date(),
      priority: 0.5,
    },
  ];
}
