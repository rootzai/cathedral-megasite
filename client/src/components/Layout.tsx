import { useLocation } from "wouter";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans text-foreground">
      {/* Main Content */}
      <main className="flex-1 min-h-screen flex flex-col pt-20">
        <div className="flex-1 container max-w-6xl py-8 md:py-12 px-4 md:px-8 animate-in fade-in duration-500">
          {children}
        </div>

        <footer className="border-t border-zinc-800 py-12 mt-auto bg-black/50">
          <div className="container max-w-6xl px-4 md:px-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
            <p>© 2025 THE CATHEDRAL OF DOCUMENTS. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
              <span className="hover:text-white cursor-pointer transition-colors">Data Methodology</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
