import React from "react";

import Box from "./Box";
import Text from "./Text";

type Item = {
  id: string;
  name: any;
  description: string;
};

type SelectorProps = {
  handleSelect?: any;
  items: Array<Item>;
  selected: Item | null;
};

const isSelected = (item: Item, selected: Item | null): boolean =>
  !!selected && item.name === selected.name;

const Selector = ({ handleSelect, items, selected }: SelectorProps) => (
  <Box display="flex" flexDirection="column">
    {(items || []).map((item) => (
      <Box
        borderLeft={
          isSelected(item, selected) ? "2px solid black" : "1px solid gray"
        }
        id={item.name}
        key={item.name}
        onClick={handleSelect(item)}
        selected={isSelected(item, selected)}
        p={2}
      >
        <Text fontSize={[1, 1, 1, 1]} pl={2}>
          {item.name}
        </Text>
      </Box>
    ))}
  </Box>
);

Selector.defaultProps = {
  handleSelect: (item: Item) => {},
};

export default Selector;
