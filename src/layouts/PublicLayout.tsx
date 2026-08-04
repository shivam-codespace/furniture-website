import { Outlet, useLocation } from "react-router-dom";
import { useLenis } from "@/hooks/useLenis";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export function PublicLayout() {
  useLenis();
  const { pathname } = useLocation();
  // The homepage hero relies on the navbar being fixed at the very top with
  // no offset (transparent, overlaid on the hero image), so the announcement
  // bar only renders on pages where the navbar sits in normal document flow.
  const isHome = pathname === "/";

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {!isHome && <AnnouncementBar />}
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
