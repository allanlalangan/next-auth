"use client";

import { signIn, signOut, useSession } from "next-auth/react";

const GitHubSignInButton = () => {
  const { data: session } = useSession();
  return (
    <button
      className="p-4 bg-slate-700 text-gray-50"
      onClick={() => {
        !session ? signIn("github") : signOut();
      }}
    >
      {!session ? "Sign In With GitHub" : "Sign Out"}
    </button>
  );
};
export default GitHubSignInButton;
