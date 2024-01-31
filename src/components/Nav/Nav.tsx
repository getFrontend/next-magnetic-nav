"use client"
import Link from "next/link"

export default function Nav() {
  const links = [
    {
      path: "/",
      name: "home"
    },
    {
      path: "/projects",
      name: "projects"
    },
    {
      path: "/contact",
      name: "contact"
    },
  ]

  return (
    <nav className="p-8">
      <ul className="flex gap-12">
        {links.map(link => {
          return (
            <li key={link.path}>
              <Link className="font-medium text-sm py-2 px-4 transition-all duration-500 ease-out hover:bg-slate-200" href={link.path}>
                <span>{link.name}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}