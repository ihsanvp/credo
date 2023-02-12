<script lang="ts">
  import { styles, type IconVariants } from "./icon.styles";
  import type { IconifyIcon } from "@iconify/svelte";
  import Icon from "@iconify/svelte";

  type $$Props = IconVariants & {
    icon: IconifyIcon;
  };

  export let icon: IconifyIcon;
</script>

<div class={styles($$restProps)}>
  <Icon {icon} width={20} />
</div>
