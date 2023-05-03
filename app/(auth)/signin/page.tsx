import GitHubSignInButton from "@/components/GitHubSignInButton";
import GoogleSignInButton from "@/components/GoogleSignInButton";
import Link from "next/link";

export default function SignInPage() {
  return (
    <section className="flex flex-col">
      <GitHubSignInButton />
      <GoogleSignInButton />
      <Link href="/">Back to Home page</Link>
    </section>
  );
}
