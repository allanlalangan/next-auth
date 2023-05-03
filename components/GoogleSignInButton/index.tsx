"use client";

import { signIn, useSession } from "next-auth/react";

const GoogleSignInButton = () => {
  const { data: session } = useSession();
  return (
    <button
      disabled={!!session}
      className="p-4 bg-slate-700 text-gray-50 mb-2"
      onClick={() => {
        signIn("google", undefined, { prompt: "select_account" });
      }}
    >
      Sign In With Google
    </button>
  );
};
export default GoogleSignInButton;
