<script lang="ts">
  import Chip from "../chip/Chip.svelte";

  export let client: string;
  export let name: string;
  export let id: string;
  export let status: "pending" | "paid";
  export let amount: number;
  export let date: Date;

  function statusColor() {
    switch (status) {
      case "pending":
        return "#b99c1a";
      case "paid":
        return "#1ab935";
      default:
        return "";
    }
  }
</script>

<a href="/" class="grid grid-cols-8 py-3 px-5 hover:bg-[#0f0f0f] rounded-md">
  <div class="flex flex-col gap-1 col-span-3">
    <div class="">{client}</div>
    <div class="text-sm text-[#696969]">{name}</div>
  </div>
  <div class="flex items-center justify-center col-span-2">
    <div class="text-[#696969]">#{id}</div>
  </div>
  <div class="flex items-center justify-center col-span-2">
    <Chip color={statusColor()}>
      {status}
    </Chip>
  </div>
  <div class="flex flex-col gap-1 items-end">
    <div class="">$ {amount.toFixed(2)}</div>
    <div class="text-sm text-[#696969]">{date.toLocaleDateString()}</div>
  </div>
</a>
