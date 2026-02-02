# Timber Loving Care Website

A Hugo website built with the Tailbliss theme for Timber Loving Care - Professional tree and wildfire mitigation services.

## Project Structure

```
timberlovingcare/
├── content/              # Markdown content files
│   ├── _index.md        # Home page content
│   └── gallery.md       # Gallery page content
├── themes/
│   └── tailbliss/       # Tailbliss theme
│       ├── layouts/     # HTML templates
│       │   ├── _default/
│       │   │   └── baseof.html
│       │   ├── partials/
│       │   │   ├── header.html
│       │   │   └── footer.html
│       │   ├── gallery/
│       │   │   └── single.html
│       │   └── index.html
│       └── assets/
│           └── css/
│               └── main.css
├── hugo.toml            # Hugo configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── package.json         # Node dependencies

```

## Prerequisites

- [Hugo Extended](https://gohugo.io/installation/) (v0.112.0(?) or higher, working on v0.155.0)
- [Node.js](https://nodejs.org/) (v16 or higher, currently on Debian 12, stock)
- npm or yarn

## Setup

1. Install Node dependencies:
```zsh
npm install
```

2. Run the development server:
```zsh
hugo server -D
```

3. Visit `http://localhost:1313` in your browser

## Build for Production

```zsh
hugo --minify
```

The production files will be generated in the `public/` directory.

## Customization

### Colors
Edit the color scheme in `tailwind.config.js` and `themes/tailbliss/assets/css/main.css`:

```css
:root {
  --color-primary: #0f766e;    /* Teal */
  --color-secondary: #a78bfa;  /* Purple */
  --color-accent: #f59e0b;     /* Amber */
}
```

### Navigation
Update menu items in `hugo.toml`:

```toml
[[menu.main]]
  name = "Home"
  url = "/"
  weight = 1
```

### Images
Replace placeholder images in the gallery by:
1. Adding images to `static/images/gallery/`
2. Updating the gallery template at `themes/tailbliss/layouts/gallery/single.html`
3. Replace the placeholder `<div>` elements with `<img>` tags

### Content
- Home page: Edit `content/_index.md` and modify `themes/tailbliss/layouts/index.html`
- Gallery page: Edit `content/gallery.md` and modify `themes/tailbliss/layouts/gallery/single.html`

## Pages

- **Home** (`/`) - Landing page with hero section, services overview, and CTA
- **Gallery** (`/gallery/`) - Project showcase with filterable grid (placeholders ready for your images)

## Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Tailwind CSS for styling
- ✅ Clean, modern aesthetic
- ✅ Mobile-friendly navigation
- ✅ Gallery with hover effects
- ✅ Ready for image uploads
- ✅ SEO-friendly structure
- ✅ Fast performance

## Adding New Pages

1. Create a new markdown file in `content/`:
```zsh
hugo new about.md
```

2. Create a corresponding layout in `themes/tailbliss/layouts/` if needed

3. Add to navigation menu in `hugo.toml`

## Support

For Hugo documentation, visit: [GoHugo](https://gohugo.io/documentation/)
For Tailwind CSS documentation, visit: [TailwindCSS](https://tailwindcss.com/docs)

## License

MIT License - feel free to use and modify for your needs.
2026 - The TimberLovingCare People.
