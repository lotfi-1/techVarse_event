/** @format */

import * as z from "zod";

export const registerSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  age: z.number().int().gte(0, "Age must be a non-negative integer"),
  studyLevel: z.string().min(1, "Study level is required"),
  fieldOfStudy: z.string().min(1, "Field of study is required"),
  phoneNumber: z.string().regex(/^\+?\d{10,15}$/, "Invalid phone number"),
  state: z.string().min(4, "State is required"),
  hearAboutUs: z.string().optional(), // Optional field
});
