'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  ChevronRight,
  ChevronDown,
  Home,
  Inbox,
  FolderKanban,
  Users,
  LayoutDashboard,
  Search,
  Plus
} from 'lucide-react'

interface MenuItem {
  id: string
  label: string
  icon: React.ReactNode
  href?: string
  children?: MenuItem[]
}

interface SidebarProps {
  selectedSection: string
}

// Mock data structure - you can move this to a config file later
const projectsMenu: MenuItem[] = [
  { id: 'home', label: 'Home', icon: <Home size={16} />, href: '/projects' },
  { id: 'inbox', label: 'Inbox', icon: <Inbox size={16} />, href: '/projects/inbox' },
  { id: 'teamspaces', label: 'Teamspaces', icon: <Users size={16} />, href: '/teamspaces', children: [
    { id: 'marketing', label: 'Marketing', icon: <span className="text-xs">🔥</span>, href: '/teamspaces/marketing' },
  ]},
]

const strategyMenu: MenuItem[] = [
  { id: 'goals', label: 'Goals & Objectives', icon: <LayoutDashboard size={16} />, href: '/strategy/goals' },
  { id: 'roadmap', label: 'Roadmap', icon: <FolderKanban size={16} />, href: '/strategy/roadmap' },
  { id: 'metrics', label: 'Key Metrics', icon: <Inbox size={16} />, href: '/strategy/metrics' },
]

function MenuItemComponent({ item, level = 0 }: { item: MenuItem; level?: number }) {
  const [isOpen, setIsOpen] = useState(true)
  const pathname = usePathname()
  const isActive = pathname === item.href
  const hasChildren = item.children && item.children.length > 0

  return (
    <div>
      <Link
        href={item.href || '#'}
        className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
          isActive
            ? 'bg-blue-50 text-blue-600'
            : 'text-gray-700 hover:bg-gray-100'
        }`}
        style={{ paddingLeft: `${12 + level * 16}px` }}
      >
        {hasChildren && (
          <button
            onClick={(e) => {
              e.preventDefault()
              setIsOpen(!isOpen)
            }}
            className="hover:bg-gray-200 rounded p-0.5"
          >
            {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          </button>
        )}
        {!hasChildren && <span className="w-[14px]" />}
        {item.icon}
        <span className="flex-1">{item.label}</span>
      </Link>

      {hasChildren && isOpen && (
        <div className="mt-1">
          {item.children?.map((child) => (
            <MenuItemComponent key={child.id} item={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

export default function Sidebar({ selectedSection }: SidebarProps) {
  // Determine which menu to show based on selected section
  const getMenuItems = () => {
    switch (selectedSection) {
      case 'projects':
        return projectsMenu
      case 'strategy':
        return strategyMenu
      default:
        return projectsMenu
    }
  }

  const menuItems = getMenuItems()

  // Get section title
  const getSectionTitle = () => {
    switch (selectedSection) {
      case 'projects':
        return 'Projects'
      case 'strategy':
        return 'Strategy'
      default:
        return 'Projects'
    }
  }

  return (
    <aside className="w-64 bg-gray-50 border-r border-gray-200 flex flex-col custom-scrollbar overflow-y-auto">
      {/* Search bar */}
      <div className="p-4 border-b border-gray-200">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-9 pr-3 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Section header with action */}
      <div className="px-4 py-3 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-gray-900 text-sm uppercase tracking-wider">
            {getSectionTitle()}
          </h2>
          <button className="text-gray-400 hover:text-gray-600">
            <Plus size={18} />
          </button>
        </div>
      </div>

      {/* Navigation menu */}
      <nav className="flex-1 p-3 space-y-1">
        {menuItems.map((item) => (
          <MenuItemComponent key={item.id} item={item} />
        ))}
      </nav>
    </aside>
  )
}
