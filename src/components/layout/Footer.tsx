import { type SVGProps } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Logo } from "@/components/common/Logo";

const FOOTER_LINKS = [
  {
    title: "Shop",
    links: [
      { label: "All Furniture", href: "/shop" },
      { label: "Beds", href: "/shop" },
      { label: "Sofas", href: "/shop" },
      { label: "Dining Sets", href: "/shop" },
      { label: "Wardrobes", href: "/shop" },
      { label: "TV Units", href: "/shop" },
      { label: "View All", href: "/shop" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Why Sharma", href: "/why-sharma" },
      { label: "Our Story", href: "/our-story" },
      { label: "Custom Studio", href: "/custom-studio" },
      { label: "Support", href: "/support" },
      { label: "Careers", href: "/" },
      { label: "Store Locator", href: "/" },
    ],
  },
  {
    title: "Policies",
    links: [
      { label: "Shipping Policy", href: "/" },
      { label: "Returns & Refunds", href: "/" },
      { label: "Warranty Policy", href: "/" },
      { label: "Privacy Policy", href: "/" },
      { label: "Terms & Conditions", href: "/" },
    ],
  },
];

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.9.2-1.5 1.6-1.5H16.5V4.3C16.1 4.2 15.1 4 14 4c-2.3 0-3.9 1.4-3.9 4v2.5H7.5v3H10V21h3.5Z" />
    </svg>
  );
}
function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function PinterestIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 3.5C7.3 3.5 4 6.7 4 10.6c0 2.4 1.3 4.3 3.3 5.1.3.1.4 0 .5-.3l.3-1.2c.1-.3 0-.4-.1-.7-.4-.5-.7-1.2-.7-2.1 0-2.8 2.1-5.3 5.4-5.3 3 0 4.6 1.8 4.6 4.2 0 3.2-1.4 5.8-3.5 5.8-1.1 0-2-.9-1.7-2.1.3-1.3.9-2.8.9-3.7 0-.9-.5-1.6-1.5-1.6-1.2 0-2.1 1.2-2.1 2.9 0 1 .3 1.7.3 1.7l-1.4 5.7c-.4 1.6-.1 3.6-.1 3.8 0 .1.2.2.2.1.1-.1 1.4-1.7 1.8-3.3l.7-2.7c.4.7 1.4 1.3 2.5 1.3 3.3 0 5.7-3 5.7-6.8 0-3.6-3-6.4-6.9-6.4Z" />
    </svg>
  );
}
function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <rect x="2.5" y="6" width="19" height="12" rx="3.5" />
      <path d="M10.5 9.7 14.8 12l-4.3 2.3V9.7Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

const SOCIALS = [
  { icon: FacebookIcon, label: "Facebook" },
  { icon: InstagramIcon, label: "Instagram" },
  { icon: PinterestIcon, label: "Pinterest" },
  { icon: YoutubeIcon, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container-luxury grid grid-cols-2 gap-x-8 gap-y-12 py-16 md:grid-cols-6 md:py-20">
        <div className="col-span-2 flex flex-col gap-5">
          <Logo light />
          <p className="max-w-xs text-sm leading-relaxed text-white/50">
            Crafted by generations.
            <br />
            Built on trust, transparency and timeless craftsmanship.
          </p>
          <div className="flex items-center gap-3">
            {SOCIALS.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex size-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-gold hover:text-gold"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        {FOOTER_LINKS.map((group) => (
          <div key={group.title} className="flex flex-col gap-4">
            <h5 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">{group.title}</h5>
            <ul className="flex flex-col gap-3">
              {group.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-white/70 transition-colors hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-2 flex flex-col gap-4 md:col-span-1">
          <h5 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Newsletter</h5>
          <p className="text-sm text-white/60">Subscribe to get updates on new collections and offers.</p>
          <form className="flex items-center rounded-full border border-white/20 bg-white/5 p-1 pl-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gold text-dark transition-colors hover:bg-secondary-300"
            >
              <ArrowRight className="size-4" strokeWidth={2} />
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-luxury flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/40 sm:flex-row">
          <span>© {new Date().getFullYear()} Sharma Furnitures. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <Link to="/" className="transition-colors hover:text-white/70">
              Privacy Policy
            </Link>
            <Link to="/" className="transition-colors hover:text-white/70">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
