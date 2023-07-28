import { DetailsDocument, ProjectsDocument, SkillsDocument } from "./lib/database"

export const details: DetailsDocument =  {
    about: 'My interest in the field began as a hobby, but as I discovered my passion for it, I decided to pursue it professionally. I studied Electrical and Computer Engineering at the University of Cape Town, majoring in Computer Science and Embedded Systems. I am eager to make a contribution to the tech industry and be a part of something remarkable.',
    profile: '/about.png',
    name: 'Sabelo',
    surname: 'Mtetwa',
    slogan: 'A software developer that turns business problems into software solutions.',
    profession: 'Software Developer',
    contact: '+27 67 731 2806',
    email: 'sabelo.x.mtetwa@gmail.com'
}

export const projects: ProjectsDocument[] = [
    {
        _id: '6452ec9cdbda44731asceiemm',
        image: '/projects/dic.png',
        title: 'Dictionary',
        concepts: [
            'Third-party API',
            'Responsive'
        ],
        source: 'https://github.com/SabeloX/Dictionary',
        demo: 'https://dictionaryx.vercel.app/',
        tools: [ 'Next.js', 'Mantine - UI Framework' ],
        description: 'A small project that implements the free dictionary api. Pronunciation audio is included. You can dynamically change the font.'
    },
    {
      _id: '6452ec9cdbda447312f561fe',
      image: '/projects/ttt.png',
      title: 'Talk To Tobo',
      concepts: [
        'Dynamic blogs',
        'CRUD operations',
        'Authentication & authorization',
        'Responsive'
      ],
      source: 'https://github.com/SabeloX/portfolio',
      demo: 'https://ttt-opal.vercel.app/',
      tools: [ 'Next.js', 'Mantine - UI Framework' ],
      description: 'A personal website for a life coach who wanted to explore the digital world.'
    },
    {
      _id: '6452edecdbda447312f561ff',
      image: '/projects/dc.png',
      title: 'Digital Characters',
      concepts: [ 'Data input/output', 'CRUD operations', 'Responsive' ],
      source: 'https://github.com/SabeloX/create-and-display-digital-characters',
      demo: 'https://create-and-display-digital-characters.vercel.app/',
      tools: [ 'Next.js', 'MongoDB', 'Mongoose' ],
      description: 'This is a platform that allows users to create and display digital characters.'
    }
]

export const skills: SkillsDocument[] = [
    {
        _id: '6452eb62dbda447312f561fb',
        title: 'Frontend',
        data: [
            {
                skill: 'HTML/CSS',
                icon: "/icons/css.svg"
            },
            {
                skill: 'JavaScript',
                icon: "/icons/js.svg"
            },
            {
                skill: 'Bootstrap',
                icon: "/icons/bootstrap.svg"
            },
            {
                skill: 'React.js',
                icon: "/icons/react.svg"
            },
            {
                skill: 'Material UI',
                icon: "/icons/mui.svg"
            },
            {
                skill: 'Mantine',
                icon: "/icons/mantine.svg"
            },
            {
                skill: 'Responsiveness',
                icon: "/icons/respo.svg"
            }
        ]
    },
    {
        _id: '6452ebd0dbda447312f561fc',
        title: 'Backend',
        data: [
            {
                skill: 'Node.js',
                icon: "/icons/nodejs.svg"
            },
            {
                skill:'Python',
                icon: "/icons/py.svg"
            },
            {
                skill: 'MongoDB/Mongoose',
                icon: "/icons/mongodb.svg"
            },
            {
                skill: 'Express.js',
                icon: "/icons/express.svg"
            },
            {
                skill:'SQL',
                icon: "/icons/express.svg"
            },
            {
                skill: 'REST API',
                icon: "/icons/express.svg"
            },
            {
                skill: 'AWS DynamoDB',
                icon: "/icons/express.svg"
            }
        ]
    },
    {
        _id: '6452ec31dbda447312f561fd',
        title: 'Other',
        data: [
            {
                skill: 'Git/Github',
                icon: "/icons/express.svg"
            },
            {
                skill: 'AWS Services',
                icon: "/icons/express.svg"
            },
            {
                skill: 'Agile/SCRUM',
                icon: "/icons/express.svg"
            },
            {
                skill: 'Typescript',
                icon: "/icons/express.svg"
            },
            {
                skill: 'Linux/Unix',
                icon: "/icons/express.svg"
            }
        ]
    }
]