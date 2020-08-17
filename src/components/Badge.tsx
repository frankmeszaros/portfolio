import React from "react";

import Text from "./Text";

type BadgeProps = {
  label: string;

  backgroundColor?: string;
  borderRadius?: number;
  color?: string;
  p?: number;
};

const Badge = ({ borderRadius, p, label, ...props }: BadgeProps) => (
  <Text borderRadius={borderRadius} p={p} {...props}>
    {label}
  </Text>
);

Badge.defaultProps = {
  backgroundColor: "gray",
  borderRadius: 8,
  color: "white",
  p: 2,
};

export default Badge;
