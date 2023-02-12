import { cva, type VariantProps } from "cva";
import { twMerge } from "tailwind-merge";

const icon = cva([""], {
  variants: {
    size: {
      small: ["p-2"],
      medium: ["p-3"],
      large: ["p-4"]
    },
  },

  defaultVariants: {
    size: "medium"
  }
})

export type IconVariants = VariantProps<typeof icon>
export const styles = (variants: IconVariants) => twMerge(icon(variants))