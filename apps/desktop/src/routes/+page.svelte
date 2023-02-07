<script lang="ts">
  import ClientsIcon from "@iconify-icons/mdi/layers-outline";
  import PaidIcon from "@iconify-icons/mdi/hand-coin-outline";
  import InvoicesIcon from "@iconify-icons/mdi/paperclip";
  import InvoicedIcon from "@iconify-icons/mdi/creation-outline";
  import StatsCard from "$lib/components/stats-card/StatsCard.svelte";
  import CreateIcon from "@iconify-icons/mdi/plus";
  import DownIcon from "@iconify-icons/mdi/chevron-down";
  import CalenderIcon from "@iconify-icons/mdi/calendar-blank-outline";
  import TransactionListCard from "$lib/components/transaction-list-card/TransactionListCard.svelte";
  import Icon from "@iconify/svelte";

  interface Transaction {
    id: string;
    name: string;
    client: string;
    status: "pending" | "paid";
    amount: number;
    date: Date;
  }

  const transactions: Transaction[] = [
    {
      id: "706483",
      name: "Performance Marketing",
      client: "Ebyru Ghundes",
      status: "pending",
      amount: 2400,
      date: new Date(),
    },
    {
      id: "706229",
      name: "Landing Design",
      client: "Monica Garrido",
      status: "paid",
      amount: 945,
      date: new Date(),
    },
    {
      id: "702437",
      name: "Website Design",
      client: "Lucifer Morningstar",
      status: "paid",
      amount: 1800,
      date: new Date(),
    },
    {
      id: "702333",
      name: "Performance Marketing",
      client: "Leonard Cohen",
      status: "pending",
      amount: 1350,
      date: new Date(),
    },
    {
      id: "708198",
      name: "Rebranding",
      client: "Elly West",
      status: "pending",
      amount: 400,
      date: new Date(),
    },
    {
      id: "706718",
      name: "Creating User Flow",
      client: "Barry Allen",
      status: "pending",
      amount: 960,
      date: new Date(),
    },
  ];

  const projects = [...transactions].reverse();
</script>

<div class="h-full min-h-[800px] flex flex-col gap-10 container mx-auto">
  <div class="flex items-end justify-between pt-10">
    <div class="flex flex-col gap-3">
      <h3 class="text-3xl">Overview</h3>
      <p class=" text-[#878787]">Here is your stats for today.</p>
    </div>
    <div class="flex items-center justify-center gap-3">
      <div class="flex border border-[#353535] rounded-md">
        <button
          class="py-3 px-5 text-white hover:bg-[#141414] text-sm border-r border-[#353535] flex items-center gap-3"
        >
          <Icon icon={CalenderIcon} width={20} />
          <span>Last 30 days</span>
        </button>
        <button
          class="flex items-center justify-center py-3 px-4 hover:bg-[#141414] h-full"
        >
          <Icon icon={DownIcon} width={20} />
        </button>
      </div>
      <button
        class="py-3 px-5 text-white bg-indigo-700 hover:bg-indigo-600 rounded-md text-sm flex items-center gap-2"
      >
        <Icon icon={CreateIcon} width={20} />
        <span>Create Invoice</span>
      </button>
    </div>
  </div>
  <div class="grid grid-cols-2 xl:grid-cols-4 gap-10">
    <StatsCard label="Clients" value="12" icon={ClientsIcon} />
    <StatsCard label="Invoices" value="14" icon={InvoicesIcon} />
    <StatsCard label="Invoiced" value="$ 65.29K" icon={InvoicedIcon} />
    <StatsCard label="Paid" value="$ 49.34K" icon={PaidIcon} />
  </div>
  <div class="flex-1 grid xl:grid-cols-2 gap-10 pb-10">
    <div
      class="w-full h-full border border-[#232323] rounded-lg py-5 flex flex-col gap-2 px-3"
    >
      <div class="text-2xl mb-5 px-5 pt-2">Recent Transactions</div>
      <div class="flex-1 flex flex-col">
        {#each transactions as t}
          <TransactionListCard
            client={t.client}
            name={t.name}
            id={t.id}
            status={t.status}
            amount={t.amount}
            date={t.date}
          />
        {/each}
      </div>
    </div>
    <div
      class="w-full h-full border border-[#232323] rounded-lg py-5 flex flex-col gap-2 px-3"
    >
      <div class="text-2xl mb-5 px-5 pt-2">Recent Projects</div>
      <div class="flex-1 flex flex-col">
        {#each projects as t}
          <TransactionListCard
            client={t.client}
            name={t.name}
            id={t.id}
            status={t.status}
            amount={t.amount}
            date={t.date}
          />
        {/each}
      </div>
    </div>
  </div>
</div>
