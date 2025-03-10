import { z } from 'zod'

export const earthQuareBaseSchema = z.object({
    date: z.string(),
    time: z.string(),
    latitude: z.string(),
    longitude: z.string(),
    magnitude: z.string(),
    depth: z.string()
})
export const earthQuareSchema = z.object({
    location: z.string(),
    warning: z.array(z.string())
}).merge(earthQuareBaseSchema)
export const earthQuareNowSchema = z.object({
    location: z.string(),
}).merge(earthQuareBaseSchema)
export const earthQuareRealtimeSchema = z.object({
    location: z.array(z.string()),
    isConfirmed: z.boolean()
}).merge(earthQuareBaseSchema)
export type earthQuare = z.infer<typeof earthQuareSchema>
export type earthQuareNow = z.infer<typeof earthQuareNowSchema>
export type earthQuareRealtime = z.infer<typeof earthQuareRealtimeSchema>

export const TsunamiSchema = z.object({
    location: z.string(),
    info: z.string()
}).merge(earthQuareBaseSchema)
export type Tsunami = z.infer<typeof TsunamiSchema>