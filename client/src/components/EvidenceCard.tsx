import { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, X } from 'lucide-react';

interface EvidenceCardProps {
  title: string;
  date: string;
  source: string;
  findings: string[];
  outcome?: string;
  documentUrl?: string;
}

export function EvidenceCard({ title, date, source, findings, outcome, documentUrl }: EvidenceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <>
      <div className="my-6 border border-zinc-700 rounded-sm overflow-hidden bg-zinc-900 shadow-sm">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full p-4 md:p-6 flex items-center justify-between hover:bg-zinc-800/80 transition-colors"
        >
          <div className="text-left">
            <h4 className="font-bold text-lg text-zinc-100 font-serif mb-1">{title}</h4>
            <p className="text-xs text-zinc-400 font-mono tracking-widest uppercase">{date} • {source}</p>
          </div>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-zinc-500 flex-shrink-0 ml-4" />
          ) : (
            <ChevronDown className="w-5 h-5 text-zinc-500 flex-shrink-0 ml-4" />
          )}
        </button>

        {isExpanded && (
          <div className="p-4 md:p-6 border-t border-zinc-800 bg-zinc-950">
            <div className="space-y-4">
              <div>
                <h5 className="font-bold text-zinc-300 mb-3 text-sm uppercase tracking-widest">Key Findings:</h5>
                <ol className="list-decimal list-inside space-y-2 text-zinc-400 font-serif">
                  {findings.map((finding) => (
                    <li key={finding} className="pl-2 leading-relaxed">
                      {finding}
                    </li>
                  ))}
                </ol>
              </div>

              {outcome && (
                <div className="mt-6 p-4 bg-zinc-900 border-l-2 border-zinc-500 rounded-r-sm">
                  <h5 className="font-bold text-zinc-300 mb-2 text-sm uppercase tracking-widest">Outcome:</h5>
                  <p className="text-zinc-400 font-serif">{outcome}</p>
                </div>
              )}

              {documentUrl && (
                <div className="mt-6 pt-4 border-t border-zinc-800 flex justify-end">
                  <button
                    onClick={() => setIsLightboxOpen(true)}
                    className="flex items-center gap-2 px-4 py-2 border border-zinc-600 rounded-sm text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors uppercase tracking-widest text-xs font-mono shadow-sm"
                  >
                    View Source Document <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Overlay */}
      {isLightboxOpen && documentUrl && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8">
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-4 right-4 md:top-8 md:right-8 text-zinc-400 hover:text-white transition-colors bg-zinc-900 p-2 rounded-full border border-zinc-700"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="w-full max-w-5xl max-h-[90vh] flex flex-col items-center bg-zinc-950 border border-zinc-800 rounded-sm shadow-2xl p-2 md:p-4 overflow-hidden relative">
            <div className="w-full h-full flex items-center justify-center overflow-auto bg-white/5">
              {/* Check if it is an image or a PDF. For simplicity, if it ends with pdf we use iframe, otherwise img */}
              {documentUrl.toLowerCase().endsWith('.pdf') ? (
                <iframe src={documentUrl} className="w-full min-h-[70vh] rounded bg-white" title="Evidence Document" />
              ) : (
                <img src={documentUrl} alt="Evidence" className="max-w-full max-h-[85vh] object-contain" />
              )}
            </div>
            <p className="text-center text-zinc-500 font-mono text-xs uppercase tracking-widest mt-4">Exhibit Source: {source}</p>
          </div>
        </div>
      )}
    </>
  );
}
