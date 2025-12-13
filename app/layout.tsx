import "./globals.css";
import Navbar from "@/src/components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Navbar />
        <main className="pt-1">{children}</main>
      </body>
    </html>
  );
}
