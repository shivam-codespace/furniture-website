import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/common/Logo";
import { SearchDrawer } from "@/components/layout/SearchDrawer";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Custom Studio", href: "/custom-studio" },
  { label: "Our Story", href: "/our-story" },
  { label: "Why Vaanam", href: "/why-vaanam" },
  { label: "Support", href: "/support" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  // Away from the homepage there's no dark hero behind the header, so it
  // always renders in its solid "scrolled" state instead of transparent.
  const solid = !isHome || scrolled;

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  useEffect(() => {
    document.body.style.overflow = mobileOpen || searchOpen ? "hidden" : "";
  }, [mobileOpen, searchOpen]);

  return (
    <>
      <header
        className={cn(
          "inset-x-0 top-0 z-[60] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isHome ? "fixed" : "sticky",
          solid ? "bg-white/95 shadow-[0_1px_0_0_rgba(27,27,27,0.06)] backdrop-blur-md" : "bg-transparent",
        )}
      >
        <div className="container-luxury flex items-center justify-between py-4">
          <Link to="/">
            <Logo light={!solid} />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => {
              const active = link.href === pathname;
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={cn(
                    "group relative py-2 text-sm font-medium transition-colors",
                    solid ? "text-dark/80 hover:text-dark" : "text-white/90 hover:text-white",
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-0.5 left-0 h-px transition-all duration-300 ease-out",
                      active ? "w-full" : "w-0 group-hover:w-full",
                      solid ? "bg-primary" : "bg-gold",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className={cn(
                "hidden rounded-full p-2.5 transition-colors sm:inline-flex",
                solid ? "text-dark hover:bg-dark/5" : "text-white hover:bg-white/10",
              )}
            >
              <Search className="size-5" strokeWidth={1.5} />
            </button>
            <button
              aria-label="Account"
              className={cn(
                "hidden rounded-full p-2.5 transition-colors sm:inline-flex",
                solid ? "text-dark hover:bg-dark/5" : "text-white hover:bg-white/10",
              )}
            >
              <User className="size-5" strokeWidth={1.5} />
            </button>
            <button
              aria-label="Cart"
              className={cn(
                "relative rounded-full p-2.5 transition-colors",
                solid ? "text-dark hover:bg-dark/5" : "text-white hover:bg-white/10",
              )}
            >
              <ShoppingBag className="size-5" strokeWidth={1.5} />
              <span className="absolute right-1 top-1 flex size-4 items-center justify-center rounded-full bg-gold text-[10px] font-semibold text-dark">
                0
              </span>
            </button>
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className={cn(
                "ml-1 rounded-full p-2.5 transition-colors lg:hidden",
                solid ? "text-dark hover:bg-dark/5" : "text-white hover:bg-white/10",
              )}
            >
              <Menu className="size-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      <SearchDrawer open={searchOpen} onClose={() => setSearchOpen(false)} />

      <motion.div
        initial={false}
        animate={{ x: mobileOpen ? 0 : "100%" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-y-0 right-0 z-[90] flex w-full max-w-sm flex-col bg-white p-8 shadow-2xl lg:hidden"
      >
        <div className="flex items-center justify-between">
          <Logo />
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="rounded-full p-2 text-dark/60 hover:bg-dark/5"
          >
            <X className="size-6" strokeWidth={1.5} />
          </button>
        </div>
        <nav className="mt-12 flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-heading text-2xl text-dark/80 hover:text-dark"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </motion.div>
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-[80] bg-dark/40 backdrop-blur-sm lg:hidden"
        />
      )}
    </>
  );
}
