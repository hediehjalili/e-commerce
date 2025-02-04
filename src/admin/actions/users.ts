"use server";
import { changeUserStatus } from "@/api/server-api/users";
import { ApiError } from "@/api/server-api/base";
import { ensureAuthenticated } from "@/lib/session";
import { revalidatePath } from "next/cache";

export async function changeUserStatusAction(id: string, isActive: boolean) {
  await ensureAuthenticated();
  try {
    await changeUserStatus(id, { isActive });
  } catch (e) {
    if (e instanceof ApiError) {
      return {
        success: false,
        message: e.message,
      };
    }
  }
  revalidatePath("/dashboard/users");
}
