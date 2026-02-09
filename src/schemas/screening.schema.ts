import { z } from "zod";

export const screeningSchema = z.object({
  screeningDate: z.string().trim().min(1, "Date is required"),
  screeningType: z.enum(["Initial", "Follow-up"]),
  weight: z.coerce.number().positive("Weight must be greater than 0"),
  height: z.coerce.number().positive("Height must be greater than 0"),
  muac: z.coerce.number().positive("MUAC must be greater than 0"),
  temp: z.coerce.number().optional().default(98.6),
  healthStatus: z.enum(["Normal", "At Risk", "Critical"]),
  observations: z.string().trim().optional(),
  assignedDoctor: z.string().trim().min(1, "Doctor is required"),
  doseAmount: z.coerce.number().positive("Dose amount must be greater than 0"),
  batchNumber: z.string().trim().min(1, "Batch number required"),
});


export type ScreeningFormData = z.infer<typeof screeningSchema>;
