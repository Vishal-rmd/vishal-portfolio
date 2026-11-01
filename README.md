# Vishal V — Professional Portfolio

A modern, responsive professional portfolio for **Vishal V**, an aspiring Cyber Security
Analyst and third-year BE Computer Science and Engineering student.

Built with **React + Vite + TypeScript** and styled with an **Arctic Blue** minimalist
design system. Configured for one-command deployment to **GitHub Pages** via GitHub Actions.

---

## Features

- Clean, light Arctic Blue theme with a full CSS colour system
- Sticky responsive navigation with active-section highlighting and a mobile menu
- Smooth scrolling and subtle scroll-reveal animations
- Eight sections: Home, About, Education, Skills, Projects, Certifications, Academic
  Records, and Contact
- Reusable `DocumentCard` and `ProjectCard` components
- Centralized document configuration in `src/data/documents.ts` — add Google Drive
  links for certificates and academic records here, nowhere else
- Custom inline SVG project illustrations (no external image dependencies)
- GitHub Pages ready — `base` path and Actions workflow pre-configured

---

## Local development

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Build the production version
npm run build

# 4. Preview the production build locally
npm run preview
```

Open the URL Vite prints (typically `http://localhost:5173`).

> Note: The dev server uses the `base` path `/vishal-portfolio/`. If you rename the
> repository, update `base` in `vite.config.ts` to match `/<your-repo-name>/`.

---

## Deploying to GitHub Pages

1. **Create a repository** on GitHub named `vishal-portfolio`.
2. **Upload the source code** to that repository (push to `main`).
3. In the repository, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Push to `main` (or run the workflow manually from the Actions tab). The included
   workflow at `.github/workflows/deploy.yml` will build and deploy automatically.
6. Your site will be live at:

   ```
   https://YOUR-GITHUB-USERNAME.github.io/vishal-portfolio/
   ```

If you renamed the repository, update `base` in `vite.config.ts` to match the new
repository name so assets load correctly.

---

## Adding certificate and academic document links

All certificates and academic records are managed in a single file:

```
src/data/documents.ts
```

Each item has a `url` field. By default every URL is an empty string, which means the
corresponding "View" button is disabled and the card shows *"Document will be available
soon."*

To make a document available, paste its Google Drive (or other) share link into the
matching `url` field:

```ts
{
  id: 'class-x-marksheet',
  title: 'Class X Marksheet',
  category: 'academic',
  url: 'https://drive.google.com/...',   // <- paste the link here
  buttonLabel: 'View Document',
}
```

Save the file, commit, and push — the card will automatically enable its button and
open the link in a new tab. No component code needs to change.

> Privacy: do not commit actual marksheet or certificate files to a public repository.
> Use Google Drive share links instead.

---

## Project structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ProjectCard.tsx
│   ├── DocumentCard.tsx
│   └── ProjectIllustrations.tsx
├── sections/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Education.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Certifications.tsx
│   ├── AcademicRecords.tsx
│   └── Contact.tsx
├── data/
│   └── documents.ts
├── hooks/
│   └── useScrollReveal.ts
├── App.tsx
├── main.tsx
└── index.css
```

---

## Tech stack

- React 18
- Vite
- TypeScript
- Tailwind CSS
- Lucide React icons

---

© 2026 Vishal V. All rights reserved.
