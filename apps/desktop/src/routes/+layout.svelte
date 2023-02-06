<script>
  import Titlebar from "$lib/components/titlebar/Titlebar.svelte";
  import "../app.css";
</script>

<Titlebar />
<main class="pt-[60px] text-white">
  <slot />
</main>
