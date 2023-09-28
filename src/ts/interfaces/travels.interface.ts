import * as z from "zod";

export const VehiclesSchema = z.object({
  id: z.number(),
  model: z.string(),
  brand: z.string(),
  year: z.string(),
});

export const DriversSchema = z.object({
  id: z.union([z.number(), z.null()]).optional(),
  name: z.string(),
  email: z.string().email().min(5),
  phone: z.string(),
});

export const CompaniesSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const PassengerSchema = z.object({
  name: z.string().min(3),
  phone: z.string().min(3),
  email: z.string().email().min(3),
});

export const TravelsSchema = z.object({
  id: z.number(),
  companies_id: z.number(),
  drivers_id: z.number(),
  vehicles_id: z.number(),
  passenger: PassengerSchema,
  from: DriversSchema,
  to: DriversSchema,
  date: z.coerce.date(),
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
  ]),
  comments: z.null(),
  created_at: z.coerce.date(),
  users_id: z.string(),
  companies: CompaniesSchema,
  drivers: DriversSchema,
  vehicles: VehiclesSchema,
});
export type TravelsInterface = z.infer<typeof TravelsSchema>;
