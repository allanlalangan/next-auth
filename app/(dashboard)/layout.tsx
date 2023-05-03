import Header from "@/components/Header";

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center p-16">
        {children}
      </main>
    </>
  );
}
