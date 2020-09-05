import React, { useState } from "react";
import Badge from "../components/Badge";
import Box from "../components/Box";
import Selector from "../components/Selector";
import Text from "../components/Text";

import workExperience from "../data/experience";

const Experience = () => {
  const [selected, setSelected] = useState(workExperience[0]);
  const handleSelect = (item) => (e) => {
    e.preventDefault();

    setSelected(item);
  };

  return (
    <Box id="experience" px={[1, 2, 3]} minHeight="90vh">
      <Text fontSize={[4, 5, 6]} textAlign="center">
        Experience
      </Text>

      <Box display="flex">
        <Box minWidth={["50px", "150px"]}>
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
              minWidth="50vw"
              maxWidth="50vw"
            >
              <Box display="flex" justifyContent="space-between">
                <Text fontWeight="bold" fontSize={[2, 3, 4]}>
                  {role.title}
                </Text>
                <Text
                  my={2}
                  mx={2}
                  color="darkGray"
                  fontWeight="semibold"
                  fontSize={[1, 2, 3]}
                >
                  {role.from} - {role.to ? role.to : "Present"}
                </Text>
              </Box>
              <Box my={3}>
                {role.responsibilites.map((responsibility) => (
                  <Box key={responsibility} display="flex">
                    <Box mr={2}>
                      <span role="img">➡️</span>
                    </Box>
                    <Box>{responsibility}</Box>
                  </Box>
                ))}
              </Box>
              <Box mt={2}>
                <Text fontWeight="bold">Technologies I worked with</Text>
                <Box display="flex" width="100%" flexWrap="wrap">
                  {role.technologies.map((tech) => (
                    <Badge
                      px={3}
                      py={1}
                      key={`${role.title}-${tech}`}
                      label={tech}
                      m={1}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Experience;
