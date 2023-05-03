"use client";

import { signIn, signOut, useSession } from "next-auth/react";

const GoogleSignInButton = () => {
  const { data: session } = useSession();
  return (
    <button
      className="p-4 bg-slate-700 text-gray-50"
      onClick={() => {
        !session ? signIn("google") : signOut();
      }}
    >
      {!session ? "Sign In With Google" : "Sign Out"}
    </button>
  );
};
export default GoogleSignInButton;
