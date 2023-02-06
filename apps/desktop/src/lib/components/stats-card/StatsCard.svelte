<script lang="ts">
  import type { IconifyIcon } from "@iconify/svelte";
  import Icon from "@iconify/svelte";

  export let label: string;
  export let value: string;
  export let icon: IconifyIcon;
</script>

<div
  class="w-full border border-[#232323] rounded-lg p-7 flex flex-col items-start gap-5"
>
  <div class="p-4 rounded-full bg-[#191919] text-[#c2c2c2] block">
    <Icon {icon} width={20} />
  </div>
  <div class="uppercase text-[#a5a5a5]">{label}</div>
  <div class="text-4xl text-white">{value}</div>
</div>
