import Header from "@/components/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="grid-cols-12 grid p-4 gap-4">{children}</main>
    </>
  );
}
