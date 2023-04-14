import {
  faFan,
  faFolderOpen,
  faHome,
  faPieChart,
  faRocket,
  faUserNinja,
} from '@fortawesome/free-solid-svg-icons'

const navItems = [
  { id: 0, name: 'Dashboard', url: '/dashboard', icon: faHome },
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
export default navItems
