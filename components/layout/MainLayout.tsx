'use client'

import { useState } from 'react'
import MainNavigation from './MainNavigation'
import Sidebar from './Sidebar'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [selectedSection, setSelectedSection] = useState<string>('projects')

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Main Navigation - Far left */}
      <MainNavigation
        selectedSection={selectedSection}
        onSectionChange={setSelectedSection}
      />

      {/* Contextual Sidebar */}
      <Sidebar selectedSection={selectedSection} />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-white">
        {children}
      </main>
    </div>
  )
}
