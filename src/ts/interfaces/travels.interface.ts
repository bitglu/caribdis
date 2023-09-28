import * as z from "zod";

const VehiclesSchema = z.object({
  id: z.number(),
  model: z.string(),
  brand: z.string(),
  year: z.string(),
});

const DriversSchema = z.object({
  id: z.union([z.number(), z.null()]).optional(),
  name: z.string(),
  email: z.string().email().min(5),
  phone: z.string(),
});

const CompaniesSchema = z.object({
  id: z.number(),
  name: z.string(),
});

const PassengerSchema = z.object({
  name: z.string().min(3),
  phone: z.string().min(3),
  email: z.string().email().min(3),
});

const InformationSchema = z.object({
  passengers: z.number().optional(),
  baggage: z.number().optional(),
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
  information: InformationSchema,
});
export type TravelsInterface = z.infer<typeof TravelsSchema>;
