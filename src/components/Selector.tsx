import React, { useState } from "react";

import Box from "./Box";
import Text from "./Text";

type Item = {
  id: string;
  name: any;
  description: string;
};

type SelectorProps = {
  items: Array<Item>;
};

const isSelected = (item: Item, selected: Item | null): boolean =>
  !!selected && item.id === selected.id;

const Selector = ({ items }: SelectorProps) => {
  const [selected, setSelected] = useState<Item | null>(
    items && items.length > 0 ? items[0] : null
  );

  return (
    <Box display="flex" justifyContent="space-between">
      <Box display="flex" flexDirection="column" flex={1}>
        {(items || []).map((item) => (
          <Box
            borderLeft={
              isSelected(item, selected) ? "2px solid black" : "1px solid gray"
            }
            id={item.id}
            onClick={() => {
              setSelected(item);
            }}
            selected={isSelected(item, selected)}
            p={2}
          >
            <Text fontSize={[1, 1, 1, 1]} pl={2}>
              {item.name}
            </Text>
          </Box>
        ))}
      </Box>

      <Box flex={2}>
        <Text fontSize={[1, 1, 1, 1]}>
          {selected ? selected.description : ""}
        </Text>
      </Box>
    </Box>
  );
};

export default Selector;
