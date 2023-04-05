const about = {
  // all the properties are optional - can be left empty or deleted
  title: 'Kelly Karner',
  role: 'Front End Developer',
  description:
    'Responsive design with security in mind.',
  resume: './src/assets/pdf/KellyKarner_SoftwareDeveloper_Resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/kelly-karner/',
    github: 'https://github.com/earthbound-misfit',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    title: 'E-Commerce Web Application',
    image: './src/assets/img/wanderlust.png',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['React', 'JavaScript', 'Sass', 'Redux', ''],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    title: 'AWS Cloud Portfolio',
    image: './src/assets/img/awscloudportfolio.png',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['TypeScript', 'React', 'Mantine', 'CSS', 'Vite'],
    sourceCode: 'https://github.com/earthbound-misfit/kelly-karner-portfolio',
    livePreview: 'http://127.0.0.1:5173/',
  },
  {
    title: 'CarShare Application',
    image: './src/assets/img/carshare.png',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['TypeScript', 'React', 'HTML', 'CSS', 'Material UI', 'Python', 'Flask'],
    sourceCode: 'https://github.com/earthbound-misfit/carshare-dashboard',
    livePreview: 'https://classic-carshare-react.firebaseapp.com/',
  },
  {
    title: 'BookWorm',
    image: './src/assets/img/bookworm.png',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['TypeScript', 'React', 'Python', 'Flask', 'CSS', 'Material UI'],
    sourceCode: 'https://github.com/earthbound-misfit/bookshare-react-app',
    livePreview: 'https://bookworm-1e548.firebaseapp.com/',
  },
  
]

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Vite',
  'HTML',
  'CSS',
  'Sass',
  'Bootstrap',
  'Mantine',
  'Material UI',
  'Redux',
  'Python',
  'SQL',
  'PostgreSQL',
  'Firebase',
  'Git/Github',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'kellymkarner@gmail.com',
}

export { about, projects, skills, contact }