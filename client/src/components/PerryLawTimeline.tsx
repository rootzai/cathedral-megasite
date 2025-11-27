export function PerryLawTimeline() {
  const events = [
    {
      date: "Feb 5, 2024",
      title: "Nyre Files Lawsuit",
      description: "Joe and Kelli Nyre file lawsuit against Seton Hall alleging Marino's sexual harassment and campaign of intimidation.",
      type: "resistance"
    },
    {
      date: "Feb 16, 2024",
      title: "Marino's Setonian Editorial",
      description: "Marino publishes defamatory editorial in student newspaper: 'Desperate and pathetic attempt will fail.' Calls Kelli's harassment claims 'disgraceful' and 'false in every respect.'",
      type: "coverup"
    },
    {
      date: "July 2, 2024",
      title: "Perry Law Report Completed",
      description: "Karen Friedman Agnifilo completes report. Conclusion: 'At the University's direction, [we] conclude there is no evidence.' But report ADMITS Flood corroboration, Capadona complaints, McMonagle complaints.",
      type: "coverup"
    },
    {
      date: "July 10, 2024",
      title: "Linares' Illegal Leak",
      description: "Judge Jose Linares allows confidential report to be released to Marino (the accused!) and Nyre. Marked 'Privileged & Confidential.' Unprecedented judicial overreach.",
      type: "coverup"
    },
    {
      date: "July 10, 2024 (same day)",
      title: "Porrino's Public Filing",
      description: "Chris Porrino files unredacted report in amicus brief, outing Donna McMonagle and Kim Capadona by name. Hours before NYT publication.",
      type: "coverup"
    },
    {
      date: "July 11, 2024",
      title: "Maag's NYT Whitewash",
      description: "Christopher Maag publishes NYT article parroting Perry Law report. Ignores Flood corroboration, swallows vacation lie, never questions Linares' breach. 'Investigators Find No Evidence.'",
      type: "coverup"
    },
    {
      date: "2024 (after)",
      title: "Agnifilo Scrubs Her CV",
      description: "Karen Friedman Agnifilo removes Perry Law from her work history. Now defends Luigi Mangione. Knows her Perry Law work is shameful.",
      type: "exposure"
    }
  ];

  const typeColors = {
    resistance: "bg-blue-100 border-blue-600 text-blue-900",
    coverup: "bg-red-100 border-red-600 text-red-900",
    exposure: "bg-yellow-100 border-yellow-600 text-yellow-900"
  };

  const typeLabels = {
    resistance: "RESISTANCE",
    coverup: "COVERUP",
    exposure: "EXPOSURE"
  };

  return (
    <div className="my-8 space-y-4">
      <div className="flex gap-4 text-sm mb-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
          <span>Resistance</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-600 rounded-full"></div>
          <span>Coverup</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-yellow-600 rounded-full"></div>
          <span>Exposure</span>
        </div>
      </div>

      {events.map((event, index) => (
        <div key={index} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className={`w-4 h-4 rounded-full ${event.type === 'resistance' ? 'bg-blue-600' : event.type === 'coverup' ? 'bg-red-600' : 'bg-yellow-600'}`}></div>
            {index < events.length - 1 && (
              <div className={`w-0.5 flex-1 mt-2 ${event.type === 'resistance' ? 'bg-blue-300' : event.type === 'coverup' ? 'bg-red-300' : 'bg-yellow-300'}`}></div>
            )}
          </div>
          <div className={`flex-1 p-4 rounded border-l-4 mb-4 ${typeColors[event.type as keyof typeof typeColors]}`}>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold">{typeLabels[event.type as keyof typeof typeLabels]}</span>
              <span className="text-sm font-semibold">{event.date}</span>
            </div>
            <h4 className="font-bold mb-2">{event.title}</h4>
            <p className="text-sm">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
