import { ComponentStoryObj } from "@storybook/react";
import note from "./note.mdx"
import Header from "./Header";

export default {
  title: "Example2/Header2/sample",
  component: Header,
  parameters: {
    docs: {
      page: note
    },
  },
} as ComponentStoryObj<typeof Header>;

const defaultArgs = {};

export const Normal = {
  ...defaultArgs,
  args: {},
};

export const Large = {
  parameters: {
  },
  ...defaultArgs,
  args: {},
};
