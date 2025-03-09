import { z } from 'zod';
export declare const earthQuakeBaseSchema: z.ZodObject<{
    date: z.ZodString;
    time: z.ZodString;
    latitude: z.ZodString;
    longitude: z.ZodString;
    magnitude: z.ZodString;
    depth: z.ZodString;
}, "strip", z.ZodTypeAny, {
    date: string;
    time: string;
    latitude: string;
    longitude: string;
    magnitude: string;
    depth: string;
}, {
    date: string;
    time: string;
    latitude: string;
    longitude: string;
    magnitude: string;
    depth: string;
}>;
export declare const earthQuakeSchema: z.ZodObject<{
    location: z.ZodString;
    warning: z.ZodArray<z.ZodString, "many">;
    date: z.ZodString;
    time: z.ZodString;
    latitude: z.ZodString;
    longitude: z.ZodString;
    magnitude: z.ZodString;
    depth: z.ZodString;
}, "strip", z.ZodTypeAny, {
    date: string;
    time: string;
    latitude: string;
    longitude: string;
    magnitude: string;
    depth: string;
    location: string;
    warning: string[];
}, {
    date: string;
    time: string;
    latitude: string;
    longitude: string;
    magnitude: string;
    depth: string;
    location: string;
    warning: string[];
}>;
export declare const earthQuakeNowSchema: z.ZodObject<{
    location: z.ZodString;
    date: z.ZodString;
    time: z.ZodString;
    latitude: z.ZodString;
    longitude: z.ZodString;
    magnitude: z.ZodString;
    depth: z.ZodString;
}, "strip", z.ZodTypeAny, {
    date: string;
    time: string;
    latitude: string;
    longitude: string;
    magnitude: string;
    depth: string;
    location: string;
}, {
    date: string;
    time: string;
    latitude: string;
    longitude: string;
    magnitude: string;
    depth: string;
    location: string;
}>;
export declare const earthQuakeRealtimeSchema: z.ZodObject<{
    location: z.ZodArray<z.ZodString, "many">;
    isConfirmed: z.ZodBoolean;
    date: z.ZodString;
    time: z.ZodString;
    latitude: z.ZodString;
    longitude: z.ZodString;
    magnitude: z.ZodString;
    depth: z.ZodString;
}, "strip", z.ZodTypeAny, {
    date: string;
    time: string;
    latitude: string;
    longitude: string;
    magnitude: string;
    depth: string;
    location: string[];
    isConfirmed: boolean;
}, {
    date: string;
    time: string;
    latitude: string;
    longitude: string;
    magnitude: string;
    depth: string;
    location: string[];
    isConfirmed: boolean;
}>;
export type earthQuake = z.infer<typeof earthQuakeSchema>;
export type earthQuakeNow = z.infer<typeof earthQuakeNowSchema>;
export type earthQuakeRealtime = z.infer<typeof earthQuakeRealtimeSchema>;
export declare const TsunamiSchema: z.ZodObject<{
    location: z.ZodString;
    info: z.ZodString;
    date: z.ZodString;
    time: z.ZodString;
    latitude: z.ZodString;
    longitude: z.ZodString;
    magnitude: z.ZodString;
    depth: z.ZodString;
}, "strip", z.ZodTypeAny, {
    date: string;
    time: string;
    latitude: string;
    longitude: string;
    magnitude: string;
    depth: string;
    location: string;
    info: string;
}, {
    date: string;
    time: string;
    latitude: string;
    longitude: string;
    magnitude: string;
    depth: string;
    location: string;
    info: string;
}>;
export type Tsunami = z.infer<typeof TsunamiSchema>;
//# sourceMappingURL=index.d.ts.map