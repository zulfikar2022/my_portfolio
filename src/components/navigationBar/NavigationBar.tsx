"use client";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "../theme/theme-toggle";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NavigationBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav className="w-full flex justify-between items-center p-4  sticky top-0 bg-white dark:bg-[#020817] z-10">
      {/* Logo */}
      <div className="text-xl font-bold">
        <Image
          src="/logo.webp"
          alt="logo image of the site"
          width={50}
          height={50}
          className="rounded-full"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex">
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-4">
            <NavigationMenuItem>
              <NavigationMenuLink href="/">
                {" "}
                <span
                  className={`${pathname === "/" && "underline text-blue-700"}`}
                >
                  Home
                </span>{" "}
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="/projects">
                {" "}
                <span
                  className={`${
                    pathname === "/projects" && "underline text-blue-700"
                  }`}
                >
                  Projects
                </span>{" "}
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="/contact">
                <span
                  className={`${
                    pathname === "/contact" && "underline text-blue-700"
                  }`}
                >
                  Contact Me
                </span>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <ThemeToggle />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Menu Button - Always Visible on Small Screens */}
      <div className="block md:hidden sm:visible">
        <Sheet open={open} onOpenChange={setOpen}>
          <ThemeToggle />
          <SheetTrigger className="ml-2" asChild>
            <Button variant="ghost">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>

          {/* Mobile Navigation Menu */}
          <SheetContent side="left">
            <div className="flex flex-col space-y-4 mt-6">
              <Link
                href="/"
                className={`p-2 text-lg ${
                  pathname === "/" ? "underline text-blue-700" : ""
                }`}
                onClick={() => setOpen(false)}
              >
                Home
              </Link>

              <Link
                href="/projects"
                className={`p-2 text-lg ${
                  pathname === "/projects" ? "underline text-blue-700" : ""
                }`}
                onClick={() => setOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className={`p-2 text-lg ${
                  pathname === "/contact" ? "underline text-blue-700" : ""
                }`}
                onClick={() => setOpen(false)}
              >
                Contact Me
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
