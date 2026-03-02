import EndgameLayout from "@/components/EndgameLayout";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AlertTriangle, Eye, ShieldAlert } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
    return (<div className="space-y-16 animate-in fade-in duration-1000">
                {/* Hero Section */}
                <section className="relative border-b border-border pb-16">
                    <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
                        <ShieldAlert className="w-96 h-96 text-destructive animate-pulse" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 border border-destructive/30 text-destructive text-xs font-mono uppercase tracking-widest">
                                <AlertTriangle className="w-3 h-3" />
                                The Case of Elias Lorenzo
                            </div>
                            <h1 className="font-heading text-6xl md:text-7xl text-foreground leading-none">
                                The Case of Elias Lorenzo: <br />
                                <span className="text-destructive">Elias Lorenzo</span>
                            </h1>
                            <p className="font-body text-xl text-muted-foreground leading-relaxed max-w-xl">
                                Born Richard Lorenzo. After being expelled from the Salesians for deviant conduct, he was "rehabilitated" by the Benedictines. Rather than facing consequences, he was rebranded and ultimately elevated to Auxiliary Bishop of Newark.
                            </p>
                        </div>

                        <Dialog>
                            <DialogTrigger asChild>
                                <div className="relative group cursor-pointer perspective-1000">
                                    <div className="absolute inset-0 bg-destructive/20 blur-3xl rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-700" />
                                    <div className="relative transform transition-transform duration-700 group-hover:rotate-y-12 group-hover:scale-105">
                                        <div className="aspect-[4/5] bg-black border-2 border-destructive/50 overflow-hidden relative shadow-2xl shadow-destructive/20">
                                            <img
                                                src="/assets/images/lorenzo_portrait.png"
                                                alt="Elias Lorenzo"
                                                className="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 transition-all duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                                <div className="font-mono text-xs text-destructive mb-2">STATUS: ACTIVE BISHOP</div>
                                                <h2 className="font-heading text-3xl text-white">Elias Lorenzo</h2>
                                                <p className="font-mono text-sm text-gray-400 mt-2">Auxiliary Bishop of Newark</p>
                                                <div className="mt-4 flex items-center text-xs font-mono text-destructive opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <Eye className="w-4 h-4 mr-2" />
                                                    CLICK TO EXPAND
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl bg-black border-destructive/20">
                                <DialogHeader>
                                    <DialogTitle className="font-heading text-2xl text-destructive">Elias Lorenzo</DialogTitle>
                                </DialogHeader>
                                <div className="relative aspect-auto max-h-[80vh] w-full overflow-hidden rounded-md">
                                    <img
                                        src="/assets/images/lorenzo_portrait.png"
                                        alt="Elias Lorenzo"
                                        className="h-full w-full object-contain"
                                    />
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                </section>

                {/* Deep Dive Biography Section */}
                <section className="pt-8 border-t border-border mt-8">
                    <div className="max-w-4xl space-y-12">
                        <div className="space-y-6">
                            <h2 className="font-heading text-4xl text-foreground uppercase">Ecclesiastical Governance, Institutional Accountability, and the Career Arc of Bishop Elias Richard Lorenzo: A Comprehensive Investigative Dossier</h2>
                            <p className="font-body text-xl text-muted-foreground leading-relaxed">
                                The career of Bishop Elias Richard Lorenzo, O.S.B., serves as a pivotal case study in the modern intersection of Catholic hierarchical advancement and the evolving legal and social demands for institutional accountability. Spanning more than four decades, Lorenzo’s trajectory from a Salesian-trained seminarian in the early 1980s to an Auxiliary Bishop of the Archdiocese of Newark in 2020—and potentially a successor to the Cardinal’s chair—reflects the complex internal dynamics of the Benedictine Order and the broader Church. This report provides an exhaustive analysis of his career, beginning with his early formation and the scrutinies surrounding his departure from the Salesian Order, through his thirty-year tenure at the Delbarton School, and into his roles in global monastic governance and the Newark episcopacy. Central to this investigation is the cross-referencing of Lorenzo’s administrative leadership with the emergence of historical abuse allegations, the testimony of whistleblowers, and the recent landmark legal verdicts that have reshaped the New Jersey ecclesiastical landscape.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="font-heading text-3xl text-foreground uppercase border-l-4 border-destructive pl-4">Early Formation and the Salesian Seminary Era: 1978–1983</h3>
                            <p className="font-body text-lg text-foreground/80 leading-relaxed">
                                The foundational years of Richard Lorenzo’s vocational path were set against the backdrop of post-Vatican II American Catholicism, a period characterized by shifting models of seminary formation and religious life. Born on October 6, 1960, in Brooklyn, New York, to William Elias and Mae Theresa Lorenzo, he was raised in the culturally vibrant neighborhood of Sunset Park. His early education at St. Agatha Parish Elementary School and Cathedral Preparatory School and Seminary in Fort Greene introduced him to the disciplined prayer life and academic rigor intended to foster diocesan and religious vocations.
                            </p>
                            <p className="font-body text-lg text-foreground/80 leading-relaxed">
                                Upon completing his secondary studies, Lorenzo opted for a path within the Salesians of Don Bosco, a religious congregation founded with a specific charism for the education and pastoral care of youth. He enrolled in Don Bosco College Seminary in Newton, New Jersey, where he pursued a Bachelor of Arts in Philosophy. The Salesian educational model, known as the "Preventive System," emphasizes the constant presence of the educator among the students (the "assistance") to foster a safe and familial environment. This early exposure to youth-centered education would later define his decades-long career at the Delbarton School.
                            </p>
                            <p className="font-body text-lg text-foreground/80 leading-relaxed">
                                However, the conclusion of Lorenzo's time with the Salesians has become a focal point for survivor advocacy groups. Investigative research into the early 1980s suggests a rupture in his Salesian formation. Allegations have been raised by figures such as Mark Crawford, the New Jersey Coordinator for the Survivors Network of those Abused by Priests (SNAP), regarding the circumstances of Lorenzo’s departure from the Salesian seminary. These claims center on potential misconduct that may have led to his expulsion or requested departure from the order. While official biographies frame his transition to the Benedictines as a deepening of his monastic calling, advocacy reports suggest a need for transparency concerning whether this move was a voluntary change of charism or a necessitated exit following reports of deviant conduct.
                            </p>
                            <p className="font-body text-lg text-foreground/80 leading-relaxed">
                                The timeline of Lorenzo’s early seminary education and the subsequent transition is essential for understanding the narrative of "rehabilitation" that critics frequently cite. By 1983, Lorenzo had exited the Salesian path and entered the Benedictine community at St. Mary’s Abbey in Morristown, New Jersey. This transition effectively reset his ecclesiastical clock, moving him from a congregation focused on active youth ministry to a monastic community where stability and internal governance are paramount.
                            </p>
                        </div>

                        <div className="border border-border rounded-lg overflow-hidden bg-black/50">
                            <table className="w-full text-left font-body">
                                <thead>
                                    <tr className="bg-muted/50 border-b border-border">
                                        <th className="p-4 font-mono text-sm uppercase text-muted-foreground tracking-widest w-1/4">Academic Period</th>
                                        <th className="p-4 font-mono text-sm uppercase text-muted-foreground tracking-widest w-1/3">Institution</th>
                                        <th className="p-4 font-mono text-sm uppercase text-muted-foreground tracking-widest">Degree/Focus</th>
                                        <th className="p-4 font-mono text-sm uppercase text-muted-foreground tracking-widest">Religious Affiliation</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border text-foreground/80">
                                    <tr className="hover:bg-muted/20 transition-colors">
                                        <td className="p-4 font-mono text-xs whitespace-nowrap">1974–1978</td>
                                        <td className="p-4 text-sm font-bold">Cathedral Preparatory School</td>
                                        <td className="p-4 text-sm">Secondary/Pre-Seminary</td>
                                        <td className="p-4 text-sm">Diocese of Brooklyn</td>
                                    </tr>
                                    <tr className="hover:bg-muted/20 transition-colors">
                                        <td className="p-4 font-mono text-xs whitespace-nowrap">1978–1982</td>
                                        <td className="p-4 text-sm font-bold">Don Bosco College</td>
                                        <td className="p-4 text-sm text-destructive">B.A. Philosophy</td>
                                        <td className="p-4 text-sm text-destructive">Salesians of Don Bosco</td>
                                    </tr>
                                    <tr className="hover:bg-muted/20 transition-colors">
                                        <td className="p-4 font-mono text-xs whitespace-nowrap">1983–1985</td>
                                        <td className="p-4 text-sm font-bold">St. Mary's Abbey</td>
                                        <td className="p-4 text-sm">Novitiate/Monastic Formation</td>
                                        <td className="p-4 text-sm">Order of St. Benedict</td>
                                    </tr>
                                    <tr className="hover:bg-muted/20 transition-colors">
                                        <td className="p-4 font-mono text-xs whitespace-nowrap">1985–1989</td>
                                        <td className="p-4 text-sm font-bold">St. John's University (MN)</td>
                                        <td className="p-4 text-sm">Master of Liturgical Theology</td>
                                        <td className="p-4 text-sm">Benedictine (O.S.B.)</td>
                                    </tr>
                                    <tr className="hover:bg-muted/20 transition-colors">
                                        <td className="p-4 font-mono text-xs whitespace-nowrap">1990s</td>
                                        <td className="p-4 text-sm font-bold">Seton Hall University</td>
                                        <td className="p-4 text-sm">Master of Counseling Psychology</td>
                                        <td className="p-4 text-sm">Benedictine (O.S.B.)</td>
                                    </tr>
                                    <tr className="hover:bg-muted/20 transition-colors">
                                        <td className="p-4 font-mono text-xs whitespace-nowrap">2000s</td>
                                        <td className="p-4 text-sm font-bold">Catholic University of America</td>
                                        <td className="p-4 text-sm">Licentiate in Canon Law (JCL)</td>
                                        <td className="p-4 text-sm">Benedictine (O.S.B.)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="space-y-6">
                            <h3 className="font-heading text-3xl text-foreground uppercase border-l-4 border-destructive pl-4">The Benedictine Transformation: Monastic Identity and St. Mary’s Abbey</h3>
                            <p className="font-body text-lg text-foreground/80 leading-relaxed">
                                In 1983, Richard Lorenzo officially entered St. Mary’s Abbey, beginning a process of monastic formation that would last over thirty years. A critical element of this transition was the adoption of his monastic name, "Elias," replacing his birth name, "Richard". While the taking of a new name is a standard tradition in Benedictine life signifying a "new man" in Christ, survivor advocates have scrutinized this practice in Lorenzo’s case. They argue that the change of name, coupled with the change of religious orders, may have served to obscure earlier records or allegations, a process often termed "institutional rehabilitation".
                            </p>
                            <p className="font-body text-lg text-foreground/80 leading-relaxed">
                                Lorenzo made his first monastic profession on March 21, 1985, committing to the Benedictine vows of stability, fidelity to the monastic way of life, and obedience. He was ordained to the priesthood on June 24, 1989, by Bishop Frank Joseph Rodimer of the Diocese of Paterson. Rodimer himself was later named in the 2018 Pennsylvania Grand Jury report and faced significant criticism for his handling of abuse cases, adding a layer of historical complexity to Lorenzo’s ordination.
                            </p>
                            <p className="font-body text-lg text-foreground/80 leading-relaxed">
                                Following his ordination, Lorenzo’s career followed a dual track: he became an essential administrator at the Delbarton School while simultaneously rising through the ranks of the monastic community at St. Mary’s Abbey. His academic pursuits during this time—a Master’s in Liturgical Theology from St. John’s University and a Master’s in Counseling Psychology from Seton Hall University—positioned him as a versatile leader capable of addressing both the spiritual and psychological needs of a modern religious institution. These credentials eventually led to his appointment as the Prior of St. Mary’s Abbey in 1995, making him the second-highest authority in the monastery during a period that is now the subject of intense litigation regarding historical abuse.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="font-heading text-3xl text-foreground uppercase border-l-4 border-destructive pl-4">Administrative Leadership at Delbarton School: 1983–2011</h3>
                            <p className="font-body text-lg text-foreground/80 leading-relaxed">
                                Lorenzo’s association with the Delbarton School—an elite Benedictine college-preparatory school—is perhaps the most scrutinized period of his career. He began teaching at Delbarton in 1983, the same year he entered the abbey. Over the next three decades, he held nearly every significant leadership position at the school, influencing its culture, its fundraising, and its governance.
                            </p>
                            <ul className="space-y-2 font-body text-lg text-foreground/80 list-disc ml-6">
                                <li>Teacher and Chairman of the Religious Studies Department.</li>
                                <li>Director of Campus Ministry.</li>
                                <li>Member of the Board of Trustees.</li>
                                <li>Vice President for Development and External Affairs.</li>
                            </ul>
                            <p className="font-body text-lg text-foreground/80 leading-relaxed">
                                The Delbarton School is a high-profile institution, with tuition rates reaching nearly $50,000 annually and an alumni base that includes the children of governors and Hollywood stars. As Vice President, Lorenzo was the "public face" of the school, engaging in international medical missions with Operation Smile and managing relationships with elite donors. However, while Lorenzo was overseeing the school’s development and external affairs, a "culture of silence" allegedly permitted the continued presence of predatory clergy within the school and abbey.
                            </p>
                            <p className="font-body text-lg text-foreground/80 leading-relaxed">
                                In 2018, the Order of St. Benedict of New Jersey released a public letter acknowledging that 30 victims had come forward alleging abuse by 13 different monks and one lay teacher between 1968 and 1999. Many of these years overlap directly with Lorenzo's tenure as a teacher, trustee, and Prior. Advocacy groups like SNAP have specifically called into question how Lorenzo, in his capacity as Prior (second-in-command) and a trustee, could have remained unaware of the behaviors of his confreres, such as the Rev. Timothy Brennan and the Rev. Richard Lott.
                            </p>
                        </div>

                        <div className="border border-border rounded-lg overflow-hidden bg-black/50">
                            <table className="w-full text-left font-body">
                                <thead>
                                    <tr className="bg-muted/50 border-b border-border">
                                        <th className="p-4 font-mono text-sm uppercase text-muted-foreground tracking-widest w-1/6">Decade</th>
                                        <th className="p-4 font-mono text-sm uppercase text-muted-foreground tracking-widest w-1/3">Lorenzo's Primary Roles</th>
                                        <th className="p-4 font-mono text-sm uppercase text-muted-foreground tracking-widest">Key Abuse Scandal Context</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border text-foreground/80">
                                    <tr className="hover:bg-muted/20 transition-colors">
                                        <td className="p-4 font-mono text-xs whitespace-nowrap">1980s</td>
                                        <td className="p-4 text-sm font-bold">Teacher, Campus Minister</td>
                                        <td className="p-4 text-sm text-destructive">Brennan's guilty plea (1987); continued reports of Lott's misconduct.</td>
                                    </tr>
                                    <tr className="hover:bg-muted/20 transition-colors">
                                        <td className="p-4 font-mono text-xs whitespace-nowrap">1990s</td>
                                        <td className="p-4 text-sm font-bold">Prior of the Abbey, Rector</td>
                                        <td className="p-4 text-sm text-destructive">Continued reports of abuse; alleged institutional "silencing" of victims.</td>
                                    </tr>
                                    <tr className="hover:bg-muted/20 transition-colors">
                                        <td className="p-4 font-mono text-xs whitespace-nowrap">2000s</td>
                                        <td className="p-4 text-sm font-bold">VP for Development, Board Member</td>
                                        <td className="p-4 text-sm">First waves of settlements; Praesidium accreditation initiated.</td>
                                    </tr>
                                    <tr className="hover:bg-muted/20 transition-colors">
                                        <td className="p-4 font-mono text-xs whitespace-nowrap">2010s</td>
                                        <td className="p-4 text-sm font-bold">Abbot President (Global)</td>
                                        <td className="p-4 text-sm">Release of the 2018 public letter acknowledging 30 victims.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="space-y-6">
                            <p className="font-body text-lg text-foreground/80 leading-relaxed">
                                The case of the Rev. Timothy Brennan is particularly illustrative of the institutional failures during this era. Brennan pleaded guilty in 1987 to aggravated sexual contact with a 15-year-old student, yet he remained a member of the community under "undisclosed restrictions" for years. According to court documents, Brennan eventually admitted to abusing approximately 50 boys. Critics argue that as Prior of the Abbey starting in 1995, Lorenzo would have had direct supervisory responsibility for the living arrangements and restrictions placed on such members of the community.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="font-heading text-3xl text-foreground uppercase border-l-4 border-destructive pl-4">The Praesidium Accreditation and the Conflict of Advocacy</h3>
                            <p className="font-body text-lg text-foreground/80 leading-relaxed">
                                One of the most complex chapters in Lorenzo’s career involves his work with Praesidium, Inc., an independent risk management firm that specializes in "safe environment" protocols for religious and youth-serving organizations. Lorenzo served as canonical counsel for Praesidium and later on its advisory board. He was the primary architect of the effort to have St. Mary’s Abbey and Delbarton School accredited by Praesidium, a goal that was achieved for the abbey in 2008 and for the school in 2019.
                            </p>
                            <p className="font-body text-lg text-foreground/80 leading-relaxed">
                                From the perspective of the Delbarton administration, this work demonstrates Lorenzo’s commitment to safety and modern accountability. Headmaster Fr. Michael Tidd, O.S.B., has defended Lorenzo, characterizing his role as an instrumental "impactful leadership role in abuse prevention". Tidd noted that Lorenzo was key in establishing an independent review board led by the late New Jersey Supreme Court Justice Marie Garibaldi to resolve abuse claims. The school portrays Lorenzo as a "reformer" who brought professional oversight to a previously insular monastic environment.
                            </p>
                            <p className="font-body text-lg text-foreground/80 leading-relaxed">
                                However, survivor advocates and whistleblowers offer a different interpretation. They contend that Lorenzo’s dual role—as a high-level leader of the abbey being accredited and as a canonical consultant for the accrediting body—created a significant conflict of interest. Mark Crawford and Billy Crane, a survivor who settled a case with Delbarton in 2018, argue that Lorenzo’s expertise was used to "avert liability" rather than achieve true transparency. Crane has asserted that Lorenzo was responsible for "aiding and abetting the culture" and was "rewarded for the protection of the accepted culture" of the abbey.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="font-heading text-3xl text-foreground uppercase border-l-4 border-destructive pl-4">Whistleblowers and the "Under the Green Wave" Testimony</h3>
                            <p className="font-body text-lg text-foreground/80 leading-relaxed">
                                The investigation into Lorenzo’s administrative history is further complicated by the emergence of whistleblowers who have challenged the abbey's narrative of transparency. The website "Under the Green Wave" has published testimonies from former employees and associates of St. Mary’s Abbey. One former employee, who worked in the business office during the 1990s, described a pervasive "climate of silence and secrecy" regarding financial and personnel matters. This employee specifically questioned Lorenzo’s transition into a role focused on "protecting the rights and safety of children," suggesting a disconnect between the public reform efforts and the internal monastic culture of that decade.
                            </p>
                            <p className="font-body text-lg text-foreground/80 leading-relaxed">
                                The name of Patric Wall, a well-known whistleblower and advocate for survivors of clergy abuse, has also been linked to inquiries into St. Mary’s Abbey. Wall has long argued that religious orders like the Benedictines use their autonomous "pontifical right" status to shield themselves from diocesan and public scrutiny. In the context of Delbarton, Wall’s advocacy has centered on the alleged failure of the abbey to disclose the full extent of its knowledge regarding predators like Timothy Brennan and Richard Lott to the parents of students. The presence of these whistleblower claims highlights the persistent tension between the abbey's "self-regulated" safety protocols and the demands for independent, external oversight.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="font-heading text-3xl text-foreground uppercase border-l-4 border-destructive pl-4">Global Leadership and the American-Cassinese Presidency</h3>
                            <p className="font-body text-lg text-foreground/80 leading-relaxed">
                                Despite the mounting legal challenges facing St. Mary’s Abbey, Lorenzo’s career continued to ascend within the global Benedictine Confederation. In 2009, he was appointed Prior of the Primatial Abbey of Sant'Anselmo in Rome, the international headquarters for the Benedictine Order. This role involved the day-to-day management of an international community of monks from over 30 countries and acting as a bridge between the Benedictines and the Vatican.
                            </p>
                            <p className="font-body text-lg text-foreground/80 leading-relaxed">
                                His tenure in Rome was followed by his election in 2016 as the Abbot President of the American-Cassinese Congregation. As Abbot President, Lorenzo held canonical authority over a federation of 25 monasteries and 23 schools across the Americas. In this capacity, he was a member of the Union of Superiors General and the Conference of Major Superiors of Men, placing him at the highest levels of global Catholic governance. He was also a founding member and President of the International Commission for Benedictine Education (ICBE), visiting dozens of schools worldwide to evaluate their adherence to Benedictine values.
                            </p>
                            <p className="font-body text-lg text-foreground/80 leading-relaxed">
                                This period of global leadership further insulated Lorenzo from the local scandals in New Jersey, while simultaneously building the resume that would make him a prime candidate for the episcopacy. His proponents argue that his "personnel work" and "governance experience" on a global scale made him an ideal choice for a bishop’s role in a large, complex archdiocese. However, critics see this as a continuation of the "rebranding" process, where his successes in Rome and on the international stage were used to overshadow the unresolved grievances of survivors in Morristown.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="font-heading text-3xl text-foreground uppercase border-l-4 border-destructive pl-4">Elevation to the Newark Episcopacy and Continued Criticism</h3>
                            <p className="font-body text-lg text-foreground/80 leading-relaxed">
                                On February 27, 2020, Pope Francis named Abbot Elias Lorenzo as an Auxiliary Bishop for the Archdiocese of Newark. He was assigned to serve as the Regional Bishop for Union County, a diverse area with significant pastoral and administrative needs. His consecration, delayed by the COVID-19 pandemic, took place on June 30, 2020, at the Cathedral Basilica of the Sacred Heart in Newark.
                            </p>
                            <p className="font-body text-lg text-foreground/80 leading-relaxed">
                                Cardinal Joseph W. Tobin, the Archbishop of Newark, has defended the appointment, describing Lorenzo and the other new auxiliary bishops as "principal partners" in his ministry. Lorenzo himself has reflected on his new role as an opportunity to build relationships and apply his personnel experience to the "problems that surface in the lives of our priests".
                            </p>
                            <p className="font-body text-lg text-foreground/80 leading-relaxed">
                                The appointment was met with immediate and vocal criticism from SNAP and other survivor advocacy groups. They argued that the elevation of a leader from an abbey currently facing dozens of abuse lawsuits was a "slap in the face" to victims. The criticism has only intensified as Lorenzo is now mentioned by "insiders" as a potential candidate to succeed Cardinal Tobin when he reaches the mandatory retirement age in May 2027. If Lorenzo were to become the Archbishop of Newark, he would be one of the most powerful Catholic leaders in the United States, a prospect that SNAP has called on the Vatican to prevent.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="font-heading text-3xl text-foreground uppercase border-l-4 border-destructive pl-4">Landmark Legal Verdicts and the 2025 Grand Jury Investigation</h3>
                            <p className="font-body text-lg text-foreground/80 leading-relaxed">
                                The legal environment surrounding Bishop Lorenzo and the Delbarton School took a dramatic turn in late 2025. Following the extension of the statute of limitations under the New Jersey Child Victims Act, the first civil trial involving the Catholic Church in the state reached a verdict. In October 2025, a jury awarded $5 million in damages to a former Delbarton student, identified as T.M., who was sexually abused by the Rev. Richard Lott in 1975. T.M. testified that Lott plied him with liquor at an off-campus New Year's Eve party before taking him to a barn on school grounds where Lott resided.
                            </p>
                            <p className="font-body text-lg text-foreground/80 leading-relaxed">
                                The trial was a watershed moment, as it was determined that the Order of St. Benedict of New Jersey was responsible for $3.25 million of the compensatory damages, reflecting a finding that the school and its leadership—roles Lorenzo held for decades—had failed to protect the student. This verdict has paved the way for the 38 other pending lawsuits against the school to proceed.
                            </p>
                            <p className="font-body text-lg text-foreground/80 leading-relaxed">
                                Furthermore, in June 2025, the New Jersey Supreme Court issued a unanimous ruling that cleared the way for a special grand jury investigation into alleged sexual abuse and cover-ups by Catholic clergy across the state. The investigation is expected to include a thorough review of the files at St. Mary’s Abbey and the Delbarton School, with reports suggesting that the Attorney General’s office has already gathered "hundreds of thousands of pages" of documents.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Legal/Media Milestones */}
                <section className="pt-8 border-t border-border mt-8">
                    <div className="max-w-4xl space-y-8">
                        <div className="space-y-4">
                            <h2 className="font-heading text-4xl text-foreground uppercase">Legal/Media Milestones</h2>
                            <p className="font-body text-xl text-muted-foreground leading-relaxed">
                                A timeline of critical legal rulings and media investigations concerning the Newark Archdiocese and Delbarton.
                            </p>
                        </div>

                        <div className="border border-border rounded-lg overflow-hidden bg-black/50">
                            <table className="w-full text-left font-body">
                                <thead>
                                    <tr className="bg-muted/50 border-b border-border">
                                        <th className="p-4 font-mono text-sm uppercase text-muted-foreground tracking-widest w-1/4">Legal/Media Milestone</th>
                                        <th className="p-4 font-mono text-sm uppercase text-muted-foreground tracking-widest w-1/6">Date</th>
                                        <th className="p-4 font-mono text-sm uppercase text-muted-foreground tracking-widest">Significance</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border text-foreground/80">
                                    <tr className="hover:bg-muted/20 transition-colors">
                                        <td className="p-4 font-mono text-sm font-bold text-foreground">Child Victims Act</td>
                                        <td className="p-4 text-sm whitespace-nowrap">2019</td>
                                        <td className="p-4 text-sm">Opened a window for decades-old abuse claims to be filed in NJ.</td>
                                    </tr>
                                    <tr className="hover:bg-muted/20 transition-colors">
                                        <td className="p-4 font-mono text-sm font-bold text-foreground">Appointment to Newark</td>
                                        <td className="p-4 text-sm whitespace-nowrap">Feb 2020</td>
                                        <td className="p-4 text-sm">Lorenzo becomes Auxiliary Bishop despite pending lawsuits against his abbey.</td>
                                    </tr>
                                    <tr className="hover:bg-muted/20 transition-colors">
                                        <td className="p-4 font-mono text-sm font-bold text-foreground">2018 Public Letter</td>
                                        <td className="p-4 text-sm whitespace-nowrap">July 2018</td>
                                        <td className="p-4 text-sm">Delbarton acknowledges 30 victims and 13 accused monks.</td>
                                    </tr>
                                    <tr className="hover:bg-muted/20 transition-colors">
                                        <td className="p-4 font-mono text-sm font-bold text-foreground">Supreme Court Ruling</td>
                                        <td className="p-4 text-sm whitespace-nowrap">June 2025</td>
                                        <td className="p-4 text-sm font-bold text-destructive">Allows the statewide grand jury investigation to proceed into all NJ dioceses.</td>
                                    </tr>
                                    <tr className="hover:bg-muted/20 transition-colors bg-destructive/5">
                                        <td className="p-4 font-mono text-sm font-bold text-destructive">T.M. vs. Delbarton Verdict</td>
                                        <td className="p-4 text-sm text-destructive whitespace-nowrap font-bold">Oct 2025</td>
                                        <td className="p-4 text-sm text-destructive font-bold">$5 million award; first civil trial against the Church in NJ history.</td>
                                    </tr>
                                    <tr className="hover:bg-muted/20 transition-colors">
                                        <td className="p-4 font-mono text-sm font-bold text-foreground">NY Post Exposé</td>
                                        <td className="p-4 text-sm whitespace-nowrap">Aug 2025</td>
                                        <td className="p-4 text-sm">Highlighted Lorenzo's role at Delbarton and his potential candidacy for Cardinal.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <div className="flex justify-end mt-12 pt-8">
                    <Link href="/endgame/lorenzo/expulsion" asChild>
                        <Button size="lg" className="font-mono uppercase tracking-widest rounded-none border-2 border-foreground hover:bg-foreground hover:text-background transition-all">
                            Proceed to Section 02 <span className="ml-2">→</span>
                        </Button>
                    </Link>
                </div>
            </div>);
}
