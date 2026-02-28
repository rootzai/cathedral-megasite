import React, { useEffect, useState } from "react";
import "../pages/epstein/epstein.css";

export default function EpsteinLayout({ children }: { children: React.ReactNode }) {
    const [activeSection, setActiveSection] = useState('front-page');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section[id], div[id="front-page"]');
            let current = 'front-page';
            sections.forEach((section) => {
                const sectionTop = (section as HTMLElement).offsetTop - 160;
                if (window.scrollY >= sectionTop) {
                    current = section.getAttribute('id') || 'front-page';
                }
            });
            setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const target = document.querySelector(id);
        if (target) {
            const offset = 80;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    return (
        <div className="epstein-theme flex min-h-screen" style={{ background: "var(--paper, #f4f0e8)" }}>
            <nav className="sidebar-nav" id="sidebar-nav">
                <div className="sidebar-logo">
                    <a href="/" style={{ display: 'block' }}>
                        <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030244666/ohgmPACCpypWjdfQ.png" alt="SodomHall.com" />
                    </a>
                    <div className="sidebar-site-label">Special Investigation</div>
                </div>
                <div className="sidebar-section-label">Contents</div>
                <a href="#front-page" className={activeSection === 'front-page' ? 'active' : ''} onClick={(e) => handleNavClick(e, '#front-page')}><span className="nav-num">&mdash;</span> Front Page</a>
                <a href="#timeline" className={activeSection === 'timeline' ? 'active' : ''} onClick={(e) => handleNavClick(e, '#timeline')}><span className="nav-num">01</span> Timeline</a>
                <a href="#money-trail" className={activeSection === 'money-trail' ? 'active' : ''} onClick={(e) => handleNavClick(e, '#money-trail')}><span className="nav-num">02</span> The Money Trail</a>
                <a href="#ruemmler" className={activeSection === 'ruemmler' ? 'active' : ''} onClick={(e) => handleNavClick(e, '#ruemmler')}><span className="nav-num">03</span> Ruemmler</a>
                <a href="#key-figures" className={activeSection === 'key-figures' ? 'active' : ''} onClick={(e) => handleNavClick(e, '#key-figures')}><span className="nav-num">04</span> Key Figures</a>
                <a href="#law-school" className={activeSection === 'law-school' ? 'active' : ''} onClick={(e) => handleNavClick(e, '#law-school')}><span className="nav-num">05</span> The Law School</a>
                <a href="#ropes-gray" className={activeSection === 'ropes-gray' ? 'active' : ''} onClick={(e) => handleNavClick(e, '#ropes-gray')}><span className="nav-num">06</span> Ropes & Gray</a>
                <a href="#payment-channels" className={activeSection === 'payment-channels' ? 'active' : ''} onClick={(e) => handleNavClick(e, '#payment-channels')}><span className="nav-num">07</span> Other Channels?</a>
                <a href="#open-questions" className={activeSection === 'open-questions' ? 'active' : ''} onClick={(e) => handleNavClick(e, '#open-questions')}><span className="nav-num">08</span> Open Questions</a>
                <a href="#sources" className={activeSection === 'sources' ? 'active' : ''} onClick={(e) => handleNavClick(e, '#sources')}><span className="nav-num">09</span> Sources</a>
                <div className="sidebar-footer">SodomHall.com<br />Special Investigation Series<br />Vol. III &mdash; Feb. 2026</div>
            </nav>
            <div className="flex-1" style={{ paddingLeft: '220px' }}>
                {children}
            </div>
        </div>
    );
}
