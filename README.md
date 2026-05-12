# Tuan Ta Anh — AI Engineer Portfolio

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

A professional portfolio website built with **Next.js, React, TypeScript, Tailwind CSS, Motion, and clean component-based architecture**.

This portfolio presents my work as an **AI Engineer** focused on **Generative AI, RAG systems, backend APIs, SaaS automation, data science, and cloud-based AI/ML delivery**.

---

## Live Demo

Portfolio: `https://your-vercel-url.vercel.app`

---

## About This Project

This portfolio is designed not only as a personal website, but also as a demonstration of frontend engineering quality.

The project focuses on:

- Clean React component structure
- Typed project data with TypeScript
- Reusable section components
- Responsive layout
- Smooth animations
- Project filtering
- Show more / show less project display
- Professional storytelling for AI / ML roles
- Easy deployment to Vercel

---

## Tech Stack

Frontend:

- Next.js
- React
- TypeScript
- Tailwind CSS
- Motion
- Lucide React
- React Icons

Deployment:

- Vercel

Code Quality:

- Component-based architecture
- Centralized portfolio data
- Type-safe project and experience definitions
- Responsive and accessible UI structure

---

## Main Features

### Professional AI Engineer Landing Page

The homepage introduces my profile as an AI Engineer working across GenAI, RAG, backend APIs, data science, and cloud-based AI systems.

### Featured Projects

Projects are categorized by:

- GenAI / RAG
- Data Science
- Backend / SaaS
- Cloud / MLOps

Each project includes:

- Project title
- Category
- Short description
- Engineering impact
- Tech stack
- External links where available

### Project Filtering

The portfolio includes interactive filters so visitors can quickly browse projects by category.

### Show More / Show Less Project View

To keep the portfolio easy to scan, only the first few projects are shown by default. Visitors can expand the full list when needed.

### Experience Section

The experience section summarizes my AI, data, cloud, and backend engineering background across multiple companies and client projects.

### Skills Section

Technical skills are grouped into:

- AI & LLM
- Data Science & ML
- Backend & APIs
- Cloud & Data

### Contact Section

The contact section includes links to email, GitHub, LinkedIn, and location-level information.

---

## Project Structure

```bash
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── AnimatedCard.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Expertise.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Portfolio.tsx
│   ├── Projects.tsx
│   ├── SectionHeader.tsx
│   └── Skills.tsx
│
└── data/
    └── portfolio.ts
```

---

## Key Files

### `src/app/page.tsx`

Main Next.js page. It keeps the page clean by rendering the main Portfolio component.

### `src/components/Portfolio.tsx`

Main layout component that combines all portfolio sections.

### `src/data/portfolio.ts`

Centralized data file for:

- Profile information
- Stats
- Project list
- Experience list
- Skill groups

This makes the website easy to update without changing the UI components.

### `src/components/Projects.tsx`

Handles project filtering and the show more / show less logic.

### `src/app/globals.css`

Contains the global visual theme, reusable CSS utility classes, button styles, card styles, and background styling.

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/tuanTaAnh/tuan-ai-portfolio.git
cd tuan-ai-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

---

## Build for Production

```bash
npm run build
```

Run the production build locally:

```bash
npm run start
```

---

## Deploy to Vercel

The recommended deployment flow is:

1. Push this repository to GitHub
2. Import the repository into Vercel
3. Keep the default Next.js settings
4. Deploy

Default Vercel settings:

```text
Framework Preset: Next.js
Build Command: npm run build
Install Command: npm install
Output Directory: default
```

After deployment, every push to the main branch will trigger a new Vercel deployment automatically.

---

## Customization

### Update profile information

Edit:

```bash
src/data/portfolio.ts
```

Update the `profile` object:

```ts
export const profile = {
  name: "Tuan Ta Anh",
  role: "AI Engineer",
  headline: "AI Engineer · GenAI · RAG · Backend APIs · Data Science",
  location: "Berlin, Germany",
  email: "anhtuan19981998@gmail.com",
  github: "https://github.com/tuanTaAnh",
  linkedin: "https://linkedin.com/in/ta-anh-tuan-ai-engineer",
  summary: "...",
};
```

### Add or update projects

Edit the `projects` array in:

```bash
src/data/portfolio.ts
```

Example:

```ts
{
  title: "Project Name",
  category: "GenAI / RAG",
  subtitle: "Short project subtitle",
  description: "Project description...",
  impact: [
    "Business or technical impact 1",
    "Business or technical impact 2",
    "Business or technical impact 3",
  ],
  stack: ["Python", "FastAPI", "RAG", "GCP"],
}
```

### Update skills

Edit the `skillGroups` array in:

```bash
src/data/portfolio.ts
```

### Update theme

Edit:

```bash
src/app/globals.css
```

The current theme uses an **AI Lab / Editorial Portfolio** style with:

- Off-white paper background
- Strong black borders
- Orange and blue accent colors
- Technical report-like layout
- Clean professional typography

---

## Design Direction

The design intentionally avoids a generic dark SaaS landing-page look.

Instead, it uses a more distinctive **AI Lab / Technical Portfolio** style to communicate:

- Engineering clarity
- Technical confidence
- Strong project storytelling
- Clean architecture
- Professional AI product thinking

---

## Portfolio Focus

This website is optimized for roles such as:

- AI Engineer
- GenAI Engineer
- RAG Engineer
- Backend AI Engineer
- Data Scientist
- Machine Learning Engineer
- Working Student AI / Data / Software Engineering roles

---

## Privacy Notes

This public portfolio should not include sensitive personal information such as:

- Passport number
- Full home address
- Date of birth
- Visa document numbers
- Private client credentials
- Confidential client data

Only public-safe information should be displayed.

---

## Author

**Tuan Ta Anh**

GitHub: `https://github.com/tuanTaAnh`

LinkedIn: `https://linkedin.com/in/ta-anh-tuan-ai-engineer`

Email: `anhtuan19981998@gmail.com`