import { Link } from "wouter";
import { APP_TITLE } from "@/const";
import { Shield, Lock, Mail, AlertCircle } from "lucide-react";
import { TipSubmissionForm } from "@/components/TipSubmissionForm";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-zinc-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-zinc-50 backdrop-blur-sm border-b border-zinc-300">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <a className="text-2xl font-bold text-zinc-600 hover:text-zinc-600 transition-colors">
              {APP_TITLE}
            </a>
          </Link>
          <nav className="flex gap-6">
            <Link href="/">
              <a className="text-gray-300 hover:text-zinc-900 transition-colors">Home</a>
            </Link>
            <Link href="/documents">
              <a className="text-gray-300 hover:text-zinc-900 transition-colors">Documents</a>
            </Link>
            <Link href="/about">
              <a className="text-zinc-900 font-bold">About</a>
            </Link>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-5xl font-bold mb-8 text-zinc-600">About This Investigation</h1>

        <div className="prose prose-invert prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-3xl font-bold mb-4">Purpose</h2>
            <p>
              Sodomhall.com is an independent investigative journalism project documenting institutional failures in addressing clergy sexual abuse at Seton Hall University and the Roman Catholic Archdiocese of Newark. This site examines the networks of power, protection, and complicity that enabled abuse to continue and be concealed from the public.
            </p>
            <p>
              Our focus is on matters of significant public concern: the protection of children, institutional accountability, and the use of legal mechanisms to conceal abuse rather than address it. The 450 plaintiffs in ongoing litigation deserve a full accounting of how their abuse was enabled and concealed.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Sourcing Methodology</h2>
            <p>
              All factual claims on this site are derived from publicly available documents and credible news reporting. Our primary sources include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Vatican Report on Theodore McCarrick</strong> (November 2020) - Official Vatican investigation documenting decades of abuse and institutional knowledge</li>
              <li><strong>Perry Law Report</strong> (July 2024) - Independent investigation commissioned by Seton Hall University</li>
              <li><strong>Court filings and sealed documents</strong> - Materials from ongoing litigation, including the Gibbons Report and Latham Report references</li>
              <li><strong>News reporting</strong> - Investigations by The New York Times, Politico, and The Setonian student newspaper</li>
              <li><strong>Public records</strong> - Board minutes, task force letters, resignation letters, and official correspondence</li>
            </ul>
            <p>
              Where documents remain sealed by court order, we cite to publicly available references and reporting about their contents. We do not fabricate sources or make claims without documentary foundation.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Legal Basis</h2>
            <p>
              This investigation is protected by the First Amendment to the United States Constitution. The matters documented here are of profound public concern: institutional protection of child sexual abuse, misuse of legal processes to conceal wrongdoing, and the accountability of public figures who hold positions of trust.
            </p>
            <p>
              Many individuals named on this site are public figures—university presidents, cardinals, board chairs, attorneys general—who have voluntarily entered the public sphere and whose conduct in their official capacities is subject to public scrutiny and criticism. Public figure status requires proof of "actual malice" (knowledge of falsity or reckless disregard for truth) for defamation claims, a standard we do not meet because our reporting is grounded in documentary evidence.
            </p>
            <p>
              We distinguish between statements of fact (sourced to documents) and statements of opinion, analysis, and rhetorical criticism. Calling a pattern of institutional protection a "coverup" or describing legal strategies as "manipulation" constitutes protected opinion based on disclosed facts, not actionable defamation.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Editorial Standards</h2>
            <p>
              We strive for accuracy and fairness while maintaining an adversarial stance toward institutional power that has demonstrably failed to protect children. Our tone is deliberately provocative because the subject matter demands moral clarity, not false neutrality.
            </p>
            <p>
              When we make factual claims, they are supported by documentary evidence cited throughout the site. When we draw inferences or offer analysis, we make clear the basis for our conclusions. We welcome corrections to factual errors and will update the site accordingly.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Disclaimer</h2>
            <p className="text-gray-400">
              This website is an independent project and is not affiliated with Seton Hall University, the Roman Catholic Archdiocese of Newark, or any plaintiff or defendant in ongoing litigation. The views expressed are those of the site's operators and do not represent any institutional position.
            </p>
            <p className="text-gray-400">
              Information presented here is for informational and educational purposes. Nothing on this site constitutes legal advice, and readers should consult qualified attorneys for legal guidance related to these matters.
            </p>
          </section>

          <section className="p-6 bg-zinc-100/20 border-2 border-zinc-300/50 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-red-400">We Welcome Legal Process</h2>
            <p className="mb-4">
              This investigation welcomes any legal challenge. We will litigate in the open. All demand
              letters, cease-and-desist notices, and legal filings directed at this site will be
              published in full on our{" "}
              <Link href="/corrections">
                <a className="text-red-400 hover:text-red-300 underline font-bold">Corrections page</a>
              </Link>.
            </p>
            <p className="mb-4">
              We do not settle. We do not retract documented facts. If any institution believes a
              claim on this site is false, we invite them to identify it — on or off the record.
            </p>
            <p className="text-sm text-gray-400 italic">
              To date, no legal demand has been received. This fact is documented on the{" "}
              <Link href="/corrections">
                <a className="text-red-400 hover:text-red-300 underline">Corrections page</a>
              </Link>.
            </p>
          </section>

          <section className="p-6 bg-yellow-950/10 border border-yellow-600/30 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-yellow-400">The Silence Doctrine</h2>
            <p className="mb-4">
              In the course of this investigation, representatives of Seton Hall University, the
              Archdiocese of Newark, and the individuals named herein have been contacted for comment.
              In every instance, the response has been: <strong className="text-yellow-300">"No comment."</strong>
            </p>
            <p className="mb-4">
              We accept this as their answer and publish accordingly. This institutional silence is
              itself a data point.
            </p>
            <p className="mb-4">
              When Penn State faced similar allegations, its officials were compelled to testify
              under oath. When Michigan State faced similar allegations, its president resigned
              within hours of sentencing. Seton Hall's response to 40 years of documented abuse
              has been: silence, promotion, and the sanctioning of the lawyer who withheld the evidence.
            </p>
            <p className="text-sm text-gray-400">
              For a full comparison of institutional responses, see{" "}
              <Link href="/parallels">
                <a className="text-yellow-400 hover:text-yellow-300 underline font-bold">The Precedent: Institutional Parallels</a>
              </Link>.
            </p>
          </section>

          <section id="tips">
            <h2 className="text-3xl font-bold mb-4">Submit a Tip</h2>
            <p className="mb-6">
              We protect source confidentiality and welcome tips from victims, witnesses, and individuals with knowledge of institutional misconduct. Your submission can be anonymous.
            </p>

            <TipSubmissionForm />

            <div className="mt-8 p-6 bg-gray-800/50 border border-gray-700 rounded-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-500" />
                Alternative Secure Contact Methods
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Signal:</strong> For maximum security, contact us via Signal encrypted messaging. Request our Signal number through the form above.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>ProtonMail:</strong> For encrypted email communication, use our ProtonMail address (request via form above).
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Anonymous Tips:</strong> You can submit tips without providing any contact information. We cannot follow up with you, but we will investigate credible information.
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>

        <div className="mt-16 text-center">
          <Link href="/">
            <a className="inline-block bg-zinc-200 hover:bg-zinc-700 text-zinc-900 px-8 py-3 rounded font-bold transition-colors">
              Return to Investigation
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}
