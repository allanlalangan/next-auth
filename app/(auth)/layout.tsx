export default function AuthLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-slate-600 flex justify-center items-center m-auto p-16">
      {children}
    </main>
  );
}
