# Whara Whara Guesthome

A modern, responsive React/Vite website for [Whara Whara Guesthome](https://wharawhara.co.za) — a premier guest accommodation destination in South Africa.

## 🌐 Live Site

[wharawhara.co.za](https://wharawhara.co.za)

## 🛠️ Tech Stack

- **Frontend**: React + Vite
- **Styling**: CSS3
- **Build Tool**: Vite
- **Deployment**: Vercel
- **Language Composition**: HTML (37%), JavaScript (34.2%), CSS (28.8%)

## 📋 Prerequisites

- Node.js 16+ (recommend 18 or higher)
- npm 7+ or yarn 3+

## 🚀 Getting Started

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/Gavin-X/wharawhara.git
cd wharawhara
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Production Build

Build the optimized production version:

```bash
npm run build
```

The compiled files will be in the `dist/` directory.

## 🚢 Deployment

### Vercel Deployment

Use these settings when importing the GitHub repository into Vercel:

- **Framework preset**: `Vite`
- **Build command**: `npm run build`
- **Output directory**: `dist`
- **Install command**: `npm install`

#### Post-Deployment Setup

After the first deployment:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Domains**
3. Add the production domain: `wharawhara.co.za`
4. Follow Vercel's instructions to update your domain's DNS records
5. Verify that the domain is properly connected

## 📁 Project Structure

```
wharawhara/
├── src/              # Source files
├── public/           # Static assets
├── dist/             # Production build output
├── index.html        # Entry HTML file
├── vite.config.js    # Vite configuration
└── package.json      # Project dependencies
```

## 📝 Available Scripts

- `npm run dev` — Start development server with hot module replacement
- `npm run build` — Create optimized production build
- `npm run preview` — Preview production build locally

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any improvements or bugs.

## 📄 License

This project is proprietary to Whara Whara Guesthome.

## 📧 Contact

For questions or inquiries about the site, please contact Whara Whara Guesthome through their website.

---

**Last Updated**: June 2026
