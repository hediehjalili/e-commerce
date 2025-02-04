"use server";
import { createColor, updateColor, deleteColor } from "@/api/server-api/colors";
import { ApiError } from "@/api/server-api/base";
import { ensureAuthenticated } from "@/lib/session";
import { ColorFormState, ColorSchemaZod } from "@/lib/validations";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { formDataToObject } from "@/lib/utils";

export async function createOrUpdateColorAction(
  state: ColorFormState,
  formData: FormData
) {
  /// validate input
  await ensureAuthenticated();
  const id = formData.get("id");
  const validatedFields = ColorSchemaZod.safeParse(formDataToObject(formData));
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  try {
    if (id) {
      await updateColor(id.toString(), validatedFields.data);
    } else {
      await createColor(validatedFields.data);
    }
  } catch (e) {
    console.log(e);
    if (e instanceof ApiError) {
      return {
        message: e.message,
        errors: e.body?.errors as ColorFormState["errors"],
      };
    } else {
      return {
        message: "failed with call api",
        success: false,
      };
    }
  }
  redirect("/dashboard/colors");
}

export async function deleteColorAction(id: string) {
  await ensureAuthenticated();
  try {
    await deleteColor(id);
  } catch (e) {
    if (e instanceof ApiError) {
      return {
        success: false,
        message: e.message,
      };
    }
  }
  revalidatePath("/dashboard/colors");
}
