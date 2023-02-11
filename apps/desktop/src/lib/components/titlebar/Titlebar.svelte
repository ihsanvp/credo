<script>
	import LinkGroup from "./LinkGroup.svelte";
	import Icon from "@iconify/svelte";
	import NotificationsIcon from "@iconify-icons/mdi/notifications";
	import SearchIcon from "@iconify-icons/mdi/search";
	import { page, navigating } from "$app/stores";
	import IconButton from "../button/IconButton.svelte";
	import BackIcon from "@iconify-icons/mdi/arrow-left";
	import { goto } from "$app/navigation";
	import { goBack } from "$lib/utils/navigation";

	$: isDeepRoute = ($page.url.pathname.match(/\//gi)?.length || 0) > 1;
</script>

<div
	class="border-b py-3 px-10 flex items-center justify-between z-[999] bg-black"
>
	<div class="flex items-center justify-start w-20">
		{#if isDeepRoute}
			<IconButton icon={BackIcon} onClick={goBack} />
		{:else}
			<div class="text-white font-bold">CREDO</div>
		{/if}
	</div>
	<div class="flex-1 flex items-center justify-center">
		<LinkGroup />
	</div>
	<div class="flex items-center gap-3">
		<IconButton icon={SearchIcon} />
		<IconButton icon={NotificationsIcon} />
	</div>
</div>
