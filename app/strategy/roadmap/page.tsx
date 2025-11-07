export default function RoadmapPage() {
  const quarters = [
    {
      name: 'Q1 2025',
      initiatives: [
        { name: 'Mobile App Launch', status: 'in-progress' },
        { name: 'API v2 Release', status: 'in-progress' },
      ]
    },
    {
      name: 'Q2 2025',
      initiatives: [
        { name: 'Enterprise Features', status: 'planned' },
        { name: 'Analytics Dashboard', status: 'planned' },
      ]
    },
    {
      name: 'Q3 2025',
      initiatives: [
        { name: 'AI Integration', status: 'planned' },
        { name: 'Multi-language Support', status: 'planned' },
      ]
    },
  ]

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Product Roadmap</h1>
      <p className="text-gray-600 mb-6">
        Strategic initiatives and product timeline.
      </p>

      <div className="space-y-6">
        {quarters.map((quarter) => (
          <div key={quarter.name} className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{quarter.name}</h3>
            <div className="space-y-3">
              {quarter.initiatives.map((initiative) => (
                <div key={initiative.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">{initiative.name}</span>
                  <span className={`px-3 py-1 text-xs rounded-full ${
                    initiative.status === 'in-progress'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {initiative.status === 'in-progress' ? 'In Progress' : 'Planned'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
