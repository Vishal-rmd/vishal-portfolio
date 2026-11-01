import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Education from '@/sections/Education';
import Skills from '@/sections/Skills';
import Projects from '@/sections/Projects';
import Certifications from '@/sections/Certifications';
import AcademicRecords from '@/sections/AcademicRecords';
import Contact from '@/sections/Contact';
import { useScrollReveal, useActiveSection } from '@/hooks/useScrollReveal';

const SECTION_IDS = [
  'home',
  'about',
  'education',
  'skills',
  'projects',
  'certifications',
  'academic-records',
  'contact',
];

export default function App() {
  const rootRef = useScrollReveal();
  const activeId = useActiveSection(SECTION_IDS);

  return (
    <div ref={rootRef}>
      <Navbar activeId={activeId} />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <AcademicRecords />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
