// Blog posts generated from GitHub repositories

export const blogPosts = [
  {
    id: 'lilygo-pixel-camera',
    slug: 'lilygo-pixel-camera',
    title: 'Pixel Camera with LilyGo T-Display S3 Pro',
    date: '2025-01-15',
    excerpt: 'A feature-rich camera application for the LilyGo T-Display S3 Pro with OV3660 camera module, featuring real-time filters, software digital zoom, and advanced image processing capabilities.',
    image: 'https://raw.githubusercontent.com/raulzanardo/lilygo-pixel-camera/master/images/LilyGo%20T-Display%20S3%20Pro.png',
    images: [
      'https://raw.githubusercontent.com/raulzanardo/lilygo-pixel-camera/master/images/LilyGo%20T-Display%20S3%20Pro.png',
      'https://raw.githubusercontent.com/raulzanardo/lilygo-pixel-camera/master/images/screens/home.bmp',
      'https://raw.githubusercontent.com/raulzanardo/lilygo-pixel-camera/master/images/photos/photo_177.png'
    ],
    tags: ['ESP32-S3', 'Camera', 'Embedded', 'C++', 'Image Processing'],
    github: 'https://github.com/raulzanardo/lilygo-pixel-camera',
    stars: 2,
    language: 'C',
    content: `
A feature-rich camera application for the LilyGo T-Display S3 Pro with OV3660 camera module, featuring real-time filters, software digital zoom, and advanced image processing capabilities.

**Inspired by:** Carlo Andreini's [Pixless Camera](https://www.kickstarter.com/projects/carloandreini/pixless-camera) - a 0.03MP camera that captures charming pixel-art style photos, reminiscent of the iconic Game Boy Camera.

## Hardware

The project uses the **LilyGo T-Display S3 Pro** (ESP32-S3, 222x480 TFT display) with an **OV3660 camera module** and **MicroSD Card** for photo storage.

**Board Features:**
- ESP32-S3 dual-core processor (240MHz)
- 16MB Flash, 8MB PSRAM
- 222x480 IPS LCD display
- Capacitive touch screen
- Battery management (SY6970)
- USB Type-C
- Flash LED

## Key Features

### Camera Capabilities
- **Live Preview**: Real-time camera feed at 240x176 (HQVGA) resolution
- **Software Digital Zoom**: 1x, 2x, and 4x zoom levels with center cropping
- **Photo Capture**: High-quality PNG image output with configurable processing
- **Auto-Adjust**: Automatic contrast, brightness, and gamma correction
- **Camera Controls**: AEC/AEC2, AGC, manual exposure and gain adjustment via UI sliders

### Real-Time Filters
- **Pixelate**: Block-based pixelation effect with adjustable block size
- **Dithering**: Color palette reduction with Floyd-Steinberg or Bayer dithering
- **Edge Detection**: Sobel operator-based edge detection with adjustable threshold
- **CRT Effect**: Retro CRT monitor simulation with RGB channel separation and scanline patterns

### Color Palettes
18 built-in color palettes including Sunset, Cyberpunk, Autumn, Ocean, Desert, Sakura, Gameboy, Grayscale, Sepia, Fire, Arctic, Neon, and custom 4-color and 16-color palettes.

### Storage & Gallery
- PNG image encoding with optimal PSRAM/DRAM allocation
- Photos saved at 2x resolution (each pixel upscaled to 2x2) for better quality
- SD card photo storage with auto-increment naming
- Built-in gallery with touch navigation
- Quick access to last photo via long press on gallery button
- USB Mass Storage mode for direct file access

## Technical Highlights

### Image Processing

**Pixelate Filter**: Averages RGB values within NxN blocks, preserving color fidelity while reducing detail. Configurable block sizes: 1, 2, 4, 8 pixels.

**Dithering Algorithm**: 
- Floyd-Steinberg: Error diffusion for smooth gradients
- Bayer: Ordered dithering with threshold matrix
- Operates on custom color palettes with RGB565 conversion

**Edge Detection**: Sobel operator (3x3 convolution kernels) with separate horizontal and vertical gradient computation.

**CRT Filter**: Block-based RGB channel separation with scanline-rotating pattern (R,G,B → B,R,G → G,B,R), combining pixelation and color separation effect.

### Camera Configuration
- Sensor: OV3660
- Pixel Format: RGB565
- Frame Size: HQVGA (240x176)
- Frame Buffer: Double-buffered in PSRAM

### Performance Optimizations
- PSRAM-based framebuffer for camera operations
- IRAM-optimized filter functions for real-time processing
- DMA transfers for display updates
- Selective color palette operations

## Software Architecture

The project uses **LVGL** for the UI framework, **TFT_eSPI** for display driver, **PNGenc** for image encoding, and **ESP32 Camera** library for camera control.

**GitHub**: [github.com/raulzanardo/lilygo-pixel-camera](https://github.com/raulzanardo/lilygo-pixel-camera)
**License**: MIT

    `
  },
  {
    id: 'spotify-clock-mps3',
    slug: 'spotify-clock-mps3',
    title: 'Spotify Clock with RGB LED Matrix',
    date: '2025-01-10',
    excerpt: 'A real-time display system that shows your currently playing Spotify track on a 64×64 LED matrix, with intelligent color-temperature-aware clock display that adapts to the album artwork.',
    image: 'https://raw.githubusercontent.com/raulzanardo/spotify_clock_mps3/master/images/img_1.png',
    images: [
      'https://raw.githubusercontent.com/raulzanardo/spotify_clock_mps3/master/images/img_1.png',
      'https://raw.githubusercontent.com/raulzanardo/spotify_clock_mps3/master/images/Adafruit_Matrix_Portal_S3.jpg',
      'https://raw.githubusercontent.com/raulzanardo/spotify_clock_mps3/master/images/clock.png'
    ],
    tags: ['ESP32-S3', 'Spotify', 'LED Matrix', 'C++', 'Music'],
    github: 'https://github.com/raulzanardo/spotify_clock_mps3',
    stars: 2,
    language: 'C++',
    content: `
A real-time display system that shows your currently playing Spotify track on a 64×64 LED matrix, with intelligent color-temperature-aware clock display that adapts to the album artwork.

## Features

- **Now Playing Display**: Shows album art from your currently playing Spotify track in full color on an LED matrix
- **Image-Aware Clock Colors**: Clock colors dynamically adjust based on the dominant colors in the album artwork
- **Predominant Color LED**: The onboard RGB LED displays the predominant color extracted from the album artwork in real-time
- **Time Display**: Shows time with color adjustments based on album artwork and the time of day
- **Idle Display**: When no music is playing, displays the day of the week and current date

## Hardware

**Recommended Board:** [Adafruit Matrix Portal S3](https://www.adafruit.com/product/5778) — An ESP32-S3 based board with built-in HUB75 LED matrix interface and native USB support, designed for internet-connected LED matrix projects.

**Core Requirements:**
- **ESP32-S3** microcontroller with **external PSRAM** (required), USB support, and 20+ available GPIO pins
- **HUB75 LED Matrix Driver** (onboard on MatrixPortal, or external daughterboard)
- **64×64 RGB LED Matrix Panel** (HUB75 interface)
- WiFi connectivity (built-in to ESP32-S3)

  
## Requirements

- Raspberry Pi with GPIO pins (Pi 1, 2, 3, 4, or Zero - **NOT Pi 5**)
- RGB LED Matrix panels (connected via GPIO)
- rpi-rgb-led-matrix library (included as submodule)

## Installation

Clone the repository with submodules:

\`\`\`bash
git clone --recurse-submodules https://github.com/raulzanardo/xserver-screen.git
cd xserver-screen
\`\`\`

Install dependencies:

\`\`\`bash
sudo apt-get install xvfb libx11-dev
\`\`\`

Build the project:

\`\`\`bash
make
\`\`\`

Install it:

\`\`\`bash
sudo make install
\`\`\`

This installs \`xserver-screen\` and \`run\` to \`/usr/local/bin\`.

## Usage

Use the included \`run\` script to start the virtual display and run your application:

\`\`\`bash
run your_application
\`\`\`

For example:

\`\`\`bash
run xclock -geometry 192x128
run firefox
run /usr/games/your-game
\`\`\`

## Configuration

### Command-Line Options

The \`xserver-screen\` binary supports several command-line options:

\`\`\`bash
sudo xserver-screen [options] [led-matrix-options]

Options:
  -u, --update-interval <microseconds>  Update interval in microseconds (default: 10000)
  -x, --x-offset <pixels>              Screenshot X offset (default: 0)
  -y, --y-offset <pixels>              Screenshot Y offset (default: 0)
  -h, --help                           Show help message
\`\`\`

Screenshot dimensions are automatically calculated from the LED matrix configuration.

### LED Matrix Settings

Edit the \`run\` script to adjust your LED matrix configuration:

- \`--led-rows\`: Number of rows in each panel (default: 64)
- \`--led-cols\`: Number of columns in each panel (default: 64)
- \`--led-chain\`: Number of panels chained horizontally (default: 3)
- \`--led-parallel\`: Number of parallel chains (default: 2)
- \`--led-brightness\`: Display brightness 0-100 (default: 60)
- \`--led-panel-type\`: Panel driver chip type (default: FM6126A)

For more options, see the [rpi-rgb-led-matrix documentation](https://github.com/hzeller/rpi-rgb-led-matrix).

### Display Resolution

The virtual X server resolution is set to 192x128 pixels to match the LED matrix configuration (3 panels × 64 columns = 192 width, 2 panels × 64 rows = 128 height). Adjust the Xvfb resolution in the \`run\` script to match your matrix setup.

## Use Cases

- Retro gaming displays
- Information dashboards
- Digital signage
- Visual effects and animations
- Media players
- Any X11 application

## Examples

### DOOM

It had to be done. Running chocolate-doom with modified chocolate-doom.cfg file.

\`\`\`bash
run chocolate-doom
\`\`\`

### Quake 1

The first quake is a good FPS. This port was made by [Henrique194](https://github.com/Henrique194) called [chocolate-quake](https://github.com/Henrique194/chocolate-quake).

### Celeste

This one is from [Portmaster](https://portmaster.games/detail.html?name=celeste).

\`\`\`bash
# will run the game in it's location folder
run ./Celeste

# will move the window to the top left and resize to the matrix size
xdotool search --class "mono-sgen" windowsize 192 128 windowmove 0 0
\`\`\`

### Webcam stream

Stream the usb webcam with the address /dev/video0 or anything that ffplay can play.

\`\`\`bash
run ffplay -vf "scale=192:128,hflip" /dev/video0
\`\`\`

## Changes from pico8-led

This project is based on [jenissimo/pico8-led](https://github.com/jenissimo/pico8-led) with the following enhancements:

- **Generalized for any application**: Works with any X11 application, not just PICO-8
- **Automatic dimension detection**: Screenshot size automatically matches LED matrix configuration
- **Flexible capture region**: Added \`-x\` and \`-y\` options to capture from any screen position
- **Simplified run script**: Single \`run\` script accepts any application as argument
- **System installation**: Added \`make install\` target for system-wide installation

**GitHub**: [github.com/raulzanardo/xserver-screen](https://github.com/raulzanardo/xserver-screen)
**License**: Not specified
    `
  },
  {
    id: 'curriculo-react',
    slug: 'curriculo-react',
    title: 'Interactive React Resume and Portfolio',
    date: '2024-12-20',
    excerpt: 'A modern, interactive portfolio website built with React, featuring smooth animations, responsive design, and deployed on GitHub Pages.',
    tags: ['React', 'TypeScript', 'Portfolio', 'Web', 'GitHub Pages'],
    github: 'https://github.com/raulzanardo/curriculo-react',
    language: 'TypeScript',
    content: `
A modern, interactive portfolio website built with React, featuring smooth animations, responsive design, and deployed on GitHub Pages.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations**: Engaging UI with smooth transitions and effects
- **TypeScript**: Type-safe code for better development experience
- **GitHub Pages Deployment**: Automated deployment using GitHub Actions
- **Modern UI**: Clean and professional design with attention to detail

## Tech Stack

- **React 18**: Latest version of React with concurrent features
- **TypeScript**: Static typing for better code quality
- **Vite**: Fast build tool and development server
- **GitHub Pages**: Free hosting for static sites
- **GitHub Actions**: Automated CI/CD pipeline

## Project Structure

The portfolio showcases:
- Professional experience and skills
- Personal projects and contributions
- Contact information and social links
- Downloadable resume

## Deployment

This project uses GitHub Actions to automatically build and deploy to GitHub Pages on every push to the main branch. The workflow:

1. Checks out the code
2. Sets up Node.js environment
3. Installs dependencies
4. Builds the production bundle
5. Deploys to GitHub Pages

## Development

To run locally:

\`\`\`bash
git clone https://github.com/raulzanardo/curriculo-react.git
cd curriculo-react
npm install
npm run dev
\`\`\`

To build for production:

\`\`\`bash
npm run build
\`\`\`

**GitHub**: [github.com/raulzanardo/curriculo-react](https://github.com/raulzanardo/curriculo-react)
**License**: Not specified
    `
  },
  {
    id: 'curriculo-flutter',
    slug: 'curriculo-flutter',
    title: 'Interactive Flutter Resume and Portfolio',
    date: '2026-01-15',
    excerpt: 'A Flutter port of the Curriculo portfolio for mobile and desktop platforms.',
    image: 'https://raw.githubusercontent.com/raulzanardo/curriculo-flutter/master/build/web/assets/assets/images/photo.png',
    images: [
      'https://raw.githubusercontent.com/raulzanardo/curriculo-flutter/master/build/web/assets/assets/images/photo.png',
      'https://raw.githubusercontent.com/raulzanardo/curriculo-flutter/master/build/web/assets/assets/images/portfolio/myorbit/feed_1.png',
      'https://raw.githubusercontent.com/raulzanardo/curriculo-flutter/master/build/web/assets/assets/images/portfolio/myorbit/orbit_1.png'
    ],
    tags: ['Flutter', 'Dart', 'Mobile', 'Portfolio'],
    github: 'https://github.com/raulzanardo/curriculo-flutter',
    stars: 0,
    language: 'Dart',
    content: `
A Flutter implementation of the Curriculo portfolio, targeting Android, iOS and desktop with responsive layouts, animations, and native integrations.

## Highlights
- Cross-platform UI built with Flutter
- Responsive layouts and adaptive navigation
- Smooth animations and transitions
- Deployable to Android, iOS and desktop

**GitHub**: https://github.com/raulzanardo/curriculo-flutter
`
  },
  {
    id: 'rpi-spotify-matrix-display-big',
    slug: 'rpi-spotify-matrix-display-big',
    title: 'Raspberry Pi Spotify Matrix Display (Big)',
    date: '2026-01-15',
    excerpt: 'Large-format LED matrix display for showing Spotify now-playing and visuals using a Raspberry Pi.',
    image: 'https://raw.githubusercontent.com/raulzanardo/my-led-matrix/master/images/full_build.png',
    images: [
      'https://raw.githubusercontent.com/raulzanardo/my-led-matrix/master/images/full_build.png',
      'https://raw.githubusercontent.com/raulzanardo/my-led-matrix/master/images/led_panel_vendor.png',
      'https://raw.githubusercontent.com/raulzanardo/my-led-matrix/master/images/hub75_hat.png'
    ],
    tags: ['Raspberry Pi', 'Spotify', 'LED Matrix', 'Python'],
    github: 'https://github.com/raulzanardo/rpi-spotify-matrix-display-big',
    stars: 0,
    language: 'Python',
    content: `
A project to drive a large HUB75 LED matrix from a Raspberry Pi showing Spotify now-playing info, album art and dynamic visualizations.

## Features
- Now-playing integration with Spotify Web API
- Album art rendering and color extraction
- Scalable panel configuration for large matrices

**GitHub**: https://github.com/raulzanardo/rpi-spotify-matrix-display-big
`
  },
  {
    id: 'my-led-matrix',
    slug: 'my-led-matrix',
    title: 'My LED Matrix',
    date: '2026-01-15',
    excerpt: 'Utility and examples for driving LED matrices, with demos and helper tools.',
    image: 'https://raw.githubusercontent.com/raulzanardo/my-led-matrix/master/images/full_build.png',
    images: [
      'https://raw.githubusercontent.com/raulzanardo/my-led-matrix/master/images/full_build.png',
      'https://raw.githubusercontent.com/raulzanardo/my-led-matrix/master/images/hub75_hat.png'
    ],
    tags: ['LED Matrix', 'HUB75', 'C++', 'Demo'],
    github: 'https://github.com/raulzanardo/my-led-matrix',
    stars: 0,
    language: 'C++',
    content: `
A collection of utilities, examples and helper code for driving HUB75 LED matrices from microcontrollers and SBCs. Includes demos and performance tips.

**GitHub**: https://github.com/raulzanardo/my-led-matrix
`
  },
  {
    id: 'libretiny-pio-ota',
    slug: 'libretiny-pio-ota',
    title: 'LibreTiny PIO OTA',
    date: '2026-01-15',
    excerpt: 'Over-the-air update support for LibreTiny devices using PIO-based networking and a lightweight bootloader.',
    image: null,
    images: [],
    tags: ['LibreTiny', 'OTA', 'Microcontroller', 'C++'],
    github: 'https://github.com/raulzanardo/libretiny-pio-ota',
    stars: 0,
    language: 'C++',
    content: `
Lightweight OTA infrastructure for LibreTiny-based boards using PIO network transports and a compact bootloader to enable remote firmware updates.

## Goals
- Minimal bootloader overhead
- Secure OTA transfer with checksum verification
- Easy integration with existing LibreTiny projects

**GitHub**: https://github.com/raulzanardo/libretiny-pio-ota
`
  }
];
