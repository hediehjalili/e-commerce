"use server";
import {
  createProduct,
  updateProduct,
  deleteProduct,
} from "@/api/server-api/products";
import { ApiError } from "@/api/server-api/base";
import { ensureAuthenticated } from "@/lib/session";
import { ProductFormState, ProductSchemaZod } from "@/lib/validations";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { formDataToObject } from "@/lib/utils";

export async function createOrUpdateProductAction(
  state: ProductFormState,
  formData: FormData
) {
  /// validate input
  await ensureAuthenticated();
  const id = formData.get("id");
  const validatedFields = ProductSchemaZod.safeParse(
    formDataToObject(formData)
  );

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  try {
    if (id) {
      await updateProduct(id.toString(), validatedFields.data);
    } else {
      await createProduct(validatedFields.data);
    }
  } catch (e) {
    console.log(e);
    if (e instanceof ApiError) {
      return {
        message: e.message,
        errors: e.body?.errors as ProductFormState["errors"],
      };
    } else {
      return {
        message: "failed with call api",
        success: false,
      };
    }
  }
  redirect("/dashboard/products");
}

export async function deleteProductAction(id: string) {
  await ensureAuthenticated();
  try {
    await deleteProduct(id);
  } catch (e) {
    if (e instanceof ApiError) {
      return {
        success: false,
        message: e.message,
      };
    }
  }
  revalidatePath("/dashboard/products");
}
