export default function MarketingTeamspacePage() {
  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-3xl">🔥</span>
        <h1 className="text-2xl font-bold text-gray-900">Marketing Teamspace</h1>
      </div>

      <p className="text-gray-600 mb-6">
        This is the Marketing team's dedicated workspace.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Active Projects</h3>
          <p className="text-2xl font-bold text-blue-600">12</p>
        </div>
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Team Members</h3>
          <p className="text-2xl font-bold text-green-600">8</p>
        </div>
      </div>
    </div>
  )
}
