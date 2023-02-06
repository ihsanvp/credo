<script>
  import Titlebar from "$lib/components/titlebar/Titlebar.svelte";
  import "../app.css";
</script>

<div class="fixed inset-0 flex flex-col">
  <Titlebar />
  <main class="flex-1 overflow-x-hidden overflow-y-scroll text-white px-10">
    <slot />
  </main>
</div>
