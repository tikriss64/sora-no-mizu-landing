# Sora no Mizu — Landing page

Landing page de una sola página (español) para la app zen japonesa **Sora no Mizu**.
React + TanStack Start + Tailwind. Construida con [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/e4953d8b-7929-49bc-9c7c-f21ca479e1cc).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
npm i
npm run dev
```

## Build y despliegue en Cloudflare (Worker)

El proyecto compila con Nitro usando el preset `cloudflare-module` (Worker de Cloudflare).

```sh
npm i
npm run build
# el build genera .output/ (server + public)
cd .output/server
npx wrangler deploy
```

Requiere autenticación de Cloudflare (variables de entorno):

```sh
CLOUDFLARE_API_TOKEN=<tu api token>
CLOUDFLARE_ACCOUNT_ID=<tu account id>
```

El worker se llama `tikriss64-sora-no-mizu-landing` (nombre autogenerado por Nitro).
