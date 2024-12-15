import {
  Tag,
  Users,
  Settings,
  Bookmark,
  SquarePen,
  LayoutGrid,
  LucideIcon,
  Key,
  ShoppingBag,
  Scroll
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active?: boolean;
};

type Menu = {
  href: string;
  label: string;
  active?: boolean;
  icon: LucideIcon;
  submenus?: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/",
          label: "Home",
          icon: LayoutGrid,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "Contents",
      menus: [
        {
          href: "/licenses",
          label: "Licenses",
          icon: Key
        },
        {
          href: "/shop",
          label: "Shop",
          icon: ShoppingBag
        },
        {
          href: "/docs",
          label: "Documentation",
          icon: Scroll
        },
      ]
    },
    {
      groupLabel: "Settings",
      menus: [
        {
          href: "/linkdicord",
          label: "Link your Discord",
          icon: Users
        },
      ]
    }
  ];
}
