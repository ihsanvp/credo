<script lang="ts">
  import Icon, { type IconifyIcon } from "@iconify/svelte";

  export let icon: IconifyIcon;
  export let href: string | undefined = undefined;
  export let onClick: VoidFunction | undefined = undefined;

  const element = href ? "a" : "button";
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<svelte:element
  this={element}
  href={element == "a" ? href : undefined}
  on:click={element == "button" ? onClick : undefined}
  class="text-white flex items-center justify-center p-2 hover:bg-[#191919] rounded-md"
>
  <Icon {icon} width={20} />
</svelte:element>
