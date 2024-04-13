import { Sheet } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import type React from "react";

type Props = {
  routes: Array<{
    href: string;
    label: string;
  }>;
};

export const HamburgerMenu: React.FC<Props> = ({ routes }) => {
  return (
    <Sheet>
      <Sheet.Trigger asChild>
        <button type="button" className="lg:hidden">
          <MenuIcon className="size-6" />
          <span className="sr-only">Abrir menú</span>
        </button>
      </Sheet.Trigger>

      <Sheet.Content>
        <nav className="mt-12 flex flex-col items-center justify-center gap-8">
          {routes.map((route) => (
            <a key={route.href} href={route.href}>
              {route.label}
            </a>
          ))}
        </nav>
      </Sheet.Content>
    </Sheet>
  );
};
