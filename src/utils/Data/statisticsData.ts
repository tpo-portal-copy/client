import {
  faGoogle,
  faMicrosoft,
  faFacebook,
  faAmazon,
  faAirbnb,
  faEbay,
  faInstagram,
  faSnapchat,
  faTwitter,
  faApple,
} from '@fortawesome/free-brands-svg-icons'
import { faUser, faFileInvoice, faIndustry, faSatellite } from '@fortawesome/free-solid-svg-icons'

export const chartData = [
  {
    id: 'cse',
    label: 'CSE',
    value: 92,
    color: 'hsl(290, 70%, 50%)',
  },
  {
    id: 'ece',
    label: 'ECE',
    value: 95,
    color: 'hsl(91, 70%, 50%)',
  },
  {
    id: 'ee',
    label: 'EE',
    value: 89,
    color: 'hsl(110, 70%, 50%)',
  },
  {
    id: 'ce',
    label: 'CE',
    value: 83,
    color: 'hsl(348, 70%, 50%)',
  },
  {
    id: 'me',
    label: 'ME',
    value: 87,
    color: 'hsl(229, 70%, 50%)',
  },
]

export const topCompaniesData = [
  { id: 1, label: 'Google', value: '45 Lakhs', icon: faGoogle },
  { id: 2, label: 'Microsoft', value: '42 Lakhs', icon: faMicrosoft },
  { id: 3, label: 'Airbnb', value: '40 Lakhs', icon: faAirbnb },
  { id: 4, label: 'Ebay', value: '38 Lakhs', icon: faEbay },
  { id: 5, label: 'Amazon', value: '35 Lakhs', icon: faAmazon },
  { id: 6, label: 'Instagram', value: '32 Lakhs', icon: faInstagram },
  { id: 7, label: 'Snapchat', value: '30 Lakhs', icon: faSnapchat },
  { id: 8, label: 'Apple', value: '28 Lakhs', icon: faApple },
  { id: 9, label: 'Facebook', value: '25 Lakhs', icon: faFacebook },
  { id: 10, label: 'Twitter', value: '20 Lakhs', icon: faTwitter },
]

export const ctcWiseData = [
  { id: 1, company: 'Apple', offeredCtc: '45 Lakhs' },
  { id: 2, company: 'Apple', offeredCtc: '45 Lakhs' },
  { id: 3, company: 'Apple', offeredCtc: '45 Lakhs' },
  { id: 4, company: 'Apple', offeredCtc: '45 Lakhs' },
  { id: 5, company: 'Apple', offeredCtc: '45 Lakhs' },
  { id: 6, company: 'Apple', offeredCtc: '45 Lakhs' },
  { id: 7, company: 'Apple', offeredCtc: '45 Lakhs' },
  { id: 8, company: 'Apple', offeredCtc: '45 Lakhs' },
  { id: 9, company: 'Apple', offeredCtc: '45 Lakhs' },
  { id: 10, company: 'Apple', offeredCtc: '45 Lakhs' },
]

export const offersWiseData = [
  { id: 1, company: 'Apple', offeredCtc: '10' },
  { id: 2, company: 'Apple', offeredCtc: '10' },
  { id: 3, company: 'Apple', offeredCtc: '10' },
  { id: 4, company: 'Apple', offeredCtc: '10' },
  { id: 5, company: 'Apple', offeredCtc: '10' },
  { id: 6, company: 'Apple', offeredCtc: '10' },
  { id: 7, company: 'Apple', offeredCtc: '10' },
  { id: 8, company: 'Apple', offeredCtc: '10' },
  { id: 9, company: 'Apple', offeredCtc: '10' },
  { id: 10, company: 'Apple', offeredCtc: '10' },
]

export const jobType = [
  { id: 1, value: 'Intern' },
  { id: 2, value: 'Placement' },
  { id: 3, value: 'PPO' },
]

export const sessions = [
  { id: 1, value: '2021-22' },
  {
    id: 2,
    value: '2022-23',
  },
]

export const statsInfo = [
  {
    id: 1,
    label: 'Students Appeared',
    value: 1000,
    bgColor: '#D1E9FC',
    color: 'linear-gradient(135deg, rgba(16, 57, 150, 0) 0%, rgba(16, 57, 150, 0.24) 100%)',
    iconColor: 'rgb(16, 57, 150)',
    icon: faUser,
  },
  {
    id: 2,
    label: 'Offers',
    value: 800,
    bgColor: '#D0F2FF',
    color: 'linear-gradient(135deg, rgba(12, 83, 183, 0) 0%, rgba(12, 83, 183, 0.24) 100%)',
    iconColor: 'rgb(12, 83, 183)',
    icon: faFileInvoice,
  },
  {
    id: 3,
    label: 'Companies Visited',
    value: 100,
    bgColor: '#FFF7CD',
    color: 'linear-gradient(135deg, rgba(183, 129, 3, 0) 0%, rgba(183, 129, 3, 0.24) 100%)',
    iconColor: 'rgb(183, 129, 3)',
    icon: faIndustry,
  },
  {
    id: 4,
    label: 'Courses',
    value: 8,
    bgColor: '#FFE7D9',
    color: 'linear-gradient(135deg, rgba(183, 33, 54, 0) 0%, rgba(183, 33, 54, 0.24) 100%)',
    iconColor: 'rgb(183, 33, 54)',
    icon: faSatellite,
  },
]
