"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar";
import type { UserRole } from "../../../generated/prisma";

interface NavItem {
  title: string;
  href: string;
  roles?: UserRole[];
}

const navItems: NavItem[] = [
  { title: "Overview", href: "/dashboard" },
  { title: "Clients", href: "/dashboard/clients" },
  { title: "Templates", href: "/dashboard/templates" },
  { title: "Voices", href: "/dashboard/voices" },
  { title: "Messaging", href: "/dashboard/messaging" },
  { title: "Users", href: "/dashboard/users", roles: ["ADMIN"] },
  { title: "Settings", href: "/dashboard/settings", roles: ["ADMIN"] },
];

interface DashboardSidebarProps {
  userRole: UserRole;
}

export function DashboardSidebar({ userRole }: DashboardSidebarProps) {
  const pathname = usePathname();

  const filteredItems = navItems.filter(
    (item) => !item.roles || item.roles.includes(userRole),
  );

  return (
    <Sidebar>
      <SidebarHeader className="border-b px-6 py-4">
        <Link href="/dashboard" className="text-xl font-bold">
          Vocecast
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {filteredItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={
                      item.href === "/dashboard"
                        ? pathname === "/dashboard"
                        : pathname.startsWith(item.href)
                    }
                  >
                    <Link href={item.href}>{item.title}</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
