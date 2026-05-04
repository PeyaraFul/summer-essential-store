"use client";

import { authClient } from "@/lib/auth-client";

export const useUser = () => {
  const { data: session, isPending } = authClient.useSession();

  return {
    user: session?.user,
    isPending,
  };
};