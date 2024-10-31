/** @format */

import { registerSchema } from "./zodObjects";

export async function register(
  state: FormeState,
  formData: FormData
): Promise<any> {
  const validatedFields = registerSchema.safeParse({
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    email: formData.get("email") as string,
    age: parseInt(formData.get("age") as string),
    studyLevel: formData.get("studyLevel") as string,
    fieldOfStudy: formData.get("fieldOfStudy") as string,
    phoneNumber: formData.get("phoneNumber") as string,
    state: formData.get("state") as string,
    hearAboutUs: formData.get("hearAboutUs") as string,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  if (validatedFields.success) {
    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validatedFields.data),
    });
    if (!response.ok) {
      return {
        success: false,
        errors: {
          serverError: ["Internal Server Error"],
        },
      };
    } else {
      return {
        success: true,
      };
    }
  }
}
