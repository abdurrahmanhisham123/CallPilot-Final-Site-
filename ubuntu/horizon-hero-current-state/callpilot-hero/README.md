# CallPilot - AI Voice Facilitators

A premium AI voice intelligence platform built with modern web technologies and deployed on Firebase Hosting.

## 🚀 Features

- **Premium Design**: Glass morphism UI with sophisticated animations
- **Responsive Layout**: Optimized for all devices and screen sizes
- **AI Voice Intelligence**: Cutting-edge voice technology platform
- **Plans Comparison**: Detailed feature comparison across service tiers
- **Scroll Animations**: Premium scroll-triggered animations
- **Firebase Hosting**: Fast, secure, and scalable deployment

## 📁 Project Structure

```
callpilot-hero/
├── index.html              # Main homepage
├── plans.html              # Plans and pricing page
├── css/
│   ├── styles.css          # Main stylesheet
│   └── responsive.css      # Responsive design styles
├── js/
│   ├── script.js           # Main JavaScript functionality
│   └── ultimate-scroll-animations.js  # Scroll animation system
├── firebase.json           # Firebase hosting configuration
├── .firebaserc            # Firebase project configuration
└── README.md              # This file
```

## 🛠 Firebase Setup

### Prerequisites

1. Install Node.js and npm
2. Install Firebase CLI globally:
   ```bash
   npm install -g firebase-tools
   ```

### Deployment Steps

1. **Login to Firebase**:
   ```bash
   firebase login
   ```

2. **Create a new Firebase project** (if not already created):
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Create a project"
   - Enter project name: `callpilot-hero`
   - Follow the setup wizard

3. **Initialize Firebase in your project**:
   ```bash
   firebase init hosting
   ```
   - Select your Firebase project
   - Use current directory as public directory (.)
   - Configure as single-page app: Yes
   - Set up automatic builds: No

4. **Deploy to Firebase**:
   ```bash
   firebase deploy
   ```

### Firebase Configuration

- **Public Directory**: `.` (current directory)
- **Single Page App**: Yes (for proper routing)
- **Cache Control**: Optimized for static assets
- **Rewrites**: All routes redirect to index.html for SPA behavior

## 🌐 Live URL

After deployment, your site will be available at:
`https://callpilot-hero.web.app`

## 🔧 Development

To run locally:
1. Open `index.html` in a web browser, or
2. Use a local server:
   ```bash
   firebase serve
   ```

## 📱 Pages

- **Homepage** (`/`): Main landing page with hero section and features
- **Plans** (`/plans`): Pricing plans and feature comparison

## 🎨 Design Features

- **Glass Morphism**: Modern frosted glass effects
- **Layered Backgrounds**: Purple circles with glass overlays
- **Apple-Style Typography**: SF Pro Display/Text font family
- **Smooth Animations**: Hardware-accelerated scroll animations
- **Responsive Grid**: Mobile-first responsive design

## 📊 Performance

- **Optimized Assets**: Cached static files for 1 year
- **Compressed Delivery**: Firebase CDN optimization
- **Fast Loading**: Minimized and optimized code
- **Mobile Optimized**: Responsive design patterns

---

Built with ❤️ for CallPilot AI Voice Intelligence