<script lang="ts">
  import type { IconifyIcon } from "@iconify/svelte";
  import Icon from "../Icon/Icon.svelte";
  import { styles, type ButtonVariants } from "./button.styles";

  type $$Props = ButtonVariants & {
    icon?: IconifyIcon;
    iconRight?: IconifyIcon;
  };

  const { icon, iconRight } = $$restProps;
</script>

<button class={styles($$restProps)}>
  {#if icon}
    <Icon {icon} />
  {/if}
  <slot />
  {#if iconRight}
    <Icon icon={iconRight} />
  {/if}
</button>
