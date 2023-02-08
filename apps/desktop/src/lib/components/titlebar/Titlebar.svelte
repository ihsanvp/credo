<script>
	import LinkGroup from "./LinkGroup.svelte";
	import Icon from "@iconify/svelte";
	import NotificationsIcon from "@iconify-icons/mdi/notifications";
	import SearchIcon from "@iconify-icons/mdi/search";
</script>

<div
	class="border-b py-3 px-10 flex items-center justify-between z-[999] bg-black"
>
	<div class="text-white font-bold">CREDO</div>
	<div class="flex-1 flex items-center justify-center">
		<LinkGroup />
	</div>
	<div class="flex items-center gap-3">
		<button
			class="text-white flex items-center justify-center p-2 hover:bg-[#191919] rounded-md"
		>
			<Icon icon={SearchIcon} width={20} />
		</button>
		<button
			class="text-white flex items-center justify-center p-2 hover:bg-[#191919] rounded-md"
		>
			<Icon icon={NotificationsIcon} width={20} />
		</button>
	</div>
</div>
