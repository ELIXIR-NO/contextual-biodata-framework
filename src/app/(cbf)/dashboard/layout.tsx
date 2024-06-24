import NavBar from "./nav-bar";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex h-svh flex-row gap-3">
      <NavBar />
      <section className="bg-muted w-full rounded-md border-2 p-1 shadow-md">
        {children}
      </section>
    </main>
  );
}
