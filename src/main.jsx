import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight, Download, Mail, MapPin, GraduationCap, Target, Heart,
  Code2, Database, BrainCircuit, Cloud, ExternalLink,
  Menu, X, Sparkles, BriefcaseBusiness, ChevronUp,
  BarChart3, GitBranch, HardDrive, Monitor, TerminalSquare,
  CalendarDays, Megaphone, Users
} from 'lucide-react';
import './styles.css';

const navItems = [
  ['accueil', 'Accueil'], ['apropos', 'À propos'], ['competences', 'Compétences'], ['engagements', 'Engagements'],
  ['projets', 'Projets'], ['experiences', 'Expériences'], ['formation', 'Formation'], ['contact', 'Contact']
];

const skills = [
  { title: 'Développement', icon: Code2, tone: 'pink', items: ['Java / Spring Boot', 'Python', 'React.js', 'TypeScript', 'C++', 'Git / GitHub'] },
  { title: 'Data & BI', icon: Database, tone: 'purple', items: ['SQL', 'Power BI', 'Talend', 'PostgreSQL', 'Oracle', 'Bases de données'] },
  { title: 'IA & Data', icon: BrainCircuit, tone: 'mint', items: ['Python', 'Analyse de données', 'APIs', 'Traitement de données', 'FastAPI', 'Projets orientés IA'] },
  { title: 'DevOps & environnements', icon: Cloud, tone: 'yellow', items: ['Git / GitHub', 'Linux', 'APIs & services', 'Environnements de développement', 'Travail en équipe', 'Découverte des pratiques DevOps'] },
];

const projects = [
  {
    title: 'Application Drosophila suzukii — INRAE', type: 'Application mobile', tone: 'green', icon: '✦',
    text: 'Application mobile permettant de sélectionner des parcelles et de communiquer avec un service Python/FastAPI autour de la prédiction du risque de Drosophila suzukii.',
    tags: ['React Native', 'Expo', 'Python', 'FastAPI']
  },
  {
    title: 'Tableaux de bord Power BI', type: 'Data & BI', tone: 'blue', icon: '▥',
    text: 'Création de tableaux de bord interactifs pour transformer des données en indicateurs lisibles et faciliter leur analyse.',
    tags: ['Power BI', 'DAX', 'SQL']
  },
  {
    title: 'Gestion de base de données', type: 'Bases de données', tone: 'cyan', icon: '◉',
    text: 'Conception et requêtage de bases de données pour stocker, manipuler et analyser des données dans différents contextes de projet.',
    tags: ['SQL', 'PostgreSQL', 'Oracle']
  },
  {
    title: 'ERP / site AJEGT', type: 'Projet web', tone: 'beige', icon: '⌘',
    text: 'Conception d’un outil web pour historiser les bureaux, événements et informations d’une association étudiante.',
    tags: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
    link: 'https://github.com/OTabara/erp-ajegt'
  },
];

const tools = [
  { name: 'Power BI', icon: BarChart3 },
  { name: 'SQL', icon: Database },
  { name: 'Python', icon: BrainCircuit },
  { name: 'Java', icon: Code2 },
  { name: 'React', icon: Monitor },
  { name: 'PostgreSQL', icon: HardDrive },
  { name: 'Talend', icon: Cloud },
  { name: 'Git', icon: GitBranch },
  { name: 'VS Code', icon: TerminalSquare },
];

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    const sections = navItems
      .map(([id]) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.25, 0.5, 1] }
    );
    sections.forEach((section) => observer.observe(section));
    window.addEventListener('scroll', onScroll);
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onKeyDown);
      observer.disconnect();
    };
  }, []);

  const go = (id) => { scrollToId(id); setMenuOpen(false); };

  return (
    <div className="page">
      <header className="nav">
        <a className="brand" href="#accueil" aria-label="Accueil">
          <span>OT</span>D
        </a>
        <nav id="main-navigation" className={menuOpen ? 'open' : ''}>
          {navItems.map(([id, label]) => <button className={activeSection === id ? 'active' : ''} aria-current={activeSection === id ? 'page' : undefined} key={id} onClick={() => go(id)}>{label}</button>)}
        </nav>
        <a className="cv" href="/cv.pdf" download>
          <Download size={16} /> Télécharger mon CV
        </a>
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section id="accueil" className="hero">
          <div className="blob blob-left" />
          <div className="blob blob-top" />
          <div className="blob blob-bottom" />
          <div className="hero-copy">
            <div className="script">Hello ! <Sparkles size={18} /></div>
            <h1>Oumou Tabara<br /><strong>DIALLO</strong></h1>
            <h2>Étudiante en Master 2 MIAGE <span>|</span> Développement • Data • IA • DevOps</h2>
            <p>
              Curieuse et polyvalente, je m’intéresse aux différentes facettes de l’informatique.
              Je recherche un stage de fin d’études d’une durée minimale de 5 mois à partir de mi-mars,
              afin de mettre mes compétences en pratique, découvrir de nouvelles technologies et contribuer à des projets concrets.
            </p>
            <div className="actions">
              <button className="primary" onClick={() => go('projets')}>Voir mes projets <ArrowRight size={17} /></button>
              <a className="secondary" href="/cv.pdf" download><Download size={17} /> Mon CV</a>
              <a className="secondary" href="mailto:doumoutabara@gmail.com"><Mail size={17} /> Me contacter</a>
              <a className="secondary social-link" href="https://www.linkedin.com/in/tabara/" target="_blank" rel="noreferrer"><ExternalLink size={17} /> LinkedIn</a>
              <a className="secondary social-link" href="https://github.com/OTabara" target="_blank" rel="noreferrer"><ExternalLink size={17} /> GitHub</a>
            </div>
          </div>

          <div className="portrait-wrap">
            <div className="portrait-frame">
              <img
                src="/images/oumou.jpg"
                alt="Portrait d'Oumou Tabara Diallo"
                width="1152"
                height="2048"
                decoding="async"
                fetchPriority="high"
                onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement.classList.add('empty'); }}
              />
              <div className="portrait-fallback">Ta photo ici</div>
              <div className="code-overlay" style={{ top: '16px', right: '14px', left: 'auto', bottom: 'auto', width: '190px', borderRadius: 0 }} aria-label="Extrait de code">
                <div className="code-header" aria-hidden="true">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <pre>{`const developer = {
  name: "Oumou",
  skills: ["Data", "IA", "Dev"],
  passion: true
};`}</pre>
              </div>
            </div>
            <div className="hand-note note-one">Code<br />Data<br />AI ✦</div>
            <div className="mini-card card-one"><span>▥</span><small>Analytics</small></div>
            <div className="mini-card card-two"><span>⌁</span><small>Projects</small></div>
          </div>
        </section>

        <section className="quick section">
          <Info icon={GraduationCap} title="Master 2 MIAGE" sub="Université Toulouse Capitole" badge="En cours" />
          <Info icon={MapPin} title="Mobile" sub="Toulouse et autres régions" badge="Mobilité possible" />
          <Info icon={Target} title="Stage de fin d’études" sub="À partir de mi-mars • 5 mois minimum" badge="Développement • IA • Data • DevOps" />
          <Info icon={Heart} title="Ce qui me motive" sub="Apprendre, créer, résoudre" badge="Curiosité • Équipe" />
        </section>

        <section id="apropos" className="about section two-col">
          <div>
            <SectionTitle icon="◯" title="À propos de moi" />
            <p>Titulaire d’un parcours mêlant <b>AES</b> et <b>MIASHS</b>, j’ai développé une double compréhension des enjeux métiers et des aspects techniques de l’informatique.</p>
            <p>Aujourd’hui en <b>Master 2 MIAGE</b> à l’Université Toulouse Capitole, je développe mes compétences en développement, données et technologies émergentes.</p>
            <p>Je recherche un stage en informatique dans lequel je pourrai apprendre, prendre des responsabilités et participer à la réalisation de solutions concrètes.</p>
            <div className="handnote">→ La curiosité est mon moteur<br />et chaque projet est une occasion d’apprendre ! ♡</div>
          </div>
          <div id="competences">
            <SectionTitle icon="✣" title="Mes compétences" />
            <div className="skill-grid">
              {skills.map(s => <div className={`skill ${s.tone}`} key={s.title}>
                <s.icon size={25} /><h3>{s.title}</h3>
                <ul>{s.items.map(x => <li key={x}>{x}</li>)}</ul>
              </div>)}
            </div>
          </div>
        </section>

        <section className="tools section">
          <SectionTitle icon="▣" title="Mes outils favoris" />
          <div className="tool-list">
            {tools.map(({ name, icon: Icon }) => (
              <div className="tool-item" key={name}>
                <span className="tool-icon"><Icon size={18} /></span>
                <span>{name}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="engagements" className="engagement section">
          <SectionTitle icon="♡" title="Mes engagements associatifs" />

          <div className="association-card">
            <div className="association-header">
              <div className="association-logo">AJEGT</div>

              <div className="association-meta">
                <div className="association-title-row">
                  <h3>Association des Jeunes et Étudiants Guinéens de Toulouse</h3>
                  <span className="association-mini"><Users size={14} /></span>
                </div>
                <p>AJEGT · Toulouse</p>
              </div>
            </div>

            <p className="association-intro">
              Mon engagement au sein de l’AJEGT me permet de participer à la vie associative étudiante tout en développant mes compétences en organisation, communication, gestion de projets et travail en équipe.
            </p>

            <div className="association-roles">
              <div className="association-role">
                <div className="association-icon event">
                  <CalendarDays size={22} />
                </div>

                <div>
                  <div className="role-top">
                    <h4>Responsable adjointe du pôle événementiel</h4>
                    <span>2025 – 2026</span>
                  </div>

                  <p>
                    Participation à la conception et à l’organisation des événements de l’association, coordination des activités et collaboration avec les différents membres du bureau.
                  </p>

                  <div className="association-tags">
                    <span>Organisation</span>
                    <span>Événementiel</span>
                    <span>Coordination</span>
                    <span>Travail en équipe</span>
                  </div>
                </div>
              </div>

              <div className="association-role">
                <div className="association-icon communication">
                  <Megaphone size={22} />
                </div>

                <div>
                  <div className="role-top">
                    <h4>Chargée de communication</h4>
                    <span>2026 – aujourd’hui</span>
                  </div>

                  <p>
                    Participation à la stratégie de communication de l’association, création de contenus pour les réseaux sociaux, promotion des événements et développement de la visibilité de l’AJEGT.
                  </p>

                  <div className="association-tags">
                    <span>Communication</span>
                    <span>Réseaux sociaux</span>
                    <span>Création de contenu</span>
                    <span>Organisation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projets" className="projects section">
          <div className="section-head"><SectionTitle icon="✎" title="Mes projets" /><button onClick={() => go('contact')} className="text-btn">Parlons-en <ArrowRight size={15} /></button></div>
          <div className="project-grid">
            {projects.map((p, i) => <article className="project" key={p.title}>
              <div className={`project-image ${p.tone}`}>
                <span>{p.type}</span><div className="fake-visual">{p.icon}</div>
                <div className="project-number">0{i + 1}</div>
              </div>
              <div className="project-body"><h3>{p.title}</h3><p>{p.text}</p><div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>{p.link && <a className="project-link" href={p.link} target="_blank" rel="noreferrer"><ExternalLink size={14} /> Voir sur GitHub</a>}</div>
            </article>)}
          </div>
        </section>

        <section id="experiences" className="experience section">
          <SectionTitle icon="◒" title="Expériences" />
          <div className="timeline">
            <Timeline icon={BriefcaseBusiness} title="INRAE — Stage / projet" date="2025" text="Développement d’une application mobile autour de la donnée agricole et intégration avec un service Python/FastAPI." />
            <Timeline title="Temakinho — Responsable salle" date="2024" text="Organisation du service, accompagnement de l’équipe, relation client et adaptation dans un environnement dynamique." />
            <Timeline title="KFC — Équipière polyvalente" date="2023–2025" text="Travail en équipe, relation client, polyvalence et adaptation dans un environnement rythmé." />
          </div>
        </section>

        <section id="formation" className="formation section">
          <SectionTitle icon="⌂" title="Formation" />
          <div className="education">
            <div><b>Master 2 MIAGE — Ingénierie des Données et Analyses</b><span>Université Toulouse Capitole · En cours</span></div>
            <div><b>Licence MIASHS</b><span>Université Toulouse II — Jean Jaurès</span></div>
            <div><b>Licence AES</b><span>Université Lumière Lyon 2</span></div>
          </div>
        </section>

        <section id="contact" className="contact section">
          <div><h2>Une question ? Une opportunité ?</h2><p>Je recherche un stage de fin d’études de 5 mois minimum à partir de mi-mars et je suis mobile. N’hésitez pas à me contacter, je serai ravie d’échanger avec vous.</p><a className="contact-btn" href="mailto:doumoutabara@gmail.com"><Mail size={17} /> Me contacter</a></div>
          <div className="contact-links">
            <a href="mailto:doumoutabara@gmail.com"><Mail /> doumoutabara@gmail.com</a>
            <a href="https://www.linkedin.com/in/tabara/" target="_blank" rel="noreferrer"><ExternalLink /> LinkedIn</a>
            <a href="https://github.com/OTabara" target="_blank" rel="noreferrer"><ExternalLink /> GitHub</a>
          </div>
        </section>
      </main>

      <footer><span>Oumou Tabara DIALLO</span><span>Développement ✦ Data ✦ IA ✦ DevOps</span><button onClick={() => scrollToId('accueil')}><ChevronUp size={16} /></button></footer>
      {showTop && <button className="floating-top" onClick={() => scrollToId('accueil')} aria-label="Retour en haut"><ChevronUp size={18} /></button>}
    </div>
  );
}

function Info({ icon: Icon, title, sub, badge }) { return <div className="info"><Icon /><div><b>{title}</b><span>{sub}</span><em>{badge}</em></div></div>; }
function Timeline({ icon: Icon = BriefcaseBusiness, title, date, text }) { return <div className="timeline-item"><div className="timeline-icon"><Icon size={17} /></div><div><div className="timeline-top"><b>{title}</b><em>{date}</em></div><span>{text}</span></div></div>; }
function SectionTitle({ icon, title }) { return <div className="section-title"><span>{icon}</span><h2>{title}</h2></div>; }

createRoot(document.getElementById('root')).render(<App />);
