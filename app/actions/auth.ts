"use server";

import { cookies } from "next/headers";

export async function createSession(idToken: string) {
  const cookieStore = await cookies();
  cookieStore.set("firebaseToken", idToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 5, // 5 days
    path: "/",
  });
}

export async function removeSession() {
  const cookieStore = await cookies();
  cookieStore.delete("firebaseToken");
}