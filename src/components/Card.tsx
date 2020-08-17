import React from "react";

import Box from "./Box";
import Text from "./Text";

const Card = ({
  title = "Example title",
  subtitle = "",
  description = "",
  ...props
}: {
  title: string;
  subtitle: string;
  description: string;
}) => (
  <Box
    p={4}
    borderRadius={4}
    boxShadow="2px 2px 4px rgba(205, 205, 205, 0.75)"
    {...props}
  >
    <Text fontWeight="bold">{title}</Text>
    <Text>{subtitle}</Text>
    <Text>{description}</Text>
  </Box>
);

export default Card;
