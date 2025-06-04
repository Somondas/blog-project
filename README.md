# 📰 Blog Platform with PayloadCMS, Next.js & Supabase PostgreSQL

A full-stack blog application using **PayloadCMS** for content management, **Next.js** for the frontend, and **Supabase PostgreSQL** as the database — all ready for local development.

---

## 💡 Tech Stack

- ⚙️ **PayloadCMS** v3.40.0 (REST API, Admin UI)
- ⚛️ **Next.js** v15.3.3 (App Router)
- 🧪 **React** v19 + TypeScript (strict mode)
- 🐳 **Docker** for containerized environment
- 🗃️ **Supabase PostgreSQL** (cloud-hosted database)
- 🧰 Dev tools: ESLint, Prettier, cross-env

---

## 🚀 Features

- 📝 CMS-based blog post management (CRUD)
- 📄 Blog post listing and dynamic blog page (`/blog/[slug]`)
- 🔄 Pagination on the blog list
- 🖼️ Media uploads via PayloadCMS
- 🔐 Admin dashboard secured via Payload’s built-in auth
- ⚙️ Fully type-safe (auto-generated types with Payload & Prisma)
- 💻 Clean Monorepo Setup (`/apps/frontend`, `/apps/backend`)

---

## 🧪 Getting Started (Local Development)

> **Note:** The production-ready and working code resides in the `deployment` branch.

### 1. Clone the Repository

```bash
git clone https://github.com/Somondas/blog-project.git
cd blog-project
```

---

### 2. Setup Frontend

```bash
cd apps/frontend
npm install
cp .example.env.local .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_BLOG_AUTHOR=Your Name
```

Start the Next.js dev server:

```bash
npm run dev
```

---

### 3. Setup Backend (PayloadCMS)

```bash
cd apps/backend
npm install
cp .example.env .env
```

Edit `.env`:

```env
DATABASE_URI=your_supabase_postgres_url
PAYLOAD_SECRET=any_random_secret
PORT=3001
```

> ✅ You can use the Supabase URI shared via email — it contains dummy blog post data already seeded.

Start PayloadCMS locally:

```bash
npm run dev
```

---

### 📝 Notes

- ❌ Supabase Auth is not used — PayloadCMS already protects its admin dashboard with its own system. Custom admin UI was unnecessary for this challenge.
- ⚠️ **Deployment Note:** I deployed the CMS on Render, but it couldn't connect to Supabase due to lack of IPv6 support. Supabase charges $4/month for IPv4, so I avoided this cost for the challenge.

---

## 📁 Folder Structure

```plaintext
blog-project/
└── apps/
    ├── backend/                # PayloadCMS backend
    │   ├── .next/              # Next.js build output (Payload Admin)
    │   ├── media/              # Media uploads
    │   ├── node_modules/
    │   ├── src/
    │   │   ├── app/            # Entry point
    │   │   └── collections/    # Payload collections schema
    │   ├── payload.config.ts   # Payload config file
    │   ├── payload-types.ts    # Auto-generated Payload types
    │   ├── docker-compose.yml  # (Optional) Local DB config
    │   ├── Dockerfile          # Backend container config
    │   ├── .env                # Backend env variables
    │   └── ...
    └── frontend/               # Next.js frontend
        ├── .next/
        ├── node_modules/
        ├── public/             # Static assets
        ├── src/
        │   ├── app/            # App router pages
        │   ├── components/     # Shared UI components
        │   ├── constants/      # Reusable constants
        │   └── lib/            # Utility functions (fetchers, etc.)
        ├── .env.local          # Frontend env variables
        └── ...
```
