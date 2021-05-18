# Eleventy Kit

A static website starter kit for the modern web

This project includes the following setup right out of the box

-   Eleventy
-   TailwindCSS
-   AlpineJS

It also includes some handy defaults already configured

-   Purge and minifies CSS
-   Minifies JS
-   Minifies HTML
-   Global config & default global layout
-   Removes comments from HTML
-   Adds native lazy loading to images

## Getting Started

```bash
# A few options:
# 1. Click "Use this template" above to create a new repo
# 2. Clone this repo to your local machine

# Install dependencies
npm run install

# Run locally (will start on localhost:8080 by default).Eleventy will watch for file changes and live reload
npm run dev

# Build for production (output will be in dist directory)
npm run build
```

## Adding pages

By default, all pages are located in `src/pages`. Add all of your pages and subdirectories here. By default I have created all files with the `.liquid` extension. You are totally free to use whatever flavor you want, [eleventy supports a large list of template languages](https://www.11ty.dev/docs/languages)

> If you change, make sure to add in the desired language to the purge array, found in `tailwind.config.js` . By default, its `'./src/**/*.liquid'`

## Public Assets

Everything in the `/public` directory and subdirectories will be copied to the top level of `dist`. So for example, access `public/images/example.jpg` from the site looks like this.

```html
<img src="/images/example.jpg" />
```
