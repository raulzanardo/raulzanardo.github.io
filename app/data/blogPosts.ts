// Blog posts generated from GitHub repositories

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string | null;
  images: string[];
  tags?: string[];
  github?: string;
  stars?: number;
  language?: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "rpi-spotify-matrix-display-big",
    slug: "rpi-spotify-matrix-display-big",
    title: "Raspberry Pi Spotify Matrix Display",
    date: "2026-01-14",
    excerpt:
      "Large-format LED matrix display showing Spotify now-playing info on a Raspberry Pi.",
    image:
      "https://raw.githubusercontent.com/raulzanardo/rpi-spotify-matrix-display-big/master/images/example.png",
    images: [],
    tags: ["Raspberry Pi", "Spotify", "LED Matrix", "Python"],
    github: "https://github.com/raulzanardo/rpi-spotify-matrix-display-big",
    content:
      "A fork of a Spotify display project adapted for a large 192x128 HUB75 LED matrix panel. Displays currently playing track information, album artwork, and dynamic visualizations synchronized with your Spotify account. Built with Python using the Spotify Web API and the rpi-rgb-led-matrix library.",
  },
  {
    id: "my-led-matrix",
    slug: "my-led-matrix",
    title: "My LED Matrix",
    date: "2026-01-12",
    excerpt: "Utilities and examples for driving HUB75 LED matrix panels.",
    image:
      "https://raw.githubusercontent.com/raulzanardo/my-led-matrix/master/images/full_build.png",
    images: [
      "https://raw.githubusercontent.com/raulzanardo/my-led-matrix/master/images/full_build.png",
      "https://raw.githubusercontent.com/raulzanardo/my-led-matrix/master/images/hub75_hat.png",
    ],
    tags: ["LED Matrix", "HUB75", "Raspberry Pi", "Hardware"],
    github: "https://github.com/raulzanardo/my-led-matrix",
    content:
      "A collection of utilities, demos, and documentation for working with HUB75 RGB LED matrix panels. Includes hardware setup guides, wiring diagrams, and example code for driving large LED displays from Raspberry Pi and other single-board computers.",
  },
  {
    id: "curriculo-react",
    slug: "curriculo-react",
    title: "React Portfolio Website",
    date: "2026-01-12",
    excerpt: "Modern portfolio website built with React and TypeScript.",
    image: null,
    images: [],
    tags: ["React", "TypeScript", "Portfolio", "Web", "GitHub Pages"],
    github: "https://github.com/raulzanardo/curriculo-react",
    content:
      "A responsive portfolio website showcasing professional experience, projects, and skills. Built with React 18, TypeScript, and Vite, featuring smooth animations and modern UI design. Automatically deployed to GitHub Pages using GitHub Actions CI/CD pipeline.",
  },
  {
    id: "libretiny-pio-ota",
    slug: "libretiny-pio-ota",
    title: "LibreTiny PIO OTA",
    date: "2026-01-10",
    excerpt:
      "Over-the-air firmware updates for LibreTiny microcontroller boards.",
    image: null,
    images: [],
    tags: ["LibreTiny", "OTA", "Microcontroller", "C++", "IoT"],
    github: "https://github.com/raulzanardo/libretiny-pio-ota",
    stars: 0,
    language: "C++",
    content:
      "Lightweight OTA (Over-The-Air) update infrastructure for LibreTiny-based IoT devices. Enables remote firmware updates with minimal bootloader overhead, checksum verification for security, and easy integration into existing projects using PlatformIO.",
  },
  {
    id: "curriculo-flutter",
    slug: "curriculo-flutter",
    title: "Flutter Portfolio App",
    date: "2026-01-08",
    excerpt: "Cross-platform portfolio application built with Flutter.",
    image:
      "https://raw.githubusercontent.com/raulzanardo/curriculo-flutter/master/build/web/assets/assets/images/photo.png",
    images: [
      "https://raw.githubusercontent.com/raulzanardo/curriculo-flutter/master/build/web/assets/assets/images/photo.png",
      "https://raw.githubusercontent.com/raulzanardo/curriculo-flutter/master/build/web/assets/assets/images/portfolio/myorbit/feed_1.png",
      "https://raw.githubusercontent.com/raulzanardo/curriculo-flutter/master/build/web/assets/assets/images/portfolio/myorbit/orbit_1.png",
    ],
    tags: ["Flutter", "Dart", "Mobile", "Web", "Portfolio"],
    github: "https://github.com/raulzanardo/curriculo-flutter",
    content:
      "A Flutter implementation of the portfolio showcasing cross-platform capabilities. Features responsive layouts that adapt to different screen sizes, smooth animations, and can be deployed to Android, iOS, web, and desktop platforms from a single codebase.",
  },
  {
    id: "lilygo-pixel-camera",
    slug: "lilygo-pixel-camera",
    title: "Pixel Camera with LilyGo T-Display S3",
    date: "2026-01-07",
    excerpt:
      "Retro-style pixel art camera application for ESP32-S3 with real-time filters.",
    image:
      "https://raw.githubusercontent.com/raulzanardo/lilygo-pixel-camera/master/images/LilyGo%20T-Display%20S3%20Pro.png",
    images: [
      "https://raw.githubusercontent.com/raulzanardo/lilygo-pixel-camera/master/images/LilyGo%20T-Display%20S3%20Pro.png",
      "https://raw.githubusercontent.com/raulzanardo/lilygo-pixel-camera/master/images/screens/home.bmp",
      "https://raw.githubusercontent.com/raulzanardo/lilygo-pixel-camera/master/images/photos/photo_177.png",
    ],
    tags: ["ESP32-S3", "Camera", "Embedded", "Image Processing", "Retro"],
    github: "https://github.com/raulzanardo/lilygo-pixel-camera",
    content:
      "A pixel art camera application for the LilyGo T-Display S3 Pro inspired by the Game Boy Camera. Features real-time filters including pixelation, dithering, edge detection, and CRT effects. Supports multiple color palettes, software zoom, and saves photos to SD card. Built with LVGL for the UI and optimized for PSRAM performance.",
  },
  {
    id: "spotify-clock-mps3",
    slug: "spotify-clock-mps3",
    title: "Spotify Clock with LED Matrix",
    date: "2025-12-28",
    excerpt:
      "ESP32-S3 clock display with Spotify album art on a 64x64 LED matrix.",
    image:
      "https://raw.githubusercontent.com/raulzanardo/spotify_clock_mps3/master/images/img_1.png",
    images: [
      "https://raw.githubusercontent.com/raulzanardo/spotify_clock_mps3/master/images/img_1.png",
      "https://raw.githubusercontent.com/raulzanardo/spotify_clock_mps3/master/images/Adafruit_Matrix_Portal_S3.jpg",
      "https://raw.githubusercontent.com/raulzanardo/spotify_clock_mps3/master/images/clock.png",
    ],
    github: "https://github.com/raulzanardo/spotify_clock_mps3",
    content:
      "A smart clock display for the Adafruit Matrix Portal S3 that shows currently playing Spotify tracks on a 64x64 LED matrix. Features album artwork display, color extraction from artwork to adjust clock colors dynamically, and shows date/time when no music is playing. Connects to Spotify Web API over WiFi.",
  },
  {
    id: "xserver-screen",
    slug: "xserver-screen",
    title: "XServer Screen to LED Matrix",
    date: "2025-07-26",
    excerpt: "Display any X11 application on an RGB LED matrix in real-time.",
    image:
      "https://raw.githubusercontent.com/raulzanardo/xserver-screen/master/images/doom.png",
    images: [
      "https://raw.githubusercontent.com/raulzanardo/xserver-screen/master/images/doom.png",
      "https://raw.githubusercontent.com/raulzanardo/xserver-screen/master/images/celeste.png",
      "https://raw.githubusercontent.com/raulzanardo/xserver-screen/master/images/primordis.png",
    ],
    tags: ["Raspberry Pi", "LED Matrix", "X11", "C++", "Retro Gaming"],
    github: "https://github.com/raulzanardo/xserver-screen",
    content:
      "Capture and render any X11 application to an RGB LED matrix display in real-time. Uses Xvfb virtual framebuffer to create a virtual display that gets captured and sent to HUB75 LED panels. Perfect for retro gaming (DOOM, Quake, Celeste, Half Life 1), dashboards, or any graphical application. Based on pico8-led but generalized for any X application.",
  },
];
