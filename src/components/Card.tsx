import React from "react";

import Box from "./Box";
import Text from "./Text";

const Card = ({
  title = "Example title",
  subtitle = "This would go underneath the title",
  description = "This is where the longer description would go if one exists",
}: {
  title: string;
  subtitle: string;
  description: string;
}) => (
  <Box>
    <Text>{title}</Text>
    <Text>{subtitle}</Text>
    <Text>{description}</Text>
  </Box>
);

export default Card;
