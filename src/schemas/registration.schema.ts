import { z } from "zod";

export const registrationSchema = z.object({
  // Step 1
  childName: z
    .string()
    .trim()
    .min(2, "Child's name is required"),

  dob: z
    .string()
    .min(1, "Date of birth is required"),

sex: z.enum(["Male", "Female", "Other"], {
  message: "Please select sex",
}),
  guardianName: z
    .string()
    .trim()
    .min(2, "Guardian name is required"),

  phone: z
    .string()
    .regex(/^[0-9]{10}$/, "Enter a valid 10-digit phone number"),

  // Step 2
  weight: z
    .coerce
    .number()
    .positive("Weight must be greater than 0"),

  height: z
    .coerce
    .number()
    .positive("Height must be greater than 0"),

  muac: z
    .coerce
    .number()
    .positive("MUAC must be greater than 0"),

  allergies: z
    .string()
    .trim()
    .optional()
    .or(z.literal("")),

  medicalHistory: z
    .string()
    .trim()
    .optional()
    .or(z.literal("")),

  // Step 3
  assignedDoctor: z
    .string()
    .min(1, "Please select a doctor"),

  batchNumber: z
    .string()
    .trim()
    .optional()
    .or(z.literal("")),

  hasConsent: z
  .boolean()
  .refine(val => val === true, {
    message: "Guardian consent is required",
  }),

isAccurate: z
  .boolean()
  .refine(val => val === true, {
    message: "You must confirm the information is accurate",
  }),
});

export type RegistrationFormData = z.infer<typeof registrationSchema>;
