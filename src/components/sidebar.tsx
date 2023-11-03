"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { usePathname } from "next/navigation";

interface ItemProps {
  href?: string;
  text?: string;
}

const Item = ({ href = "/", text = "Link" }: ItemProps) => {
  const pathName = usePathname();
  return (
    <div>
      <Link
        href={href}
        className={clsx(
          "font-bold flex flex-row item-center px-4 py-2 gap-1 bg-white hover:bg-zinc-200 rounded-md",
          pathName === href && "bg-zinc-200 dropdown-shadow-xl"
        )}
      >
        {text}
      </Link>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="flex flex-col w-[231px] gap-[11px]">
      <Image
        alt="logo"
        width={54}
        height={54}
        src={"/img/logo.png"}
        className="mx-4 mb-4"
      />
      <ul>
        <li className="mb-1">
          <Item href={"/"} text="Home" />
        </li>
        <li className="mb-1">
          <Item href={"/about"} text="About" />
        </li>
        <li className="mb-1">
          <Item href={"/blog"} text="Blog" />
        </li>
        <li className="mb-1">
          <Item href={"/guestbook"} text="Guest Book" />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
