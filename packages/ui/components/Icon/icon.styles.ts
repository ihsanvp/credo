import { cva, type VariantProps } from "cva";
import { twMerge } from "tailwind-merge";

const icon = cva([""], {
  variants: {}
})

export type IconVariants = VariantProps<typeof icon>
export const styles = (variants: IconVariants) => twMerge(icon(variants))