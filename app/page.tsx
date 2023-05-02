import SignInButton from "@/components/SignInButton";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <h1>Next 13 Sandbox</h1>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/signin">Sign-In</Link>
    </main>
  );
}
