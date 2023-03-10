import { cva, type VariantProps } from "cva";
import { twMerge } from "tailwind-merge";

const button = cva(["px-7", "py-3"], {
  variants: {
    type: {
      solid: ["text-white", "rounded-md"],
      outline: ["bg-transparent", "text-white", "border", "rounded-md"]
    },
    level: {
      primary: "",
      secondary: "",
      danger: "",
      success: ""
    },
    size: {
      small: ["text-xs"],
      medium: ["text-sm"],
      large: ["text-base"]
    }
  },
  compoundVariants: [
    // Solid
    {
      level: "primary",
      type: "solid",
      class: ["bg-primary"]
    },
    {
      level: "secondary",
      type: "solid",
      class: ["bg-secondary"]
    },
    {
      level: "danger",
      type: "solid",
      class: ["bg-red-600"]
    },
    {
      level: "success",
      type: "solid",
      class: ["bg-teal-600"]
    },

    // Outline
    {
      level: "primary",
      type: "outline",
      class: ["border-primary", "text-primary"]
    },
    {
      level: "danger",
      type: "outline",
      class: ["border-red-600", "text-red-600"]
    },
    {
      level: "success",
      type: "outline",
      class: ["border-teal-600", "text-teal-600"]
    },
  ],
  defaultVariants: {
    type: "solid",
    level: "secondary",
    size: "medium"
  }
})

export type ButtonVariants = VariantProps<typeof button>
export const styles = (variants: ButtonVariants) => twMerge(button(variants))