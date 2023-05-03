"use client";

import { signIn, signOut, useSession } from "next-auth/react";

const GitHubSignInButton = () => {
  const { data: session } = useSession();

  return (
    <button
      disabled={!!session}
      className="p-4 bg-slate-700 text-gray-50 mb-2"
      onClick={() => {
        signIn("github");
      }}
    >
      Sign In With GitHub
    </button>
  );
};
export default GitHubSignInButton;
