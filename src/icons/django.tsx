import React from "react";

import Icon from "../components/Icon";

const Django = ({ fontSize = "2em", ...props }: { fontSize?: string }) => (
  <Icon {...props} fontSize={fontSize} className="devicon-django-plain" />
);

Django.defaultProps = {
  fontSize: "2em",
};

export default Django;
