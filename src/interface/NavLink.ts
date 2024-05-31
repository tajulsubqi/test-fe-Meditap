interface NavLink {
  href: string
  text: string
  bgColor: string
  bgHover?: string
}

export interface NavLinkProps {
  links: NavLink[]
}
