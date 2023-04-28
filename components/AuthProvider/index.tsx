"use client";

import { SessionProvider } from "next-auth/react";

type AuthProviderProps = {
  children: React.ReactNode;
};

export default function AuthProvider({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
