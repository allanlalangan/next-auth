import NewProjectForm from "@/components/NewProjectForm";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <>
      <div className="col-span-12 flex items-center">
        <Link className="mr-4" href="/dashboard">
          Go Back
        </Link>
        <h1 className="text-2xl font-semibold">Projects</h1>
      </div>
      <section className="p-4 border border-slate-600 col-span-8">
        <h2>All Projects</h2>
        <ul>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </ul>
      </section>
      <section className="col-span-4">
        <NewProjectForm />
      </section>
    </>
  );
}
