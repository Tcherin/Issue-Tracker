"use client";

import { Select } from "@radix-ui/themes";

const AssigneeSelect = () => {
  return (
    <Select.Root defaultValue="1">
      <Select.Trigger>
        <Select.Content>
          <Select.Group>
            <Select.Label>Suggestions</Select.Label>
            <Select.Item value="1">1</Select.Item>
            <Select.Item value="2">2</Select.Item>
            <Select.Item value="3">3</Select.Item>
            <Select.Item value="4">4</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Trigger>
    </Select.Root>
  );
};

export default AssigneeSelect;
