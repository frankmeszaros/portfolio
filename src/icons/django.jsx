import React from "react";

import Icon from "../components/Icon";

const Django = ({ ...props }) => (
  <Icon {...props} className="devicon-django-plain" />
);

Django.defaultProps = {
  fontSize: "2em",
};

export default Django;
