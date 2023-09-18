import {
  faFan,
  faFolderOpen,
  faHome,
  faPieChart,
  faRocket,
  faUserNinja,
} from '@fortawesome/free-solid-svg-icons'

export const navItemsStudent = [
  { id: 0, name: 'NoticeBoard', url: '/dashboard', icon: faHome },
  {
    id: 1,
    name: 'Drives',
    url: '/drives',
    icon: faRocket,
  },
  {
    id: 2,
    name: 'Experiences',
    url: '/experiences',
    icon: faFan,
  },
  {
    id: 3,
    name: 'Statistics',
    url: '/statistics',
    icon: faPieChart,
  },
  {
    id: 4,
    name: 'Resources',
    url: '/resources',
    icon: faFolderOpen,
  },
  {
    id: 5,
    name: 'Profile',
    url: '/profile',
    icon: faUserNinja,
  },
]

export const navItemsTPO = [
  { id: 0, name: 'NoticeBoard', url: '/tpo-dashboard' },
  {
    id: 1,
    name: 'Drives',
    url: '/drives',
  },
  {
    id: 2,
    name: 'Experiences',
    url: '/experiences',
  },
  {
    id: 3,
    name: 'Student Data',
    url: '/student-data',
  },
  {
    id: 4,
    name: 'Resources',
    url: '/resources',
  },
  {
    id: 6,
    name: 'Announcements',
    url: '/drives',
  },
  {
    id: 5,
    name: 'Profile',
    url: '/profile',
  },
]
