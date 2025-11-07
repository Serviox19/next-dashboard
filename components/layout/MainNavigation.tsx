'use client'

import { useRouter } from 'next/navigation'
import {
  LayoutDashboard,
  FolderKanban,
  Target,
  Settings,
  User
} from 'lucide-react'

interface NavItem {
  id: string
  label: string
  icon: React.ReactNode
  defaultRoute?: string
}

const navItems: NavItem[] = [
  { id: 'projects', label: 'Projects', icon: <FolderKanban size={20} />, defaultRoute: '/' },
  { id: 'strategy', label: 'Strategy', icon: <Target size={20} />, defaultRoute: '/strategy/goals' },
]

const bottomNavItems: NavItem[] = [
  { id: 'settings', label: 'Settings', icon: <Settings size={20} />, defaultRoute: '/settings' },
  { id: 'profile', label: 'Profile', icon: <User size={20} />, defaultRoute: '/profile' },
]

interface MainNavigationProps {
  selectedSection: string
  onSectionChange: (section: string) => void
}

export default function MainNavigation({ selectedSection, onSectionChange }: MainNavigationProps) {
  const router = useRouter()

  const handleNavClick = (item: NavItem) => {
    onSectionChange(item.id)
    if (item.defaultRoute) {
      router.push(item.defaultRoute)
    }
  }

  return (
    <div className="w-14 bg-gray-900 flex flex-col items-center py-4 space-y-2">
      {/* Logo */}
      <button
        onClick={() => router.push('/')}
        className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-4 hover:bg-gray-100 transition-colors cursor-pointer"
        title="Dashboard"
      >
        <LayoutDashboard size={24} className="text-gray-900" />
      </button>

      {/* Main Nav Items */}
      <div className="flex flex-col space-y-1 flex-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item)}
            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
              selectedSection === item.id
                ? 'bg-blue-600 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
            title={item.label}
          >
            {item.icon}
          </button>
        ))}
      </div>

      {/* Bottom Nav Items */}
      <div className="flex flex-col space-y-1">
        {bottomNavItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item)}
            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
              selectedSection === item.id
                ? 'bg-blue-600 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
            title={item.label}
          >
            {item.icon}
          </button>
        ))}
      </div>
    </div>
  )
}
