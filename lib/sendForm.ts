/** @format */

import { registerSchema } from "./zodObjects";

export function checkData(formData: FormData): FormeState {
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
      serverError: false,
      response: false,
      success: false,
      data: null,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  } else {
    return {
      serverError: false,
      response: false,
      success: true,
      data: null,
      errors: null,
    };
  }
}

export async function register(data: any): Promise<FormeState> {
  const response = await fetch("/api/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    return {
      response: false,
      success: false,
      serverError: true,
      errors: {
        serverError: ["Internal Server Error"],
      },
    };
  } else {
    const data = await response.json();
    return {
      response: true,
      success: true,
      serverError: false,
      data,
    };
  }
}
