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
import { ROUTES } from "~/shared/constants";
import type { UserRole } from "../../../generated/prisma";

interface NavItem {
  title: string;
  href: string;
  roles?: UserRole[];
}

const navItems: NavItem[] = [
  { title: "Overview", href: ROUTES.DASHBOARD },
  { title: "Clients", href: ROUTES.CLIENTS },
  { title: "Templates", href: ROUTES.TEMPLATES },
  { title: "Voices", href: ROUTES.VOICES },
  { title: "Messaging", href: ROUTES.MESSAGING },
  { title: "Users", href: ROUTES.USERS, roles: ["ADMIN"] },
  { title: "Settings", href: ROUTES.SETTINGS, roles: ["ADMIN"] },
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
        <Link href={ROUTES.DASHBOARD} className="text-xl font-bold">
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
                      item.href === ROUTES.DASHBOARD
                        ? pathname === ROUTES.DASHBOARD
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
