"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart2,
  Home,
  Layers,
  Package,
  Settings,
  Users,
} from "lucide-react";

export function DashboardSidebar() {
  const pathname = usePathname();

  const navItems212 = [
    { icon: Home, label: "Dashboard", href: "/dashboard" },
    { icon: Users, label: "Users", href: "/dashboard/users" },
    { icon: Package, label: "Products", href: "/dashboard/products" },
    { icon: BarChart2, label: "Analytics", href: "/dashboard/analytics" },
    { icon: Layers, label: "Reports", href: "/dashboard/reports" },
    { icon: Settings, label: "Settings", href: "/dashboard/settings" },
  ];

  const navItems = [
    { icon: "🏠", label: "Dashboard", href: "/dashboard" },
    { icon: "👥", label: "Users", href: "/dashboard/users" },
    { icon: "📦", label: "Properties", href: "/dashboard/properties" },
    { icon: "📊", label: "Analytics", href: "/dashboard/analytics" },
    { icon: "📑", label: "Reports", href: "/dashboard/reports" },
    { icon: "⚙️", label: "Settings", href: "/dashboard/settings" },
  ];

  return (
    <aside className="w-64 bg-gray-800 text-white hidden md:block shadow">
      <div className="h-16 flex items-center px-6 border-b border-gray-700">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold"
        >
          <span className="text-xl">📊</span>
          <span>Acme Inc</span>
        </Link>
      </div>
      <nav className="p-4 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
              pathname === item.href
                ? "bg-gray-700 text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white"
            }`}
          >
            <span>{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
