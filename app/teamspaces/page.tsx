export default function TeamspacesPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Teamspaces</h1>
      <p className="text-gray-600 mb-6">
        Collaborate with your teams in dedicated spaces.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
          <div className="text-2xl mb-2">🔥</div>
          <h3 className="font-semibold text-gray-900">Marketing</h3>
          <p className="text-sm text-gray-600 mt-2">Marketing team workspace</p>
        </div>
      </div>
    </div>
  )
}
