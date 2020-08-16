import React, { useState } from "react";

import Box from "../components/Box";
import Selector from "../components/Selector.tsx";
import Text from "../components/Text";

import workExperience from "../data/experience";

const Experience = () => {
  const [selected, setSelected] = useState(workExperience[0]);
  const handleSelect = (item) => (e) => {
    e.preventDefault();

    setSelected(item);
  };

  return (
    <Box id="experience" pl={[4, 5, 6, 7]} pr={[4, 5, 6, 7]}>
      <Text fontSize={[4, 5, 6]} textAlign="center">
        Experience
      </Text>

      <Box display="flex">
        <Box minWidth="150px">
          <Selector
            items={workExperience}
            handleSelect={handleSelect}
            selected={selected}
          />
        </Box>

        <Box>
          {selected.roles.map((role) => (
            <Box
              key={role.title}
              p={4}
              borderRadius={4}
              boxShadow="2px 2px 4px rgba(205, 205, 205, 0.75)"
            >
              <Text fontWeight="bold">{role.title}</Text>
              <Text>
                {role.from} - {role.to ? role.to : "Present"}
              </Text>

              <ul>
                {role.responsibilites.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>

              <Text fontWeight="bold">Technologies I worked with</Text>
              <Box display="flex">
                {role.technologies.map((tech) => (
                  <Box
                    key={tech}
                    borderRadius={8}
                    backgroundColor="gray"
                    color="white"
                    p={1}
                    pl={2}
                    pr={2}
                    mr={2}
                    display="flex"
                  >
                    <Text>{tech}</Text>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Experience;
