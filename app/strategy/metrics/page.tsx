export default function MetricsPage() {
  const metrics = [
    { name: 'Monthly Active Users', value: '125K', change: '+12%', trend: 'up' },
    { name: 'Revenue Growth', value: '$2.4M', change: '+8%', trend: 'up' },
    { name: 'Customer Satisfaction', value: '4.7/5', change: '+0.2', trend: 'up' },
    { name: 'Churn Rate', value: '2.3%', change: '-0.5%', trend: 'down' },
  ]

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Key Metrics</h1>
      <p className="text-gray-600 mb-6">
        Track your most important performance indicators.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {metrics.map((metric) => (
          <div key={metric.name} className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{metric.name}</p>
                <p className="text-3xl font-bold text-gray-900">{metric.value}</p>
              </div>
              <span className={`px-2 py-1 text-sm rounded-full ${
                metric.trend === 'up'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {metric.change}
              </span>
            </div>
            <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full ${metric.trend === 'up' ? 'bg-green-500' : 'bg-red-500'}`}
                style={{ width: '70%' }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="font-semibold text-gray-900 mb-2">Performance Summary</h3>
        <p className="text-gray-700">
          Overall performance is trending positively with strong user growth and improved customer satisfaction.
          Focus areas for next quarter include reducing churn rate and maintaining revenue momentum.
        </p>
      </div>
    </div>
  )
}
