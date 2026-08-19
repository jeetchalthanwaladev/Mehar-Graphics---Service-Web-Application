# 🎨 Mehar Graphics — Service Web Application

[![React](https://img.shields.io/badge/React-19.1-blue.svg?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.1-646CFF.svg?logo=vite)](https://vitejs.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-12.5-FFCA28.svg?logo=firebase)](https://firebase.google.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A modern, high-performance, interactive web application for **Mehar Graphics** — specializing in paper printing, vinyl printing, digital branding, web design, SEO, social media marketing, and video production services. Built with React 19, Vite, Framer Motion, and integrated with Firebase Firestore and Storage for live content editing and showcase.

---

## ✨ Features

- 🌟 **Comprehensive Services Portfolio**: Interactive showcase for Vinyl Printing, Paper Printing, Digital Branding, Web Design, SEO, Social Media Marketing, and Video Editing.
- ⚡ **Interactive & Dynamic UI**: Powered by **Framer Motion** for smooth page transitions and micro-interactions, including a customized smoke cursor effect (`SmokeCursor`).
- 🛠️ **Real-Time Admin Content Editor**: Protected live editor (`HomePreviewEditor`) allowing authorized admins to customize homepage text, images, and banners directly via Firebase.
- 🔒 **Firebase Auth & Firestore Backend**: Secure authentication routing for admin controls and cloud-backed document storage for gallery items and quotes.
- 📱 **Mobile-First & Fully Responsive**: Cross-device optimized layout built with flexbox/grid containers, **Lucide React** icons, and **Swiper** media carousels.
- 🚀 **Lightning Fast**: Built on **Vite 7** for rapid hot module replacement (HMR) and optimized production bundle compilation.

---

## 📁 Project Structure

```text
MeharGraphics/
├── public/                  # Public static assets
├── src/
│   ├── assets/              # Images, logos, icons, and media assets
│   ├── components/          # Modular & reusable UI components
│   │   ├── CtaStrip.jsx
│   │   ├── DigitalBranding.jsx
│   │   ├── EditableImage.jsx
│   │   ├── EditableText.jsx
│   │   ├── FeaturedServices.jsx
│   │   ├── Footer.jsx
│   │   ├── GalleryCard.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── SmokeCursor.jsx
│   │   └── ...
│   ├── lib/                 # Service helpers & Firebase configuration
│   │   ├── firebase.js      # Firebase app initialization & services
│   │   └── upload.js        # Storage upload utility
│   ├── pages/               # Application page routes
│   │   ├── admin/           # Admin live editor & management pages
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Gallery.jsx
│   │   ├── GetQuote.jsx
│   │   └── ...
│   ├── adminRoute.jsx       # Protected route authentication wrapper
│   ├── App.jsx              # Main App entry with Router definitions
│   └── main.jsx             # DOM Root entry point
├── eslint.config.js         # ESLint configuration rules
├── index.html               # Main HTML document template
├── package.json             # Dependencies and npm scripts
└── vite.config.js           # Vite bundler configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/jeetchalthanwaladev/Mehar-Graphics---Service-Web-Application.git
   cd Mehar-Graphics---Service-Web-Application
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Setup**:
   Optionally configure your Firebase credentials inside `src/lib/firebase.js` or via environment variables (`.env`):
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   ```

4. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

---

## 📜 NPM Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the local Vite development server with HMR. |
| `npm run build` | Compiles and optimizes assets into the `dist` directory for production. |
| `npm run preview` | Locally previews the production build output. |
| `npm run lint` | Runs ESLint to check for code quality and syntax issues. |

---

## 🛠️ Built With

- **[React 19](https://react.dev/)** — UI Library
- **[Vite 7](https://vitejs.dev/)** — Frontend Build Tool
- **[Firebase](https://firebase.google.com/)** — Authentication, Firestore & Cloud Storage
- **[Framer Motion](https://www.framer.com/motion/)** — Animations & Page Transitions
- **[React Router v6](https://reactrouter.com/)** — Declarative Client-side Routing
- **[Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)** — Icon Systems
- **[Swiper](https://swiperjs.com/)** — Responsive Carousels & Sliders

---

## 👤 Author & Maintainer

**Mehar Graphics Development Team**
- GitHub: [@jeetchalthanwaladev](https://github.com/jeetchalthanwaladev)
- Repository: [Mehar-Graphics---Service-Web-Application](https://github.com/jeetchalthanwaladev/Mehar-Graphics---Service-Web-Application)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
