import { useState, useEffect, useRef } from 'react';
import { Search as SearchIcon, X } from 'lucide-react';

interface SearchResult {
  section: string;
  title: string;
  snippet: string;
  act: string;
}

interface SearchProps {
  onClose: () => void;
}

export function Search({ onClose }: SearchProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }

    // Search through all collapsible sections
    const searchableContent: SearchResult[] = [
      // Act I
      { act: 'Act I', section: '1987', title: 'The Ordination', snippet: 'McCarrick ordained Joseph Reilly and Michael Lorenzo as priests' },
      { act: 'Act I', section: '1994', title: "Reilly's First Cover-Up", snippet: 'Joseph Reilly was McCarrick\'s personal secretary during papal nuncio investigation' },
      { act: 'Act I', section: '1995', title: 'The Papal Visit', snippet: 'Pope John Paul II visited Newark, McCarrick orchestrated the event' },
      { act: 'Act I', section: '2000', title: 'The Settlements', snippet: 'Newark Archdiocese paid settlements to McCarrick abuse victims' },
      { act: 'Act I', section: '2006', title: 'The Seton Hall Apartment', snippet: 'Archbishop Myers opposed McCarrick apartment at Seton Hall, Sheeran gave it anyway' },
      { act: 'Act I', section: '2008', title: 'The Sipe Letter', snippet: 'Richard Sipe wrote to Pope Benedict XVI detailing decades of abuse' },
      
      // Act II
      { act: 'Act II', section: '2012', title: 'The First Warning', snippet: 'Reilly aware of sexual harassment summer/fall 2012, did NOT report' },
      { act: 'Act II', section: '2014', title: 'The Harassment Begins', snippet: 'Kevin Marino began sexually harassing Kim Capadona, Donna McMonagle, Kelli Nyre' },
      { act: 'Act II', section: '2016', title: 'The Board Chair', snippet: 'Kevin Marino became Seton Hall Board Chair after Bridgegate Supreme Court victory' },
      { act: 'Act II', section: '2018', title: 'The Explosion', snippet: 'McCarrick scandal broke publicly, New York Times investigation' },
      { act: 'Act II', section: '2019', title: 'The Letters to Reilly', snippet: 'Task Force sent two letters to Reilly documenting his failures to report' },
      { act: 'Act II', section: 'Sea Girt', title: 'The Sea Girt Lie', snippet: 'Reilly claims he only visited McCarrick at Sea Girt once - absurd given his role as secretary' },
      
      // Act III
      { act: 'Act III', section: 'Room', title: 'The Room', snippet: 'August 2019 meeting: Marino, Nyre, Stio, Masharelli, Scrivo decided to cover up' },
      { act: 'Act III', section: 'Lawyers', title: 'The Lawyers', snippet: 'Angelo Stio, Jim Masharelli, Michael Scrivo - the legal team executing the coverup' },
      { act: 'Act III', section: 'Bridgegate', title: 'The Bridgegate Playbook', snippet: 'Marino defended Bill Stepien in Bridgegate, Supreme Court vindication, same playbook at SHU' },
      { act: 'Act III', section: 'Christie', title: "Christie's Legal Mafia", snippet: 'Mary Pat Christie, Chris Porrino, Michael Scrivo - Christie administration connections' },
      { act: 'Act III', section: 'Dechert', title: 'The Dechert Sham', snippet: 'First law firm investigation, too pliable, moved to Perry Law' },
      { act: 'Act III', section: 'Perry', title: 'The Perry Law Whitewash', snippet: 'Karen Agnifilo report: no evidence despite admitting Flood corroboration, multiple complaints' },
      { act: 'Act III', section: 'Linares', title: 'Judge Linares', snippet: 'Allowed confidential report to be released to Marino, unprecedented judicial overreach' },
      { act: 'Act III', section: 'Agnifilo', title: 'Karen Friedman Agnifilo', snippet: 'Wrote Perry Law report, now scrubs it from her CV, defends Luigi Mangione' },
      { act: 'Act III', section: 'Flood', title: 'Kevin Flood', snippet: 'Regent who saw Marino\'s hands on Kelli\'s shoulders, resigned citing logbook erasure' },
      
      // Key people
      { act: 'People', section: 'Marino', title: 'Kevin Marino', snippet: 'Board Chair who sexually harassed three women, bullied President Nyre' },
      { act: 'People', section: 'Reilly', title: 'Joseph Reilly', snippet: 'McCarrick\'s secretary, now SHU President despite Task Force findings' },
      { act: 'People', section: 'Nyre', title: 'Joe and Kelli Nyre', snippet: 'President and First Lady who blew the whistle on Marino' },
      { act: 'People', section: 'Tobin', title: 'Cardinal Tobin', snippet: 'Newark Archbishop who protected the network' },
      { act: 'People', section: 'McCarrick', title: 'Theodore McCarrick', snippet: 'Defrocked cardinal, serial abuser, ordained Reilly and Lorenzo' },
      { act: 'People', section: 'Stio', title: 'Angelo Stio', snippet: 'Troutman Pepper attorney who authorized Title IX logbook erasure' },
      { act: 'People', section: 'Masharelli', title: 'Jim Masharelli', snippet: 'Made the logbook erasure happen on Stio\'s authorization' },
      { act: 'People', section: 'Porrino', title: 'Chris Porrino', snippet: 'NJ Attorney General, Christie\'s Legal Mafia, filed unredacted Perry Law report' },
    ];

    const lowerQuery = query.toLowerCase();
    const filtered = searchableContent.filter(item =>
      item.title.toLowerCase().includes(lowerQuery) ||
      item.snippet.toLowerCase().includes(lowerQuery) ||
      item.section.toLowerCase().includes(lowerQuery)
    );

    setResults(filtered);
  }, [query]);

  const highlightText = (text: string, query: string) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, i) => 
      part.toLowerCase() === query.toLowerCase() ? 
        <mark key={i} className="bg-red-500 text-white px-1">{part}</mark> : 
        part
    );
  };

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-start justify-center pt-20 px-4">
      <div className="w-full max-w-3xl bg-zinc-900 rounded-lg shadow-2xl border-2 border-red-600">
        <div className="flex items-center gap-3 p-4 border-b border-red-600">
          <SearchIcon className="w-5 h-5 text-red-500" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for names, dates, events..."
            className="flex-1 bg-transparent text-white placeholder-zinc-500 outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 hover:bg-zinc-800 rounded transition-colors"
          >
            <X className="w-5 h-5 text-zinc-400" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto">
          {query.length < 2 ? (
            <div className="p-8 text-center text-zinc-500">
              Type at least 2 characters to search
            </div>
          ) : results.length === 0 ? (
            <div className="p-8 text-center text-zinc-500">
              No results found for "{query}"
            </div>
          ) : (
            <div className="divide-y divide-zinc-800">
              {results.map((result, index) => (
                <button
                  key={index}
                  onClick={() => {
                    // Scroll to section
                    const sectionId = result.section.toLowerCase().replace(/[^a-z0-9]/g, '-');
                    const element = document.getElementById(sectionId);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      onClose();
                    }
                  }}
                  className="w-full p-4 text-left hover:bg-zinc-800 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-red-500">{result.act}</span>
                    <span className="text-xs text-zinc-500">•</span>
                    <span className="text-xs text-zinc-500">{result.section}</span>
                  </div>
                  <h4 className="font-bold text-white mb-1">
                    {highlightText(result.title, query)}
                  </h4>
                  <p className="text-sm text-zinc-400">
                    {highlightText(result.snippet, query)}
                  </p>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
