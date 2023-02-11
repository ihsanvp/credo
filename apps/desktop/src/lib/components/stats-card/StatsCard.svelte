<script lang="ts">
  import type { IconifyIcon } from "@iconify/svelte";
  import Icon from "@iconify/svelte";
  import IconBadge from "../icon/IconBadge.svelte";

  export let label: string;
  export let value: string;
  export let color: string;
  export let icon: IconifyIcon;
</script>

<div class="w-full border rounded-lg p-7 flex flex-col items-start gap-5">
  <IconBadge {icon} {color} />
  <div class="uppercase text-[#cecece] tracking-[0.2em]">{label}</div>
  <div class="text-4xl text-white">{value}</div>
</div>
