export default function ProjectsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Projects Home Page</h1>
      <p className="text-gray-600 mb-6">
        Your project list will go here. This is just a placeholder.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-gray-900">Project {i}</h3>
            <p className="text-sm text-gray-600 mt-2">Project description goes here</p>
          </div>
        ))}
      </div>
    </div>
  )
}
