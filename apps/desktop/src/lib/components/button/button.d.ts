interface Button {
  as: "a" | "button" = "button"
  href: string | undefined
  onClick: VoidFunction | undefined
  leadingIcon: IconifyIcon | undefined
  trailingIcon: IconifyIcon | undefined
}