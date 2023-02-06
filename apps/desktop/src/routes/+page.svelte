<script lang="ts">
  import Icon from "@iconify/svelte";
  import ClientIcon from "@iconify-icons/mdi/invoice";
  import StatsCard from "$lib/components/stats-card/StatsCard.svelte";
</script>

<div class="h-full min-h-[800px] py-10 flex flex-col gap-10">
  <div class="flex items-end justify-between">
    <div class="flex flex-col gap-3">
      <h3 class="text-3xl">Overview</h3>
      <p class=" text-[#878787]">Here is your stats for today.</p>
    </div>
    <div class="flex items-center justify-center gap-3">
      <button
        class="py-3 px-10 text-white border hover:bg-[#141414] border-[#232323] hover:border-[#353535] rounded-md text-sm"
        >Last 30 days</button
      >
      <button
        class="py-3 px-10 text-white bg-indigo-700 hover:bg-indigo-600 rounded-md text-sm"
        >Create Invoice</button
      >
    </div>
  </div>
  <div class="grid grid-cols-4 gap-10">
    <StatsCard label="Clients" value="12" icon={ClientIcon} />
    <StatsCard label="Invoices" value="14" icon={ClientIcon} />
    <StatsCard label="Invoiced" value="$ 65.29K" icon={ClientIcon} />
    <StatsCard label="Paid" value="$ 49.34K" icon={ClientIcon} />
  </div>
</div>
