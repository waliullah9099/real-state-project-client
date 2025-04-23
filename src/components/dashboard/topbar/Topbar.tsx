"use client"

import { useState } from "react"
import Link from "next/link"
import { BiNotification } from "react-icons/bi"
import { Menu, X } from "lucide-react"

export function DashboardTopbar() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="h-16 border-b border-gray-200 bg-white px-4 md:px-6 flex items-center justify-between shadow">
      {/* Left side with search */}
      <div className="flex items-center gap-4">
        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-500 hover:text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="sr-only">Open menu</span>
          <Menu />
        </button>

        {/* Search input */}
        <div className="relative w-full max-w-md">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="search"
            placeholder="Search..."
            className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 md:w-[300px]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Right side with notification button */}
      <div className="flex items-center gap-2">
        <button className="rounded-md border border-gray-300 p-2 text-gray-500 hover:bg-gray-100">
          <span className="sr-only">Notifications</span>
          <BiNotification />
        </button>
      </div>

      {/* Mobile sidebar */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="fixed inset-y-0 left-0 w-64 bg-gray-800 text-white">
            <div className="flex h-16 items-center justify-between px-6 border-b border-gray-700">
              <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
                <span className="text-xl">📊</span>
                <span>Acme Inc</span>
              </Link>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white">
                <X />
              </button>
            </div>
            <nav className="p-4 space-y-1">
              {[
                { icon: "🏠", label: "Dashboard", href: "/dashboard" },
                { icon: "👥", label: "Users", href: "/dashboard/users" },
                { icon: "📦", label: "Products", href: "/dashboard/products" },
                { icon: "📊", label: "Analytics", href: "/dashboard/analytics" },
                { icon: "📑", label: "Reports", href: "/dashboard/reports" },
                { icon: "⚙️", label: "Settings", href: "/dashboard/settings" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors text-gray-300 hover:bg-gray-700 hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
