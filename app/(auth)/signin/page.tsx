import SignInButton from "@/components/SignInButton";
import Link from "next/link";

export default function SignInPage() {
  return (
    <section className="flex flex-col">
      <SignInButton />
      <Link href="/">Back to Home page</Link>
    </section>
  );
}
