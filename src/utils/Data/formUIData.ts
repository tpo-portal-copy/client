export const basicInfo = [
  {
    id: 1,
    label: 'First Name',
    type: 'field',
  },
  {
    id: 2,
    label: 'Middle Name',
    type: 'field',
  },
  {
    id: 3,
    label: 'Last Name',
    type: 'field',
  },
  {
    id: 4,
    label: 'Date Of Birth',
    type: 'field',
  },
  {
    id: 5,
    label: 'Personal Email',
    type: 'field',
  },
  {
    id: 6,
    label: 'Contact Number',
    type: 'field',
  },
  {
    id: 7,
    label: 'Gender',
    type: 'list',
    options: [
      {
        id: 8,
        value: 'Male',
      },
      {
        id: 9,
        value: 'Female',
      },
      {
        id: 10,
        value: 'Other',
      },
    ],
  },
  {
    id: 11,
    label: 'Category',
    type: 'list',
    options: [
      {
        id: 12,
        value: 'General',
      },
      {
        id: 13,
        value: 'Gen-EWS',
      },
      {
        id: 14,
        value: 'OBC',
      },
      {
        id: 15,
        value: 'SC',
      },
      {
        id: 16,
        value: 'ST',
      },
    ],
  },
]

export const educationInfo = [
  { id: 1, label: '10th School', type: 'field' },
  {
    id: 2,
    label: '10th Board',
    type: 'field',
  },
  {
    id: 3,
    label: '10th Year',
    type: 'field',
  },
  {
    id: 4,
    label: '10th Percentage',
    type: 'field',
  },
  {
    id: 5,
    label: '12th School',
    type: 'field',
  },
  {
    id: 6,
    label: '12th Board',
    type: 'field',
  },
  {
    id: 7,
    label: '12th Year',
    type: 'field',
  },
  {
    id: 8,
    label: '12th Percentage',
    type: 'field',
  },
  {
    id: 9,
    label: 'JEE(Main) Rank',
    type: 'field',
  },
]

export const collegeInfo = [
  {
    id: 1,
    label: 'Roll No.',
    type: 'field',
  },
  {
    id: 11,
    label: 'Course',
    type: 'list',
    options: [
      {
        id: 12,
        value: 'B.Tech',
      },
      {
        id: 13,
        value: 'M.Tech',
      },
      {
        id: 14,
        value: 'MBA',
      },
      {
        id: 15,
        value: 'MSc',
      },
    ],
  },
  {
    id: 1,
    label: 'Branch',
    type: 'list',
    options: [
      {
        id: 2,
        value: 'Computer Science and Engg.',
      },
      {
        id: 3,
        value: 'Electronics and Communication Engg.',
      },
      {
        id: 4,
        value: 'Civil Engg.',
      },
      {
        id: 5,
        value: 'Mechanical Engg.',
      },
      {
        id: 6,
        value: 'Electrical Engg.',
      },
      {
        id: 7,
        value: 'Mathematics and Scientific Computing',
      },
      {
        id: 8,
        value: 'Applied Physics',
      },
      {
        id: 9,
        value: 'Chemical Engg.',
      },
      {
        id: 10,
        value: 'Material Science Engg.',
      },
    ],
  },
  {
    id: 16,
    label: 'CGPI',
    type: 'field',
  },
  { id: 2, label: 'Batch Year', type: 'field' },
  {
    id: 3,
    label: 'Current Year',
    type: 'list',
    options: [
      {
        id: 4,
        value: 'I',
      },
      {
        id: 5,
        value: 'II',
      },
      {
        id: 6,
        value: 'III',
      },
      {
        id: 7,
        value: 'IV',
      },
    ],
  },
  {
    id: 17,
    label: 'Active Backlogs',
    type: 'field',
  },
  {
    id: 18,
    label: 'Total Backlogs',
    type: 'field',
  },
  {
    id: 19,
    label: 'GATE Score',
    type: 'field',
  },
  {
    id: 20,
    label: 'CAT Score',
    type: 'field',
  },
]

export const clusterData = [
  { id: 1, clusterName: 'Cluster 1', clusterRange: '0-3.5 Lakhs' },
  { id: 2, clusterName: 'Cluster 2', clusterRange: '4-8 Lakhs' },
  { id: 3, clusterName: 'Cluster 3', clusterRange: '8-12 Lakhs' },
  { id: 4, clusterName: 'Cluster 4', clusterRange: '12-16 Lakhs' },
  { id: 5, clusterName: 'Cluster 5', clusterRange: '16-25 Lakhs' },
  { id: 6, clusterName: 'Cluster 6', clusterRange: '>25 Lakhs' },
]

export const experienceFormData = [
  {
    id: 1,
    name: 'title',
    label: 'Title',
    type: 'field',
  },
  {
    id: 2,
    name: 'companyName',
    label: 'Company Name',
    type: 'field',
  },
  {
    id: 3,
    name: 'role',
    label: 'Role',
    type: 'list',
    options: [
      { id: 4, value: 'SDE' },
      { id: 5, value: 'GET' },
      { id: 6, value: 'Management Trainee' },
      { id: 7, value: 'Full Stack Developer' },
    ],
  },
  {
    id: 8,
    name: 'type',
    label: 'Type',
    type: 'list',

    options: [
      { id: 9, value: 'Intern' },
      { id: 10, value: 'Full Time' },
    ],
  },
  {
    id: 11,
    name: 'rounds',
    label: 'No. of rounds',
    type: 'field',
  },
  {
    id: 12,
    name: 'verdict',
    label: 'Verdict',
    type: 'list',
    options: [
      {
        id: 16,
        value: 'Selected',
      },
      { id: 17, value: 'Not Selected' },
    ],
  },
  {
    id: 13,
    name: 'anonymous',
    label: 'Anonymous',
    type: 'list',
    options: [
      { id: 14, value: 'Yes' },
      { id: 15, value: 'No' },
    ],
  },
]

export const clusterOptions = [
  { value: '1', label: 'Cluster 1' },
  { value: '2', label: 'Cluster 2' },
  { value: '3', label: 'Cluster 3' },
  { value: '4', label: 'Cluster 4' },
  { value: '5', label: 'Cluster 5' },
  { value: '6', label: 'Cluster 6' },
]
