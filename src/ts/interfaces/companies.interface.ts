import * as z from "zod";

export const CompaniesSchema = z.object({
    administrator: z.string(),
    created_at: z.coerce.date(),
    email: z.string().email(),
    id: z.number(),
    name: z.string(),
    phone: z.string(),
    status: z.enum([
        "active",
        "pending",
        "blocked",
        "draft",
        "completed",
        "available",
        "canceled",
        "payment_error",
        "done",
        "incomplete",
        "rejected",
        "unrealized",
    ]) 
})

export type CompaniesInterface = z.infer<typeof CompaniesSchema>;
