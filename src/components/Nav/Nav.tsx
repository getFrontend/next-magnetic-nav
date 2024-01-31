"use client"
import { cn } from "@/lib/utils";
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

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
  const pathname = usePathname();
  const MotionLink = motion(Link);

  return (
    <nav className="p-8">
      <ul className="flex gap-12 justify-center">
        {links.map(link => {
          return (
            <motion.li key={link.path}>
              <MotionLink
                className={cn(
                  "font-medium rounded-lg text-sm py-2 px-4 transition-all duration-500 ease-out hover:bg-slate-200",
                  pathname === link.path ? "bg-slate-300" : ""
                )} href={link.path}
              >
                <motion.span>{link.name}</motion.span>
              </MotionLink>
            </motion.li>
          )
        })}
      </ul>
    </nav>
  )
}