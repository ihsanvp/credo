import Button from "./Button.svelte";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/svelte/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
};

export const Primary = () => ({
  Component: Button,
  props: {
    primary: true,
    label: 'Button',
  },
});