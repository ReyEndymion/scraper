import { z } from 'zod';
export const earthQuakeBaseSchema = z.object({
    date: z.string(),
    time: z.string(),
    latitude: z.string(),
    longitude: z.string(),
    magnitude: z.string(),
    depth: z.string()
});
export const earthQuakeSchema = z.object({
    location: z.string(),
    warning: z.array(z.string())
}).merge(earthQuakeBaseSchema);
export const earthQuakeNowSchema = z.object({
    location: z.string(),
}).merge(earthQuakeBaseSchema);
export const earthQuakeRealtimeSchema = z.object({
    location: z.array(z.string()),
    isConfirmed: z.boolean()
}).merge(earthQuakeBaseSchema);
export const TsunamiSchema = z.object({
    location: z.string(),
    info: z.string()
}).merge(earthQuakeBaseSchema);
