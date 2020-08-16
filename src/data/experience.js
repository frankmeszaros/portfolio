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
          "GraphQL",
          "Postgres",
          "PySpark",
        ],
        from: "2019-05-01",
        to: null,
        responsibilites: [
          "Led main refactor to migrate our initial GraphQL project from a javascript-based implementation to leverage the Django web framework.",
          "Extended our core web application to support a variety of auth connections for varying customer requirements",
          "Improved code quality by extending our unit test coverage and using Github actions to run tests before every pull request",
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
        technologies: [
          "Datadog",
          "Docker",
          "Elastic Container Service (AWS)",
          "Apache Kafka",
        ],
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
