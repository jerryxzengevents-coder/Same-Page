## Are we on the same page?

Mobile-first Next.js (App Router) game about deal breakers and compatibility. Pass a phone, swipe or tap Agree/Disagree, and see where you match.

### Run locally
- Install deps: `npm install`
- Start dev server: `npm run dev` then open http://localhost:3000
- Lint (optional): `npm run lint`

### Deploy to Vercel
- Create a new Vercel project, link this repo, and keep the default Next.js settings.
- Add the production URL in `NEXT_PUBLIC` envs if you introduce any later; otherwise just deploy. Vercel will run `npm install && npm run build` automatically.
