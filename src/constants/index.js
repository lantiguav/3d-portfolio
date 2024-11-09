import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  storyblok,
  laravel,
  fimed,
  popular,
  ogtic,
  newtech,
  bairesdev,
  awards2022,
  awards2023,
  awards2024,
  sitenav,
  linayvictor,
  calculators,
  websiteBuilder,
  christian,
  claudio,
  alirio,
  theBrandBoost,
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'Detail-oriented',
    icon: web,
  },
  {
    title: 'Collaborative',
    icon: mobile,
  },
  {
    title: 'Communicative',
    icon: backend,
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'Storyblok',
    icon: storyblok,
  },
  {
    name: 'Laravel',
    icon: laravel,
  },
]

const experiences = [
  {
    title: 'Software Engineer',
    company_name: 'BairesDev',
    icon: bairesdev,
    iconBg: '#383E56',
    date: 'Sep 2021 - Present',
    points: [
      'Developing and maintaining web applications using React.js, Laravel, Tailwind CSS and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Software Technical Lead',
    company_name: 'Newtech',
    icon: newtech,
    iconBg: '#E6DEDD',
    date: 'Jun 2021 - Sep 2021',
    points: [
      'Participated in the development and maintenance of an exceptional website builder tool, catering to millions of users.',
    ],
  },
  {
    title: 'Lead Developer',
    company_name: 'Banco Popular',
    icon: popular,
    iconBg: '#383E56',
    date: 'Jan 2020 - Jun 2021',
    points: [
      'Led the development and execution of digitization and optimization efforts for various business processes using a BPM (Business Process Management) tool.',
    ],
  },
  {
    title: 'Software Developer',
    company_name: 'OGTIC',
    icon: ogtic,
    iconBg: '#E6DEDD',
    date: 'Apr 2019 - Jan 2020',
    points: [
      'Developed a web application destined to facilitate the process of requesting public services to citizens',
      'Participated in code reviews and provided constructive feedback to other developers.',
    ],
  },
  {
    title: 'Software Developer',
    company_name: 'Fimed',
    icon: fimed,
    iconBg: '#E6DEDD',
    date: 'Jul 2018 - Apr 2019',
    points: [
      'collaborated with the frontend and backend development of a financial application aimed at professionals in the health sector.',
      'Managed SQL Server databases',
    ],
  },
]

const testimonials = [
  {
    testimonial:
      'Victor is an honest, responsible, and proactive person. He is very passionate about technology with broad skills in the field of software development and computer science in general',
    name: 'Claudio Familia',
    designation: 'Software Engineer',
    company: 'Wabtec',
    image: claudio,
  },
  {
    testimonial:
      'I collaborated with Victor on a very important project for the Dominican Republic, and he was one of the standout developers. As a full-stack developer, his contributions were noteworthy.',
    name: 'Alirio Aranguren',
    designation: 'Senior QA Engineer',
    company: 'Embat',
    image: alirio,
  },
  {
    testimonial:
      'Victor is a person who adapts quickly, is proactive, and highly responsible. I had the opportunity to work with him and perceive his attitude of commitment and self-improvement.',
    name: 'Christian Yuli',
    designation: 'Full Stack Developer',
    company: 'Claro',
    image: christian,
  },
]

const projects = [
  {
    name: 'Lina Y Victor',
    description:
      'A minimalist digital wedding invitation featuring personalized URLs for each guest and integrated Google Forms for RSVPs.',
    tags: [
      {
        name: 'astro',
        color: 'blue-text-gradient',
      },
      {
        name: 'sentry',
        color: 'green-text-gradient',
      },
      {
        name: 'vercel',
        color: 'pink-text-gradient',
      },
    ],
    image: linayvictor,
    source_code_link: 'https://linayvictor.com/t',
  },
  {
    name: 'The 2024 Bankrate Awards',
    description:
      'A sophisticated series of pages highlighting the top financial products of 2023 in an appealing manner.',
    tags: [
      {
        name: 'tailwind',
        color: 'blue-text-gradient',
      },
      {
        name: 'laravel',
        color: 'green-text-gradient',
      },
      {
        name: 'storyblok',
        color: 'pink-text-gradient',
      },
    ],
    image: awards2024,
    source_code_link: 'https://bankrate.com/awards/',
  },
  {
    name: 'The Brand Boost',
    description:
      'Modern landing page designed from scratch in Figma, and created with Next.js, Tailwind CSS and a headless CMS',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'datocms',
        color: 'pink-text-gradient',
      },
      {
        name: 'vercel',
        color: 'blue-text-gradient',
      },
    ],
    image: theBrandBoost,
    source_code_link: 'https://thebrandboostqa.vercel.app/',
  },
  {
    name: 'Modern Navigation Bar',
    description:
      "An innovative and user-friendly navigation bar that significantly increased the company's revenue.",
    tags: [
      {
        name: 'alpinejs',
        color: 'blue-text-gradient',
      },
      {
        name: 'scss',
        color: 'green-text-gradient',
      },
    ],
    image: sitenav,
    source_code_link: 'https://bankrate.com/',
  },
  {
    name: 'The 2023 Bankrate Awards',
    description:
      'A sophisticated series of pages highlighting the top financial products of 2023 in an appealing manner.',
    tags: [
      {
        name: 'tailwind',
        color: 'blue-text-gradient',
      },
      {
        name: 'laravel',
        color: 'green-text-gradient',
      },
      {
        name: 'storyblok',
        color: 'pink-text-gradient',
      },
    ],
    image: awards2023,
    source_code_link: 'https://bankrate.com/awards/2023/',
  },
  {
    name: 'The 2022 Bankrate Awards',
    description:
      'A stylish set of pages that showcase the best financial products of 2022.',
    tags: [
      {
        name: 'scss',
        color: 'blue-text-gradient',
      },
      {
        name: 'laravel',
        color: 'green-text-gradient',
      },
      {
        name: 'storyblok',
        color: 'pink-text-gradient',
      },
    ],
    image: awards2022,
    source_code_link: 'https://www.bankrate.com/awards/2022/',
  },
  {
    name: 'Financial Calculators',
    description: 'React component monorepo for financial calculators at Bankrate.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'scss',
        color: 'green-text-gradient',
      },
      {
        name: 'lerna',
        color: 'pink-text-gradient',
      },
    ],
    image: calculators,
    source_code_link:
      'https://www.bankrate.com/taxes/quick-tax-rate-calculator/',
  },
  {
    name: 'Website builder',
    description:
      'A powerful and user-friendly website builder built with React.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'scss',
        color: 'green-text-gradient',
      },
    ],
    image: websiteBuilder,
    source_code_link: 'https://www.web.com/websitebuilder?brand=websitebuilder',
  },
]

export { services, technologies, experiences, testimonials, projects }
