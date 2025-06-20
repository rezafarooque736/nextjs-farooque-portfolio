import { LaptopIcon } from 'lucide-react';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    id: 6,
    imageUrl: '/railtel.png',
    title: 'Full Stack Developer',
    timeline: 'Jan 16, 2022 - present',
    url: 'https://www.railtel.in/',
    location: 'Gurugram, Haryana, India',
    description:
      'I am an experienced full-stack software developer proficient in a range of technologies including React, Next.js, tailwindcss, PostgreSQL, Python, and Flask, etc. With a background in both frontend and backend development, as well as database management and deployment, I am well-equipped to handle the entire development lifecycle from conception to maintenance. I am currently seeking full-time opportunities where I can leverage my skills and expertise to contribute to meaningful projects.',
  },
  {
    id: 5,
    imageUrl: '/induce.png',
    title: 'Internship in Induce',
    timeline: 'Oct 11, 2021 - Jan 14,2022',
    url: 'https://www.google.com/',
    location: 'Induce, Jasola, New Delhi, India',
    description: '3 month internship in Induce as a web developer.',
  },
  {
    id: 4,
    imageUrl: '/freelancer.png',
    title: 'Freelancer',
    timeline: '2020 - 2021',
    url: 'https://www.freelancer.in/',
    location: '',
    description:
      'around 1 year as freelancer during corona time on freelancer, upwork, fiverr.',
  },
  {
    id: 3,
    imageUrl: '/mdu_logo.png',
    title: 'BTech in Computer Science & Engineerig',
    timeline: '2017 - 2020',
    url: 'https://mdu.ac.in/default.aspx',
    location: 'Maharshi Dayanand University, Rohtak, Haryana, India',
    description:
      'I graduated from Maharshi Dayanand University in BTech in Computer Science & Technology.',
  },
  {
    id: 2,
    imageUrl: '/aedifico_logo.png',
    title: 'Internship in Aedifico Tech Pvt. Ltd.',
    timeline: 'March 2017 - May 2017',
    url: 'http://aedificogroup.com/',
    location: 'Laxmi nagar, New Delhi, Delhi, India',
    description:
      '3 month internship in Aedifico Tech Pvt. Ltd. as a web developer.',
  },
  {
    id: 1,
    imageUrl: '/jamia_logo.png',
    title: 'Diploma in Computer Science & Engineerig',
    timeline: '2014 - 2017',
    url: 'https://jmi.ac.in/',
    location: 'Jamia Millia Islamia, New Delhi, India',
    description:
      'I did Ploytechnic from Jamia Millia Islamia in Computer Science & Engineering.',
  },
] as const;

export const projectsData = [
  {
    id: 1,
    title: 'Realtime container creation,access and stop via a webbrowser',
    description:
      'Spin off containers with VNC based on user group assigned at login. Auto-stop containers on logout or 20 minutes of inactivity. Cron job every 20 minutes to Stops and deletes unused docker containers, terminates idle connections, Releases IP addresses for reuse in Node.js.',
    tags: [
      { id: 1, name: 'Node.js' },
      { id: 2, name: 'MariaDB' },
      { id: 3, name: 'Guacamole' },
      { id: 4, name: 'Docker' },
      { id: 5, name: 'VMware ESXi' },
      { id: 6, name: 'Tomcat 9' },
    ],
    imageUrl: '/secure-machine.jpeg',
    webUrl: '#',
  },
  {
    id: 2,
    title: 'Task Manager RailTel Corporation of India Ltd.',
    description:
      'RailTel employee use it as a task manager which is mainly useful at the time of Audit of company, as a proof.',
    tags: [
      { id: 1, name: 'React' },
      { id: 2, name: 'Chakra UI' },
      { id: 3, name: 'Flask' },
      { id: 4, name: 'Python' },
      { id: 5, name: 'PostgreSQL' },
      { id: 6, name: 'Nginx' },
      { id: 7, name: 'Ubuntu Server' },
      { id: 8, name: 'CSS' },
      { id: 9, name: 'HTML' },
    ],
    imageUrl: '/task-manager.png',
    webUrl: 'https://taskmanager.rcil.gov.in',
  },
  {
    id: 3,
    title: 'Soc Services RailTel Corporation of India Ltd.',
    description:
      'Railway and RailTel employee can request for Antivirus Installation, System Hardening, and Support regarding Antivirus. Also can get tools for SSL Reports generate, GoAccess Reports generate, Bulk IP/Hash Reputation Check of the websites which are not publicly available using Virus Total and Talos CISCO API. also it provides dashboard for all the live data and many more.',
    tags: [
      { id: 1, name: 'FLask' },
      { id: 2, name: 'Python' },
      { id: 3, name: 'Bootstrap' },
      { id: 4, name: 'PostgreSQL' },
      { id: 5, name: 'Nginx' },
      { id: 6, name: 'Ubuntu Server' },
      { id: 7, name: 'HTML' },
      { id: 8, name: 'CSS' },
    ],
    imageUrl: '/soc-services.png',
    webUrl: 'https://soc-services.rcil.gov.in',
  },
  {
    id: 4,
    title: 'Server Farm GGNDC RailTel Corporation of India Ltd.',
    description:
      'Railtel Employee can get all the details of data center Racks',
    tags: [
      { id: 1, name: 'FLask' },
      { id: 2, name: 'Python' },
      { id: 3, name: 'Bootstrap' },
      { id: 4, name: 'PostgreSQL' },
      { id: 5, name: 'Nginx' },
      { id: 6, name: 'Ubuntu Server' },
      { id: 7, name: 'HTML' },
      { id: 8, name: 'CSS' },
    ],
    imageUrl: '/ggndc-server-farm.png',
    webUrl: 'http://dcpm.rcil.gov.in/showAll-dc-infra',
  },
  {
    id: 5,
    title: 'Dashboard SOC GGNDC-RailTel',
    description: 'Monitor differnt soc-services like arcsight, hpsm, etc.',
    tags: [
      { id: 1, name: 'Node.js' },
      { id: 2, name: 'express.js' },
      { id: 3, name: 'Next.js' },
      { id: 4, name: 'mongoDB' },
      { id: 5, name: 'mongoose' },
      { id: 6, name: '@tremor/react' },
      { id: 7, name: 'recharts' },
      { id: 8, name: 'Tailwind CSS' },
    ],
    imageUrl: '/dashboard-soc-arcsight.jpg',
    webUrl: '',
  },
  {
    id: 6,
    title: 'DOT LSA.',
    description:
      'used by Department of Telecommunication of India for viewing current status of all company list ISP, NLD, ILD by RailTel, RailTel Use this at the time of Audit as well as on daily basis to know any provided IP details',
    tags: [
      { id: 1, name: 'React' },
      { id: 2, name: 'Next.js' },
      { id: 3, name: 'auth.js' },
      { id: 4, name: 'shadcn-ui' },
      { id: 5, name: 'Tailwind CSS' },
      { id: 6, name: 'Prisma' },
      { id: 7, name: 'PostgreSQL' },
      { id: 8, name: 'Nginx' },
      { id: 9, name: 'Ubuntu Server' },
      { id: 10, name: 'CSS' },
      { id: 11, name: 'HTML' },
    ],
    imageUrl: '/dot-lsa.png',
    webUrl: 'https://dotlsacomp.rcil.gov.in/',
  },
  {
    id: 7,
    title: 'Data Center Patch Mangement GGNDC RailTel',
    description:
      'patch data center service at regular interval when any device change or upgraded.',
    tags: [
      { id: 1, name: 'FLask' },
      { id: 2, name: 'Python' },
      { id: 3, name: 'Bootstrap' },
      { id: 4, name: 'PostgreSQL' },
      { id: 5, name: 'Nginx' },
      { id: 6, name: 'Ubuntu Server' },
      { id: 7, name: 'HTML' },
      { id: 8, name: 'CSS' },
    ],
    imageUrl: '/data-center-patch.png',
    webUrl: '#',
  },
  {
    id: 8,
    title: 'VPN Password Reset DFCCIL Government of India Ltd.',
    description:
      'VPN Password Reset Dedicated Freight Corridor Corporation of India.',
    tags: [
      { id: 1, name: 'Java' },
      { id: 2, name: 'mysql' },
      { id: 3, name: 'Bootstrap' },
      { id: 5, name: 'Apache Tomcat' },
      { id: 6, name: 'CentOS Server' },
      { id: 7, name: 'HTML' },
      { id: 8, name: 'CSS' },
    ],
    imageUrl: '/dfccil-vpn-reset.png',
    webUrl: 'https://resetvpn.rcil.gov.in/dfccilvpn/otpForm.do',
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Express',
  'Git',
  'Tailwind CSS',
  'Prisma',
  'MongoDB',
  'Zustand',
  'PostgreSQL',
  'Python',
  'Flask',
  'Linux Red Hat',
  'Nginx',
  'Ubuntu',
  'Docker',
  'Red Hat Certified System Admin',
] as const;
