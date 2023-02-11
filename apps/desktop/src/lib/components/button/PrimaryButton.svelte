<script lang="ts">
  import type { IconifyIcon } from "@iconify/svelte";
  import BaseButton from "./BaseButton.svelte";

  export let asEl: "a" | "button" = "button";
  export let href: string | undefined = undefined;
  export let onClick: VoidFunction | undefined = undefined;
  export let leadingIcon: IconifyIcon | undefined = undefined;
  export let trailingIcon: IconifyIcon | undefined = undefined;
</script>

<BaseButton
  class="relative rounded-md bg-primary before:z-[-1] before:absolute before:inset-0 before:bg-primary-dark before:opacity-0 hover:before:opacity-100 before:blur-lg before:transition-opacity before:duration-300 "
  {asEl}
  {href}
  {onClick}
  {leadingIcon}
  {trailingIcon}
>
  <slot />
</BaseButton>
