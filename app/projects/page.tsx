import connectDB from '@/lib/mongodb';
import Project from '@/models/Project';

interface ProjectType {
  _id: string;
  name: string;
  description?: string;
  status: 'active' | 'completed' | 'archived';
  createdAt: string;
  updatedAt: string;
}

async function getProjects(): Promise<ProjectType[]> {
  try {
    await connectDB();
    const projects = await Project.find({}).sort({ createdAt: -1 }).lean();
    return JSON.parse(JSON.stringify(projects));
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

function StatusBadge({ status }: { status: ProjectType['status'] }) {
  const colors = {
    active: 'bg-green-100 text-green-800',
    completed: 'bg-blue-100 text-blue-800',
    archived: 'bg-gray-100 text-gray-800'
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[status]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
          <p className="text-gray-600 mt-1">
            {projects.length === 0 ? 'No projects yet' : `${projects.length} project${projects.length !== 1 ? 's' : ''}`}
          </p>
        </div>
      </div>

      {projects.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
          <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
          <p className="text-gray-600">Create your first project using the API endpoint</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div key={project._id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-gray-900">{project.name}</h3>
                <StatusBadge status={project.status} />
              </div>
              {project.description && (
                <p className="text-sm text-gray-600 mt-2">{project.description}</p>
              )}
              <p className="text-xs text-gray-400 mt-3">
                Created {new Date(project.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
