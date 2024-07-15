"use client";

import { Home2, Profile, TaskSquare, TransactionMinus } from "iconsax-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import React from "react";
import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';

const menus = [
  {
    href: "/",
    label: "Beranda",
    icon: <Home2 size="22" variant="Bold" />,
  },
  // {
  //   href: "/misi",
  //   label: "Misi",
  //   icon: <TaskSquare size="22" variant="Bold" />,
  // },
  {
    href: "/transaksi",
    label: "History",
    icon: <TransactionMinus size="22" variant="Bold" />,
  },
  {
    href: "/profile",
    label: "Profil",
    icon: <Profile size="22" variant="Bold" />,
  },
];

const BottomNavbar = () => {
  const path = usePathname();

  return (
    <div className="fixed z-20 bottom-0 left-0 w-full bg-white px-3 shadow-[0_30px_45px_0px_rgba(0,0,0,0.8)]">
      <div className="container">
        <div className="flex justify-between gap-3">
          {menus.map((menu, idx) => (
            <Link as={NextLink} href={menu.href} key={idx}>
              <div

                className="group/menu-item inline-flex flex-col justify-center items-center relative min-w-[65px] pb-2.5 pt-4"
              >
                <span
                  className={cn(
                    "w-full h-[3px]  absolute top-0 left-0 rounded-b-md ",
                    [
                      {
                        "bg-[#00AA12]": menu.href === path,
                        "bg-transparent": menu.href !== path,
                      },
                    ]
                  )}
                />
                <span
                  className={cn(
                    "text-[#C2C2C3] group-hover/menu-item:text-[#00AA12] mb-1",
                    [
                      {
                        "text-[#00AA12]": menu.href === path,
                      },
                    ]
                  )}
                >
                  {menu.icon}
                </span>
                <p
                  className={cn(
                    "text-[#C2C2C3] group-hover/menu-item:text-[#00AA12] font-regular text-sm",
                    {
                      "text-[#00AA12]": menu.href === path,
                    }
                  )}
                >
                  {menu.label}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomNavbar;
