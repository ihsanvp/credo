<script lang="ts">
  import { afterNavigate } from "$app/navigation";
  import Titlebar from "$lib/components/titlebar/Titlebar.svelte";
  import { previousPage } from "$lib/utils/navigation";
  import { onMount } from "svelte";
  import { invoke } from "@tauri-apps/api";
  import "../app.css";

  afterNavigate(({ from }) => {
    previousPage.set(from?.url?.pathname || $previousPage);
  });

  onMount(() => {
    invoke("show_main_window");
  });
</script>

<div class="fixed inset-0 flex flex-col">
  <Titlebar />
  <main class="flex-1 overflow-x-hidden overflow-y-scroll text-white px-10">
    <slot />
  </main>
</div>
