<script lang="ts">
  import Color from "color";

  export let color = "#ffffff";

  $: bg = Color(color).alpha(0.1).string();

  $: style = `
      color: ${color}; 
      background: ${bg};
  `;
</script>

<span class="py-1 px-5 text-sm rounded-full capitalize" {style}>
  <slot />
</span>
