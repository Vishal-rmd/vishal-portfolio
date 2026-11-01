import ProjectCard from '@/components/ProjectCard';
import type { Project } from '@/components/ProjectCard';
import {
  ForestFireIllustration,
  BlockchainHealthIllustration,
  TraceSecIllustration,
} from '@/components/ProjectIllustrations';

const PROJECTS: Project[] = [
  {
    id: 'forest-fire-prediction',
    title: 'AI-Based Forest Fire Prediction System',
    description:
      'Developed an AI-based prediction system focused on identifying potential forest fire risks using Machine Learning techniques. Utilized Python and Scikit-learn for model development and data visualization tools to analyse and present meaningful patterns from the dataset.',
    technologies: ['Python', 'Scikit-learn', 'Machine Learning', 'Data Visualization'],
    illustration: <ForestFireIllustration />,
  },
  {
    id: 'blockchain-healthcare',
    title: 'Blockchain-Based Healthcare Data Access System',
    description:
      'Worked on a blockchain-based healthcare data access system using Ethereum technology. The project focuses on improving healthcare data security, integrity, transparency, and controlled information sharing.',
    technologies: ['Blockchain', 'Ethereum', 'Data Security'],
    illustration: <BlockchainHealthIllustration />,
  },
  {
    id: 'tracesec',
    title: 'TraceSec — AI-Based Security Incident Reconstruction Engine',
    description:
      'Worked on an AI-based security incident reconstruction concept designed to analyse security logs, correlate suspicious events across different sources, and reconstruct chronological attack timelines. The system aims to organize security evidence, provide incident insights, and support cybersecurity investigations through automated event correlation.',
    technologies: [
      'Artificial Intelligence',
      'Cybersecurity',
      'Log Analysis',
      'Event Correlation',
      'Security Incident Reconstruction',
    ],
    illustration: <TraceSecIllustration />,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-y border-[var(--border)] bg-[var(--bg-soft-blue)] py-20 sm:py-24"
    >
      <div className="section-container">
        <div className="reveal mb-12 text-center">
          <p className="section-eyebrow">Projects</p>
          <h2 className="section-title">Academic Projects</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <div key={project.id} className="reveal">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
