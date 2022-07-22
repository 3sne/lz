# Landing Zone

This repo contains the source for [mukur.dev](https://mukur.dev), my portfolio website and blog. I am working on customizing a static Next.js (and learning along the way) site based on Lee Robinson's portfolio site [leerob.io](https://leerob.io/) as the codebase (Thanks Lee!). The `coming-soon` has been set as the main branch until the customization is completed on the `main` branch—which will then be promoted to production.

I liked the simplicity of Lee's website and I plan to use the same design language to showcase my journey in tech.

\- Mukur

# mukur.dev

- **Framework**: [Next.js](https://nextjs.org/)
- **Deployment**: [Vercel](https://vercel.com)
- **Content**: [MDX](https://github.com/mdx-js/mdx)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

## Overview

- `data/*` - MDX data that is used for blogs, and code snippets.
- `layouts/*` - The different page layouts each MDX category (blog, newsletter, snippets) uses.
- `lib/*` - Short for "library", a collection of helpful utilities or code for external services.
- `pages/api/*` - [API routes](https://nextjs.org/docs/api-routes/introduction) powering 404 XKCD.
- `pages/blog/*` - Static pre-rendered blog pages using MDX.
- `pages/*` - All other static pages.
- `public/*` - Static assets including fonts and images.
- `scripts/*` - Two useful scripts to generate an RSS feed and a sitemap.
- `styles/*` - A small amount of global styles. I'm mostly using vanilla Tailwind CSS.
