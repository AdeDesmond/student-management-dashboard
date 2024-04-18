import * as z from "zod";

export const TeacherFormSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  phoneNumber: z.string().min(1),
  emailAddress: z.string().min(1),
  streetAddress: z.string().min(1),
  streetAddressLine: z.optional(z.string().min(1)),
  city: z.string().min(1),
  state: z.string().min(1),
  postalCode: z.optional(z.string().min(1)),
  className: z.string().min(1),
  classId: z.string().min(1),
  classSize: z.string().min(1),
});

export const ClassFormSchema = z.object({
  className: z.string().min(1),
  classSize: z.string().min(1),
});
