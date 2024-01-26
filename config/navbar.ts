import { NavbarItem, NavbarItemWithChildren } from "@/types/navbar";

interface NavbarConfig {
  main: NavbarItem[];
  sidebar?: NavbarItemWithChildren[];
}

export const navbarConfig: NavbarConfig = {
  main: [
    {
      title: "Games",
      href: "/games",
    },
    {
      title: "TV Shows",
      href: "/tv-shows",
    },
  ],
  sidebar: [
    {
      items: [],
      // title: "Reviews",
      // items: [
      //   {
      //     title: "Games",
      //     href: "/games",
      //     items: [],
      //   },
      //   {
      //     title: "TV Shows",
      //     href: "/tv-shows",
      //     items: [],
      //   },
      // ],
    },
  ],
};
