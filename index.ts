/// <reference lib="deno.unstable" />

import { load } from './deps.ts'

await load({ export: true })

Deno.cron('healthcheck', { minute: { every: 1 } }, () => {
  fetch(`${Deno.env.get('ORIGIN')}/healthcheck`, { method: 'GET' })
})
