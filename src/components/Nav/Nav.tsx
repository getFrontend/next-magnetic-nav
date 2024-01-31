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

  const mapRange = (
    inputLower: number,
    inputUpper: number,
    outputLower: number,
    outputUpper: number
  ) => {
    const INPUT_RANGE = inputUpper - inputLower
    const OUTPUT_RANGE = outputUpper - outputLower

    return (value: number) =>
      outputLower + (((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0)
  }

  return (
    <nav className="p-8">
      <ul className="flex gap-12 justify-center">
        {links.map(link => {
          return (
            <motion.li key={link.path}>
              <MotionLink
                className={cn(
                  "font-medium rounded-lg text-xl py-4 px-8 uppercase transition-all duration-500 ease-out hover:bg-slate-200",
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