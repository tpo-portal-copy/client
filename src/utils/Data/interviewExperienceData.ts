export const interviewExperienceInfoList = [
  {
    id: 0,
    imgUrl: 'https://picsum.photos/200',
    title: 'Company title lorem ipsum',
    role: 'SDE',
    description: 'lorem ipsum don eros lorem ipsum',
    selStatus: 'Selected',
    userName: 'Nikhil Thakur',
    jobType: 'Internship',
    difficulty: 'easy',
    postedOn: 2019,
  },
  {
    id: 1,
    imgUrl: 'https://picsum.photos/200',
    title: 'Company title lorem ipsum',
    role: 'DA Analyst',
    description:
      // 'lorem ipsum don eros lorem ipsum ;sbmljvbhjcv,  njsbdhjsVD HJSJHDB Sb kbshcbwj lkjbsdjhc  jhwvdljhbwejh jhbvw   fej nw    hjlwbrhjlbjbjl  ljlhbfljnbsljh vejnlbe    v bl',
    `Info Edge is one of the publicly listed leading internet based companies offering outstanding services in various fields such as recruitment(naukri.com), real estate(99acres.com), matrimony (jeevansathi.com), and education(shiksha.com).

Info Edge visited our campus and conducted a recruitment drive for the role of Software Engineer for final year B Tech students belonging to CSE and ECE branches.

Due to the pandemic, our whole recruitment drive was conducted virtually. It consists of 5 rounds in total.

Round 1(Screening Round): This is an MCQ round and consists of 2 sections each section consisting of about 20 questions.

Section1 has core computer science technical questions from topics DSA, DAA, CN, DBMS, OS, and OOP. 
Section2 has aptitude questions.
The time for this round is around 40 min.
Based on their threshold limit, the top scorers will get shortlisted for further rounds.
Round 2(Interview – Technical Round): This round covered DSA, SQL concepts.

My interview started with an introduction. After giving a glimpse of mine, the interviewer asked me to live code and implement some questions. There won’t be any restriction on programming languages. 
To code the regex module and demonstrate string matching (without using inbuilt pattern matching modules). The code should handle all wild cards such as *, ?, ^, etc. (https://www.geeksforgeeks.org/wildcard-pattern-matching/)
Given an array,  count the number of pairs such that they add up to a given target. (https://www.geeksforgeeks.org/count-pairs-with-given-sum/)
Another SQL query was asked to implement
Later on, egg dropping puzzle and 3-Ants on triangle puzzles were asked to explain the logic.
And some interview questions on OS, DS, DBMS, and OOPs.
This round went for 1 hr.
Round 3(Interview – Technical Round): This round proceeded with more discussion on academic and individual projects. The key technologies used and challenges faced were covered. 

More questions on skills mentioned in the resume were asked.
Later asked to code sub-array with given sum problem, which also handles negative integers, and implementation of power function without using pre-built modules ( here one should handle all the corner cases such as power raised to 0 and negative numbers)
And next, given a use case and asked to think of the data structures that efficiently serve the purpose of use case and its functionalities.
Use-case: Implementation of Elevator
I have answered  2 priority queues – 1 for the upward journey and 1 for the downward journey.
Because in the upward journey of the elevator, all the downward requests should be discarded and upward journeys should be served in a prioritized fashion ( the requests from bottom floors should be given high priority while serving upward journey) and vice-versa.
Interview questions and definitions from OOP, Computer networks were covered.
This round went for 40 min.
Round 4(Interview with Tech lead): This round was more like a technical discussion that tests the theoretical understanding of concepts.



Some of the questions are –

What is the entire internal process that happens between entering a web URL in the browser and getting the web page loaded. Refer – what happens when we hit a url
What is the maximum size of RAM that a 32-bit Operating system can run on? Ans – 4Gb RAM. 32 bit OS cannot run on higher RAMs such as 8GB. But in order to serve more requests, modern devices have RAM >4Gb. Hence, an a64-bit Operating system was introduced, which can run on RAM that is having memory till 2 TB. Read – https://www.geeksforgeeks.org/difference-32-bit-64-bit-operating-systems/
Whenever we logged into the Gmail web app through any browser and closed the tab and when we re-open, we can get automatically logged in with our previous credentials. How exactly is that happening? Refer – Caching and cookies, How exactly browsers maintain user’s login state.
This round ended with him asking any questions/doubts regarding the role or company.

Round 5(HR Round): This round is simple. It is more like a friendly discussion with HR. 

The behavioral questions were asked such as Tell me about yourself and your family.
Why do you want to join Info Edge and whether are you willing to relocate to Noida post-pandemic?
Are you able to manage with Hindi (as I am south Indian)?
A strong understanding of theoretical core concepts and problem-solving abilities will help you crack the interviews.`,
    userName: 'Yash',
    selStatus: 'Selected',
    jobType: 'Full Time',
    difficulty: 'Medium',
    postedOn: 2019,
  },
  {
    id: 2,
    imgUrl: 'https://picsum.photos/200',
    title: 'Company title lorem ipsum',
    role: 'SDE2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis, felis eget commodo mattis, justo tortor dapibus risus, in vulputate orci dolor a arcu. Etiam eu sapien ultricies, maximus magna sit amet, suscipit lorem. Nunc bibendum sodales lacinia. Sed posuere erat felis. Vivamus finibus erat et ullamcorper mattis. Proin a arcu arcu. Donec vitae interdum leo. Duis vel tempus odio, non eleifend diam. Nunc velit lorem, sodales auctor tellus at, commodo lacinia odio. Nulla in lacus at mauris lobortis vestibulum.\n' +
'In molestie varius neque, in pulvinar nibh efficitur quis. Proin sodales diam ac tortor mattis tempus. Nunc sollicitudin dictum elit, non rutrum lacus bibendum sed. Aenean ac diam ipsum. Cras convallis nisi a dolor tincidunt, vitae semper turpis vulputate. Praesent consectetur justo vitae ante consequat commodo. Curabitur orci neque, cursus et lacinia sed, maximus eu nulla. Fusce vitae facilisis quam, ut mattis tortor. Donec elementum dapibus massa at viverra. Aenean rutrum ut purus id bibendum. Curabitur posuere arcu eu sem dapibus iaculis.\n' +
'Donec faucibus ac ligula nec porta. Nunc interdum suscipit libero, eget pharetra libero vestibulum ut. Proin at enim eget purus aliquam dictum nec at elit. Morbi vel turpis dapibus, consectetur mauris nec, porttitor nulla. Donec vitae augue ipsum. Sed magna turpis, luctus vitae pretium vitae, dictum ac augue. Vivamus non massa sit amet nisl fermentum aliquet ut eget ipsum. Nullam eget nibh leo. Vivamus condimentum et lacus eget euismod. Nulla sit amet magna blandit, laoreet orci nec, euismod tellus.\n' +
'In semper pellentesque dui commodo finibus. Sed leo mauris, ultricies iaculis placerat vel, pharetra nec nibh. Morbi eu elit vitae sem rhoncus finibus. Maecenas viverra nisl in tellus varius, at finibus est porta. Fusce sit amet quam laoreet lectus tincidunt tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate nunc et ipsum euismod sodales. Nunc eleifend odio ex, id dapibus sapien egestas vehicula. Aenean vel augue ipsum. Nulla est turpis, ultricies at lorem lobortis, aliquet hendrerit dolor. Praesent scelerisque volutpat mauris vel ultrices. Praesent turpis nulla, sagittis sit amet tristique in, interdum eget justo. Nullam porta elementum erat sed sagittis.\n' +
'Vestibulum eget tortor tincidunt, molestie nulla sed, molestie elit. Vivamus gravida, lorem vel rutrum ultricies, enim enim ullamcorper dui, ac tristique quam urna fringilla diam. Praesent imperdiet blandit odio, id molestie neque posuere eget. Curabitur nec sapien a augue fringilla feugiat sed id felis. Integer id convallis dolor. Phasellus ullamcorper felis in bibendum sagittis. Fusce eleifend varius sem, ut lobortis lacus tincidunt id. In diam arcu, malesuada sit amet dictum a, tincidunt lacinia libero. Pellentesque eu pharetra risus. Nunc posuere leo nec lacus tempus, eu interdum massa efficitur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam iaculis magna sit amet tincidunt venenatis. Praesent accumsan metus ut vehicula ornare. Pellentesque tempor venenatis orci, vitae ultrices mi consequat sit amet. Duis pharetra luctus felis eu ullamcorper. Praesent mattis, libero in sollicitudin eleifend, nibh mi condimentum enim, et lobortis ex quam et elit. Cras pretium pulvinar placerat. Aenean varius nec mi eu dictum. Suspendisse a metus vitae.\n',
    selStatus: 'Selected',
    userName: 'anonymous',
    jobType: 'Full Time',
    difficulty: 'Hard',
    postedOn: 2019,
  },
  {
    id: 3,
    imgUrl: 'https://picsum.photos/200',
    title: 'Company title lorem ipsum',
    role: 'SDE',
    description: 'lorem ipsum don eros lorem ipsum',
    selStatus: 'Selected',
    userName: 'Nikhil Thakur',
    jobType: 'Internship',
    difficulty: 'easy',
    postedOn: 2019,
  },
  {
    id: 4,
    imgUrl: 'https://picsum.photos/200',
    title: 'Company title lorem ipsum',
    role: 'SDE',
    description: 'lorem ipsum don eros lorem ipsum',
    selStatus: 'Selected',
    userName: 'Nikhil Thakur',
    jobType: 'Internship',
    difficulty: 'easy',
    postedOn: 2019,
  },
  {
    id: 5,
    imgUrl: 'https://picsum.photos/200',
    title: 'Company title lorem ipsum',
    role: 'SDE',
    description: 'lorem ipsum don eros lorem ipsum',
    selStatus: 'Selected',
    userName: 'Nikhil Thakur',
    jobType: 'Internship',
    difficulty: 'easy',
    postedOn: 2019,
  },
  {
    id: 6,
    imgUrl: 'https://picsum.photos/200',
    title: 'Company title lorem ipsum',
    role: 'SDE',
    description: 'lorem ipsum don eros lorem ipsum',
    selStatus: 'Selected',
    userName: 'Nikhil Thakur',
    jobType: 'Internship',
    difficulty: 'easy',
    postedOn: 2019,
  },
]

export const companyList = [
  {
    id: 0,
    name: 'Apple0',
  },
  {
    id: 1,
    name: 'Apple1',
  },
  {
    id: 2,
    name: 'Apple2',
  },
  {
    id: 3,
    name: 'Apple3',
  },
  {
    id: 4,
    name: 'Apple4',
  },
  {
    id: 5,
    name: 'Apple5',
  },
  {
    id: 6,
    name: 'Apple',
  },
  {
    id: 7,
    name: 'Apple',
  },
  {
    id: 8,
    name: 'Apple',
  },
  {
    id: 9,
    name: 'Apple',
  },
  {
    id: 10,
    name: 'Apple',
  },
  {
    id: 11,
    name: 'Apple',
  },
  {
    id: 12,
    name: 'Apple',
  },
  {
    id: 13,
    name: 'Apple',
  },
  {
    id: 14,
    name: 'Apple',
  },
  {
    id: 15,
    name: 'Apple',
  },
  {
    id: 16,
    name: 'Apple',
  },
  {
    id: 17,
    name: 'Apple',
  },
  {
    id: 18,
    name: 'Apple',
  },
  {
    id: 19,
    name: 'Apple',
  },
  {
    id: 20,
    name: 'Apple',
  },
]

export const roleList = [
  {
    id: 0,
    name: 'SDE',
  },
  {
    id: 1,
    name: 'Software Eng',
  },
  {
    id: 2,
    name: 'Electronics Core',
  },
  {
    id: 3,
    name: 'Electrical Core',
  },
  {
    id: 4,
    name: 'Civil Core',
  },
  {
    id: 5,
    name: 'Mechanical Core',
  },
  {
    id: 6,
    name: 'Chemical Core',
  },
  {
    id: 7,
    name: 'Data Analyst',
  },
  {
    id: 8,
    name: 'Business Analyst',
  },
  {
    id: 9,
    name: 'Material Core',
  },
  {
    id: 10,
    name: 'Graduate Trainee',
  },
]
