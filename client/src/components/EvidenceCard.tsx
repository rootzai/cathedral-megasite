import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface EvidenceCardProps {
  title: string;
  date: string;
  source: string;
  findings: string[];
  outcome?: string;
}

export function EvidenceCard({ title, date, source, findings, outcome }: EvidenceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="my-6 border-2 border-red-600 rounded-lg overflow-hidden bg-zinc-900">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 flex items-center justify-between hover:bg-zinc-800 transition-colors"
      >
        <div className="text-left">
          <h4 className="font-bold text-lg text-red-500">{title}</h4>
          <p className="text-sm text-zinc-400">{date} • {source}</p>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-red-500 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-red-500 flex-shrink-0" />
        )}
      </button>

      {isExpanded && (
        <div className="p-6 border-t border-red-600 bg-zinc-950">
          <div className="space-y-4">
            <div>
              <h5 className="font-bold text-red-500 mb-3">Key Findings:</h5>
              <ol className="list-decimal list-inside space-y-2 text-zinc-300">
                {findings.map((finding, index) => (
                  <li key={index} className="pl-2">
                    {finding}
                  </li>
                ))}
              </ol>
            </div>

            {outcome && (
              <div className="mt-6 p-4 bg-red-950 border-l-4 border-red-500 rounded">
                <h5 className="font-bold text-red-500 mb-2">Outcome:</h5>
                <p className="text-zinc-300">{outcome}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
