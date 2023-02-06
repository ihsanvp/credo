<script lang="ts">
	export let href: string;
	export let label: string;
	export let isActive: boolean;
</script>

<a
	{href}
	class="text-[#7D7D7D] py-2 px-5 text-sm hover:text-white rounded-md"
	class:active={isActive}>{label}</a
>

<style>
	a.active {
		background: #191919;
		color: white;
	}
</style>
