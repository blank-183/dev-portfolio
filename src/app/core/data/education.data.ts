import { Education } from '../models/education.model';

export const EDUCATION: readonly Education[] = [
  {
    id: 'bachelor-computer-science',
    level: "Bachelor's Degree",
    degree: 'Bachelor of Science in Computer Science',
    school: 'Bicol University',
    startDate: 'June 2018',
    endDate: 'July 2022',
    location: 'Philippines',
    grade: '1.6878',
    honors: ['Cum Laude', "Dean's Lister - 3 Semesters", "President's Lister - 1 Semester"],
    skills: ['Java', 'Python', 'C', 'C++', 'MySQL'],
    thesis: {
      title:
        'Handwritten Text Recognition of Medical Prescription Using Convolutional Recurrent Neural Network',
      description:
        'Developed an ML-based WebView application that extracts handwritten text from medical prescriptions and converts it into readable digital text.',
      technologies: ['TensorFlow', 'Keras', 'OpenCV', 'Python', 'Flask', 'JavaScript'],
    },
    displayOrder: 1,
  },
  {
    id: 'senior-high-school',
    level: 'Senior High School',
    strand: 'STEM Track',
    school: 'Sorsogon State University',
    startDate: 'June 2016',
    endDate: 'April 2018',
    location: 'Philippines',
    honors: ['Grade 11 With Honors'],
    displayOrder: 2,
  },
];
