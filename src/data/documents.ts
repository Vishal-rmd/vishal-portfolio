export interface DocumentItem {
  id: string;
  title: string;
  category: 'certificate' | 'academic';
  url: string;
  buttonLabel: string;
}

export const certificates: DocumentItem[] = [
  {
    id: 'oracle-certification',
    title: 'Oracle Certification',
    category: 'certificate',
    url: '',
    buttonLabel: 'View Certificate',
  },
  {
    id: 'nptel-certification-1',
    title: 'NPTEL Certification 1',
    category: 'certificate',
    url: '',
    buttonLabel: 'View Certificate',
  },
  {
    id: 'nptel-certification-2',
    title: 'NPTEL Certification 2',
    category: 'certificate',
    url: '',
    buttonLabel: 'View Certificate',
  },
];

export const academicDocuments: DocumentItem[] = [
  {
    id: 'class-x-marksheet',
    title: 'Class X Marksheet',
    category: 'academic',
    url: '',
    buttonLabel: 'View Document',
  },
  {
    id: 'class-xii-marksheet',
    title: 'Class XII Marksheet',
    category: 'academic',
    url: '',
    buttonLabel: 'View Document',
  },
  {
    id: 'semester-i-marksheet',
    title: 'Semester I Marksheet',
    category: 'academic',
    url: '',
    buttonLabel: 'View Document',
  },
  {
    id: 'semester-ii-marksheet',
    title: 'Semester II Marksheet',
    category: 'academic',
    url: '',
    buttonLabel: 'View Document',
  },
  {
    id: 'semester-iii-marksheet',
    title: 'Semester III Marksheet',
    category: 'academic',
    url: '',
    buttonLabel: 'View Document',
  },
  {
    id: 'semester-iv-marksheet',
    title: 'Semester IV Marksheet',
    category: 'academic',
    url: '',
    buttonLabel: 'View Document',
  },
  {
    id: 'supplementary-exam-clearance',
    title: 'Supplementary Examination Clearance Result',
    category: 'academic',
    url: '',
    buttonLabel: 'View Document',
  },
];
