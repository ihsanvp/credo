<script>
  import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
  import Button from "./Button.svelte";
</script>

<Meta
  title="Components/General/Button"
  component={Button}
  argTypes={{
    level: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
      defaultValue: "primary",
    },
  }}
/>

<Template let:args>
  <Button {...args}>Hello</Button>
</Template>

<Story
  name="Solid"
  args={{
    type: "solid",
  }}
/>

<Story
  name="Outline"
  args={{
    type: "outline",
  }}
/>
