import { DesktopNavbar } from "@/components/layout/DesktopNavbar";
import { MobileNavbar } from "@/components/layout/MobileNavbar";

export function NavbarContainer() {
  return (
    <header className="sticky top-0 w-full z-50 border-b bg-background">
      <div className="container">
        <DesktopNavbar />
        <MobileNavbar />
      </div>
    </header>
  );
}
