<script lang="ts">
  import type { IconVariants } from "./icon.styles";
  import type { IconifyIcon } from "@iconify/svelte";
  import Icon from "@iconify/svelte";

  type $$Props = IconVariants & {
    icon: IconifyIcon;
  };

  export let { icon } = $$restProps;
</script>

<Icon {icon} width={20} />
