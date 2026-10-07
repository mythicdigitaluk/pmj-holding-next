# PMJ Holding Next

Next.js holding page for PMJ Building Services.

## Project Status

**On Hold**

## Contents

| Path                                       | Description                                             |
| ------------------------------------------ | ------------------------------------------------------- |
| [app/page.tsx](app/page.tsx)               | Holding page: logo, tagline, contact, and social links. |
| [app/layout.tsx](app/layout.tsx)           | Root layout and site metadata.                          |
| [app/globals.css](app/globals.css)         | Global styles.                                          |
| [app/page.module.css](app/page.module.css) | Holding page styles.                                    |
| [app/sitemap.ts](app/sitemap.ts)           | Sitemap for the production URL.                         |
| [public/branding/](public/branding/)       | PMJ logo.                                               |
| [public/social/](public/social/)           | Social icons and the Open Graph thumbnail.              |

## Requirements

- [Node.js](https://nodejs.org/) v24.21.0, pinned in [`.nvmrc`](.nvmrc).

## Installation

From the project root:

1. Install dependencies with `npm install`.

## Usage

1. Start the development server with `npm run dev`.
2. Open [http://localhost:3000](http://localhost:3000).
3. Edit the holding page in `app/page.tsx`.

## Scripts

| Command          | Description                           |
| ---------------- | ------------------------------------- |
| `npm run dev`    | Start the Next.js development server. |
| `npm run build`  | Build the site for production.        |
| `npm run start`  | Serve the production build.           |
| `npm run lint`   | Run ESLint.                           |
| `npm run format` | Format the project with Prettier.     |

## Environments

| Name       | URL                                                                    | Notes               |
| ---------- | ---------------------------------------------------------------------- | ------------------- |
| Local      | [http://localhost:3000](http://localhost:3000)                         | Development server. |
| Production | [https://pmjbuildingservices.co.uk](https://pmjbuildingservices.co.uk) | Public site.        |

## Domains

Domains are attached to the Vercel project.

| Domain                        | URL                                                                            | Notes                                           |
| ----------------------------- | ------------------------------------------------------------------------------ | ----------------------------------------------- |
| pmjbuildingservices.co.uk     | [https://pmjbuildingservices.co.uk](https://pmjbuildingservices.co.uk)         | Apex domain. Canonical production hostname.     |
| www.pmjbuildingservices.co.uk | [https://www.pmjbuildingservices.co.uk](https://www.pmjbuildingservices.co.uk) | Redirects to `pmjbuildingservices.co.uk` (308). |
| pmj-holding-next.vercel.app   | [https://pmj-holding-next.vercel.app](https://pmj-holding-next.vercel.app)     | Vercel production alias.                        |

## Deployment

Hosted on [Vercel](https://vercel.com/pixelsmatter/pmj-holding-next). The public site is [https://pmjbuildingservices.co.uk](https://pmjbuildingservices.co.uk).
