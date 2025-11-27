interface CitationProps {
  number: number;
  source: string;
  url?: string;
  page?: string | number;
}

export default function Citation({ number, source, url, page }: CitationProps) {
  const citationText = page ? `${source}, p. ${page}` : source;
  
  if (url) {
    return (
      <sup className="text-red-500">
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-red-400 transition-colors"
          title={citationText}
        >
          [{number}]
        </a>
      </sup>
    );
  }
  
  return (
    <sup className="text-red-500" title={citationText}>
      [{number}]
    </sup>
  );
}
