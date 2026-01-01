import { FileText, Mail, Folder, HardDrive } from "lucide-react";

interface DocumentCategory {
  icon: React.ReactNode;
  title: string;
  description: string;
  protected: boolean;
}

const categories: DocumentCategory[] = [
  {
    icon: <FileText className="h-8 w-8" />,
    title: "The Latham Report",
    description: "Names of the dirty dozen, findings, evidence (conclusions redacted)",
    protected: false,
  },
  {
    icon: <Mail className="h-8 w-8" />,
    title: "Emails",
    description: "All emails NOT including both SHU and Gibbons on the chain",
    protected: false,
  },
  {
    icon: <Folder className="h-8 w-8" />,
    title: "Attachments",
    description: "Pre-existing documents, employment files, policies",
    protected: false,
  },
  {
    icon: <HardDrive className="h-8 w-8" />,
    title: "Electronic Files",
    description: "All files created before the investigation, Title IX logbook",
    protected: false,
  },
];

export default function DocumentsInfographic() {
  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4">20,500 Pages of Evidence</h2>
          <p className="text-xl text-muted-foreground">What Judge Benjamin Ordered Released</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-card border-2 border-primary/30 rounded-lg p-6 hover:border-primary transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 text-primary">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {category.description}
                  </p>
                  <div className="mt-3">
                    <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full">
                      MUST BE PRODUCED
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-muted/30 border border-border rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">What's Protected?</h3>
          <div className="max-w-2xl mx-auto">
            <p className="text-muted-foreground mb-4">
              Only two categories remain protected:
            </p>
            <div className="space-y-2 text-sm">
              <div className="bg-card/50 rounded px-4 py-2">
                <strong>1.</strong> Emails that include BOTH Seton Hall AND Gibbons on the chain
              </div>
              <div className="bg-card/50 rounded px-4 py-2">
                <strong>2.</strong> Legal conclusions in the Latham Report (facts still released)
              </div>
            </div>
            <p className="text-muted-foreground mt-4 text-sm">
              Everything else must be produced. No more hiding.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
