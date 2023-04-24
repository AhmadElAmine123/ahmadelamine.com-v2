const skillsData = [
    {
      category: "Programming Languages",
      type: "circular",
      skills: [
        {
          name: "JavaScript",
          level: 4,
          logo: require("../../assets/images/logos/programming_languages/javascript.png"),
        },
        {
          name: "Python",
          level: 4,
          logo: "path/to/python-logo.png",
        },
        {
          name: "Java",
          level: 4.5,
          logo: "path/to/python-logo.png",
        },
        {
          name: "C#",
          level: 1.5,
          logo: "path/to/python-logo.png",
        },
        {
          name: "TypeScript",
          level: 3,
          logo: "path/to/python-logo.png",
        },
        {
          name: "PhP",
          level: 3,
          logo: "path/to/python-logo.png",
        },
      ],
    },
    {
        category: "Web Development",
        type: "card",
        skills: [
            {
              name: "ReactJs",
              level: 3.5,
              logo: "path/to/ReactLogo.png",
            },
            {
              name: "NodeJS",
              level: 3,
              logo: "path/to/nodeJs.png",
            },
            {
              name: "HTML",
              level: 4,
              logo: "path/to/HTML5.png",
            },
            {
              name: "Css",
              level: 4,
              logo: "path/to/css3.png",
            },
            {
              name: "Express",
              level: 3,
              logo: "path/to/express.png",
            },
            {
              name: "SQL",
              level: 4,
              logo: "path/to/SQL.png",
            },
          ]
          ,
      },
    {
      category: "DevOps",
      type: "card",
      skills: [
        {
          name: "github",
          level: 3.5,
          logo: "path/to/github.png",
        },
        {
          name: "AWS",
          level: 2.5,
          logo: "path/to/aws.png",
        },
        {
          name: "Kubernetes",
          level: 1,
          logo: "path/to/kubernetes.png",
        },
        {
          name: "Docker",
          level: 1,
          logo: "path/to/docker.png",
        },
      ],
    },
    {
      "category": "Data Science and Machine Learning",
      "type": "circular",
      "skills": [
        {
          "name": "Pandas",
          "level": 3.5,
          "logo": "path/to/pandas.png"
        },
        {
          "name": "Matplotlib",
          "level": 3,
          "logo": "path/to/matplotlib.png"
        }
      ]
    }
    ,{
        category: "Application Development",
        type: "circular",
        skills: [
            {
                name: "Android",
                level: 4,
                logo: "path/to/android.png",
              },
              {
                name: "React-Native",
                level: 2,
                logo: "path/to/reactNative.png",
              },
        ]
    }
  ];
  
  export default skillsData;
  