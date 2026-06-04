# Niroshkumar K — Portfolio

A premium, production-ready developer portfolio built with **React.js + Vite**, featuring a sleek **Navy Blue** theme, Framer Motion animations, particle effects, and a fully responsive layout.

---

## 🚀 Quick Start

### Prerequisites
- Node.js v18+
- npm or yarn

### Install & Run

```bash
# 1. Unzip and enter folder
cd niroshkumar-portfolio

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder, ready for deployment.

---

## 🌐 Deploy to Vercel

### Option 1: Vercel CLI
```bash
npm install -g vercel
vercel
# Follow prompts — select "Vite" as framework
```

### Option 2: Vercel Dashboard
1. Push project to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Framework: **Vite**
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**

---

## 🌐 Deploy to Netlify

### Option 1: Netlify CLI
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

### Option 2: Netlify Dashboard
1. Push project to GitHub
2. Go to [netlify.com](https://netlify.com) → Add new site → Import from Git
3. Build Command: `npm run build`
4. Publish Directory: `dist`
5. Click **Deploy site**

---

## 🗂️ Project Structure

```
src/
├── animations/
│   └── variants.js          # Framer Motion animation configs
├── components/
│   ├── About/               # About Me section
│   ├── Contact/             # Contact form + info
│   ├── Education/           # Education + Certifications
│   ├── Experience/          # Work history timeline
│   ├── Footer/              # Footer with social links
│   ├── Hero/                # Hero with particles + typing
│   ├── Loader/              # Loading screen animation
│   ├── Navbar/              # Sticky responsive navbar
│   ├── Projects/            # Project cards grid
│   └── Skills/              # Skills category cards
├── data/
│   └── resumeData.js        # All portfolio content (edit here!)
├── hooks/
│   └── useScrollAnimation.js # IntersectionObserver + counter hooks
├── styles/
│   └── global.css           # Navy Blue theme CSS variables + utilities
├── App.jsx                  # Root component + cursor/scroll logic
└── main.jsx                 # React entry point
```

---

## ✏️ Customizing Your Data

All content lives in **`src/data/resumeData.js`**. Edit:

- `personalInfo` — name, email, phone, taglines, stats
- `skillCategories` — add/remove skills
- `experiences` — work history
- `projects` — add GitHub/live links
- `education` — degrees and grades
- `certifications` — certificates

---

## 🎨 Changing the Color Theme

Edit CSS variables in `src/styles/global.css`:

```css
:root {
  --blue-mid:      #1E5AA8;   /* Primary button color */
  --blue-bright:   #2D7DD2;   /* Hover / accents */
  --blue-electric: #4FC3F7;   /* Highlights & labels */
  --blue-pale:     #BAE6FD;   /* Light text on blue */
}
```

---

## ✨ Features

- ⚡ **React 18 + Vite** — lightning fast builds
- 🎞 **Framer Motion** — smooth, professional animations
- 🌊 **Particle canvas** — interactive particle network in hero
- ⌨️ **Typing animation** — rotating job titles
- 📱 **Fully responsive** — mobile, tablet, desktop
- 🖱️ **Custom cursor** — animated follower cursor
- 📊 **Count-up stats** — animated number counters
- 🎯 **Scroll animations** — IntersectionObserver-driven reveals
- 💌 **Contact form** — with toast notification
- 🔝 **Back to top** — smooth scroll button
- 🧭 **Scroll progress** — top progress bar
- 🌑 **Dark navy theme** — professional, recruiter-ready

---

## 📋 Dependencies

| Package | Purpose |
|---|---|
| `framer-motion` | Page & component animations |
| `react-type-animation` | Typing text effect |
| `react-scroll` | Smooth section navigation |
| `react-icons` | Icon set (Feather icons) |

---

## 📄 License

MIT — Feel free to use and modify for personal portfolios.

---

Built with ❤️ for Niroshkumar K by Claude (Anthropic)
