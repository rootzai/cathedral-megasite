import { SmartImage } from "@/components/SmartImage";
import { useState } from "react";
import "./epstein.css";

export default function EpsteinHome() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (id: string) => {
    setActiveModal(id);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = (id: string) => {
    if (activeModal === id) {
      setActiveModal(null);
      document.body.style.overflow = '';
    }
  };

  return (
    <div className="epstein-theme">


      {/* ══════════════════════════════════════════════════════════
     LEFT SIDEBAR NAVIGATION
══════════════════════════════════════════════════════════ */}


      {/* ══════════════════════════════════════════════════════════
     HEADER
══════════════════════════════════════════════════════════ */}
      <header>
        <div className="masthead-top">
          <span className="masthead-top-left">SodomHall.com &mdash; Special Investigation</span>
          <span className="masthead-top-right">South Orange, N.J. &nbsp;|&nbsp; February 2026 &nbsp;|&nbsp; Vol. III</span>
        </div>
        <div className="masthead-main">
          <div className="site-brand-name">The Epstein Connection</div>
          <div className="masthead-tagline">An Investigative Bulletin &mdash; Jeffrey Epstein &amp; Seton Hall University</div>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════════════
     HERO
══════════════════════════════════════════════════════════ */}
      {/* NEWSPAPER FRONT PAGE */}
      <div className="front-page" id="front-page">
        <div className="front-page-top-rule"></div>
        <div className="front-page-kicker">Breaking Investigation &mdash; Special Edition</div>

        <div className="front-page-headline">
          <h1>Jeffrey Epstein &amp;<br /><span>Seton Hall University</span></h1>
          <p className="deck">How a convicted sex trafficker's money, influence, and inner circle became embedded in South Orange &mdash; and why the university has never answered for it.</p>
        </div>

        <div className="front-page-columns">
          {/* LEFT: Stats */}
          <div className="front-col front-col-left">
            <div className="front-col-label">Key Figures</div>
            <div className="front-stat">
              <span className="front-stat-num">$32,877</span>
              <span className="front-stat-label">Paid to SHU</span>
            </div>
            <div className="front-stat">
              <span className="front-stat-num">3</span>
              <span className="front-stat-label">Tuition Checks</span>
            </div>
            <div className="front-stat">
              <span className="front-stat-num">100+</span>
              <span className="front-stat-label">Ruemmler&ndash;Epstein Emails</span>
            </div>
            <div className="front-stat">
              <span className="front-stat-num">1</span>
              <span className="front-stat-label">Report Still Suppressed</span>
            </div>
            <div className="front-stat">
              <span className="front-stat-num">$35M</span>
              <span className="front-stat-label">Indyke Settlement</span>
            </div>
            <div className="front-stat">
              <span className="front-stat-num">0</span>
              <span className="front-stat-label">Answers from SHU</span>
            </div>
          </div>

          {/* CENTER: Photo */}
          <div className="front-col front-col-center">
            <div className="front-photo-wrap">
              <SmartImage src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030244666/faZgOUIitaWUnhtW.jpg"
                alt="Seton Hall University, South Orange, New Jersey" />
              <div className="front-photo-caption">Seton Hall University &mdash; South Orange, New Jersey &mdash; Founded 1856</div>
            </div>
          </div>

          {/* RIGHT: Lede text */}
          <div className="front-col front-col-right">
            <div className="front-dateline">South Orange, N.J. &mdash; Feb. 22, 2026 &mdash; SodomHall.com</div>
            <p className="front-lede">Department of Justice files released in January 2026 contain Deutsche Bank records showing three tuition payments from Epstein-controlled accounts to Seton Hall University between 2017 and 2019 &mdash; signed by Darren Indyke, Epstein's personal attorney and estate co-executor.</p>
            <p className="front-lede">At the same time, the attorney Seton Hall retained to investigate Cardinal McCarrick &mdash; Kathryn Ruemmler of Latham &amp; Watkins &mdash; was exchanging over 100 emails with Epstein, accepting gifts, and was named as a backup executor in his will. She presented findings to the SHU Board on the morning of September 29, 2018 &mdash; and emailed Epstein that same day.</p>
            <p className="front-lede">The investigator was compromised. The payments were never disclosed. The report remains suppressed. Seton Hall has not answered a single question.</p>
          </div>
        </div>
      </div>

      {/* BREAKING NEWS BANNER */}
      <div className="breaking-banner">
        <strong>BREAKING &mdash; FEB. 20, 2026:</strong>&nbsp;&nbsp;Darren Indyke &amp; Richard Kahn &mdash; the men who signed Seton Hall's Epstein tuition checks and co-executed his estate &mdash; agree to pay up to <strong>$35 million</strong> to settle a class-action accusing them of aiding Epstein's sex trafficking.&nbsp;&nbsp;<a href="https://thehill.com/regulation/court-battles/5747345-epstein-estate-settlement-advisers-sex-trafficking-claims/" target="_blank">Read more &rarr;</a>
      </div>

      {/* ════════════════════════════════════════════════════════
     SECTION 01 — TIMELINE
════════════════════════════════════════════════════════ */}
      <hr className="divider" />
      <section id="timeline">
        <div className="section-wrapper">
          <div className="section-label">Section 01</div>
          <h2 className="section-title">Timeline: The Convergence</h2>
          <hr className="section-rule" />
          <p className="section-intro">The following timeline maps the overlap between Epstein's SHU payments, Ruemmler's review, the law school embezzlement, and the institutional collapse that followed.</p>

          <div className="timeline">

            <div className="timeline-item">
              <div className="timeline-date">2012 — Approx.</div>
              <div className="timeline-event">Law School Embezzlement Begins</div>
              <div className="timeline-detail">Teresina DeAlmeida and associates begin a decade-long scheme to steal from SHU Law. The fraud will continue until 2022.</div>
            </div>

            <div className="timeline-item gold">
              <div className="timeline-date">July 8, 2017</div>
              <div className="timeline-event">First Epstein Check to SHU — $17,060</div>
              <div className="timeline-detail">Darren Indyke signs a Deutsche Bank check from Epstein's account to Seton Hall on behalf of a fully redacted, unnamed student. Covers Fall 2017 and Spring 2018.</div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">August 2018</div>
              <div className="timeline-event">SHU Announces "Independent" Review — Amalfe Retained</div>
              <div className="timeline-detail">SHU announces it has retained Christine A. Amalfe of Gibbons P.C. as Special Counsel to "lead the effort and commission" an independent review. A three-person Task Force (McMahon, LaSala, Checchio) is formed to oversee the process. Amalfe retains Latham &amp; Watkins; Kathryn Ruemmler leads the review.</div>
            </div>

            <div className="timeline-item gold">
              <div className="timeline-date">July 13, 2018</div>
              <div className="timeline-event">Second Epstein Check to SHU — $11,749</div>
              <div className="timeline-detail">Indyke signs a check for Brian Beller, covering Fall 2018 and Spring 2019. The DOJ files note "Epstein employee Harry Beller" in the background column.</div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">September 29, 2018</div>
              <div className="timeline-event">Ruemmler Emails Epstein on SHU Board Day</div>
              <div className="timeline-detail">Epstein asks to visit Ruemmler's apartment. She replies she must first present to the Seton Hall board at 10am in New Jersey. The exchange is documented in the DOJ Jmail files.</div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">January 4, 2019</div>
              <div className="timeline-event">Ruemmler: "Totally Tricked Out by Uncle Jeffrey"</div>
              <div className="timeline-detail">Ruemmler emails that Epstein has given her boots, a handbag, and a watch. This is during the active period of the SHU McCarrick review.</div>
            </div>

            <div className="timeline-item gold">
              <div className="timeline-date">February 19, 2019</div>
              <div className="timeline-event">Third Epstein Check to SHU — $4,068</div>
              <div className="timeline-detail">Final payment for Brian Beller, covering Spring 2019. Beller will graduate with an M.S. in Accounting in December 2019.</div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">February 27, 2019</div>
              <div className="timeline-event">Ruemmler Schedules Epstein Visit Around Bishop Interviews</div>
              <div className="timeline-detail">Email exchange shows Ruemmler coordinating a visit to Epstein while managing her McCarrick review obligations, including interviewing bishops in Newark and a JPMorgan meeting.</div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">April 2, 2019</div>
              <div className="timeline-event">Ruemmler Meets Epstein, Scaramucci, and Bannon</div>
              <div className="timeline-detail">In-person meeting documented in the Epstein files. Attendees include Anthony Scaramucci and Steve Bannon.</div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">May 21, 2019</div>
              <div className="timeline-event">Epstein's Assistant Confirms Ruemmler Visit</div>
              <div className="timeline-detail">Lesley Groff, Epstein's personal assistant, emails Ruemmler to confirm she will "come see Jeffrey" that evening.</div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">2019</div>
              <div className="timeline-event">Latham &amp; Watkins McCarrick Review Completed</div>
              <div className="timeline-detail">Ruemmler's review is completed. It identifies 12 clergymen and raises questions about Monsignor Joseph Reilly. The report is never publicly released.</div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">July 6, 2019</div>
              <div className="timeline-event">Epstein Arrested — Ruemmler Among First Called</div>
              <div className="timeline-detail">Epstein is arrested on federal sex-trafficking charges. Ruemmler is reportedly among the first people he contacts.</div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">August 8, 2019</div>
              <div className="timeline-event">Epstein Signs New Will — Names Ruemmler Backup Executor</div>
              <div className="timeline-detail">Two days before his death, Epstein signs a new will naming Ruemmler as backup executor alongside primary executors Darren Indyke and Richard Kahn.</div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">August 10, 2019</div>
              <div className="timeline-event">Epstein Dies in Federal Custody</div>
              <div className="timeline-detail">Epstein is found dead at the Metropolitan Correctional Center in New York. His death is ruled a suicide. Two days earlier, he had signed a new will naming Ruemmler as backup executor.</div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">~August 27, 2019</div>
              <div className="timeline-event">Ruemmler Presents Latham Report to SHU Board of Regents</div>
              <div className="timeline-detail">Approximately 17 days after Epstein's death, Ruemmler delivers the Latham &amp; Watkins findings to the Board of Regents. Board Chairman Kevin Marino is present. The report identifies 12 clergymen and recommends Msgr. Reilly's removal from leadership. The Board votes to suppress the report and issue only a sanitized Responsive Action Plan.</div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">November 2022</div>
              <div className="timeline-event">Embezzlement Discovered — Boozang Resigns</div>
              <div className="timeline-detail">The law school embezzlement scheme is uncovered. Dean Kathleen Boozang resigns. Board Chairman Kevin Marino steps down from that role.</div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">2023</div>
              <div className="timeline-event">President Nyre Resigns</div>
              <div className="timeline-detail">Joseph Nyre resigns as SHU president. He subsequently files a lawsuit alleging, among other things, that Marino interfered with the embezzlement investigation and attempted to admit students to the law school outside normal processes.</div>
            </div>

            <div className="timeline-item gold">
              <div className="timeline-date">December 2024</div>
              <div className="timeline-event">DeAlmeida Sentenced to 3 Years in Federal Prison</div>
              <div className="timeline-detail">Teresina DeAlmeida is sentenced to three years for her role in the $1.3M embezzlement scheme.</div>
            </div>

            <div className="timeline-item gold">
              <div className="timeline-date">January 30, 2026</div>
              <div className="timeline-event">DOJ Releases Epstein Files</div>
              <div className="timeline-detail">The Department of Justice releases millions of pages of Epstein files, including Deutsche Bank records showing three tuition payments to Seton Hall and 100+ emails between Epstein and Ruemmler.</div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">February 2026</div>
              <div className="timeline-event">Ruemmler Resigns from Goldman Sachs</div>
              <div className="timeline-detail">Following public reporting on her Epstein ties, Ruemmler resigns as Chief Legal Officer of Goldman Sachs.</div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">February 20, 2026</div>
              <div className="timeline-event">Nyre Lawsuit Dismissed</div>
              <div className="timeline-detail">A judge dismisses former President Nyre's lawsuit against Seton Hall. The admissions interference allegations are not independently resolved.</div>
            </div>

            <div className="timeline-item gold">
              <div className="timeline-date">February 20, 2026</div>
              <div className="timeline-event">$35 Million Settlement — Indyke &amp; Kahn</div>
              <div className="timeline-detail">Darren Indyke and Richard Kahn — co-executors of Epstein's estate and the men whose signatures appear on the three Seton Hall tuition checks — agree to pay up to $35 million to settle a class-action lawsuit (Allison Ward v. Darren K. Indyke et al.) accusing them of aiding and abetting Epstein's sex trafficking. Boies Schiller Flexner, which previously secured $365M in settlements from JPMorgan Chase and Deutsche Bank, represents the victims. Neither Indyke nor Kahn admitted wrongdoing. The estate has now paid out over $205 million in total victim settlements. The settlement requires court approval.</div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
     SECTION 01 — THE MONEY TRAIL
══════════════════════════════════════════════════════════ */}
      <hr className="divider" />
      <section id="money-trail">
        <div className="section-wrapper">
          <div className="section-label">Section 02</div>
          <h2 className="section-title">The Money Trail: Three Checks, Two Students, One Fixer</h2>
          <hr className="section-rule" />
          <p className="section-intro">Department of Justice files released in January 2026 contain Deutsche Bank records showing three tuition payments from Epstein-controlled accounts to Seton Hall University between 2017 and 2019. The checks were signed by Darren Indyke — Epstein's personal attorney and co-executor of his estate. One student is fully redacted. The other is named.</p>

          <div className="warning-banner">
            <span className="warning-banner-icon">!</span>
            <p><strong>Note on sourcing:</strong> All payment figures, dates, and student identifications below are drawn directly from DOJ-released Deutsche Bank records and reporting by <em>The Setonian</em> (Feb. 3, 2026). The identity of the unnamed student and any admissions-related conduct remain unconfirmed pending further investigation.</p>
          </div>

          <div className="two-col">
            <div className="stat-block">
              <span className="stat-number">$32,877</span>
              <span className="stat-label">Total paid to SHU by Epstein entities</span>
            </div>
            <div className="stat-block">
              <span className="stat-number">$840K+</span>
              <span className="stat-label">Total Epstein paid to 28 schools (USA Today)</span>
            </div>
          </div>

          <div className="chapter open" id="ch-payments">
            <div className="chapter-header" onClick={(e) => { e.currentTarget.closest('.chapter')?.classList.toggle('open'); }}>
              <span className="chapter-num">01.A</span>
              <div className="chapter-title-block">
                <div className="chapter-title">The Three Checks</div>
                <div className="chapter-subtitle">Deutsche Bank // Darren Indyke // 2017–2019</div>
              </div>
              <span className="chapter-toggle">+</span>
            </div>
            <div className="chapter-body">
              <table className="payment-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Beneficiary</th>
                    <th>Period Covered</th>
                    <th>Signed By</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>July 8, 2017</td>
                    <td className="amount">$17,060</td>
                    <td><span className="redacted">████████████</span> <span style={{ "color": "var(--gray)", "fontSize": "11px" }}>(redacted)</span></td>
                    <td>Fall 2017 / Spring 2018</td>
                    <td>Darren Indyke</td>
                  </tr>
                  <tr>
                    <td>July 13, 2018</td>
                    <td className="amount">$11,749</td>
                    <td><strong>Brian Beller</strong></td>
                    <td>Fall 2018 / Spring 2019</td>
                    <td>Darren Indyke</td>
                  </tr>
                  <tr>
                    <td>Feb. 19, 2019</td>
                    <td className="amount">$4,068</td>
                    <td><strong>Brian Beller</strong></td>
                    <td>Spring 2019</td>
                    <td>Darren Indyke</td>
                  </tr>
                </tbody>
              </table>

              <h4>Who Is Brian Beller?</h4>
              <p>Brian Beller graduated from Seton Hall with a <strong>Master of Science in Accounting</strong> in December 2019 — the same semester his final Epstein-funded tuition payment was made. That M.S. Accounting program is housed within <strong>Seton Hall Law School</strong>, not the Stillman School of Business — placing Brian Beller's enrollment directly within the same institution where Dean Kathleen Boozang presided, where a $1.3 million embezzlement scheme was running, and where Board Chairman Kevin Marino allegedly attempted to admit students outside normal processes.</p>
              <p>The DOJ files note in a column labeled "background" that the checks are associated with <strong>"Epstein employee Harry Beller."</strong> Harry Beller served as Jeffrey Epstein's personal accountant for <strong>22 years</strong> (1992–2014). He was the individual who physically withdrew large sums of cash from Epstein's JPMorgan accounts — withdrawals that triggered at least four federally mandated Suspicious Activity Reports (SARs). The earliest SAR was filed in 2002. Beller made 16 separate cash withdrawals of approximately $9,800 each — just below the $10,000 federal reporting threshold — in a single three-month period, plus a $40,000 check.</p>
              <p>Brian Beller is widely assumed to be Harry Beller's son. The Setonian notes "there is no confirmation that the two are related," but the DOJ files themselves explicitly link the SHU payments to Harry Beller in the background column. The pattern is consistent with Epstein's documented behavior: he routinely paid tuition for the children of Jewish professionals in his inner circle — accountants, attorneys, and financial managers whose loyalty he cultivated through financial generosity. Harry Beller is Jewish. Epstein's largesse toward the families of his Jewish associates is well-documented in the broader DOJ file releases.</p>

              <div className="fact-box">
                <p><strong>Key question:</strong> If Brian Beller is Harry Beller's son, Seton Hall Law School accepted tuition payments from the personal accountant of a convicted sex trafficker on behalf of that accountant's son — while simultaneously employing a Latham &amp; Watkins attorney with 100+ emails to that same sex trafficker to investigate its own clergy abuse scandal. Both connections run through the same institution. Neither has been addressed.</p>
              </div>

              <h4>Who Is Darren Indyke?</h4>
              <p>Darren Indyke was Epstein's longtime personal attorney. He is the co-executor of Epstein's estate alongside Richard Kahn. Indyke signed all three SHU tuition checks. He has been identified in Congressional investigations as a key figure in Epstein's financial network. Senator Ron Wyden's Finance Committee probe specifically requested records of accounts in which Indyke had signatory authority.</p>

              <h4>The Unnamed Student — A Redaction That Raises Its Own Questions</h4>
              <p>The July 2017 check — the largest single payment at $17,060 — was made on behalf of a student whose name and ID number are <strong>entirely redacted</strong> in the DOJ files. This is the most significant unresolved question in the SHU-Epstein connection.</p>
              <p>In the broader DOJ Epstein file releases, redactions of this type have overwhelmingly been applied to protect the identities of <strong>female victims and survivors</strong>. When the DOJ redacts a name in the context of Epstein's financial records, the working assumption among investigators and journalists covering these files is that the redaction exists to protect someone who was victimized — not merely to shield an employee's family member. The contrast is stark: Brian Beller's name is unredacted. The unnamed student's identity is fully suppressed.</p>
              <p>If the unnamed student was a victim — someone whose tuition Epstein paid as part of a pattern of grooming, control, or silencing — then Seton Hall University was, unknowingly or otherwise, a recipient of trafficking-related funds. The university has not addressed this possibility. It has not confirmed whether it has reviewed the identity of this student or reported the matter to law enforcement.</p>
              <div className="fact-box">
                <p><strong>The question SHU must answer:</strong> Who is the unnamed student? Has SHU identified this person? Has SHU contacted the DOJ, the FBI, or the Congressional investigators who are examining these files? The university's silence on this point is not a neutral position.</p>
              </div>
            </div>
          </div>

          <div className="chapter" id="ch-pattern">
            <div className="chapter-header" onClick={(e) => { e.currentTarget.closest('.chapter')?.classList.toggle('open'); }}>
              <span className="chapter-num">01.B</span>
              <div className="chapter-title-block">
                <div className="chapter-title">Epstein's University Playbook</div>
                <div className="chapter-subtitle">Columbia // NYU // Bard // Michigan // Seton Hall</div>
              </div>
              <span className="chapter-toggle">+</span>
            </div>
            <div className="chapter-body">
              <p>The SHU payments are not isolated. A USA Today review of hundreds of DOJ files found that Epstein or entities tied to him paid <strong>at least $840,000 to cover students' costs at 28 different schools</strong>. The pattern reveals two distinct categories of beneficiary:</p>

              <h4>Category 1: Children of Associates and Employees</h4>
              <p>Epstein routinely paid tuition for the children of people who worked for him or provided him services. The most documented example is the family of <strong>John de Jongh Jr.</strong>, then-Governor of the U.S. Virgin Islands. His wife, Cecile de Jongh, served as Epstein's office manager in the territory. She forwarded her children's tuition bills directly to Epstein. The same JPMorgan court filing that documents these payments also shows Cecile de Jongh attempting to secure student visas and work licenses for young women connected to Epstein.</p>
              <p>The Brian Beller payments follow this exact pattern: an employee's family member receives tuition payments, creating financial dependency and loyalty.</p>

              <h4>Category 2: Victims — Lured, Silenced, and Indebted</h4>
              <p>Congressional investigators have documented a second, darker use of university payments. House Judiciary Committee Democrats, in letters to NYU and Columbia in January 2026, documented how Epstein used university admissions and tuition as tools to <strong>lure victims and ensure their silence</strong>.</p>
              <p>At NYU: Epstein promised admission to young women, some minors. He paid tuition for survivors he had abused from 2002 to 2005. He arranged scholarships. At Columbia: He paid tuition for a survivor between 2004 and 2007. He leveraged Nobel laureate Richard Axel and development office connections to facilitate admissions for associates' children — including JPMorgan CEO Jes Staley's daughter Alexa, who was admitted to Columbia's physics Ph.D. program after Epstein personally contacted faculty and administrators.</p>

              <div className="fact-box">
                <p><strong>Epstein's own words on the Columbia admission:</strong> When Alexa Staley's GRE physics score fell below the program average, Jes Staley informed Epstein. Epstein replied: <em>"john kluge gave 4 billion to the school„ will you relax."</em> She was admitted. Epstein later encouraged Staley to make a "real donation" — suggesting $100,000 per year for five years.</p>
              </div>

              <p>The question for Seton Hall: Into which category do the three SHU payments fall? Were these children of associates — or something more troubling? The university has not answered.</p>

              <h4>SHU's Place in the Landscape</h4>
              <p>Seton Hall is one of <strong>nine universities and colleges</strong> listed in the DOJ files as receiving tuition payments on behalf of women and children. It is, aside from Fairleigh Dickinson University, the only institution in New Jersey on that list. Its presence on the list — combined with the simultaneous Ruemmler connection — makes SHU's exposure uniquely layered.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
     SECTION 02 — RUEMMLER
══════════════════════════════════════════════════════════ */}
      <hr className="divider" />
      <section id="ruemmler" style={{ "background": "rgba(10,0,0,0.4)" }}>
        <div className="section-wrapper">
          <div className="section-label">Section 03</div>
          <h2 className="section-title">The Conflicted Investigator: Kathryn Ruemmler</h2>
          <hr className="section-rule" />
          <p className="section-intro">In 2018, Seton Hall's outside counsel Gibbons P.C. retained Latham &amp; Watkins to conduct what it called an "independent, unrestricted review" of Cardinal Theodore McCarrick's conduct at the university. The lead attorney was Kathryn Ruemmler. At the same time, she was exchanging gifts, personal visits, and over 100 emails with Jeffrey Epstein — and was named as a backup executor in his will.</p>

          <div className="chapter open" id="ch-ruemmler-bio">
            <div className="chapter-header" onClick={(e) => { e.currentTarget.closest('.chapter')?.classList.toggle('open'); }}>
              <span className="chapter-num">02.A</span>
              <div className="chapter-title-block">
                <div className="chapter-title">Who Is Kathryn Ruemmler?</div>
                <div className="chapter-subtitle">White House Counsel // Goldman Sachs // Latham &amp; Watkins</div>
              </div>
              <span className="chapter-toggle">+</span>
            </div>
            <div className="chapter-body">
              <p>Kathryn Ruemmler is one of Washington's most prominent attorneys. She served as <strong>White House Counsel to President Barack Obama</strong> from 2011 to 2014, having previously served as a federal prosecutor and Principal Deputy Associate Attorney General. After leaving the White House, she joined Latham &amp; Watkins as a partner, where she built a practice around high-stakes government investigations and white-collar defense.</p>
              <p>In 2019, she was named <strong>Chief Legal Officer of Goldman Sachs</strong>, a position she held until February 2026, when she resigned following the public release of the DOJ files documenting her relationship with Epstein.</p>
              <p>Ruemmler's credentials made her an ideal choice — on paper — to lead a sensitive investigation for a Catholic university into clergy sexual abuse. Her White House background, her federal prosecution experience, and her Latham &amp; Watkins platform all signaled institutional credibility. What Gibbons P.C. and Seton Hall either did not know or chose not to disclose was that the attorney they retained to investigate sexual misconduct was simultaneously in a close personal relationship with a convicted sex trafficker.</p>
            </div>
          </div>

          <div className="chapter" id="ch-ruemmler-epstein">
            <div className="chapter-header" onClick={(e) => { e.currentTarget.closest('.chapter')?.classList.toggle('open'); }}>
              <span className="chapter-num">02.B</span>
              <div className="chapter-title-block">
                <div className="chapter-title">The Epstein Relationship: Emails, Gifts, and "Uncle Jeffrey"</div>
                <div className="chapter-subtitle">100+ Emails // $20K+ in Gifts // Named in Will</div>
              </div>
              <span className="chapter-toggle">+</span>
            </div>
            <div className="chapter-body">
              <p>CNN's KFile confirmed that Ruemmler and Epstein exchanged <strong>more than 100 emails</strong> over several years. Between 2014 and 2019, she appeared on Epstein's schedule multiple times for meetings, appointments, and lunches. The relationship extended well beyond professional contact.</p>

              <h4>The Gifts</h4>
              <p>In 2016, Epstein gifted Ruemmler a <strong>$9,350 Hermès handbag</strong> and <strong>$10,000 in Bergdorf Goodman gift cards</strong>. In January 2019 — while she was actively working on the SHU McCarrick review — Ruemmler wrote in an email that she was <em>"totally tricked out by Uncle Jeffrey today! Jeffrey boots, handbag, and watch!"</em> Epstein reportedly also sent her an Apple Watch later that year. Total documented gifts: approximately $20,000 or more.</p>

              <h4>The Will</h4>
              <p>Epstein signed a new will on <strong>August 8, 2019</strong> — just two days before his death in federal custody. Ruemmler was named as a <strong>backup executor</strong> of that estate. The primary executors were Darren Indyke and Richard Kahn — the same Darren Indyke who signed the three Seton Hall tuition checks.</p>

              <h4>The First Call After Arrest</h4>
              <p>When Epstein was arrested on federal sex-trafficking charges in July 2019, Ruemmler was reportedly among the <strong>first people he called</strong>. This occurred while the Latham &amp; Watkins McCarrick review for Seton Hall was still in its final stages.</p>

              <div className="fact-box">
                <p><strong>The timeline of conflict:</strong> Ruemmler was retained by Gibbons/Latham to review SHU's response to McCarrick in 2018. The review was completed in 2019. During this entire period, she was receiving gifts from Epstein, meeting him in person, and was ultimately named in his will. The report has never been publicly released — despite a New Jersey Superior Court ordering its disclosure.</p>
              </div>
            </div>
          </div>

          <div className="chapter" id="ch-ruemmler-emails">
            <div className="chapter-header" onClick={(e) => { e.currentTarget.closest('.chapter')?.classList.toggle('open'); }}>
              <span className="chapter-num">02.C</span>
              <div className="chapter-title-block">
                <div className="chapter-title">The Email Evidence: Exhibits from the DOJ Files</div>
                <div className="chapter-subtitle">Sept. 29, 2018 // Feb. 27, 2019 // SHU Board Presentation</div>
              </div>
              <span className="chapter-toggle">+</span>
            </div>
            <div className="chapter-body">
              <p>The following email exchanges are drawn directly from the DOJ-released Epstein files (Jmail records). They place Ruemmler in direct contact with Epstein while she was actively engaged in work for Seton Hall.</p>

              <div className="email-exhibit">
                <div className="email-exhibit-label">Exhibit A — September 29, 2018 // SHU Board Presentation Day</div>
                <SmartImage src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030244666/RQfdqTDXiNWwWKiP.jpeg" alt="Email exchange between Jeffrey Epstein and Kathy Ruemmler, September 29, 2018 — Jmail screenshot showing Ruemmler telling Epstein she has to present to the Seton Hall board" />
                <div className="email-exhibit-caption">
                  <strong>Context:</strong> Epstein (using the address jeevacation@gmail.com) asks to visit Ruemmler's apartment. She replies that her contractor is present but that she has to <em>"present to Seton Hall board this morning at 10am in New Jersey"</em> and will be back by noon. This places Ruemmler in direct communication with Epstein on the same day she was presenting to the SHU Board of Regents — the board chaired by Kevin Marino.
                </div>
              </div>

              <div className="email-exhibit">
                <div className="email-exhibit-label">Exhibit B — February 27, 2019 // Scheduling Around Bishops and JPMorgan</div>
                <SmartImage src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030244666/fervbSAfhWqGKsvz.jpeg" alt="Email exchange between Jeffrey Epstein and Kathy Ruemmler, February 27, 2019 — Jmail screenshot showing Ruemmler scheduling visit around meeting the Cardinal in Newark" />
                <div className="email-exhibit-caption">
                  <strong>Context:</strong> This exchange, dated February 27, 2019, shows Ruemmler scheduling a visit to Epstein while simultaneously managing her obligations to interview bishops in Newark (as part of the SHU/McCarrick review) and a 1PM meeting at JPMorgan. She writes: <em>"Meeting the Cardinal at 2 pm in Newark, and have 1PMorgan at 9:30. Are you free @ 11 am if I came by then?"</em> The Cardinal referenced is almost certainly Cardinal Joseph Tobin of the Archdiocese of Newark — the same Cardinal who would later order the Ropes &amp; Gray review of the Latham &amp; Watkins report Ruemmler produced.
                </div>
              </div>

              <h4>What the Emails Establish</h4>
              <p>These are not peripheral contacts. The September 2018 email places Ruemmler communicating with Epstein on the specific morning she was presenting to the SHU Board. The February 2019 email shows her scheduling visits to Epstein around her interviews of Catholic bishops for the McCarrick investigation. The review she produced — which has never been released — was completed under these conditions.</p>
              <p>The question is not merely whether Ruemmler was compromised. The question is whether Seton Hall, Gibbons P.C., or the Archdiocese of Newark knew about the Epstein relationship when they retained her — and whether they know now.</p>
            </div>
          </div>

          <div className="chapter" id="ch-ruemmler-report">
            <div className="chapter-header" onClick={(e) => { e.currentTarget.closest('.chapter')?.classList.toggle('open'); }}>
              <span className="chapter-num">02.D</span>
              <div className="chapter-title-block">
                <div className="chapter-title">The Suppressed Report</div>
                <div className="chapter-subtitle">Latham &amp; Watkins // Gibbons P.C. // Court-Ordered Disclosure</div>
              </div>
              <span className="chapter-toggle">+</span>
            </div>
            <div className="chapter-body">
              <p>The Latham &amp; Watkins McCarrick review was completed in 2019. It identified <strong>12 clergymen</strong> and made findings about how Seton Hall and the Archdiocese of Newark handled abuse allegations. The report has never been publicly released.</p>
              <p>A New Jersey Superior Court <strong>ordered its disclosure</strong>. Seton Hall has resisted. As of February 2026, the report remains suppressed — even as the attorney who produced it has been publicly identified as having a close personal and financial relationship with Jeffrey Epstein during the period she was conducting the review.</p>

              <h4>The Architecture of Managed Independence</h4>
              <p>When SHU announced its "independent, unrestricted review" in August 2018, the structure it built was anything but independent. Three layers of control were stacked between the public and the truth:</p>
              <p><strong>Layer 1 — The Internal Task Force (The Decision Makers):</strong> A three-person Special Task Force of the Board of Regents was created to oversee the process. Its members were <strong>Donald A. McMahon Jr.</strong> (Regent), <strong>Joseph LaSala</strong> (then-Chair of the Board of Regents), and <strong>Bishop James Checchio</strong> (Bishop of Metuchen, member of the Board of Regents). These three men controlled what the investigators would find, what would be communicated to the board, and what would be suppressed. Critically, Bishop Checchio's ecclesiastical superior is <strong>Cardinal Joseph Tobin</strong> of the Archdiocese of Newark — the same Cardinal who would later be named in the Gibbons report and who failed to appear before investigators. Having Tobin's direct subordinate on the task force overseeing a report that implicated Tobin's own oversight is the definition of a conflict of interest.</p>
              <p><strong>Layer 2 — The Outside Counsel (The Shield):</strong> <strong>Christine A. Amalfe</strong> of Gibbons P.C. was retained as "Special Counsel" to manage the process. Amalfe is Chair of Gibbons' Employment &amp; Labor Law Group and one of New Jersey's most prominent management-side employment attorneys. She was publicly announced as the person who would "lead the effort and commission" the independent review. But she reported to the Task Force — not to the public, not to the court, and not to the survivors.</p>
              <p><strong>Layer 3 — The Investigative Engine (The Appearance of Independence):</strong> Amalfe retained <strong>Latham &amp; Watkins</strong> to conduct the actual investigation. The lead Latham attorney was <strong>Kathryn Ruemmler</strong> — who, as documented above, was simultaneously exchanging gifts, personal visits, and over 100 emails with Jeffrey Epstein.</p>

              <div className="fact-box">
                <p><strong>The result of this architecture:</strong> The Task Force (McMahon, LaSala, Checchio) received Ruemmler's findings. They authored the "Responsive Action Plan" — a sanitized public summary that omitted the report's most damaging findings. The full Latham report was suppressed. The 12 clergymen named in the report were never publicly identified. The future university president named in the report was appointed to lead the university five years later.</p>
              </div>

              <h4>The Board Connections: Brennan and D'Alessandro</h4>
              <p>The Board of Regents that oversaw this entire process has its own history worth examining. In the mid-1990s, <strong>Robert E. Brennan</strong> — the New Jersey financier later convicted of fraud and bankruptcy fraud — served as <strong>Chairman of the Board of Regents</strong> at Seton Hall. Brennan's connections to the NJ legal and financial establishment, including figures in Kevin Marino's orbit, are part of the institutional DNA of SHU's governance.</p>
              <p>Today, the Board of Regents is chaired by <strong>Henry "Hank" F. D'Alessandro '85</strong>, a Managing Director and Head of Credit Partners at <strong>Morgan Stanley</strong>. D'Alessandro is a 1985 SHU alumnus who has served on the Board since at least 2020 and became Chair in October 2023. It was D'Alessandro who publicly defended Monsignor Reilly in January 2025, writing that Reilly was being "falsely and unfairly portrayed" — even as the Politico reporting documented that the Latham report had recommended Reilly's removal from all SHU boards and leadership positions.</p>

              <p>The Ropes &amp; Gray review — which is examining the Latham &amp; Watkins report and its findings — has no stated deadline. It was ordered specifically because questions arose about whether the findings were properly communicated to Monsignor Joseph Reilly, who was named in the report but was subsequently appointed Seton Hall's president in 2024. The review is being led by <strong>Joan McPhee</strong> and <strong>James P. Dowden</strong>, with <strong>Helen Gugel</strong> and <strong>Megan Bisk</strong> providing additional expertise in New York-based institutional matters and higher education Title IX compliance respectively. McPhee and Dowden previously co-authored the landmark 2018 Ropes &amp; Gray report on USA Gymnastics and the Larry Nassar abuse scandal — the most significant institutional accountability investigation in American sports history.</p>

              <div className="fact-box">
                <p><strong>The compounding problem:</strong> The report was produced by an attorney with an undisclosed conflict of interest (Ruemmler's Epstein ties). The report identified a future university president as having failed to report abuse. The report was suppressed by a task force whose members included a bishop whose superior was named in the report. The future president was appointed anyway. The Board Chairman who defended that appointment is a Morgan Stanley managing director. Now a second law firm is reviewing the first law firm's work &mdash; and the first law firm's lead attorney has resigned from Goldman Sachs under a cloud of Epstein-related scrutiny.</p>
              </div>
            </div>
          </div>

          <div className="chapter" id="ch-ruemmler-presentation">
            <div className="chapter-header" onClick={(e) => { e.currentTarget.closest('.chapter')?.classList.toggle('open'); }}>
              <span className="chapter-num">03.E</span>
              <div className="chapter-title-block">
                <div className="chapter-title">Presenting the Findings: August 2019, the Board, and the SCIF</div>
                <div className="chapter-subtitle">Aug. 27, 2019 // Board of Regents // Scrivo &amp; Marino // SHU Legal Team</div>
              </div>
              <span className="chapter-toggle">+</span>
            </div>
            <div className="chapter-body">
              <p>On or around <strong>August 27, 2019</strong> &mdash; approximately three weeks after Epstein's death in federal custody on August 10 &mdash; Kathryn Ruemmler presented the findings of the Latham &amp; Watkins McCarrick review to the Seton Hall Board of Regents. This was the formal delivery of the report that identified 12 clergymen and made findings about institutional failures. The Board received those findings. The report was not released.</p>

              <h4>The SCIF Question</h4>
              <p>A review of this sensitivity &mdash; involving a sitting Cardinal, 12 clergymen, and findings about a major Catholic university's response to sexual abuse &mdash; would typically be presented in a controlled environment. The term "SCIF" (Sensitive Compartmented Information Facility) is a federal intelligence term, but the concept applies: Ruemmler, as a former White House Counsel with security clearance experience, would have been well-versed in how to manage the presentation of sensitive findings to a board in a way that controlled information flow, limited documentation, and managed the risk of leaks. The August 2019 presentation was, by all accounts, a controlled briefing &mdash; not a public disclosure.</p>
              <p>The three-person Task Force (McMahon, LaSala, Checchio) had already filtered what Ruemmler would present. What the full Board of Regents received was the Task Force's version of Ruemmler's findings &mdash; not the raw report. The full Latham report has never been seen by anyone outside the Task Force and Ruemmler's team.</p>

              <h4>The SHU Legal Team: Scrivo and Marino</h4>
              <p>Throughout the review process, Ruemmler and her Latham &amp; Watkins team would have interfaced with Seton Hall's internal legal team. SHU's general counsel at the relevant period was <strong>Catherine Kiernan</strong>, but the university's outside legal work on sensitive governance matters ran through its retained counsel. <strong>Joseph Scrivo</strong> &mdash; a prominent New Jersey attorney and longtime SHU legal advisor &mdash; represented the university in connection with the McCarrick matter and related governance issues.</p>
              <p>Critically, <strong>Kevin Marino</strong> was simultaneously serving as <strong>Chairman of the Board of Regents</strong> while his law firm, Marino, Tortorella &amp; Boyle, maintained a relationship with SHU. This dual role &mdash; board chair and legal advisor &mdash; created a structural conflict that has never been publicly examined. Marino would have been in the room, or directly briefed, when Ruemmler presented her findings to the Board in August 2019. He would have known the contents of the Latham report &mdash; or at minimum, the Task Force's version of it.</p>
              <p>The question of what Marino knew about Ruemmler's Epstein relationship &mdash; and when he knew it &mdash; is therefore not a peripheral question. It goes to the heart of whether the Board of Regents was operating with full information when it decided to suppress the Latham report and issue only the sanitized Responsive Action Plan.</p>

              <div className="fact-box">
                <p><strong>The timeline of Ruemmler's dual obligations in August 2019:</strong> Epstein was arrested July 6. He signed his will naming Ruemmler backup executor on August 8. He died August 10. Ruemmler presented the SHU findings to the Board on approximately August 27. In the span of three weeks, she went from being named in the will of a convicted sex trafficker to presenting a clergy abuse investigation to a Catholic university's board of governors. Neither the Board nor the public was told about the will.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
     SECTION 03 — KEY FIGURES
══════════════════════════════════════════════════════════ */}
      <hr className="divider" />
      <section id="key-figures">
        <div className="section-wrapper">
          <div className="section-label">Section 04</div>
          <h2 className="section-title">Key Figures: Who Knew What, and When</h2>
          <hr className="section-rule" />
          <p className="section-intro">The Epstein-SHU connection runs through a network of attorneys, administrators, and board members. Click any profile to expand the full dossier.</p>

          <div className="profile-grid">

            {/* RUEMMLER */}
            <div className="profile-card" onClick={() => openModal('modal-ruemmler')}>
              <div className="profile-card-header">
                <div className="profile-avatar">KR</div>
                <div>
                  <div className="profile-name">Kathryn Ruemmler</div>
                  <div className="profile-role">Latham &amp; Watkins // Goldman Sachs CLO</div>
                </div>
              </div>
              <div className="profile-card-body">
                <p>Led the 2018–2019 McCarrick review for SHU via Gibbons P.C. Simultaneously exchanged 100+ emails with Epstein, received ~$20K in gifts, and was named backup executor of his estate. Resigned Goldman Sachs February 2026.</p>
                <div className="profile-tags">
                  <span className="tag red">Conflict of Interest</span>
                  <span className="tag gold">Epstein Contact</span>
                  <span className="tag">Named in Will</span>
                </div>
              </div>
              <button className="profile-expand-btn">View Full Dossier →</button>
            </div>

            {/* KEVIN MARINO */}
            <div className="profile-card" onClick={() => openModal('modal-marino')}>
              <div className="profile-card-header">
                <div className="profile-avatar">KM</div>
                <div>
                  <div className="profile-name">Kevin H. Marino</div>
                  <div className="profile-role">Board of Regents Chairman // Marino Tortorella &amp; Boyle</div>
                </div>
              </div>
              <div className="profile-card-body">
                <p>SHU Law '84. Founding partner of Marino Tortorella &amp; Boyle. Served as Board of Regents Chairman during the period Ruemmler presented to the board (Sept. 2018). Donated $1M endowed professorship to SHU Law. Accused by former President Nyre of interfering in the law school embezzlement investigation.</p>
                <div className="profile-tags">
                  <span className="tag gold">Board Chairman</span>
                  <span className="tag">SHU Law Alum</span>
                  <span className="tag red">Nyre Allegations</span>
                </div>
              </div>
              <button className="profile-expand-btn">View Full Dossier →</button>
            </div>

            {/* KATHLEEN BOOZANG */}
            <div className="profile-card" onClick={() => openModal('modal-boozang')}>
              <div className="profile-card-header">
                <div className="profile-avatar">KB</div>
                <div>
                  <div className="profile-name">Kathleen Boozang</div>
                  <div className="profile-role">Dean, Seton Hall Law School (2015–2022)</div>
                </div>
              </div>
              <div className="profile-card-body">
                <p>Dean of SHU Law from 2015 until her resignation in November 2022, following the discovery of a $1.3M embezzlement scheme by law school employees. Nyre alleged Marino tried to offer Boozang a million-dollar salary and interfered with the investigation. Returned to SHU as a professor.</p>
                <div className="profile-tags">
                  <span className="tag red">Embezzlement Era</span>
                  <span className="tag">Resigned 2022</span>
                  <span className="tag gold">Law School Dean</span>
                </div>
              </div>
              <button className="profile-expand-btn">View Full Dossier →</button>
            </div>

            {/* TERESINA DEALMEIDA */}
            <div className="profile-card" onClick={() => openModal('modal-dealmeida')}>
              <div className="profile-card-header">
                <div className="profile-avatar">TD</div>
                <div>
                  <div className="profile-name">Teresina DeAlmeida</div>
                  <div className="profile-role">Former Assistant Dean, SHU Law School</div>
                </div>
              </div>
              <div className="profile-card-body">
                <p>Former assistant dean at SHU Law School. Sentenced in December 2024 to three years in federal prison for her role in a decade-long, $1.3M embezzlement scheme. The fraud occurred during the same period as the Epstein tuition payments and the Ruemmler-led McCarrick review.</p>
                <div className="profile-tags">
                  <span className="tag red">Federal Prison</span>
                  <span className="tag">$1.3M Fraud</span>
                  <span className="tag">2024 Sentence</span>
                </div>
              </div>
              <button className="profile-expand-btn">View Full Dossier →</button>
            </div>

            {/* DARREN INDYKE */}
            <div className="profile-card" onClick={() => openModal('modal-indyke')}>
              <div className="profile-card-header">
                <div className="profile-avatar">DI</div>
                <div>
                  <div className="profile-name">Darren Indyke</div>
                  <div className="profile-role">Epstein's Attorney // Estate Co-Executor</div>
                </div>
              </div>
              <div className="profile-card-body">
                <p>Epstein's personal attorney and co-executor of his estate. Signed all three Seton Hall tuition checks. On Feb. 20, 2026, agreed to pay up to <strong>$35 million</strong> to settle a class-action lawsuit accusing him and Richard Kahn of aiding and abetting Epstein's sex trafficking. Subject of Congressional investigation into Epstein's financial network.</p>
                <div className="profile-tags">
                  <span className="tag red">Signed SHU Checks</span>
                  <span className="tag">Estate Executor</span>
                  <span className="tag gold">Congress Probe</span>
                </div>
              </div>
              <button className="profile-expand-btn">View Full Dossier →</button>
            </div>

            {/* HARRY BELLER */}
            <div className="profile-card" onClick={() => openModal('modal-beller')}>
              <div className="profile-card-header">
                <div className="profile-avatar">HB</div>
                <div>
                  <div className="profile-name">Harry Beller</div>
                  <div className="profile-role">Epstein's Accountant (22 Years)</div>
                </div>
              </div>
              <div className="profile-card-body">
                <p>Epstein's personal accountant from 1992 to 2014. Physically withdrew large cash sums from Epstein's JPMorgan accounts, triggering four federal Suspicious Activity Reports. The DOJ files list him as "Epstein employee Harry Beller" in the background column associated with the SHU tuition checks for Brian Beller.</p>
                <div className="profile-tags">
                  <span className="tag red">4 Federal SARs</span>
                  <span className="tag">22-Year Employee</span>
                  <span className="tag gold">SHU Connection</span>
                </div>
              </div>
              <button className="profile-expand-btn">View Full Dossier →</button>
            </div>

            {/* CHRISTINE AMALFE */}
            <div className="profile-card" onClick={() => openModal('modal-amalfe')}>
              <div className="profile-card-header">
                <div className="profile-avatar">CA</div>
                <div>
                  <div className="profile-name">Christine A. Amalfe</div>
                  <div className="profile-role">Gibbons P.C. // Special Counsel to SHU</div>
                </div>
              </div>
              <div className="profile-card-body">
                <p>Chair of Gibbons P.C.'s Employment &amp; Labor Law Group. Publicly announced in August 2018 as the Special Counsel retained by Seton Hall to "lead the effort and commission" the independent McCarrick review. She retained Latham &amp; Watkins — and by extension Ruemmler — to conduct the investigation. She reported to the internal Task Force, not the public. Now President of the NJ State Bar Association.</p>
                <div className="profile-tags">
                  <span className="tag gold">Retained Ruemmler</span>
                  <span className="tag">Gibbons P.C.</span>
                  <span className="tag">NJSBA President 2025</span>
                </div>
              </div>
              <button className="profile-expand-btn">View Full Dossier →</button>
            </div>

            {/* DON McMAHON */}
            <div className="profile-card" onClick={() => openModal('modal-mcmahon')}>
              <div className="profile-card-header">
                <div className="profile-avatar">DM</div>
                <div>
                  <div className="profile-name">Donald A. McMahon Jr.</div>
                  <div className="profile-role">SHU Regent // Task Force Member // RAP Author</div>
                </div>
              </div>
              <div className="profile-card-body">
                <p>Seton Hall Regent and cornerstone of the Special Task Force of the Board of Regents that oversaw the Latham &amp; Watkins review. Along with LaSala and Checchio, McMahon co-authored the "Responsive Action Plan" — the sanitized public summary that replaced the full Latham report. His role as an internal filter between Ruemmler's findings and the public has never been scrutinized.</p>
                <div className="profile-tags">
                  <span className="tag red">Task Force Member</span>
                  <span className="tag">RAP Author</span>
                  <span className="tag gold">Report Suppressor</span>
                </div>
              </div>
              <button className="profile-expand-btn">View Full Dossier →</button>
            </div>

            {/* BISHOP CHECCHIO */}
            <div className="profile-card" onClick={() => openModal('modal-checchio')}>
              <div className="profile-card-header">
                <div className="profile-avatar">JC</div>
                <div>
                  <div className="profile-name">Bishop James F. Checchio</div>
                  <div className="profile-role">Diocese of Metuchen // SHU Regent // Task Force</div>
                </div>
              </div>
              <div className="profile-card-body">
                <p>Bishop of the Diocese of Metuchen and member of the SHU Board of Regents. Served on the three-person Special Task Force that oversaw the Latham review. His ecclesiastical superior is Cardinal Joseph Tobin — the same Cardinal who was named in the Gibbons report and failed to appear before investigators. Checchio's presence on the task force is a structural conflict of interest. Now appointed Coadjutor Archbishop of New Orleans (Oct. 2025).</p>
                <div className="profile-tags">
                  <span className="tag red">Conflict of Interest</span>
                  <span className="tag">Task Force Member</span>
                  <span className="tag gold">Tobin's Subordinate</span>
                </div>
              </div>
              <button className="profile-expand-btn">View Full Dossier →</button>
            </div>

            {/* HANK D'ALESSANDRO */}
            <div className="profile-card" onClick={() => openModal('modal-dalessandro')}>
              <div className="profile-card-header">
                <div className="profile-avatar">HD</div>
                <div>
                  <div className="profile-name">Henry "Hank" D'Alessandro</div>
                  <div className="profile-role">Morgan Stanley // Board of Regents Chair</div>
                </div>
              </div>
              <div className="profile-card-body">
                <p>SHU Class of 1985. Managing Director and Head of Credit Partners at Morgan Stanley. Became Chair of the Board of Regents in October 2023. In January 2025, publicly defended Monsignor Reilly as being "falsely and unfairly portrayed" — despite the Latham report recommending Reilly's removal. His statement made no mention of Reilly's alleged failure to report abuse.</p>
                <div className="profile-tags">
                  <span className="tag gold">Board Chair</span>
                  <span className="tag">Morgan Stanley</span>
                  <span className="tag red">Defended Reilly</span>
                </div>
              </div>
              <button className="profile-expand-btn">View Full Dossier →</button>
            </div>

            {/* JOSEPH NYRE */}
            <div className="profile-card" onClick={() => openModal('modal-nyre')}>
              <div className="profile-card-header">
                <div className="profile-avatar">JN</div>
                <div>
                  <div className="profile-name">Joseph Nyre</div>
                  <div className="profile-role">Former President, Seton Hall University</div>
                </div>
              </div>
              <div className="profile-card-body">
                <p>Former SHU president (resigned 2023) whose lawsuit against the university was dismissed in February 2026. Nyre alleged that Board Chairman Kevin Marino interfered with the law school embezzlement investigation, attempted to give Dean Boozang a million-dollar salary, and tried to admit students to the law school outside normal processes. His allegations remain disputed.</p>
                <div className="profile-tags">
                  <span className="tag">Resigned 2023</span>
                  <span className="tag red">Lawsuit Dismissed</span>
                  <span className="tag gold">Marino Allegations</span>
                </div>
              </div>
              <button className="profile-expand-btn">View Full Dossier →</button>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
     SECTION 04 — THE LAW SCHOOL
══════════════════════════════════════════════════════════ */}
      <hr className="divider" />
      <section id="law-school" style={{ "background": "rgba(0,5,15,0.4)" }}>
        <div className="section-wrapper">
          <div className="section-label">Section 04</div>
          <h2 className="section-title">The Law School: Embezzlement, Admissions, and Unanswered Questions</h2>
          <hr className="section-rule" />
          <p className="section-intro">While Epstein's money was flowing into SHU and Ruemmler was conducting her compromised review, Seton Hall's law school was simultaneously experiencing a decade-long, $1.3 million embezzlement scheme. The overlap in personnel, timing, and institutional dysfunction raises questions that have not been publicly addressed.</p>

          <div className="chapter open" id="ch-embezzlement">
            <div className="chapter-header" onClick={(e) => { e.currentTarget.closest('.chapter')?.classList.toggle('open'); }}>
              <span className="chapter-num">04.A</span>
              <div className="chapter-title-block">
                <div className="chapter-title">The DeAlmeida Embezzlement: $1.3 Million Over a Decade</div>
                <div className="chapter-subtitle">2012–2022 // Federal Prosecution // Three Convictions</div>
              </div>
              <span className="chapter-toggle">+</span>
            </div>
            <div className="chapter-body">
              <p>Between approximately 2012 and 2022, a group of "trusted, long-time employees" at Seton Hall Law School embezzled more than <strong>$1.3 million</strong> from the institution. The scheme was led by <strong>Teresina DeAlmeida</strong>, who served as an assistant dean at the law school.</p>
              <p>Three employees pleaded guilty. In December 2024, DeAlmeida was sentenced to <strong>three years in federal prison</strong>. The embezzlement scheme ran concurrently with the Epstein tuition payments (2017–2019) and the Ruemmler-led McCarrick review (2018–2019).</p>
              <p>The discovery of the embezzlement triggered a cascade of departures. <strong>Dean Kathleen Boozang</strong> resigned in November 2022. <strong>Board Chairman Kevin Marino</strong> stepped down from that position. Former President <strong>Joseph Nyre</strong> resigned in 2023 — and subsequently filed a lawsuit alleging, among other things, that Marino had interfered with the embezzlement investigation.</p>

              <div className="fact-box">
                <p><strong>Nyre's specific allegation regarding admissions:</strong> According to reporting by Local Talk Weekly and court filings, Nyre alleged that Marino <em>"tried to admit students to the law school outside normal processes."</em> This allegation — which Marino disputes — has never been independently investigated or publicly resolved. It is directly relevant to the question of whether any Epstein-connected students were admitted to the law school through irregular channels.</p>
              </div>
            </div>
          </div>

          <div className="chapter" id="ch-admissions">
            <div className="chapter-header" onClick={(e) => { e.currentTarget.closest('.chapter')?.classList.toggle('open'); }}>
              <span className="chapter-num">04.B</span>
              <div className="chapter-title-block">
                <div className="chapter-title">The Admissions Question: Was It the Law School?</div>
                <div className="chapter-subtitle">Brian Beller // Unnamed Student // Irregular Admissions</div>
              </div>
              <span className="chapter-toggle">+</span>
            </div>
            <div className="chapter-body">
              <p>Brian Beller graduated from Seton Hall with an <strong>M.S. in Accounting</strong> — not a J.D. The accounting program is housed in the Stillman School of Business, not the law school. However, the unnamed student whose $17,060 tuition was paid in July 2017 remains entirely unidentified.</p>
              <p>The question of whether any Epstein-funded students were enrolled in the law school is unresolved. Given the concurrent allegations that Marino attempted to admit students to the law school outside normal processes — and given Epstein's documented pattern of using university admissions as a tool of influence and control — this question demands a direct answer from the university.</p>
              <p>Epstein's admissions playbook at other institutions is well-documented. At Columbia, he leveraged Nobel laureate Richard Axel and the development office to facilitate admissions for associates' children. At NYU, he promised admission to victims. At Bard, he personally contacted the president on behalf of Woody Allen and Soon-Yi Previn's daughter. At the University of Michigan, families sought his help to gain admission. The pattern is consistent: Epstein used university access as currency.</p>

              <h4>The Marino–Boozang–Epstein Overlap</h4>
              <p>The timeline is striking. Epstein's first SHU tuition payment was made in <strong>July 2017</strong>. Kathleen Boozang was law school dean from 2015 to 2022. Kevin Marino was Board Chairman during this entire period. The embezzlement scheme was running throughout. Ruemmler was presenting to the board Marino chaired while emailing Epstein on the same morning.</p>
              <p>None of these facts, taken individually, constitute proof of a connection. Together, they constitute a pattern of institutional dysfunction that has never been subjected to independent scrutiny — and a set of questions that Seton Hall has refused to answer.</p>
            </div>
          </div>

          <div className="chapter" id="ch-marino-role">
            <div className="chapter-header" onClick={(e) => { e.currentTarget.closest('.chapter')?.classList.toggle('open'); }}>
              <span className="chapter-num">04.C</span>
              <div className="chapter-title-block">
                <div className="chapter-title">Kevin Marino: Board Chairman, Benefactor, and the Unanswered Question</div>
                <div className="chapter-subtitle">Board Chair // $1M Endowment // Nyre Lawsuit</div>
              </div>
              <span className="chapter-toggle">+</span>
            </div>
            <div className="chapter-body">
              <p>Kevin H. Marino is the founding partner of Marino Tortorella &amp; Boyle, one of New Jersey's most prominent white-collar defense firms. He graduated from Seton Hall Law cum laude in 1984 and served as Editor-in-Chief of the Law Review. He has been deeply embedded in SHU's governance for decades.</p>
              <p>In 2022, Marino and his firm donated <strong>$1 million</strong> to establish the Marino Tortorella &amp; Boyle Endowed Professorship at SHU Law — the largest single gift to the law school in recent memory. The professorship was announced in February 2022, the same year the embezzlement scheme was discovered and Boozang resigned.</p>
              <p>Marino was Board Chairman on <strong>September 29, 2018</strong> — the morning Ruemmler emailed Epstein to say she was presenting to the SHU Board. Whether Marino knew of Ruemmler's Epstein ties at that time, and whether he has been informed since, are questions the university has not addressed.</p>
              <p>Former President Nyre's lawsuit alleged that Marino <em>"regularly interfered with university operations,"</em> <em>"improperly involved himself in an embezzlement investigation at the law school,"</em> and attempted to give Dean Boozang a million-dollar salary. The lawsuit was dismissed in February 2026. An independent investigation commissioned by SHU found no evidence to support Nyre's sexual harassment allegations against Marino. The admissions and embezzlement interference allegations were not the subject of that investigation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
     SECTION 05 — ROPES & GRAY
════════════════════════════════════════════════════════ */}
      <hr className="divider" />
      <section id="ropes-gray" style={{ "background": "rgba(0,5,15,0.4)" }}>
        <div className="section-wrapper">
          <div className="section-label">Section 05</div>
          <h2 className="section-title">The Second Investigation: Ropes &amp; Gray</h2>
          <hr className="section-rule" />
          <p className="section-intro">In February 2025, Cardinal Joseph Tobin ordered a new independent review of the Latham &amp; Watkins report and the circumstances surrounding Monsignor Reilly's appointment as SHU president. The firm retained: Ropes &amp; Gray LLP — the same firm that produced the landmark 2018 report on USA Gymnastics and the Larry Nassar scandal. The question is whether this review will be any more independent than the one it is reviewing.</p>

          <div className="chapter open" id="ch-ropes-mandate">
            <div className="chapter-header" onClick={(e) => { e.currentTarget.closest('.chapter')?.classList.toggle('open'); }}>
              <span className="chapter-num">05.A</span>
              <div className="chapter-title-block">
                <div className="chapter-title">Why Ropes &amp; Gray Was Retained</div>
                <div className="chapter-subtitle">Cardinal Tobin // February 2025 // Reilly Appointment Controversy</div>
              </div>
              <span className="chapter-toggle">+</span>
            </div>
            <div className="chapter-body">
              <p>The Ropes &amp; Gray mandate arose directly from the Politico reporting of December 2024, which revealed that the Latham &amp; Watkins report had recommended Monsignor Joseph Reilly's removal from all SHU boards and leadership positions — a recommendation that the university ignored when it appointed him president in 2024. Cardinal Tobin, facing pressure from elected officials and survivors' advocates, ordered the review in February 2025.</p>
              <p>The stated scope of the review is to examine whether the Latham &amp; Watkins findings were properly communicated and acted upon. But the scope has since expanded: the DOJ's release of the Epstein files in January 2026 — revealing Ruemmler's conflict of interest during the original review — raises the question of whether Ropes &amp; Gray's mandate now includes examining the integrity of the Latham report itself, not merely how its findings were handled.</p>
              <div className="fact-box">
                <p><strong>The structural irony:</strong> Cardinal Tobin ordered the review. Cardinal Tobin was named in the Gibbons report and failed to appear before investigators. The review is examining a report produced under his watch, by an attorney with an undisclosed conflict of interest, overseen by a task force that included his direct subordinate (Bishop Checchio). Whether Ropes &amp; Gray's mandate includes examining Tobin's own conduct is an open question the Archdiocese has not addressed.</p>
              </div>
            </div>
          </div>

          <div className="chapter" id="ch-ropes-team">
            <div className="chapter-header" onClick={(e) => { e.currentTarget.closest('.chapter')?.classList.toggle('open'); }}>
              <span className="chapter-num">05.B</span>
              <div className="chapter-title-block">
                <div className="chapter-title">The Ropes &amp; Gray Team</div>
                <div className="chapter-subtitle">McPhee // Dowden // Gugel // Bisk</div>
              </div>
              <span className="chapter-toggle">+</span>
            </div>
            <div className="chapter-body">
              <p>Ropes &amp; Gray's Sensitive / Independent Investigations group is built around former federal prosecutors and is led by attorneys with a track record in the most high-profile institutional accountability investigations in the country. The team assigned to the SHU matter draws directly from the firm's Sexual Misconduct &amp; Workplace Harassment practice and its Higher Education group.</p>

              <div className="profile-grid" style={{ "marginTop": "24px" }}>

                <div className="profile-card" onClick={() => openModal('modal-mcphee')}>
                  <div className="profile-card-header">
                    <div className="profile-avatar">JM</div>
                    <div>
                      <div className="profile-name">Joan McPhee</div>
                      <div className="profile-role">Ropes &amp; Gray LLP // Lead Partner</div>
                    </div>
                  </div>
                  <div className="profile-card-body">
                    <p>Co-lead of the SHU review. Co-authored the 2018 Ropes &amp; Gray report on USA Gymnastics and the Larry Nassar abuse scandal — the most consequential institutional accountability report in American sports history. Former federal prosecutor. Leads the firm's Sexual Misconduct &amp; Workplace Harassment practice.</p>
                    <div className="profile-tags">
                      <span className="tag gold">Lead Investigator</span>
                      <span className="tag">Nassar Report</span>
                      <span className="tag">Former Prosecutor</span>
                    </div>
                  </div>
                  <button className="profile-expand-btn">View Full Dossier →</button>
                </div>

                <div className="profile-card" onClick={() => openModal('modal-dowden')}>
                  <div className="profile-card-header">
                    <div className="profile-avatar">JD</div>
                    <div>
                      <div className="profile-name">James P. Dowden</div>
                      <div className="profile-role">Ropes &amp; Gray LLP // Co-Lead Partner</div>
                    </div>
                  </div>
                  <div className="profile-card-body">
                    <p>Co-lead of the SHU review. Co-leader of Ropes &amp; Gray's government enforcement / white collar criminal defense and crisis management &amp; investigations practices. Former AUSA in the District of Massachusetts (economic crimes and public corruption units). Clerked for Justice Stephen Breyer. Co-authored the Nassar/USOC report.</p>
                    <div className="profile-tags">
                      <span className="tag gold">Co-Lead Investigator</span>
                      <span className="tag">Former AUSA</span>
                      <span className="tag">Breyer Clerk</span>
                    </div>
                  </div>
                  <button className="profile-expand-btn">View Full Dossier →</button>
                </div>

                <div className="profile-card" onClick={() => openModal('modal-gugel')}>
                  <div className="profile-card-header">
                    <div className="profile-avatar">HG</div>
                    <div>
                      <div className="profile-name">Helen Gugel</div>
                      <div className="profile-role">Ropes &amp; Gray LLP // New York Lead</div>
                    </div>
                  </div>
                  <div className="profile-card-body">
                    <p>New York-based partner handling the Archdiocese of Newark and SHU (New Jersey) jurisdictional aspects of the review. Member of Ropes &amp; Gray's Sexual Misconduct &amp; Workplace Harassment group. Specializes in sensitive institutional investigations involving religious and educational organizations.</p>
                    <div className="profile-tags">
                      <span className="tag gold">NY Jurisdiction Lead</span>
                      <span className="tag">Sexual Misconduct Group</span>
                    </div>
                  </div>
                  <button className="profile-expand-btn">View Full Dossier →</button>
                </div>

                <div className="profile-card" onClick={() => openModal('modal-bisk')}>
                  <div className="profile-card-header">
                    <div className="profile-avatar">MB</div>
                    <div>
                      <div className="profile-name">Megan Bisk</div>
                      <div className="profile-role">Ropes &amp; Gray LLP // Higher Education &amp; Title IX</div>
                    </div>
                  </div>
                  <div className="profile-card-body">
                    <p>Ropes &amp; Gray's specialist for Higher Education and Title IX compliance. Provides technical legal expertise on whether the seminary's internal handling of abuse allegations violated federal statutes or university policies. Her role is to assess whether Title IX obligations were met — or whether the "confidentiality" justification used to suppress the Latham report is legally defensible.</p>
                    <div className="profile-tags">
                      <span className="tag gold">Title IX Specialist</span>
                      <span className="tag">Higher Education</span>
                    </div>
                  </div>
                  <button className="profile-expand-btn">View Full Dossier →</button>
                </div>

              </div>
            </div>
          </div>

          <div className="chapter" id="ch-ropes-scope">
            <div className="chapter-header" onClick={(e) => { e.currentTarget.closest('.chapter')?.classList.toggle('open'); }}>
              <span className="chapter-num">05.C</span>
              <div className="chapter-title-block">
                <div className="chapter-title">What the Review Must Now Address</div>
                <div className="chapter-subtitle">Ruemmler Conflict // Epstein Files // Tobin's Role</div>
              </div>
              <span className="chapter-toggle">+</span>
            </div>
            <div className="chapter-body">
              <p>When Cardinal Tobin ordered the Ropes &amp; Gray review in February 2025, the Epstein files had not yet been released. The review was originally scoped to examine whether the Latham report's findings were properly communicated to Reilly and the board. That scope is now woefully inadequate.</p>
              <p>The January 2026 DOJ file releases have fundamentally changed the picture. The lead investigator on the Latham report — Kathryn Ruemmler — was simultaneously in a close personal and financial relationship with Jeffrey Epstein. She was receiving gifts from him. She was scheduling visits to his apartment around her interviews of Catholic bishops. She was named in his will. Whether Ropes &amp; Gray has been authorized to examine the integrity of the Latham report itself — not just how it was communicated — is a question that has not been publicly answered.</p>
              <p>Additionally, the Ropes &amp; Gray review must now reckon with the Tobin problem. The Cardinal who ordered the review was himself named in the Gibbons report. He failed to appear before investigators. He is the ecclesiastical superior of Bishop Checchio, who sat on the task force that suppressed the Latham report. The review's independence depends entirely on whether McPhee and Dowden have been given genuine authority to follow the evidence wherever it leads — including to the Cardinal who retained them.</p>
              <div className="fact-box">
                <p><strong>Gibbons P.C.'s position:</strong> Managing director Peter J. Torcicollo has stated that Gibbons will cooperate fully with the Ropes &amp; Gray review. Christine Amalfe, who retained Ruemmler and reported to the task force, has made no public statement about the Epstein conflict. The NJ State Bar Association, of which Amalfe is now President, has also been silent.</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ══════════════════════════════════════════════════════════
     SECTION 07 — ALTERNATIVE PAYMENT CHANNELS
══════════════════════════════════════════════════════════ */}
      <hr className="divider" />
      <section id="payment-channels">
        <div className="section-wrapper">
          <div className="section-label">Section 07</div>
          <h2 className="section-title">Other Channels? The Limits of What We Know</h2>
          <hr className="section-rule" />
          <p className="section-intro">The three Deutsche Bank checks signed by Darren Indyke are what the DOJ files show. But Epstein's financial architecture was deliberately opaque. The question of whether additional money reached Seton Hall through other means is not paranoia &mdash; it is a legitimate investigative question grounded in how Epstein actually operated.</p>

          <div className="chapter open" id="ch-channels-indyke">
            <div className="chapter-header" onClick={(e) => { e.currentTarget.closest('.chapter')?.classList.toggle('open'); }}>
              <span className="chapter-num">07.A</span>
              <div className="chapter-title-block">
                <div className="chapter-title">What the DOJ Files Actually Show</div>
                <div className="chapter-subtitle">Deutsche Bank // Darren Indyke // Three Checks</div>
              </div>
              <span className="chapter-toggle">+</span>
            </div>
            <div className="chapter-body">
              <p>The three checks in the DOJ files are Deutsche Bank checks drawn on an Epstein-controlled account and signed by Darren Indyke. They are the only payments to Seton Hall that have been publicly confirmed. But they represent only one slice of Epstein's financial activity &mdash; the slice that was captured in the Deutsche Bank records subpoenaed by Congress and released in the DOJ file dump.</p>
              <p>Epstein maintained accounts at multiple institutions simultaneously: JPMorgan Chase (until 2013, when the bank terminated the relationship), Deutsche Bank (until 2018, when Deutsche Bank also terminated the relationship), and a network of offshore entities, trusts, and shell companies. The Congressional investigations into JPMorgan and Deutsche Bank focused on specific account categories. They did not purport to be exhaustive reviews of every dollar Epstein moved.</p>
              <div className="fact-box">
                <p><strong>The limitation:</strong> The DOJ files are not a complete financial audit of Epstein's estate. They are a production of records from specific accounts in response to specific Congressional requests. Payments made through other accounts, through intermediaries, through charitable foundations, or through cash would not appear in these records.</p>
              </div>
            </div>
          </div>

          <div className="chapter" id="ch-channels-methods">
            <div className="chapter-header" onClick={(e) => { e.currentTarget.closest('.chapter')?.classList.toggle('open'); }}>
              <span className="chapter-num">07.B</span>
              <div className="chapter-title-block">
                <div className="chapter-title">How Epstein Moved Money Beyond the Obvious</div>
                <div className="chapter-subtitle">Foundations // Intermediaries // Cash // Third-Party Payers</div>
              </div>
              <span className="chapter-toggle">+</span>
            </div>
            <div className="chapter-body">
              <p>Epstein's documented financial methods included several channels that would not appear in a Deutsche Bank account review:</p>

              <h4>1. The JEGE Foundation and Other Charitable Vehicles</h4>
              <p>Epstein operated the <strong>JEGE Foundation</strong> (Jeffrey Epstein Global Education) and other philanthropic entities. These foundations made grants to universities and research institutions &mdash; including MIT's Media Lab, Harvard, and others. Grants from a 501(c)(3) foundation are not tuition payments and would not appear in the same account records. Whether any foundation-level money reached Seton Hall is unknown.</p>

              <h4>2. Third-Party Payers</h4>
              <p>The three SHU checks were signed by Indyke. But Epstein also used other trusted intermediaries to move money. His longtime accountant <strong>Harry Beller</strong> (who is linked to the SHU payments through the "background" column in the DOJ files) was himself a financial operator with his own accounts and relationships. Payments routed through Beller or other associates would not necessarily appear as Epstein-origin transactions.</p>

              <h4>3. Cash and In-Kind Transfers</h4>
              <p>Harry Beller's documented pattern of cash withdrawals &mdash; 16 separate withdrawals of approximately $9,800 each, just below the federal reporting threshold &mdash; illustrates that Epstein's network regularly moved money in ways designed to avoid paper trails. Cash payments to individuals who then made payments to institutions would be invisible in the Deutsche Bank records.</p>

              <h4>4. Donations Disguised as Philanthropy</h4>
              <p>At Columbia, Epstein explicitly encouraged Jes Staley to make a "real donation" of $100,000 per year for five years after Epstein helped secure his daughter's admission. This pattern &mdash; where Epstein's influence is leveraged and a subsequent donation flows to the institution &mdash; is a form of payment that would never appear in Epstein's own account records. It would appear in the university's donor records.</p>

              <div className="fact-box">
                <p><strong>The question for SHU:</strong> Has the university reviewed its donor records, foundation grant records, and alumni giving records for the period 2012&ndash;2019 for any connections to Epstein, Indyke, Beller, or entities associated with them? The three Deutsche Bank checks are what we know about. They may not be all there is.</p>
              </div>
            </div>
          </div>

          <div className="chapter" id="ch-channels-marino">
            <div className="chapter-header" onClick={(e) => { e.currentTarget.closest('.chapter')?.classList.toggle('open'); }}>
              <span className="chapter-num">07.C</span>
              <div className="chapter-title-block">
                <div className="chapter-title">The Marino Question: A Defense Attorney of Epstein's Caliber</div>
                <div className="chapter-subtitle">Kevin Marino // SHU Board Chair // Epstein's Network of Elite Defense Counsel</div>
              </div>
              <span className="chapter-toggle">+</span>
            </div>
            <div className="chapter-body">
              <p>Kevin Marino is widely regarded as one of the finest white-collar criminal defense attorneys in the United States. His firm, Marino, Tortorella &amp; Boyle, has represented clients in some of the most significant federal criminal matters in the country. He served as Chairman of the Seton Hall Board of Regents from approximately 2018 through 2022 &mdash; the precise period during which the Ruemmler review was conducted, the tuition payments were made, and the embezzlement scheme was running.</p>
              <p>Epstein's legal network was populated by exactly this type of attorney: elite, well-connected, white-collar defense specialists with federal court credibility. Alan Dershowitz, Kenneth Starr, Roy Black, and Gerald Lefcourt all represented Epstein at various points. These were not random selections &mdash; they were the product of a deliberate strategy to surround himself with the most formidable legal talent available, often cultivated through years of social and financial relationship-building.</p>
              <p>Ruemmler herself was part of this network &mdash; a former White House Counsel and federal prosecutor who Epstein cultivated through gifts, dinners, and personal visits. The question of whether Marino, as one of New York's most prominent defense attorneys and the sitting Chair of SHU's Board, had any independent connection to Epstein's network is a legitimate one.</p>
              <p>The Nyre lawsuit alleged that Marino attempted to admit students to the law school outside normal processes. If any of those students had connections to Epstein's network &mdash; directly or through intermediaries like Harry Beller or Darren Indyke &mdash; the implications for SHU's governance would be severe. The Nyre lawsuit was dismissed on February 20, 2026. The admissions interference allegations were not independently resolved.</p>
              <div className="fact-box">
                <p><strong>What we do not know:</strong> Whether Marino had any direct or indirect contact with Epstein or his associates. Whether the students Marino allegedly sought to admit had any connection to Epstein's network. Whether Marino, as Board Chair, was briefed on the Ruemmler conflict of interest during the review period. These are questions, not accusations &mdash; but they are questions that a properly constituted independent review would ask.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
     SECTION 08 — OPEN QUESTIONS
══════════════════════════════════════════════════════════ */}
      <hr className="divider" />
      <section id="open-questions" style={{ "background": "rgba(10,0,0,0.4)" }}>
        <div className="section-wrapper">
          <div className="section-label">Section 08</div>
          <h2 className="section-title">Open Questions: What SHU Has Not Answered</h2>
          <hr className="section-rule" />
          <p className="section-intro">Seton Hall University Relations has not responded to requests for comment from The Setonian or other outlets. The following questions remain unanswered and demand public response.</p>

          <div className="questions-grid">

            <div className="question-card">
              <div className="question-num">Question 01</div>
              <div className="question-text">Who is the unnamed student in the July 2017 check?</div>
              <div className="question-context">A $17,060 payment was made on behalf of a student whose name and ID are fully redacted. What was this student's relationship to Epstein's network? Were they a victim, an associate's child, or someone else?</div>
            </div>

            <div className="question-card">
              <div className="question-num">Question 02</div>
              <div className="question-text">Is Brian Beller related to Harry Beller?</div>
              <div className="question-context">The DOJ files explicitly link the SHU payments to "Epstein employee Harry Beller." If Brian is Harry's son or relative, Seton Hall accepted payments from the accountant of a convicted sex trafficker on behalf of a family member. The university has not addressed this.</div>
            </div>

            <div className="question-card">
              <div className="question-num">Question 03</div>
              <div className="question-text">Were any Epstein-funded students enrolled in the law school?</div>
              <div className="question-context">Brian Beller studied accounting. But the unnamed student's program is unknown. Given concurrent allegations that Marino attempted to admit students to the law school outside normal processes, this question is critical.</div>
            </div>

            <div className="question-card">
              <div className="question-num">Question 04</div>
              <div className="question-text">Did Gibbons P.C. or SHU know about Ruemmler's Epstein ties?</div>
              <div className="question-context">Christine Amalfe retained Ruemmler for the McCarrick review. Did she or anyone at Gibbons P.C. conduct a conflicts check? Did the Task Force (McMahon, LaSala, Checchio) know? Did the Seton Hall Board — then chaired by Kevin Marino — know? If they knew and proceeded, why? Amalfe is now President of the NJ State Bar Association and has made no public statement.</div>
            </div>

            <div className="question-card">
              <div className="question-num">Question 05</div>
              <div className="question-text">What did Kevin Marino know, and when?</div>
              <div className="question-context">Ruemmler presented to the Board of Regents on September 29, 2018 — the same morning she emailed Epstein. Marino chaired that board. Did he know about her Epstein relationship then? Does he know now? Has he been briefed by SHU counsel?</div>
            </div>

            <div className="question-card">
              <div className="question-num">Question 06</div>
              <div className="question-text">When will the Latham &amp; Watkins report be released?</div>
              <div className="question-context">A New Jersey Superior Court ordered the report's disclosure. It has not been released. Now that the report's author has been publicly identified as having a conflict of interest, the case for immediate release is stronger than ever. What is SHU waiting for?</div>
            </div>

            <div className="question-card">
              <div className="question-num">Question 07</div>
              <div className="question-text">Did Epstein's network facilitate any SHU admissions?</div>
              <div className="question-context">Epstein's documented playbook included using university connections to facilitate admissions — not just pay tuition. Did anyone in Epstein's network contact SHU admissions, the law school, or board members on behalf of any applicant?</div>
            </div>

            <div className="question-card">
              <div className="question-num">Question 08</div>
              <div className="question-text">What is the scope of the Ropes &amp; Gray review?</div>
              <div className="question-context">Cardinal Tobin's Ropes &amp; Gray review was ordered to examine the Latham &amp; Watkins report. Does its scope now include Ruemmler's conflict of interest? Has the DOJ's release of the Epstein files been incorporated into the review? Does it include Cardinal Tobin's own failure to appear before investigators?</div>
            </div>

            <div className="question-card">
              <div className="question-num">Question 09</div>
              <div className="question-text">Was the unnamed student a victim?</div>
              <div className="question-context">In the DOJ Epstein files, redactions of individual names are applied overwhelmingly to protect victims and survivors. The unnamed student's identity is fully suppressed while Brian Beller's is not. Has SHU identified this person? Has it reported the matter to law enforcement? The university has not addressed this possibility publicly.</div>
            </div>

            <div className="question-card">
              <div className="question-num">Question 10</div>
              <div className="question-text">Why was Bishop Checchio on the task force overseeing a report that implicated his superior?</div>
              <div className="question-context">Checchio reported to Cardinal Tobin. Tobin was named in the Gibbons report. Checchio sat on the three-person task force that controlled what the Latham report found and what was suppressed. This is a structural conflict of interest that no one at SHU, the Archdiocese, or the Diocese of Metuchen has ever explained. Checchio has since been elevated to Coadjutor Archbishop of New Orleans.</div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
     SECTION 07 — SOURCES
══════════════════════════════════════════════════════════ */}
      <hr className="divider" />
      <section id="sources">
        <div className="section-wrapper">
          <div className="section-label">Section 09</div>
          <h2 className="section-title">Sources &amp; Documentation</h2>
          <hr className="section-rule" />
          <p className="section-intro">All factual claims on this page are sourced from primary documents, court filings, or published reporting. The DOJ Epstein files are publicly available at justice.gov.</p>

          <ul className="sources-list">
            <li><a href="https://www.thesetonian.com/article/2026/02/doj-files-link-jeffrey-epstein-to-tuition-payments-at-seton-hall" target="_blank">The Setonian — "DOJ files link Jeffrey Epstein to tuition payments at Seton Hall" (Feb. 3, 2026)</a></li>
            <li><a href="https://www.thesetonian.com/article/2026/02/mccarrick-review-lawyer-tied-to-epstein" target="_blank">The Setonian — "Lawyer tied to Epstein oversaw Seton Hall McCarrick review" (Feb. 2026)</a></li>
            <li><a href="https://localtalkweekly.com/index.php/2026/02/20/usdoj-records-connect-jeffrey-epstein-to-seton-hall-university/" target="_blank">Local Talk Weekly — "USDOJ Records Connect Jeffrey Epstein to Seton Hall University" (Feb. 20, 2026)</a></li>
            <li><a href="https://www.usatoday.com/story/news/politics/2026/02/19/jeffrey-epstein-emails-files-power-for-benefit/88701802007/" target="_blank">USA Today — "Epstein pulled strings, paid tuition across world for kids of powerful" (Feb. 19, 2026)</a></li>
            <li><a href="https://www.columbiaspectator.com/news/2026/02/13/how-epstein-leveraged-his-relationships-with-columbia-affiliates-to-help-admit-jpmorgan-executive-jes-staleys-daughter/" target="_blank">Columbia Spectator — "How Epstein leveraged his relationships with Columbia affiliates" (Feb. 13, 2026)</a></li>
            <li><a href="https://www.law.com/americanlawyer/2026/02/13/latham--watkins-offered-jeffrey-epstein-retention-agreement-through-ex-partner-ruemmler-files-show/" target="_blank">The American Lawyer — "Latham &amp; Watkins Offered Jeffrey Epstein Retention Agreement Through Ex-Partner Ruemmler" (Feb. 13, 2026)</a></li>
            <li><a href="https://www.businessinsider.com/jeffrey-epstein-accountant-harry-beller-cash-withdrawals-jpmorgan-congress-2025-11" target="_blank">Business Insider — "Jeffrey Epstein's Accountant Draws Congress' Attention" (Nov. 2025)</a></li>
            <li><a href="https://www.nj.com/education/2025/02/catholic-church-hires-law-firm-to-review-controversial-report-tied-to-seton-hall-president.html" target="_blank">NJ.com — "Catholic Church hires law firm to review controversial report tied to Seton Hall president" (Feb. 2025)</a></li>
            <li><a href="https://www.thesetonian.com/article/2024/12/former-law-school-assistant-dean-sentenced-to-prison" target="_blank">The Setonian — "Former assistant dean of Seton Hall Law School sentenced to 3 years" (Dec. 2024)</a></li>
            <li><a href="https://www.roi-nj.com/2024/07/29/law/3-plead-guilty-to-embezzlement-of-1-3m-from-seton-hall-law/" target="_blank">ROI-NJ — "3 plead guilty to embezzlement of $1.3M from Seton Hall Law" (July 2024)</a></li>
            <li><a href="https://www.khmarino.com/attorneys/kevin-h-marino/" target="_blank">Marino Tortorella &amp; Boyle — Kevin H. Marino biography</a></li>
            <li>DOJ Epstein Files — Deutsche Bank records, Jmail email archive (justice.gov, released Jan. 30, 2026)</li>
            <li>House Judiciary Committee Democrats — Letters to NYU and Columbia presidents (Jan. 14, 2026)</li>
            <li>Senate Finance Committee — Wyden memorandum on JPMorgan/Epstein (Nov. 19, 2025)</li>
            <li><a href="https://thehill.com/regulation/court-battles/5747345-epstein-estate-settlement-advisers-sex-trafficking-claims/" target="_blank">The Hill — "Epstein estate settles lawsuit accusing advisers of aiding sex trafficking claims" (Feb. 20, 2026)</a></li>
            <li><a href="https://www.theguardian.com/us-news/2026/feb/20/jeffrey-epstein-estate-settlement" target="_blank">The Guardian — "Jeffrey Epstein's estate agrees to pay up to $35m to settle survivors' lawsuit" (Feb. 20, 2026)</a></li>
            <li><a href="https://www.nbcnews.com/news/us-news/epstein-estate-agrees-35-million-settlement-victim-class-action-rcna259863" target="_blank">NBC News — "Epstein estate agrees to $35 million settlement in victim class action" (Feb. 20, 2026)</a></li>
            <li><a href="https://finance.yahoo.com/news/seton-hall-switches-counsel-sex-090731506.html" target="_blank">Yahoo Finance / AP — "Seton Hall Switches Counsel in Sex Abuse Investigation" (Oct. 2018) — Christine Amalfe appointment</a></li>
            <li><a href="https://www.thesetonian.com/article/2025/01/board-of-regents-chair-and-msgr-reilly-controversy" target="_blank">The Setonian — "Board of Regents chair backs President Msgr. Reilly as allegations stir controversy" (Jan. 2025) — D'Alessandro statement</a></li>
            <li><a href="https://www.politico.com/news/2024/12/21/seton-hall-president-sexual-abuse-scandal-00194814" target="_blank">Politico — "He knew of sex abuse allegations on campus. Now he's president." (Dec. 21, 2024)</a></li>
            <li><a href="https://www.nj.com/education/2025/02/catholic-church-hires-law-firm-to-review-controversial-report-tied-to-seton-hall-president.html" target="_blank">NJ.com — "Catholic Church hires Ropes &amp; Gray to review controversial report" (Feb. 2025)</a></li>
            <li><a href="https://www.ropesgray.com/en/people/d/james-p-dowden" target="_blank">Ropes &amp; Gray — James P. Dowden biography</a></li>
            <li><a href="https://www.shu.edu/news/new-chair-of-the-board-of-regents-henry-dalessandro.html" target="_blank">Seton Hall University — "Henry (Hank) F. D'Alessandro ’85, New Chair of the Board of Regents" (Oct. 2023)</a></li>
          </ul>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
     FOOTER
══════════════════════════════════════════════════════════ */}
      <footer>
        <div className="footer-inner">
          <div className="footer-brand">SodomHall.com // Special Investigation Series</div>
          <p className="footer-disclaimer">
            This page presents factual information drawn from public records, court filings, and published journalism. All claims are sourced. Where information is unconfirmed, that is explicitly noted. This page does not assert criminal wrongdoing by any individual not already charged or convicted. It does assert that Seton Hall University has failed to provide adequate public accounting of its connections to Jeffrey Epstein and the circumstances surrounding the suppressed McCarrick review.
          </p>
          <div className="footer-nav">
            <a href="#">Home</a>
            <a href="#">The Nyre Dismissal</a>
            <a href="#">The McCarrick Scandal</a>
            <a href="#">The Epstein Connection</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>

      {/* ══════════════════════════════════════════════════════════
     MODALS
══════════════════════════════════════════════════════════ */}

      {/* RUEMMLER MODAL */}
      <div className="modal-overlay" id="modal-ruemmler" onClick={(e) => { if ((e.target as HTMLElement).id === 'modal-ruemmler') closeModal('modal-ruemmler'); }}>
        <div className="modal">
          <div className="modal-header">
            <div>
              <div className="modal-title">Kathryn Ruemmler</div>
              <div className="modal-subtitle">Former White House Counsel // Latham &amp; Watkins // Goldman Sachs CLO</div>
            </div>
            <button className="modal-close" onClick={() => closeModal('modal-ruemmler')}>×</button>
          </div>
          <div className="modal-body">
            <h4>Background</h4>
            <p>Kathryn Ruemmler served as White House Counsel to President Obama from 2011 to 2014. Before that, she was a federal prosecutor and Principal Deputy Associate Attorney General. She joined Latham &amp; Watkins as a partner after leaving the White House, where she built a high-profile government investigations practice. In 2019, she was appointed Chief Legal Officer of Goldman Sachs.</p>
            <h4>Role at Seton Hall</h4>
            <p>In 2018, Gibbons P.C. (attorney Joseph P. LaSala) retained Latham &amp; Watkins to conduct an independent review of how Seton Hall handled allegations against Cardinal Theodore McCarrick. Ruemmler led that review. It was completed in 2019 and has never been publicly released, despite a court order requiring disclosure.</p>
            <h4>The Epstein Relationship</h4>
            <p>CNN's KFile confirmed 100+ emails between Ruemmler and Epstein over several years. She appeared on his schedule multiple times for meetings and lunches between 2014 and 2019. In 2016, Epstein gifted her a $9,350 Hermès handbag and $10,000 in Bergdorf Goodman gift cards. In January 2019, she described being "totally tricked out by Uncle Jeffrey" with boots, a handbag, and a watch. She was named backup executor in Epstein's August 2019 will — signed two days before his death. She was reportedly among the first people Epstein called after his arrest in July 2019.</p>
            <h4>The Conflict</h4>
            <p>Ruemmler was conducting an investigation into sexual misconduct at a Catholic university while maintaining a close personal and financial relationship with a convicted sex trafficker. The September 29, 2018 email shows her communicating with Epstein on the same morning she presented to the SHU Board of Regents. The February 27, 2019 email shows her scheduling visits to Epstein around her interviews of bishops for the McCarrick review.</p>
            <h4>Current Status</h4>
            <p>Ruemmler resigned from Goldman Sachs in February 2026 following public reporting on her Epstein ties. She has not publicly addressed her role in the SHU McCarrick review or the conflict of interest it represents.</p>
          </div>
        </div>
      </div>

      {/* MARINO MODAL */}
      <div className="modal-overlay" id="modal-marino" onClick={(e) => { if ((e.target as HTMLElement).id === 'modal-marino') closeModal('modal-marino'); }}>
        <div className="modal">
          <div className="modal-header">
            <div>
              <div className="modal-title">Kevin H. Marino</div>
              <div className="modal-subtitle">Board of Regents Chairman // Marino Tortorella &amp; Boyle, P.C.</div>
            </div>
            <button className="modal-close" onClick={() => closeModal('modal-marino')}>×</button>
          </div>
          <div className="modal-body">
            <h4>Background</h4>
            <p>Kevin H. Marino graduated cum laude from Seton Hall Law in 1984 and served as Editor-in-Chief of the Law Review. He is the founding partner of Marino Tortorella &amp; Boyle, P.C., one of New Jersey's most respected white-collar defense boutiques. He has represented high-profile clients including Donald Trump in various matters.</p>
            <h4>Role at Seton Hall</h4>
            <p>Marino served as Chairman of the Board of Regents of Seton Hall University. He was also a member of the Board of Visitors of Seton Hall Law School. In 2022, he and his firm donated $1 million to establish the Marino Tortorella &amp; Boyle Endowed Professorship at SHU Law. He stepped down as Board Chairman in 2022 following the embezzlement scandal.</p>
            <h4>The Ruemmler Connection</h4>
            <p>Ruemmler presented to the SHU Board of Regents — the board Marino chaired — on September 29, 2018. On that same morning, she emailed Epstein. Whether Marino knew of Ruemmler's Epstein relationship at the time of her presentation, and whether he has been informed since, are questions that have not been publicly addressed.</p>
            <h4>The Nyre Allegations</h4>
            <p>Former President Joseph Nyre alleged in his lawsuit that Marino: (1) interfered with the law school embezzlement investigation; (2) attempted to give Dean Boozang a million-dollar salary; and (3) tried to admit students to the law school outside normal processes. An independent investigation found no evidence to support Nyre's sexual harassment allegations against Marino. The governance and admissions allegations were not the subject of that investigation. Nyre's lawsuit was dismissed in February 2026.</p>
            <h4>Current Status</h4>
            <p>Marino remains a prominent figure in New Jersey legal circles. He has not publicly addressed the Epstein-SHU connection or the question of what he knew about Ruemmler's relationship with Epstein during the period she was presenting to his board.</p>
          </div>
        </div>
      </div>

      {/* BOOZANG MODAL */}
      <div className="modal-overlay" id="modal-boozang" onClick={(e) => { if ((e.target as HTMLElement).id === 'modal-boozang') closeModal('modal-boozang'); }}>
        <div className="modal">
          <div className="modal-header">
            <div>
              <div className="modal-title">Kathleen Boozang</div>
              <div className="modal-subtitle">Dean, Seton Hall Law School (2015–2022)</div>
            </div>
            <button className="modal-close" onClick={() => closeModal('modal-boozang')}>×</button>
          </div>
          <div className="modal-body">
            <h4>Background</h4>
            <p>Kathleen Boozang joined Seton Hall Law School in 1990 after practicing law for several years. She became the eighth dean of SHU Law in July 2015. She resigned in November 2022 following the discovery of the law school embezzlement scheme.</p>
            <h4>The Embezzlement</h4>
            <p>During Boozang's tenure as dean, a group of trusted, long-time employees — led by assistant dean Teresina DeAlmeida — embezzled more than $1.3 million from the law school over approximately a decade. The scheme was discovered in 2022. Boozang and school officials stated her resignation was unrelated to the theft. She returned to SHU as a professor.</p>
            <h4>The Nyre Allegations</h4>
            <p>Former President Nyre alleged that Board Chairman Kevin Marino attempted to offer Boozang a million-dollar salary and interfered with the embezzlement investigation. These allegations have not been independently verified. Boozang has not publicly addressed them.</p>
            <h4>The Overlap</h4>
            <p>The embezzlement scheme ran from approximately 2012 to 2022 — encompassing the entire period of the Epstein tuition payments (2017–2019) and the Ruemmler-led McCarrick review (2018–2019). Whether any of these matters intersect at the institutional level is an open question.</p>
          </div>
        </div>
      </div>

      {/* DEALMEIDA MODAL */}
      <div className="modal-overlay" id="modal-dealmeida" onClick={(e) => { if ((e.target as HTMLElement).id === 'modal-dealmeida') closeModal('modal-dealmeida'); }}>
        <div className="modal">
          <div className="modal-header">
            <div>
              <div className="modal-title">Teresina DeAlmeida</div>
              <div className="modal-subtitle">Former Assistant Dean, SHU Law School // Federal Prisoner</div>
            </div>
            <button className="modal-close" onClick={() => closeModal('modal-dealmeida')}>×</button>
          </div>
          <div className="modal-body">
            <h4>Background</h4>
            <p>Teresina DeAlmeida served as an assistant dean at Seton Hall University School of Law. She was a trusted, long-time employee of the institution.</p>
            <h4>The Crime</h4>
            <p>DeAlmeida led a decade-long scheme to embezzle more than $1.3 million from SHU Law School. The fraud involved multiple employees and ran from approximately 2012 to 2022. Three employees ultimately pleaded guilty.</p>
            <h4>Sentencing</h4>
            <p>In December 2024, DeAlmeida was sentenced to three years in federal prison for her role in the scheme. Her sentencing came two years after the fraud was discovered and one year after the broader institutional fallout — including the resignations of Dean Boozang and President Nyre.</p>
            <h4>The Timing</h4>
            <p>The embezzlement scheme was running during the same period that Jeffrey Epstein was making tuition payments to Seton Hall (2017–2019) and that Kathryn Ruemmler was conducting the McCarrick review (2018–2019). The simultaneous operation of a major financial fraud scheme within the law school, while the university was engaged with Epstein-connected attorneys and receiving Epstein-sourced tuition payments, has not been examined as a unified pattern.</p>
          </div>
        </div>
      </div>

      {/* INDYKE MODAL */}
      <div className="modal-overlay" id="modal-indyke" onClick={(e) => { if ((e.target as HTMLElement).id === 'modal-indyke') closeModal('modal-indyke'); }}>
        <div className="modal">
          <div className="modal-header">
            <div>
              <div className="modal-title">Darren Indyke</div>
              <div className="modal-subtitle">Epstein's Personal Attorney // Estate Co-Executor</div>
            </div>
            <button className="modal-close" onClick={() => closeModal('modal-indyke')}>×</button>
          </div>
          <div className="modal-body">
            <h4>Background</h4>
            <p>Darren Indyke served as Jeffrey Epstein's personal attorney for many years. He is the co-executor of Epstein's estate alongside Richard Kahn. He has been identified in multiple Congressional investigations as a central figure in Epstein's financial and legal network.</p>
            <h4>The SHU Checks</h4>
            <p>Indyke personally signed all three tuition checks made out to Seton Hall University — the July 2017 check for $17,060, the July 2018 check for $11,749, and the February 2019 check for $4,068. All three checks were drawn from Deutsche Bank accounts.</p>
            <h4>Congressional Scrutiny</h4>
            <p>Senator Ron Wyden's Finance Committee probe specifically requested records of all accounts in which Indyke had signatory authority, along with those of Harry Beller and Richard Kahn. The probe is examining the full scope of Epstein's financial network and the role of banks in enabling it.</p>
            <h4>The Estate &amp; The $35 Million Settlement</h4>
            <p>As co-executor of Epstein's estate alongside Richard Kahn, Indyke administered assets that became the subject of a 2024 class-action lawsuit (<em>Allison Ward v. Darren K. Indyke et al.</em>). Boies Schiller Flexner — the same firm that secured $365 million in settlements from JPMorgan Chase and Deutsche Bank — alleged that Indyke and Kahn helped Epstein build a <strong>"complex web of corporations and bank accounts"</strong> that let him hide his abuses, pay victims and recruiters, while leaving the two advisers <strong>"richly compensated."</strong></p>
            <p>On February 20, 2026, Indyke and Kahn agreed to pay <strong>up to $35 million</strong> to settle the class action. Neither admitted wrongdoing. Their attorney Daniel H. Weiner stated they "did nothing wrong" but agreed to settle "to achieve finality." The settlement, pending court approval, would provide a confidential avenue for financial relief to victims who have not already resolved claims against the estate. The Epstein estate has now paid out over $205 million in total victim settlements ($121M restitution fund + $49M additional + up to $35M new settlement).</p>
            <p><strong>The SHU connection:</strong> The same man whose signature appears on all three Seton Hall tuition checks — checks drawn from the Deutsche Bank accounts he controlled as Epstein's attorney — has now agreed to pay $35 million to settle accusations that he helped Epstein traffic young women. Seton Hall has not commented.</p>
          </div>
        </div>
      </div>

      {/* BELLER MODAL */}
      <div className="modal-overlay" id="modal-beller" onClick={(e) => { if ((e.target as HTMLElement).id === 'modal-beller') closeModal('modal-beller'); }}>
        <div className="modal">
          <div className="modal-header">
            <div>
              <div className="modal-title">Harry Beller</div>
              <div className="modal-subtitle">Epstein's Accountant (1992–2014) // JPMorgan SAR Subject</div>
            </div>
            <button className="modal-close" onClick={() => closeModal('modal-beller')}>×</button>
          </div>
          <div className="modal-body">
            <h4>Background</h4>
            <p>Harry Beller served as Jeffrey Epstein's personal accountant for 22 years, from 1992 to 2014. He was a central figure in Epstein's financial operations, personally handling large cash withdrawals from Epstein's JPMorgan accounts.</p>
            <h4>The Suspicious Activity Reports</h4>
            <p>Beller's cash withdrawals triggered at least four federally mandated Suspicious Activity Reports (SARs) filed by JPMorgan. The earliest was filed in 2002. In a single three-month period, Beller made 16 separate withdrawals of approximately $9,800 each — just below the $10,000 federal reporting threshold — plus a $40,000 check. JPMorgan's 2002 SAR was filed against Beller, not Epstein — a fact that a former FBI special agent later flagged as unusual, noting that "Beller was Epstein's accountant."</p>
            <h4>The SHU Connection</h4>
            <p>The DOJ files list "Epstein employee Harry Beller" in the background column associated with the SHU tuition checks for Brian Beller. The relationship between Harry Beller and Brian Beller — who graduated from SHU with an M.S. in Accounting in December 2019 — has not been confirmed. The Setonian notes there is "no confirmation that the two are related."</p>
            <h4>Congressional Interest</h4>
            <p>Senator Wyden's Finance Committee probe specifically named Harry Beller in its requests for information, alongside Darren Indyke and Richard Kahn. Congress wants to understand what Beller knew about Epstein's financial operations and what the cash withdrawals were used for.</p>
          </div>
        </div>
      </div>

      {/* LASALA MODAL */}
      <div className="modal-overlay" id="modal-lasala" onClick={(e) => { if ((e.target as HTMLElement).id === 'modal-lasala') closeModal('modal-lasala'); }}>
        <div className="modal">
          <div className="modal-header">
            <div>
              <div className="modal-title">Joseph P. LaSala</div>
              <div className="modal-subtitle">Gibbons P.C. // SHU Special Counsel // Responsive Action Plan</div>
            </div>
            <button className="modal-close" onClick={() => closeModal('modal-lasala')}>×</button>
          </div>
          <div className="modal-body">
            <h4>Background</h4>
            <p>Joseph P. LaSala is an attorney at Gibbons P.C., the Newark-based law firm that has served as Seton Hall University's outside counsel. Gibbons was retained by SHU as special counsel to commission an independent review of the McCarrick allegations.</p>
            <h4>Role in the McCarrick Review</h4>
            <p>LaSala was the Gibbons attorney who retained Latham &amp; Watkins — and by extension Kathryn Ruemmler — to conduct the independent review. He also developed the Responsive Action Plan that followed the Latham report. Cardinal Tobin's February 2025 statement specifically named LaSala and the Gibbons firm in connection with the review.</p>
            <h4>The Vetting Question</h4>
            <p>The central question regarding LaSala is whether he or Gibbons P.C. conducted an adequate conflicts check before retaining Ruemmler. Ruemmler's relationship with Epstein — which included 100+ emails, personal meetings, and substantial gifts — was not publicly known at the time, but may have been discoverable through standard due diligence. Whether LaSala knew, should have known, or was informed after the fact is an open question.</p>
            <h4>Current Status</h4>
            <p>Gibbons P.C. managing director Peter J. Torcicollo has stated the firm will cooperate fully with the Ropes &amp; Gray review ordered by Cardinal Tobin. LaSala has not made public statements about the Ruemmler conflict.</p>
          </div>
        </div>
      </div>

      {/* AMALFE MODAL */}
      <div className="modal-overlay" id="modal-amalfe" onClick={(e) => { if ((e.target as HTMLElement).id === 'modal-amalfe') closeModal('modal-amalfe'); }}>
        <div className="modal">
          <div className="modal-header">
            <div>
              <div className="modal-title">Christine A. Amalfe</div>
              <div className="modal-subtitle">Gibbons P.C. // Special Counsel to SHU // NJSBA President</div>
            </div>
            <button className="modal-close" onClick={() => closeModal('modal-amalfe')}>&#215;</button>
          </div>
          <div className="modal-body">
            <h4>Background</h4>
            <p>Christine A. Amalfe is Chair of the Employment &amp; Labor Law Group at Gibbons P.C., one of New Jersey's largest and most prominent law firms. She is widely regarded as one of the leading management-side employment attorneys in the state. In 2025, she became President of the New Jersey State Bar Association.</p>
            <h4>Role in the McCarrick Review</h4>
            <p>In August 2018, Seton Hall publicly announced that it had retained Amalfe as "Special Counsel" to "lead the effort and commission" an independent review of McCarrick-related allegations. Amalfe was the attorney who retained Latham &amp; Watkins — and by extension Kathryn Ruemmler — to conduct the actual investigation. She reported to the three-person Special Task Force of the Board of Regents (McMahon, LaSala, Checchio), not to the public or to survivors.</p>
            <h4>The Conflicts Question</h4>
            <p>Ruemmler's relationship with Jeffrey Epstein — over 100 emails, personal meetings, substantial gifts, and being named in his will — was not publicly known in 2018. But the question of whether Gibbons P.C. conducted adequate due diligence before retaining her has never been answered. Amalfe has made no public statement about the Ruemmler conflict since the DOJ Epstein files were released in January 2026.</p>
            <h4>Current Status</h4>
            <p>Amalfe is now President of the New Jersey State Bar Association. The NJSBA has made no statement about the Ruemmler conflict or the integrity of the McCarrick review. Gibbons managing director Peter J. Torcicollo has stated the firm will cooperate with the Ropes &amp; Gray review.</p>
          </div>
        </div>
      </div>

      {/* McMAHON MODAL */}
      <div className="modal-overlay" id="modal-mcmahon" onClick={(e) => { if ((e.target as HTMLElement).id === 'modal-mcmahon') closeModal('modal-mcmahon'); }}>
        <div className="modal">
          <div className="modal-header">
            <div>
              <div className="modal-title">Donald A. McMahon Jr.</div>
              <div className="modal-subtitle">SHU Regent // Special Task Force // Responsive Action Plan Author</div>
            </div>
            <button className="modal-close" onClick={() => closeModal('modal-mcmahon')}>&#215;</button>
          </div>
          <div className="modal-body">
            <h4>Background</h4>
            <p>Donald A. McMahon Jr. is a member of Seton Hall University's Board of Regents. He served as a cornerstone of the Special Task Force of the Board of Regents formed in 2018 to oversee the McCarrick review. He is a prominent figure in SHU's governance structure and has been involved in the university's institutional response to the clergy abuse scandal.</p>
            <h4>Role in the Review Architecture</h4>
            <p>McMahon was one of three members of the Special Task Force (alongside Joseph LaSala and Bishop James Checchio) that served as the internal filter between Ruemmler's Latham &amp; Watkins investigation and the public. The Task Force received the findings, controlled what was communicated to the full Board, and co-authored the "Responsive Action Plan" — the sanitized public summary that replaced the full Latham report.</p>
            <h4>The Suppression Question</h4>
            <p>The full Latham report has never been publicly released despite a New Jersey Superior Court order. The Task Force, of which McMahon was a member, is the body that made the decision to suppress the report and issue the RAP in its place. McMahon has made no public statements about this decision or about the Ruemmler conflict.</p>
          </div>
        </div>
      </div>

      {/* CHECCHIO MODAL */}
      <div className="modal-overlay" id="modal-checchio" onClick={(e) => { if ((e.target as HTMLElement).id === 'modal-checchio') closeModal('modal-checchio'); }}>
        <div className="modal">
          <div className="modal-header">
            <div>
              <div className="modal-title">Bishop James F. Checchio</div>
              <div className="modal-subtitle">Diocese of Metuchen // SHU Regent // Task Force // Coadjutor Archbishop of New Orleans</div>
            </div>
            <button className="modal-close" onClick={() => closeModal('modal-checchio')}>&#215;</button>
          </div>
          <div className="modal-body">
            <h4>Background</h4>
            <p>James F. Checchio was ordained Bishop of the Diocese of Metuchen in 2016. He served as a member of Seton Hall University's Board of Regents. In October 2025, Pope Francis appointed him Coadjutor Archbishop of New Orleans — a significant elevation in the Church hierarchy.</p>
            <h4>The Structural Conflict of Interest</h4>
            <p>Checchio was one of three members of the Special Task Force that oversaw the Latham &amp; Watkins McCarrick review. His ecclesiastical superior is Cardinal Joseph Tobin of the Archdiocese of Newark. Cardinal Tobin was subsequently named in the Gibbons report and failed to appear before investigators. Having Tobin's direct subordinate on the task force overseeing a report that implicated Tobin's own oversight is a textbook conflict of interest — one that was never disclosed to the public, to survivors, or to the court that ordered the report's release.</p>
            <h4>Current Status</h4>
            <p>Checchio has been elevated to Coadjutor Archbishop of New Orleans. He has made no public statements about his role on the task force, the suppression of the Latham report, or the Ruemmler conflict. His elevation suggests the Vatican is either unaware of or unconcerned by his role in the SHU cover-up.</p>
          </div>
        </div>
      </div>

      {/* D'ALESSANDRO MODAL */}
      <div className="modal-overlay" id="modal-dalessandro" onClick={(e) => { if ((e.target as HTMLElement).id === 'modal-dalessandro') closeModal('modal-dalessandro'); }}>
        <div className="modal">
          <div className="modal-header">
            <div>
              <div className="modal-title">Henry "Hank" F. D'Alessandro</div>
              <div className="modal-subtitle">Morgan Stanley // Chair, SHU Board of Regents (2023–present)</div>
            </div>
            <button className="modal-close" onClick={() => closeModal('modal-dalessandro')}>&#215;</button>
          </div>
          <div className="modal-body">
            <h4>Background</h4>
            <p>Henry "Hank" F. D'Alessandro is a 1985 Seton Hall alumnus. He is a Managing Director and Head of Credit Partners at Morgan Stanley. He has served on the SHU Board of Regents since at least 2020 and became Chair of the Board in October 2023, succeeding Kevin Marino.</p>
            <h4>Defense of Monsignor Reilly</h4>
            <p>In January 2025, as the Politico reporting about Reilly's role in the McCarrick scandal was generating national attention, D'Alessandro issued a public statement defending Reilly as being "falsely and unfairly portrayed." His statement made no mention of the Latham report's recommendation that Reilly be removed from all SHU boards and leadership positions. It did not address the specific findings about Reilly's alleged failure to report abuse. It was a full-throated institutional defense of a man the university's own commissioned report had recommended removing.</p>
            <h4>The Morgan Stanley Connection</h4>
            <p>D'Alessandro's position at Morgan Stanley is relevant context given the broader pattern of Wall Street and financial sector figures in SHU's governance. His role as Board Chair means he is now the person ultimately responsible for the university's response to the Epstein file revelations, the Ruemmler conflict, and the Ropes &amp; Gray review. He has made no public statements about any of these matters.</p>
          </div>
        </div>
      </div>

      {/* McPHEE MODAL */}
      <div className="modal-overlay" id="modal-mcphee" onClick={(e) => { if ((e.target as HTMLElement).id === 'modal-mcphee') closeModal('modal-mcphee'); }}>
        <div className="modal">
          <div className="modal-header">
            <div>
              <div className="modal-title">Joan McPhee</div>
              <div className="modal-subtitle">Ropes &amp; Gray LLP // Lead Partner, SHU Review</div>
            </div>
            <button className="modal-close" onClick={() => closeModal('modal-mcphee')}>&#215;</button>
          </div>
          <div className="modal-body">
            <h4>Background</h4>
            <p>Joan McPhee is a partner at Ropes &amp; Gray LLP and leads the firm's Sexual Misconduct &amp; Workplace Harassment practice group. She is a former federal prosecutor. She is widely regarded as one of the leading institutional accountability investigators in the country.</p>
            <h4>The Nassar Report</h4>
            <p>McPhee co-authored the 2018 Ropes &amp; Gray report on USA Gymnastics and the U.S. Olympic Committee's handling of the Larry Nassar abuse scandal. That report — "Nassar Report: A Failure to Protect" — is the most consequential institutional accountability investigation in American sports history. It documented methodical failures across USA Gymnastics, the USOC, and Michigan State University. It led to the resignation of multiple executives and the restructuring of USA Gymnastics.</p>
            <h4>Role in the SHU Review</h4>
            <p>McPhee is the lead partner on the Ropes &amp; Gray review ordered by Cardinal Tobin in February 2025. The review was originally scoped to examine whether the Latham &amp; Watkins findings were properly communicated. The January 2026 DOJ file releases — revealing Ruemmler's conflict of interest — have fundamentally changed the scope of what the review must address.</p>
          </div>
        </div>
      </div>

      {/* DOWDEN MODAL */}
      <div className="modal-overlay" id="modal-dowden" onClick={(e) => { if ((e.target as HTMLElement).id === 'modal-dowden') closeModal('modal-dowden'); }}>
        <div className="modal">
          <div className="modal-header">
            <div>
              <div className="modal-title">James P. Dowden</div>
              <div className="modal-subtitle">Ropes &amp; Gray LLP // Co-Lead Partner, SHU Review</div>
            </div>
            <button className="modal-close" onClick={() => closeModal('modal-dowden')}>&#215;</button>
          </div>
          <div className="modal-body">
            <h4>Background</h4>
            <p>James P. Dowden is a partner at Ropes &amp; Gray LLP and co-leader of the firm's government enforcement / white collar criminal defense and crisis management &amp; investigations practices. He is a former Assistant U.S. Attorney in the District of Massachusetts, where he worked in the economic crimes and public corruption units. He clerked for U.S. Supreme Court Justice Stephen Breyer.</p>
            <h4>The Nassar Report</h4>
            <p>Dowden co-authored the 2018 Ropes &amp; Gray report on USA Gymnastics and the USOC with Joan McPhee. His background in public corruption prosecution makes him particularly well-suited to examine the governance failures at SHU — including the task force structure that suppressed the Latham report and the conflict of interest that compromised the original investigation.</p>
            <h4>Role in the SHU Review</h4>
            <p>Dowden is co-lead on the Ropes &amp; Gray review alongside McPhee. His public corruption background is directly relevant to the question of whether the three-person task force (McMahon, LaSala, Checchio) acted appropriately in suppressing the Latham report and issuing the RAP in its place.</p>
          </div>
        </div>
      </div>

      {/* GUGEL MODAL */}
      <div className="modal-overlay" id="modal-gugel" onClick={(e) => { if ((e.target as HTMLElement).id === 'modal-gugel') closeModal('modal-gugel'); }}>
        <div className="modal">
          <div className="modal-header">
            <div>
              <div className="modal-title">Helen Gugel</div>
              <div className="modal-subtitle">Ropes &amp; Gray LLP // New York Lead, SHU Review</div>
            </div>
            <button className="modal-close" onClick={() => closeModal('modal-gugel')}>&#215;</button>
          </div>
          <div className="modal-body">
            <h4>Background</h4>
            <p>Helen Gugel is a New York-based partner at Ropes &amp; Gray LLP and a member of the firm's Sexual Misconduct &amp; Workplace Harassment practice group. She specializes in sensitive institutional investigations involving religious and educational organizations.</p>
            <h4>Role in the SHU Review</h4>
            <p>Gugel handles the New York and New Jersey jurisdictional aspects of the Ropes &amp; Gray review, given the Archdiocese of Newark's involvement and the geographic scope of the matter. Her focus on religious institutional investigations makes her the appropriate lead for the Archdiocese of Newark's cooperation with the review — including Cardinal Tobin's role and the question of why he failed to appear before investigators.</p>
          </div>
        </div>
      </div>

      {/* BISK MODAL */}
      <div className="modal-overlay" id="modal-bisk" onClick={(e) => { if ((e.target as HTMLElement).id === 'modal-bisk') closeModal('modal-bisk'); }}>
        <div className="modal">
          <div className="modal-header">
            <div>
              <div className="modal-title">Megan Bisk</div>
              <div className="modal-subtitle">Ropes &amp; Gray LLP // Higher Education &amp; Title IX Specialist</div>
            </div>
            <button className="modal-close" onClick={() => closeModal('modal-bisk')}>&#215;</button>
          </div>
          <div className="modal-body">
            <h4>Background</h4>
            <p>Megan Bisk is a partner at Ropes &amp; Gray LLP and the firm's specialist for Higher Education and Title IX compliance. She advises universities and colleges on Title IX obligations, sexual misconduct policies, and institutional response to abuse allegations.</p>
            <h4>Role in the SHU Review</h4>
            <p>Bisk provides the technical legal expertise on whether the seminary's internal handling of abuse allegations violated federal statutes or university policies. Her central question: was the "confidentiality" justification used to suppress the Latham report legally defensible under Title IX? If the report's findings implicated Title IX violations, the university may have had an affirmative legal obligation to disclose them — not suppress them. The fact that the report was suppressed for years while the subject of its findings was appointed university president raises serious Title IX questions that Bisk is positioned to address.</p>
          </div>
        </div>
      </div>

      {/* NYRE MODAL */}
      <div className="modal-overlay" id="modal-nyre" onClick={(e) => { if ((e.target as HTMLElement).id === 'modal-nyre') closeModal('modal-nyre'); }}>
        <div className="modal">
          <div className="modal-header">
            <div>
              <div className="modal-title">Joseph Nyre</div>
              <div className="modal-subtitle">Former President, Seton Hall University (resigned 2023)</div>
            </div>
            <button className="modal-close" onClick={() => closeModal('modal-nyre')}>×</button>
          </div>
          <div className="modal-body">
            <h4>Background</h4>
            <p>Joseph Nyre served as President of Seton Hall University. He was New Jersey's highest-paid university president, with salary and benefits totaling $1.27 million. He resigned in 2023 in the wake of the law school embezzlement scandal.</p>
            <h4>The Lawsuit</h4>
            <p>Nyre filed a lawsuit against Seton Hall alleging multiple violations of New Jersey's Law Against Discrimination. He alleged that Board Chairman Kevin Marino sexually harassed his wife at two events in 2021 and 2022. An independent investigation found no evidence to support the harassment allegations.</p>
            <h4>The Governance Allegations</h4>
            <p>Beyond the harassment claims, Nyre alleged that Marino: (1) "regularly interfered with university operations"; (2) "improperly involved himself in an embezzlement investigation at the law school"; (3) attempted to give Dean Boozang a million-dollar salary; and (4) tried to admit students to the law school outside normal processes. These allegations were not the subject of the independent investigation and have not been independently verified.</p>
            <h4>Current Status</h4>
            <p>Nyre's lawsuit was dismissed by a judge in February 2026. The dismissal does not constitute a finding that the governance allegations were false — only that the legal claims as pleaded did not survive the motion to dismiss. The admissions interference allegation remains unresolved.</p>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
     JAVASCRIPT
══════════════════════════════════════════════════════════ */}


      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="footer-brand">SodomHall.com</div>
          <p className="footer-disclaimer">This bulletin is an independent investigative publication. All factual claims are sourced and linked. Allegations remain allegations until adjudicated. The identity of the unnamed student in the DOJ files has not been confirmed by this publication. This page is part of the SodomHall.com investigative series on institutional accountability at Seton Hall University.</p>
          <nav className="footer-nav">
            <a href="/">Home</a>
            <a href="/expose/nyre-dismissal">The Nyre Dismissal</a>
            <a href="/ledger/mccarrick">The McCarrick Scandal</a>
            <a href="/epstein">The Epstein Connection</a>
            <a href="/">Contact</a>
          </nav>
        </div>
      </footer>


      {/* Modal Logic Injection */}
      <script dangerouslySetInnerHTML={{
        __html: `
                // React handles state mapped modals, but we inject this to catch any stray DOM-based UI toggles if needed.
            `}} />
    </div>
  );
}
