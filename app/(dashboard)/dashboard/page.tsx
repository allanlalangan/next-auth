import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin");
  }

  return (
    <section>
      <h1>Dashboard</h1>
      <Link href="/projects" className="p-2 bg-teal-600">
        Projects
      </Link>
    </section>
  );
}
