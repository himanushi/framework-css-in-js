import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Icon } from "./Icon";

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Cookie = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path
      className="fa-secondary"
      opacity=".4"
      fill="currentColor"
      d="M49.1 250l14.5 82.8c2.7 15.4 10.2 29.6 21.4 40.4l60.3 58.4c11.2 10.9 25.5 17.9 40.9 20l83 11.7c15.4 2.2 31.1-.6 44.8-7.9l74-39.5c13.7-7.3 24.8-18.8 31.7-32.9l36.7-75.5c6.8-14.1 9.1-30 6.4-45.4l-14.6-82.8c-2.7-15.4-10.2-29.6-21.4-40.4L366.6 80.5c-11.2-10.9-25.5-17.9-40.9-20l-83-11.7c-15.4-2.2-31.1 .6-44.8 7.9l-74 39.5C110.1 103.4 99.1 115 92.2 129L55.5 204.6c-6.8 14.1-9.1 30-6.4 45.4zM184 192a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm32 160a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm96-96a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm32-128a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm32 224a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z"
    />
    <path
      className="fa-primary"
      fill="currentColor"
      d="M242.7 48.7c-15.4-2.2-31.1 .6-44.8 7.9l-74 39.5C110.1 103.4 99.1 115 92.2 129L55.5 204.6c-6.8 14.1-9.1 30-6.4 45.4l14.5 82.8c2.7 15.4 10.2 29.6 21.4 40.4l60.3 58.4c11.2 10.9 25.5 17.9 40.9 20l83 11.7c15.4 2.2 31.1-.6 44.8-7.9l74-39.5c13.7-7.3 24.8-18.8 31.7-32.9l36.7-75.5c6.8-14.1 9.1-30 6.4-45.4l-14.6-82.8c-2.7-15.4-10.2-29.6-21.4-40.4L366.6 80.5c-11.2-10.9-25.5-17.9-40.9-20l-83-11.7zM182.8 28.4c19.7-10.5 42.3-14.5 64.4-11.4l83 11.7c22.1 3.1 42.7 13.2 58.7 28.7l60.3 58.4c16.1 15.6 26.8 35.8 30.7 57.9l14.6 82.8c3.9 22.1 .7 44.8-9.1 64.9L448.6 397c-9.8 20.1-25.7 36.6-45.4 47.2l-74 39.5c-19.7 10.5-42.3 14.5-64.4 11.4l-83-11.7c-22.1-3.1-42.7-13.2-58.7-28.7L62.8 396.2C46.8 380.6 36 360.3 32.2 338.3L17.6 255.5c-3.9-22.1-.7-44.8 9.1-64.9L63.4 115c9.8-20.1 25.7-36.6 45.4-47.2l74-39.5zM160 168a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm8 184a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM288 232a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm8-104a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm56 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
    />
  </svg>
);

export const Normal: Story = {
  args: {
    children: <Cookie />,
    size: { xs: 24, sm: 32 },
    color: "black",
  },
};

export const Large: Story = {
  args: {
    children: <Cookie />,
    size: "50px",
  },
};

export const Color: Story = {
  args: {
    children: <Cookie />,
    size: "50px",
    color: "red-90",
  },
};
