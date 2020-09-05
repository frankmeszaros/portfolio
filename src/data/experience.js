const workExperience = [
  {
    name: "Finite State",
    description: "Securing da IoT.",
    roles: [
      {
        title: "Software Engineer",
        technologies: [
          "Node.JS",
          "Django",
          "Express",
          "React",
          "Postgres",
          "PySpark",
        ],
        from: "2019-05-01",
        to: null,
        responsibilites: [
          "Develop and maintain the core GraphQL API that serves internal web services and our client web application customers use",
          "Led migration of our monolithic GraphQL service to implement Apollo Federation specification to support a microservice architecture",
          "Worked with team to migrate majority of our GraphQL API from Node.JS to Django while maintaining uptime",
          "Develop new UI components and maintain our core client web application",
          "Assist with improving our code quality by developing Github actions to run tests on every pull request",
          "Contribute to code reviews for other team members' pull requests",
        ],
      },
      {
        title: "Software Engineering Intern",
        from: "2018-08-12",
        to: "2019-05-01",
        responsibilites: [
          "Assisted in implementing core features on a data-driven React web application",
          "Worked with small team to build and maintain the core internal GraphQL API implemented with Node.JS and Apollo.",
          "Worked on internal admin application used to manage data sets and other features related to our core customer-facing application.",
          "Used Sketch and Figma to design UI components and low-level mockups for core product.",
        ],
        technologies: ["Node.JS", "React", "Postgres"],
      },
    ],
  },
  {
    name: "Capital One",
    roles: [
      {
        title: "Software Engineering Intern",
        from: "06-04-2018",
        to: "08-09-2018",
        technologies: ["Datadog", "Docker", "Elastic Container Service (AWS)"],
        responsibilites: [
          "Worked with team to develop internal dashboards used to monitor large Kafka messaging systems hosted on Amazon Elastic Container Service (ECS).",
          "Used Datadog API to deliver process-level metrics on containers running our messaging system to more accurately monitor CPU and memory utilization",
          "Exported dashboard work from Datadog into a react project so that it could potentially be integrated with other tools and APIs.",
        ],
      },
    ],
  },
  {
    name: "J.M Smucker Co.",
    roles: [
      {
        title: "Solutions Development Intern",
        from: "05-28-2017",
        to: "08-12-2017",
        technologies: ["Oracle", "PL/SQL", "Application Express"],
        responsibilites: [
          "Used PL/SQL to generate dynamic business intelligence reports that fed into Oracle Application express.",
          "Worked closely with development team to improve and document process for better reusability.",
        ],
      },
    ],
  },
];

export default workExperience;
