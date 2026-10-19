/* ─────────── EDIT YOUR INFO HERE ─────────── */

export const profile = {
  name: 'Denmark Osano',
  handle: 'den',
  role: 'IT Student & Developer',
  tagline: 'I build websites, applications, and technology-based solutions.',
  location: 'Philippines',
  status: 'Open to internships & projects',
  email: 'denmarkosano195@email.com',
  github: 'https://github.com/d3n127',
  linkedin: 'https://www.linkedin.com/in/denmark-osano-b761943b7/',
}

export const about = {
  intro:
    'I am an Information Technology student who enjoys turning real problems into working software. I like building full systems: the database, the backend and the screen people actually touch.',
  education: [
    { school: 'PHINMA University', degree: 'BS Information Technology', years: '2022 – Present' },
  ],
  goals: [
    'Become a full-stack developer building reliable systems',
    'Grow my skills in mobile and cloud development',
    'Contribute to projects that help schools and communities',
  ],
}

export const skills = [
  { group: 'Programming', items: ['Python', 'JavaScript', 'Java', 'HTML/CSS'] },
  { group: 'Development', items: ['React Native', 'Flask', 'REST API', 'Node.js'] },
  { group: 'Database', items: ['MySQL', 'SQLite'] },
  { group: 'Tools', items: ['Git/GitHub', 'VS Code', 'XAMPP', 'Cisco Packet Tracer'] },
]

export const projects = [
  {
    name: 'SmartLibrary',
    type: 'Web System',
    description:
      'A library management system for borrowing, returning and tracking books, with separate views for students and librarians.',
    tech: ['Python', 'Flask', 'MySQL'],
    features: ['Login / Register', 'Dashboard', 'Database', 'CRUD'],
    demo: '',
    github: 'https://github.com/yourname/smartlibrary',
  },
  {
    name: 'PHINMA UI iCare',
    type: 'Mobile App',
    description:
      'A mobile app concept that helps students reach campus care services and manage their requests from one place.',
    tech: ['React Native', 'REST API', 'SQLite'],
    features: ['Login / Register', 'Request tracking', 'Notifications', 'Profile'],
    demo: '',
    github: 'https://github.com/yourname/icare',
  },
  {
    name: 'Web Systems',
    type: 'Web System',
    description:
      'A collection of school web systems: inventory, enrollment and records, built with CRUD and role-based access.',
    tech: ['JavaScript', 'Node.js', 'MySQL', 'XAMPP'],
    features: ['Role-based access', 'CRUD', 'Reports'],
    demo: '',
    github: 'https://github.com/yourname/web-systems',
  },
  {
    name: 'Mobile Apps',
    type: 'Mobile App',
    description:
      'Small cross-platform apps built while learning React Native: to-do, expense tracker and more.',
    tech: ['React Native', 'JavaScript', 'SQLite'],
    features: ['Offline storage', 'Clean UI', 'Reusable components'],
    demo: '',
    github: 'https://github.com/yourname/mobile-apps',
  },
]

export const experience = [
  { kind: 'School Projects', items: ['SmartLibrary capstone-style system', 'Campus services mobile app', 'Network design labs'] },
  { kind: 'Activities', items: ['IT student organization member', 'Hackathon / coding event participant'] },
  { kind: 'Certifications', items: ['Cisco Networking Basics', 'Python Essentials', 'Add your own here'] },
]

export const resume = {
  education: 'BS Information Technology — PHINMA University (2022 – Present)',
  achievements: ["Dean's Lister (edit me)", 'Completed 4+ system projects', 'Cisco Packet Tracer network labs'],
  file: '', // link to your PDF resume
}

/* ─────────── BEYOND CODE (life outside coding) ─────────── */
export const beyond = {
  intro:
    "Coding is a big part of my life, but it isn't all of it. Here's what keeps me curious, grounded, and human when the laptop is closed.",
  interests: [
    { icon: '♟️', title: 'Chess', note: 'Strategizing openings, solving tactical puzzles, and climbing the competitive ladder..' },
    { icon: '🚴', title: 'Biking', note: 'trail rides and city cycling.' },
    { icon: '🎮', title: 'Gaming', note: 'Mobile and PC games — my way to unwind and quietly study good UX.' },
    { icon: '💻', title: 'Learning code', note: 'Tech blogs, docs, and the occasional novel when I want to switch off.' },
    { icon: '😴', title: 'Sleep', note: 'heehehhe' },
    { icon: '☕', title: 'Coffee & Cafés', note: 'On the hunt for the best study spot and a reliable iced latte.' },
  ],
  currently: [
    { kind: 'Watching', items: ['Tech YouTube deep-dives', 'Anime / series marathons'] },
    { kind: 'Playing', items: ['Mobile MOBA with friends', 'Puzzle & strategy games'] },
    { kind: 'Listening', items: ['Lo-fi study beats', 'OPM playlists'] },
    { kind: 'Learning', items: ['React & modern frontend', 'Cloud fundamentals'] },
  ],
  community: [
    'Active member of our IT student organization',
    'Volunteer at school tech and outreach events',
    'Joins hackathons and coding competitions',
    'Happy to mentor classmates who are just starting out',
  ],
  values: [
    { title: 'Curiosity', note: 'I like figuring out how things work — then making them better.' },
    { title: 'Consistency', note: 'Small progress every day beats occasional bursts of motivation.' },
    { title: 'Community', note: 'Tech is better when it helps the people around you.' },
  ],
}

/* ─────────── NAVIGATION ─────────── */
export const NAV = [
  { to: '/', label: 'home' },
  { to: '/about', label: 'about' },
  { to: '/skills', label: 'skills' },
  { to: '/projects', label: 'projects' },
  { to: '/experience', label: 'experience' },
  { to: '/beyond', label: 'beyond code' },
  { to: '/resume', label: 'resume' },
  { to: '/contact', label: 'contact' },
]

export const PAGE_TITLES = {
  '/': 'Home',
  '/about': 'About Me',
  '/skills': 'Skills',
  '/projects': 'Projects',
  '/experience': 'Experience',
  '/beyond': 'Beyond Code',
  '/resume': 'Resume',
  '/contact': 'Contact',
}
