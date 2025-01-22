"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Dashboard",
    path: "/dashboard",
  },
  {
    label: "Settings",
    path: "/settings",
  },
];

const navStyles = {
  display: "flex",
  justifyContent: "space-evenly",
  padding: "50px",
  width: "100vw",
  listStyleType: "none",
};

export default function Navigation() {
  const pathName = usePathname();
  console.log({ pathName });
  return (
    <nav>
      <ul style={navStyles}>
        {navLinks.map(({ label, path }) => (
          <li
            key={label}
            style={{ color: path === pathName ? "blue" : "magenta" }}
          >
            <Link href={path}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
