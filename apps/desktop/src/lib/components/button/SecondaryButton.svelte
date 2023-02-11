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
  class="border rounded-md hover:bg-[#141414]"
  {asEl}
  {href}
  {onClick}
  {leadingIcon}
  {trailingIcon}
>
  <slot />
</BaseButton>
