import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import GitHubSignInButton from "@/components/GitHubSignInButton";
import GoogleSignInButton from "@/components/GoogleSignInButton";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  const session = await getServerSession(authOptions);

  if (!!session) {
    redirect("/dashboard");
  }
  return (
    <section className="flex flex-col">
      <GitHubSignInButton />
      <GoogleSignInButton />
      <Link href="/">Back to Home page</Link>
    </section>
  );
}
