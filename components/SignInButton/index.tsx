"use client";

import { signIn } from "next-auth/react";

const SignInButton = () => {
  return <button onClick={() => signIn()}>SignInButton</button>;
};
export default SignInButton;
