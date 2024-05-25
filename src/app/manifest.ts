import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "FU-DEVER",
    short_name: "FU-DEVER",
    description:
      "Welcome to FU-DEVER, the programming club of FPT University! . At FU-DEVER, we strive to foster a vibrant community of aspiring programmers and provide a platform for skill development and collaboration.",
    icons: [
      {
        src: "https://www.fu-dever.com/_next/static/media/logo.2400b5e5.svg",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "https://www.fu-dever.com/_next/static/media/logo.2400b5e5.svg",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    theme_color: "#1A94FF",
    background_color: "#1A94FF",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    scope: "/",
  };
}
