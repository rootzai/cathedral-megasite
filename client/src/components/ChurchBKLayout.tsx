import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  BookOpen,
  Crown,
  DollarSign,
  Globe,
  Landmark,
  Menu,
  Network,
  Scale,
  Shield,
  Users,
  Wallet
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = [
    { href: "/church-bk", label: "Executive Summary", icon: BarChart3 },
    { href: "/church-bk/financial-operating-model", label: "US Financial Model", icon: Wallet },
    { href: "/church-bk/diocesan-finance", label: "Diocesan Intelligence", icon: DollarSign },
    { href: "/church-bk/the-cardinalate", label: "The Cardinalate", icon: Crown },
    { href: "/church-bk/mccarrick-mechanism", label: "The McCarrick Mechanism", icon: Network },
    { href: "/church-bk/the-corporate-veil", label: "The Corporate Veil", icon: Shield },
    { href: "/church-bk/stakeholder-analysis", label: "Stakeholder Analysis", icon: Scale },
    { href: "/church-bk/global-growth", label: "Global Expansion", icon: Globe },
    { href: "/church-bk/clergy-metrics", label: "Clergy & Vocations", icon: Users },
    { href: "/church-bk/sacramental-data", label: "Sacramental Index", icon: BookOpen },
    { href: "/church-bk/institutional-structure", label: "Institutional Structure", icon: Landmark },
  ];

  const NavContent = () => (
    <div className="flex flex-col h-full bg-sidebar text-sidebar-foreground border-r border-sidebar-border">
      <div className="p-4 border-b border-border flex flex-col items-center">
        <Link href="/cathedral">
          <a className="mb-4 block hover:opacity-80 transition-opacity flex justify-center">
            <img
              src="/assets/sodom-hall-logo.png"
              alt="Sodom Hall Home"
              className="h-16 w-auto grayscale brightness-200"
            />
          </a>
        </Link>
        <h1 className="font-serif font-bold text-2xl tracking-tight leading-none text-center">
          CHURCH BK
        </h1>
        <p className="text-[10px] text-muted-foreground mt-2 uppercase tracking-widest text-center">
          Global Analytics Report
        </p>
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
