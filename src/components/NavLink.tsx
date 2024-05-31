import React from "react"
import Link from "next/link"
import { NavLinkProps } from "@/interface/NavLink"

const NavLink = ({ links }: NavLinkProps) => {
  return (
    <div className="flex gap-2 my-5">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className={`w-full py-5 px-5 font-semibold text-white rounded-lg ${link.bgColor} hover:${link.bgHover}`}
        >
          {link.text}
        </Link>
      ))}
    </div>
  )
}

export default NavLink
