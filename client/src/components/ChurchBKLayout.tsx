import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  Crown,
  DollarSign,
  FileText,
  Globe,
  Landmark,
  Menu,
  Scale,
  Search,
  Shield,
  Users,
  Wallet
} from "lucide-react";

import { useEffect, useState } from "react";
import { SmartImage } from "./SmartImage";

import { Link, useLocation } from "wouter";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location, setLocation] = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const navItems = [
    { href: "/vault", label: "Raw Evidence Depository", icon: Scale },
    { href: "/vault/documents", label: "Document Library", icon: FileText },
    { href: "/vault/bankruptcy", label: "The Bankruptcy Playbook", icon: Shield },
    { href: "/vault/active-case-dossiers", label: "Active Case Dossiers", icon: BarChart3 },
    { href: "/vault/the-corporate-veil", label: "The Corporate Veil", icon: Shield },
    { href: "/vault/intelligence", label: "Research & Intelligence", icon: Landmark },
  ];

  const NavContent = () => (
    <div className="flex flex-col h-full bg-sidebar text-sidebar-foreground border-r border-sidebar-border">
      <div className="p-6">
        <Link href="/">
          <div className="flex items-center gap-3 mb-2 cursor-pointer group">
            <SmartImage
              src="/assets/sodom-hall-logo.png"
              alt="Sodom Hall"
              className="h-10 w-auto group-hover:scale-105 transition-all grayscale brightness-200 hover:brightness-100 hover:grayscale-0 shadow-[0_0_10px_rgba(220,38,38,0.2)]"
            />
            <h1 className="font-serif font-bold text-2xl tracking-tight leading-none text-foreground group-hover:text-accent transition-colors">
              THE<br />VAULT
            </h1>
          </div>
        </Link>

        <p className="text-xs text-muted-foreground mt-2 uppercase tracking-widest font-mono">
          Raw Evidence Depository
        </p>
      </div>

      <div className="px-4 mb-4">
        <Button
          variant="outline"
          className="w-full justify-start text-muted-foreground text-xs h-9"
          onClick={() => setOpen(true)}
        >
          <Search className="mr-2 h-3 w-3" />
          Search...
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 ml-auto">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
      </div>

      <Separator className="bg-sidebar-border opacity-50" />

      <ScrollArea className="flex-1 py-4">
        <nav className="px-4 space-y-1">
          {navItems.map((item) => {
            const isActive = location === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <div
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 text-sm font-medium transition-colors cursor-pointer group",
                    isActive
                      ? "bg-sidebar-accent text-sidebar-accent-foreground border-l-2 border-accent pl-[10px]"
                      : "text-muted-foreground hover:text-foreground hover:bg-sidebar-accent/50"
                  )}
                >
                  <item.icon className={cn("w-4 h-4", isActive ? "text-accent" : "text-muted-foreground group-hover:text-foreground")} />
                  {item.label}
                </div>
              </Link>
            );
          })}
        </nav>
      </ScrollArea>

      <div className="p-6 mt-auto border-t border-sidebar-border bg-sidebar-accent/10">
        <Link href="/">
          <div className="font-mono text-xs text-muted-foreground hover:text-foreground cursor-pointer flex items-center gap-2 mb-4 border border-sidebar-border p-2 justify-center rounded-sm transition-colors hover:bg-sidebar-accent/50">
            ← Return to Archway
          </div>
        </Link>
        <div className="text-xs text-muted-foreground">
          <p className="font-semibold mb-1 text-foreground">Archive Status: UNSEALED</p>
          <p>Index: Sodom Hall v7.3</p>
          <p className="mt-2 opacity-70">Sourced from Public Records</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background flex font-sans text-foreground">
      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-64 fixed top-[56px] bottom-0 z-40 bg-sidebar border-r border-sidebar-border overflow-y-auto">
        <NavContent />
      </aside>

      {/* Mobile Sidebar */}
      <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden fixed top-4 left-4 z-50">
            <Menu className="w-6 h-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-64 border-r border-sidebar-border">
          <NavContent />
        </SheetContent>
      </Sheet>

      {/* Command Palette */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Navigation">
            {navItems.map((item) => (
              <CommandItem
                key={item.href}
                onSelect={() => {
                  setLocation(item.href);
                  setOpen(false);
                }}
              >
                <item.icon className="mr-2 h-4 w-4" />
                <span>{item.label}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Quick Actions">
            <CommandItem onSelect={() => { setLocation("/"); setOpen(false); }}>
              <Menu className="mr-2 h-4 w-4" />
              <span>Return to Archway (Home)</span>
            </CommandItem>
            <CommandItem onSelect={() => { setLocation("/vault/documents"); setOpen(false); }}>
              <FileText className="mr-2 h-4 w-4" />
              <span>Browse Court Filings</span>
            </CommandItem>
            <CommandItem onSelect={() => { setLocation("/vault/active-case-dossiers"); setOpen(false); }}>
              <Scale className="mr-2 h-4 w-4" />
              <span>View Bankruptcy Map</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 min-h-screen flex flex-col">
        <div className="flex-1 container max-w-5xl py-8 md:py-12 px-4 md:px-8 animate-in fade-in duration-500">
          {children}
        </div>

        <footer className="border-t border-border py-6 mt-auto bg-muted/30">
          <div className="container max-w-5xl px-4 md:px-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
            <p>© 2025 Catholic Church Academy. All Rights Reserved.</p>
            <div className="flex gap-4 mt-2 md:mt-0">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Data Methodology</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
