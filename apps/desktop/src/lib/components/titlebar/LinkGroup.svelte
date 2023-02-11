<script lang="ts">
	import Link from "./Link.svelte";
	import { page } from "$app/stores";

	const links = [
		{
			href: "/",
			label: "Home",
		},
		{
			href: "/invoices",
			label: "Invoices",
		},
		{
			href: "/projects",
			label: "Projects",
		},
		{
			href: "/clients",
			label: "Clients",
		},
	];

	$: activeIndex = links.findIndex((l) => l.href == $page.url.pathname);
</script>

<div class="flex items-center justify-center gap-3">
	{#each links as link, i}
		<Link href={link.href} label={link.label} isActive={activeIndex == i} />
	{/each}
</div>
