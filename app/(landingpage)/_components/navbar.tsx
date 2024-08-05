"use client";
import { ModeToggle } from "@/components/modeToggle";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";

const NavLinks = [
  { label: "Home ", href: "/" },
  { label: "Share your story ", href: "/story" },
  { label: "Browse stories ", href: "/stories" },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="py-5 fixed z-50 w-full bg-background">
      <div className="flex max-w-7xl mx-auto px-5 items-center justify-between">
        <Image
          src="/logo-black.svg"
          alt="logo"
          width={130}
          height={130}
          className="dark:hidden block"
        />
        <Image
          src="/logo-white.svg"
          alt="logo"
          width={130}
          height={130}
          className="dark:block hidden"
        />
        <div className="md:flex hidden items-center gap-x-3">
          {NavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm text-muted-foreground hover:text-primary transition-colors",
                pathname === link.href && "text-primary font-semibold"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-x-2">
          <ModeToggle />
          <span>Login</span>
          <Sheet>
            <SheetTrigger className="md:hidden block">
              <Menu className="w-8 h-8" />
            </SheetTrigger>
            <SheetContent>
              <Image
                src="/logo-black.svg"
                alt="logo"
                width={130}
                height={130}
                className="dark:hidden block"
              />
              <Image
                src="/logo-white.svg"
                alt="logo"
                width={130}
                height={130}
                className="dark:block hidden"
              />
              <div className="flex flex-col gap-y-3 my-10">
                {NavLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-sm text-muted-foreground hover:text-primary transition-colors",
                      pathname === link.href && "text-primary font-semibold"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <span>Login</span>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
