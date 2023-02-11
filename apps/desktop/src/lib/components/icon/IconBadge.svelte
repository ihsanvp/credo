<script lang="ts">
  import type { IconifyIcon } from "@iconify/svelte";
  import Icon from "@iconify/svelte";
  import Color from "color";

  export let icon: IconifyIcon;
  export let color: string;

  $: bg = Color(color).alpha(0.1).string();

  $: style = `
      color: ${color}; 
      background: ${bg};
  `;
</script>

<div class="p-4 rounded-full block" {style}>
  <Icon {icon} width={25} />
</div>
