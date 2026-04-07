import { z } from 'zod';

export const documentSchema = z.object({
    title: z.string(),
    url: z.string().url().or(z.string().startsWith('/')),
});

export const wealthMapItemSchema = z.object({
    name: z.string(),
    size: z.number(),
    fill: z.string(),
    ev: z.string(),
});
export const wealthMapSchema = z.array(wealthMapItemSchema);

export type Document = z.infer<typeof documentSchema>;
export type WealthMapItem = z.infer<typeof wealthMapItemSchema>;

/**
 * Utility to safely parse data against a Zod schema.
 * @param schema Zod schema
 * @param data Data to parse
 * @returns Parsed data
 */
export function safeParseData<T extends z.ZodTypeAny>(schema: T, data: unknown): z.infer<T> {
    const result = schema.safeParse(data);
    if (!result.success) {
        console.error("Data validation error:", result.error);
        throw new Error("Failed to parse data schema. Check console for details.");
    }
    return result.data;
}
