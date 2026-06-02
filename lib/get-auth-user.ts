import { cookies } from "next/headers";
import { adminAuth } from "@/lib/firebase-admin";

// Define a type for the structure you want to return
export interface ServerUser {
  uid: string;
  email?: string;
  name?: string;
  picture?: string;
}

/**
 * Server-side helper to check if a user is authenticated.
 * Returns the decoded user object if logged in, or null if unauthenticated/expired.
 */
export async function getAuthUser(): Promise<ServerUser | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("firebaseToken")?.value;

    if (!token) return null;

    // Cryptographically verify the token using Firebase Admin
    const decodedToken = await adminAuth.verifyIdToken(token);

    return {
      uid: decodedToken.uid,
      email: decodedToken.email,
      name: decodedToken.name,
      picture: decodedToken.picture,
    };
  } catch (error) {
    // Fail silently on the server (expired token, revoked token, etc.)
    // This allows your components to seamlessly render an unauthenticated state
    console.error("Server-side auth verification failed:", error);
    return null;
  }
}