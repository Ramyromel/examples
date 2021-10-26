# Geolocation Country Block

```ts
import type { NextFetchEvent } from 'next/server'

// Block Austria, prefer Germany
const BLOCKED_COUNTRY = 'AT'

export function middleware(ev: NextFetchEvent) {
  const country = ev.request.geo.country || 'US'

  if (country === BLOCKED_COUNTRY) {
    ev.respondWith(new Response('Blocked for legal reasons', { status: 451 }))
  } else {
    ev.respondWith(
      new Response(`Greetings from ${country}, where you are not blocked.`)
    )
  }
}
```

## How to Use

You can choose from one of the following two methods to use this repository:

### One-Click Deploy

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/examples/tree/main/edge-functions/geolocation-country-block&project-name=geolocation-country-block&repository-name=geolocation-country-block)

### Clone and Deploy

Download this repository via git:

```bash
git clone https://github.com/vercel/examples.git
```

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example edge-middleware/examples/geolocation-country-block geolocation-country-block
# or
yarn create next-app --example edge-middleware/examples/geolocation-country-block geolocation-country-block
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=edge-middleware-eap) ([Documentation](https://nextjs.org/docs/deployment)).