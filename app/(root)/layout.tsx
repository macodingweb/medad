import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="lg:p-4 overflow-x-hidden">
      <Navbar />
      { children }
    </main>
  )
}
