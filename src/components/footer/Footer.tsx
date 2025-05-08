import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t mt-12 py-6 px-4 text-sm text-muted-foreground">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <p>© 2025 Sayed Zulfikar Mahmud</p>
          <p className="text-xs">Built with Next.js & shadcn/ui</p>
        </div>

        {/* Center - Social Links */}
        <div className="flex gap-4 items-center">
          <Link
            href="https://github.com/zulfikar2022"
            target="_blank"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 hover:text-primary transition-colors" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/sayed-zulfikarmahmud/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 hover:text-primary transition-colors" />
          </Link>
          <Link href="mailto:sayedzulfikar2019@gmail.com" aria-label="Email">
            <Mail className="w-5 h-5 hover:text-primary transition-colors" />
          </Link>
        </div>

        {/* Right Section - Nav Links */}
        <div className="flex gap-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/projects" className="hover:underline">
            Projects
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
