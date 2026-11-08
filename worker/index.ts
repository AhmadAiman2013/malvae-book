// worker/index.ts
interface Env {
    API: Fetcher
    ASSETS: Fetcher
}

export default {
    async fetch(request: Request, env: Env) {
        const { pathname } = new URL(request.url)
        if (pathname.startsWith('/api/')) return env.API.fetch(request)
        return env.ASSETS.fetch(request)
    },
}