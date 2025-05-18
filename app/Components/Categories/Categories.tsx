"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import navStyle from "../Nav/css/nav.module.css";

const ctgr = [
  { path: "/", category: "Naslovnica" },
  { path: "/category/vijesti", category: "Vijesti" },
  { path: "/category/crna-kronika", category: "Crna Kronika" },
  { path: "/category/sport", category: "Sport" },
  { path: "/category/politika", category: "Politika" },
  { path: "/category/gospodarstvo", category: "Gospodarstvo" },
  { path: "/category/kultura", category: "Kultura" },
  { path: "/category/zanimljivosti", category: "Zanimljivosti" },
  { path: "/category/lifestyle", category: "Lifestyle" },
  { path: "/contact", category: "Kontaktirajte nas" },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Categoires = ({ toggle }: { toggle: any }) => {
  const pathname = usePathname();

  return (
    <ul className={navStyle.navLinks}>
      {ctgr.map((item, index) => {
        return (
          <li key={index} onClick={toggle}>
            <Link
              //replace
              className={`${pathname === item.path ? navStyle.active : ""}`}
              href={item.path}
              prefetch={false}
              style={{ fontWeight: "600", fontSize: "13px" }}
            >
              {item.category}
            </Link>
          </li>
        );
      })}
      <li onClick={toggle}>
        <Link
          href={"https://www.osmrtnica.ba/"}
          style={{ fontWeight: "600", fontSize: "13px" }}
        >
          Osmrtnice
        </Link>
      </li>
    </ul>
  );
};

export default Categoires;
