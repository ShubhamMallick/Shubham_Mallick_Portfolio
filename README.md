# Shubham Mallick - AI/ML Engineer Portfolio

A modern, responsive portfolio website built with **React**, **Tailwind CSS**, and **Framer Motion**.

### 🌐 [Live Demo](https://shubham-mallick-portfolio.onrender.com/)

## ✨ Features

- 🎨 **Modern Design** - Dark theme with gradient accents
- 🎬 **3D Animations** - Framer Motion powered 3D card tilts, parallax effects, and scroll animations
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ⚡ **Fast Performance** - Vite-powered React for lightning-fast builds
- 📧 **Contact Integration** - Direct email links
- 🧭 **Smooth Navigation** - Scroll-spy navigation with smooth scrolling

## 🚀 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations and 3D effects
- **Lucide React** - Icons

## 📁 Project Structure

```
Porfolio_2/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Hero.jsx        → 3D parallax hero section
│   │   │   ├── About.jsx       → About me with animated stats
│   │   │   ├── Skills.jsx      → Skills with 3D tilt cards
│   │   │   ├── Projects.jsx    → Project showcase
│   │   │   ├── Experience.jsx  → Work experience timeline
│   │   │   ├── Achievements.jsx → Awards & recognition
│   │   │   ├── Research.jsx    → Publications & certifications
│   │   │   ├── Contact.jsx     → Footer with social links
│   │   │   └── Navigation.jsx  → Scroll-spy navigation
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── index.html
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### 1. Navigate to client folder
```bash
cd Porfolio_2/client
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```

The app will run on `http://localhost:5173`

### 4. Build for production
```bash
npm run build
```

This creates an optimized build in the `dist` folder.

## 🎨 Customization

### Updating Content
Edit the component files in `client/src/components/` to update:
- Personal information in `Hero.jsx` and `About.jsx`
- Skills in `Skills.jsx`
- Projects in `Projects.jsx`
- Experience in `Experience.jsx`
- Achievements in `Achievements.jsx`
- Research & Certifications in `Research.jsx`
- Social links and email in `Contact.jsx`

### Changing Colors
Modify `tailwind.config.js` to update the color scheme.

### Animation Speed
Adjust animation durations in components:
```javascript
transition={{ duration: 0.6, delay: 0.2 }}
```

## 📦 Deployment

🔗 **Live Site:** [https://shubham-mallick-portfolio.onrender.com/](https://shubham-mallick-portfolio.onrender.com/)

### Deploy to Vercel (Recommended)
```bash
npm run build
npx vercel
```

### Deploy to Netlify
```bash
npm run build
```
Then drag and drop the `dist` folder to Netlify.

### Deploy to GitHub Pages
```bash
npm run build
npx gh-pages -d dist
```

## 📱 3D Animation Features

- **Hero Section:** Parallax scrolling with floating gradient orbs
- **Skills Cards:** 3D tilt effect on hover (rotateX, rotateY, depth)
- **Project Cards:** 3D perspective transforms
- **Social Icons:** 360° rotation on hover
- **Scroll Animations:** Staggered entrance animations
- **Stats Counters:** Animated number counting
- **Timeline Dots:** Spinning animation on hover

## 🤝 Connect

- **GitHub:** [ShubhamMallick](https://github.com/ShubhamMallick)
- **LinkedIn:** [shubhammallick](https://linkedin.com/in/shubhammallick)
- **LeetCode:** [shubhammallick678](https://leetcode.com/u/shubhammallick678/)
- **Kaggle:** [shubham255](https://www.kaggle.com/shubham255)

---

Built with ♥ by Shubham Mallick
