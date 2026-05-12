# Weather Monitoring Dashboard

A modern frontend portfolio project built with Next.js, TypeScript, Tailwind CSS, Shadcn UI conventions, TanStack Query, Zustand, Axios, Recharts, React Hook Form, and Zod.

## API

Weather data is planned around the [Open-Meteo API](https://open-meteo.com/).

## Getting Started

Create `.env.local`:

```bash
NEXT_PUBLIC_API_BASE_URL=https://api.open-meteo.com/v1
```

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Scripts

- `npm run dev` starts the local development server.
- `npm run build` creates a production build.
- `npm run lint` runs ESLint.
- `npm run format` formats the project with Prettier.
- `npm run format:check` checks formatting.

## Project Structure

```txt
src/
  app/
    dashboard/
    settings/
  components/
    dashboard/
    shared/
    ui/
  features/
    weather/
      hooks/
      services/
      types/
  stores/
  lib/
```
