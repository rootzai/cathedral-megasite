import { useState } from "react";
import { Link } from "wouter";
import { APP_TITLE } from "@/const";
import { ExternalLink, FileText, Download, Search as SearchIcon } from "lucide-react";

interface DocumentProps {
  title: string;
  date: string;
  source: string;
  description: string;
  url?: string;
  localPath?: string;
  category: "Vatican" | "Court" | "News" | "Reports" | "University";
}

function DocumentCard({ title, date, source, description, url, localPath, category }: DocumentProps) {
  const categoryColors = {
    Vatican: "border-purple-600 bg-purple-900/20",
    Court: "border-blue-600 bg-blue-900/20",
    News: "border-green-600 bg-green-900/20",
    Reports: "border-yellow-600 bg-yellow-900/20",
    University: "border-red-600 bg-red-900/20",
  };

  return (
    <div className={`border-2 ${categoryColors[category]} rounded-lg p-6 hover:shadow-xl transition-shadow`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <p className="text-sm text-gray-400">{date} • {source}</p>
        </div>
        <span className={`px-3 py-1 rounded text-xs font-bold ${category === 'Vatican' ? 'bg-purple-600' : category === 'Court' ? 'bg-blue-600' : category === 'News' ? 'bg-green-600' : category === 'Reports' ? 'bg-yellow-600' : 'bg-red-600'}`}>
          {category}
        </span>
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex gap-3">
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded text-sm font-bold transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            View Online
          </a>
        )}
        {localPath && (
          <a
            href={localPath}
            target="_blank"
            className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded text-sm font-bold transition-colors"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </a>
        )}
      </div>
    </div>
  );
}

export default function Documents() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | DocumentProps['category']>('all');

  const documents: DocumentProps[] = [
    // Vatican Documents
    {
      title: "Report on the Holy See's Institutional Knowledge and Decision-Making Related to Former Cardinal Theodore Edgar McCarrick",
      date: "November 10, 2020",
      source: "Vatican Secretariat of State",
      description: "Official Vatican investigation documenting decades of abuse by Theodore McCarrick and institutional knowledge of his conduct. Page 245 contains Archbishop Myers' memo opposing McCarrick's apartment at Seton Hall due to abuse concerns.",
      url: "https://www.vatican.va/resources/resources_rapporto-card-mccarrick_20201110_en.pdf",
      category: "Vatican",
    },

    // Court Documents
    {
      title: "Gibbons Report (Sealed)",
      date: "2020",
      source: "Gibbons P.C. investigation",
      description: "Sealed investigation report commissioned by Seton Hall's Special Task Force. According to sources, documents Cardinal Tobin's cooperation issues and the 'dirty dozen' enablers. Referenced in public court filings but remains under protective order.",
      category: "Court",
    },
    {
      title: "Latham Report (Sealed)",
      date: "Unknown",
      source: "Latham & Watkins investigation",
      description: "Sealed investigation report. According to public references, contains evidence of institutional knowledge and concealment. Remains under court seal.",
      category: "Court",
    },

    // News Articles
    {
      title: "He Knew of Sex Abuse Allegations on Campus. Now He's University President.",
      date: "December 21, 2024",
      source: "Politico",
      description: "Investigation by Politico documenting Reilly's knowledge of abuse allegations and his elevation to university president despite Task Force findings. Includes the two letters to Reilly and Kevin Flood's resignation letter citing the logbook erasure.",
      url: "https://www.politico.com/news/2024/12/21/seton-hall-president-sexual-abuse-scandal-00194814",
      category: "News",
    },
    {
      title: "Cardinal McCarrick Accused of Sexual Abuse",
      date: "July 16, 2018",
      source: "The New York Times",
      description: "Laurie Goodstein and Sharon Otterman's investigation that broke the McCarrick scandal, exposing decades of abuse and institutional protection.",
      url: "https://www.nytimes.com/2018/07/16/us/cardinal-mccarrick-abuse-priest.html",
      category: "News",
    },
    {
      title: "Seton Hall President Cleared of Sexual Harassment Allegations",
      date: "July 11, 2024",
      source: "The New York Times",
      description: "Chris Maag's article about the Perry Law Report that failed to critically examine contradictions between the report's conclusion and its own admissions of corroborated complaints.",
      url: "https://www.nytimes.com/2024/07/11/nyregion/seton-hall-sexual-harassment-case.html",
      category: "News",
    },
    {
      title: "Supreme Court Overturns Bridgegate Convictions",
      date: "May 7, 2020",
      source: "Politico",
      description: "Coverage of the unanimous Supreme Court decision in Kelly v. United States overturning Bridgegate convictions. Kevin Marino represented Bill Stepien in the scandal.",
      url: "https://www.politico.com/news/2020/05/07/supreme-court-bridgegate-decision-242344",
      category: "News",
    },

    // Reports
    {
      title: "Perry Law Report: Investigation of Sexual Harassment Allegations",
      date: "July 2, 2024",
      source: "Karen Friedman Agnifilo, Perry Law",
      description: "Investigation commissioned by Seton Hall concluding 'no evidence' of sexual harassment despite admitting Kevin Flood corroboration, multiple Capadona complaints, McMonagle complaints, and Kelli Nyre Title IX filings. Third firm hired after Dechert and another firm.",
      localPath: "/Perry-lawSHU.pdf",
      category: "Reports",
    },

    // University Documents
    {
      title: "Seton Hall Policy Against Sexual Misconduct (Section IV.D)",
      date: "Current Policy",
      source: "Seton Hall University",
      description: "University policy containing vague 'Cooperation' clause: 'All members of the University community have an obligation to cooperate in achieving the University's goal of an environment free of sexual harassment...' This clause was selectively enforced to threaten subordinates with termination while protecting Cardinal Tobin.",
      category: "University",
    },
    {
      title: "Seton Hall Title IX Grievance Procedure",
      date: "Current Policy",
      source: "Seton Hall University",
      description: "University policy explicitly stating: 'Witnesses cannot be compelled to participate in the live hearing and have the right not to participate in the hearing free from retaliation.' Contradicts the enforcement of the 'Cooperation' clause. This contradiction created a legal gray area that was exploited selectively.",
      category: "University",
    },
    {
      title: "Letter to Joseph Reilly: Notice of Special Task Force Hearing",
      date: "November 25, 2019",
      source: "Seton Hall Special Task Force",
      description: "First letter to Reilly documenting findings that he was aware of sexual harassment allegations involving ICS seminarians in summer/fall 2012 but did NOT report to SHU officials, violating Title IX. Recommended removal as Rector and from Boards. Deadline: December 6, 2019, 3:00 PM.",
      url: "https://www.politico.com/news/2024/12/21/seton-hall-president-sexual-abuse-scandal-00194814",
      category: "University",
    },
    {
      title: "Letter to Joseph Reilly: Supplemental Notice",
      date: "February 18, 2020",
      source: "Seton Hall Special Task Force",
      description: "Second letter acknowledging Reilly's cooperation with Gibbons interview on January 21, 2020, regarding 2014 events at St. Andrew's Hall. Despite findings, Reilly was never removed and became SHU President in 2024.",
      url: "https://www.politico.com/news/2024/12/21/seton-hall-president-sexual-abuse-scandal-00194814",
      category: "University",
    },
    {
      title: "Kevin Marino Editorial: Response to Allegations",
      date: "February 16, 2024",
      source: "The Setonian",
      description: "Marino's preemptive attack on President Nyre published in the student newspaper five months before the Perry Law Report. Demonstrates strategy to control narrative before investigation concluded.",
      url: "https://www.thesetonian.com/article/2024/02/marino-responds",
      category: "University",
    },
  ];

  const categories = ["Vatican", "Court", "News", "Reports", "University"] as const;

  // Filter documents based on search and category
  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = searchQuery === '' || 
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.source.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === 'all' || doc.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-red-600">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <a className="text-2xl font-bold text-red-600 hover:text-red-500 transition-colors">
              {APP_TITLE}
            </a>
          </Link>
          <nav className="flex gap-6">
            <Link href="/">
              <a className="text-gray-300 hover:text-white transition-colors">Home</a>
            </Link>
            <Link href="/documents">
              <a className="text-white font-bold">Documents</a>
            </Link>
            <Link href="/about">
              <a className="text-gray-300 hover:text-white transition-colors">About</a>
            </Link>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4 text-red-600">Source Documents</h1>
            <p className="text-xl text-gray-300">
              All factual claims on this site are derived from publicly available documents and credible news reporting. This archive provides direct access to our primary sources.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12">
            {/* Search Bar */}
            <div className="relative mb-6">
              <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documents by title, description, or source..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-800 text-white pl-12 pr-4 py-3 rounded-lg border border-gray-700 focus:border-red-600 focus:outline-none"
              />
            </div>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap gap-3 mb-4">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  activeCategory === 'all'
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                All Documents ({documents.length})
              </button>
              {categories.map(cat => {
                const count = documents.filter(d => d.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                      activeCategory === cat
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {cat} ({count})
                  </button>
                );
              })}
            </div>

            {/* Results Count */}
            <div className="text-gray-400">
              Showing {filteredDocuments.length} of {documents.length} documents
            </div>
          </div>

          {/* Document Results */}
          {filteredDocuments.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-400">No documents found matching your search.</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="mt-4 text-red-500 hover:text-red-400 font-semibold"
              >
                Clear filters
              </button>
            </div>
          ) : (
            categories.map((category) => {
              const categoryDocs = filteredDocuments.filter(doc => doc.category === category);
              if (categoryDocs.length === 0) return null;

              return (
                <section key={category} className="mb-16">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <FileText className="w-8 h-8" />
                    {category} Documents
                    <span className="text-sm font-normal text-gray-400">({categoryDocs.length})</span>
                  </h2>
                  <div className="grid gap-6">
                    {categoryDocs.map((doc, index) => (
                      <DocumentCard key={index} {...doc} />
                    ))}
                  </div>
                </section>
              );
            })
          )}

          {/* Note about Sealed Documents */}
          <div className="mt-16 p-8 bg-yellow-900/20 border-2 border-yellow-600 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FileText className="w-6 h-6" />
              Note on Sealed Documents
            </h3>
            <p className="text-gray-300">
              Several key documents (Gibbons Report, Latham Report) remain under court seal as of the November 12, 2025 court order. Where we reference these documents, we cite to publicly available sources that discuss their contents, including court filings, news reporting, and statements by parties with knowledge of the sealed materials.
            </p>
            <p className="text-gray-300 mt-4">
              The vault containing these documents is scheduled to open on a date yet to be determined. When unsealed, these documents will provide definitive evidence of institutional knowledge and decision-making regarding clergy abuse at Seton Hall University.
            </p>
          </div>

          <div className="mt-16 text-center">
            <Link href="/">
              <a className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded font-bold transition-colors">
                Return to Investigation
              </a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
