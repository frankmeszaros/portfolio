import React from "react";
import Box from "./Box";

const capitalize = (str) =>
  str && str.length > 0 ? `${str.charAt(0).toUpperCase()}${str.slice(1)}` : "";

// type SectionProps = {
//   title: string;
//   children: any;
// };

const Section = ({ title, children }) => (
  <>
    <Box
      id={title}
      display="flex"
      justifyContent="space-between"
      backgroundColor="black"
      color="white"
    >
      <h2>{capitalize(title)}</h2>
    </Box>
    <Box>{children}</Box>
  </>
);

export default Section;
