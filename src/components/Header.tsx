import { Activity } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="MedPostersHub Logo"
            className="h-10 w-10 rounded-md object-contain"
          />
          <span className="text-xl font-semibold text-foreground">
            MedPostersHub
          </span>
        </a>

      <nav className="hidden items-center gap-6 md:flex">
  <a
    href="#catalog"
    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
  >
    Catalog
  </a>
  <a
    href="#combos"
    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
  >
    Combo Offers
  </a>
  <a
    href="#delivery"
    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
  >
    Delivery
  </a>
  <a
    href="#about"
    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
  >
    About
  </a>
  <a
    href="#contact"
    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
  >
    Contact
  </a>
</nav>
      </div>
    </header>
  );
};

export default Header;