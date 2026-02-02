# Gallery Images

Place your gallery images in this directory.

Recommended specifications:
- Format: JPG or PNG
- Size: 1200x1200px (square aspect ratio)
- File size: Under 500KB (optimized for web)

Naming convention:
- project-name-1.jpg
- project-name-2.jpg
- etc.

Example file structure:
```
static/images/gallery/
├── deck-restoration-1.jpg
├── deck-restoration-2.jpg
├── fence-staining-1.jpg
├── furniture-refinishing-1.jpg
├── hardwood-floors-1.jpg
└── outdoor-furniture-1.jpg
```

After adding images, update the gallery template at:
`themes/tailbliss/layouts/gallery/single.html`

Replace the placeholder divs with actual image tags:
```html
<img src="/images/gallery/deck-restoration-1.jpg" 
     alt="Deck Restoration Project" 
     class="w-full h-full object-cover">
```
