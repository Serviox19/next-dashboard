export default function GoalsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Goals & Objectives</h1>
      <p className="text-gray-600 mb-6">
        Define and track your strategic goals and objectives.
      </p>

      <div className="space-y-4">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Q1 2025 Goals</h3>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Active</span>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                <span className="text-blue-600 text-xs">1</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">Increase user engagement by 25%</p>
                <p className="text-sm text-gray-600">Target: March 31, 2025</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                <span className="text-blue-600 text-xs">2</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">Launch 3 new product features</p>
                <p className="text-sm text-gray-600">Target: March 31, 2025</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                <span className="text-blue-600 text-xs">3</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">Expand to 2 new markets</p>
                <p className="text-sm text-gray-600">Target: March 31, 2025</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
