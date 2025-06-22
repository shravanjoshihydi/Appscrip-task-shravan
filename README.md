
# 🛍️ Appscrip task

A responsive, SEO-optimized Application built using the **Next.js** framework with **server-side rendering (SSR)**, pure HTML/CSS (no Tailwind or Bootstrap), and React functional components.

This project demonstrates clean code practices, semantic markup, SEO techniques, and minimal dependencies—ideal for learning, prototyping, or extending into a production-ready e-commerce frontend.

---

## ✨ Features

- ✅ **Server-side rendering** for SEO and performance
- ✅ **Responsive design**: mobile, tablet, desktop
- ✅ **Product filtering** by category (Men/Women/Kids)
- ✅ **Sorting** by price (ascending/descending)
- ✅ **Modular CSS** with plain styling
- ✅ **SEO best practices**:
  - Meta title & description
  - Structured `<h1>`, `<h2>` headings
  - Alt text & descriptive filenames for images
  - Minimal DOM
- ✅ **Accessible & lightweight**
- ✅ **Deployed on Vercel**

---

## 📁 Project Structure

```
appscrip-task-shravan/
├── components/
│   ├── Header.js
│   ├── Footer.js
│   ├── ProductCard.js
│   ├── SidebarFilters.js
│   └── Sort.js
│
├── pages/
│   └── index.js
│
├── public/
│   └── images/
│       ├── arrow-left.png
│       ├── element-4.png
│       ├── heart.png
│       ├── Logo.png
│       ├── profile.png
│       ├── redheart.png
│       ├── search-normal.png
│       ├── shopping-bag.png
│       ├── USA.png
│       └── products/
│           ├── whitecap.jpg
│           ├── greybag.jpg
│           ├── plushytoy.jpg
│           ├── minipurse.jpg
│           ├── plushytoy.jpg
│           └── bracelet.jpg
│
├── styles/
│   ├── Header.module.css
│   ├── Footer.module.css
│   ├── Home.module.css
│   ├── SidebarFilters.module.css
│   ├── Sort.module.css
│   └── ProductCard.module.css
│
├── .gitignore
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/shravanjoshihydi/Appscrip-task-shravan
cd Appscrip-task-shravan
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Open your browser at:  
📍 [http://localhost:3000](http://localhost:3000)


## 🧠 Product Data Example

Each product includes:

- `id`: Unique identifier
- `name`: Product title
- `image`: Path to SEO-friendly image
- `category`: 'Men', 'Women', or 'Kids'
- `status`: Stock status
- `price`: Random INR value
- `description`: Optional pricing message

---

## 🔍 SEO Optimization

- ✅ Semantic headings: `<h1>`, `<h2>`, `<p>`
- ✅ `<title>` and `<meta name="description">` via `<Head>`
- ✅ Alt text on all images
- ✅ Clean & short image filenames
- ✅ Modular CSS for minimal style bloat
- ✅ Lean HTML structure


---


## 👨‍💻 Author

**Shravan Joshi**  
GitHub: [@shravanjoshihydi](https://github.com/shravanjoshihydi)

---

## 📷 Image Attribution

All product images used are sample placeholders. Replace them with royalty-free or licensed images before deploying commercially.
