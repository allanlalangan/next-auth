"use client";

import { signIn, signOut, useSession } from "next-auth/react";

const SignInButton = () => {
  const { data: session } = useSession();
  return (
    <button
      className="p-4 bg-slate-700 text-gray-50"
      onClick={() => {
        !session ? signIn() : signOut();
      }}
    >
      {!session ? "Sign In" : "Sign Out"}
    </button>
  );
};
export default SignInButton;
