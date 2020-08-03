# Eleventy Kit

A static website starter kit for the modern web

This project includes the following setup right out of the box

-   Eleventy
-   Webpack
-   TailwindCSS
-   AlpineJS
-   Feather Icons

It also includes some handy defaults already configured

-   Purge and minifies CSS
-   Minifies JS
-   Minifies HTML
-   Babel
-   Global config & default global layout

## Getting Started

```bash
# A few options:
# 1. Click "Use this template" above to create a new repo
# 2. Clone this repo to your local machine

# Install dependencies
npm install

# Run locally (will start on localhost:8080 by default)
npm run dev

# Build for production (output will be in dist directory)
npm run build
```

## Adding pages

By default, all pages are located in `src/pages`. Add all of your pages or subdirectories here

## Using Icons

Adding an icon is simple, just add in a `<i></i>` html element with the `data-feather` attribute. Example below. By default Feather Icons are used.

```html
<i data-feather="camera"></i>
```

## Public Assets

Everything in the `src/public` directory and subdirectories will be copied to the top level of `dist`. So for example, access `src/public/images/example.jpg` from the site looks like this.

```html
<img src="/images/example.jpg"/>
```