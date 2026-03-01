import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { 
  BarChart3, 
  BookOpen, 
  Globe, 
  Landmark, 
  Users, 
  Menu,
  X,
  Wallet,
  Scale,
  DollarSign,
  Crown,
  Network,
  Shield,
  FileText,
  Search
} from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

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
    { href: "/church-bk", label: "Executive Summary", icon: BarChart3 },
    { href: "/church-bk/the-corporate-veil", label: "The Corporate Veil", icon: Shield },
    { href: "/church-bk/active-case-dossiers", label: "Active Case Dossiers", icon: Scale },
    { href: "/church-bk/document-library", label: "Document Library", icon: FileText },
    { href: "/church-bk/creditor-committee-portal", label: "Creditor Committee Portal", icon: Users },
    { href: "/church-bk/financial-operating-model", label: "US Financial Model", icon: Wallet },
    { href: "/church-bk/diocesan-finance", label: "Diocesan Intelligence", icon: DollarSign },
    { href: "/church-bk/cardinalate-mccarrick", label: "The Cardinalate & McCarrick", icon: Crown },
    { href: "/church-bk/institutional-structure", label: "Institutional Structure", icon: Landmark },
    { href: "/church-bk/stakeholder-analysis", label: "Stakeholder Analysis", icon: Users },
    { href: "/church-bk/global-church-metrics", label: "Global Church Metrics", icon: Globe },
  ];

  const NavContent = () => (
    <div className="flex flex-col h-full bg-sidebar text-sidebar-foreground border-r border-sidebar-border">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 bg-accent rounded-none flex items-center justify-center">
            <span className="text-accent-foreground font-serif font-bold text-xl">C</span>
          </div>
          <h1 className="font-serif font-bold text-lg tracking-tight leading-none">
            CATHOLIC<br/>CHURCH<br/>ACADEMY
          </h1>
        </div>
        <p className="text-xs text-muted-foreground mt-2 uppercase tracking-widest">
          Global Analytics Report
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
        <div className="text-xs text-muted-foreground">
          <p className="font-semibold mb-1 text-foreground">Report Status: FINAL</p>
          <p>Last Updated: Dec 2025</p>
          <p className="mt-2 opacity-70">Confidential & Proprietary</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background flex font-sans text-foreground">
      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-64 fixed inset-y-0 z-50">
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
            <CommandItem onSelect={() => { setLocation("/document-library"); setOpen(false); }}>
              <FileText className="mr-2 h-4 w-4" />
              <span>Browse Court Filings</span>
            </CommandItem>
            <CommandItem onSelect={() => { setLocation("/active-case-dossiers"); setOpen(false); }}>
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
