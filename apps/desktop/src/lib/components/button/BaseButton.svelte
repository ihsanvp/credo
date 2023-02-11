<script lang="ts">
  import type { IconifyIcon } from "@iconify/svelte";
  import Icon from "@iconify/svelte";

  export let asEl: "a" | "button" = "button";
  export let href: string | undefined = undefined;
  export let onClick: VoidFunction | undefined = undefined;
  export let leadingIcon: IconifyIcon | undefined = undefined;
  export let trailingIcon: IconifyIcon | undefined = undefined;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<svelte:element
  this={asEl}
  href={asEl == "a" ? href : undefined}
  on:click={asEl == "button" ? onClick : undefined}
  class="py-3 px-5 text-sm flex items-center gap-2 {$$props.class}"
>
  {#if leadingIcon}
    <Icon icon={leadingIcon} width={20} />
  {/if}
  <span><slot /></span>
  {#if trailingIcon}
    <Icon icon={trailingIcon} width={20} />
  {/if}
</svelte:element>
