'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AddProjectModal from '@/components/AddProjectModal';

interface ProjectType {
  _id: string;
  name: string;
  description?: string;
  status: 'active' | 'completed' | 'archived';
  createdAt: string;
  updatedAt: string;
}

function StatusDropdown({
  projectId,
  currentStatus,
  onStatusChange
}: {
  projectId: string;
  currentStatus: ProjectType['status'];
  onStatusChange: (projectId: string, newStatus: ProjectType['status']) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const colors = {
    active: 'bg-green-100 text-green-800 hover:bg-green-200',
    completed: 'bg-blue-100 text-blue-800 hover:bg-blue-200',
    archived: 'bg-gray-100 text-gray-800 hover:bg-gray-200'
  };

  const statuses: ProjectType['status'][] = ['active', 'completed', 'archived'];

  const handleStatusChange = async (newStatus: ProjectType['status']) => {
    if (newStatus === currentStatus || isUpdating) return;

    setIsUpdating(true);
    setIsOpen(false);

    try {
      await onStatusChange(projectId, newStatus);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isUpdating}
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors ${colors[currentStatus]} ${isUpdating ? 'opacity-50 cursor-wait' : 'cursor-pointer'}`}
      >
        {currentStatus.charAt(0).toUpperCase() + currentStatus.slice(1)}
        <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-1 w-32 bg-white rounded-md shadow-lg border border-gray-200 z-20">
            {statuses.map((status) => (
              <button
                key={status}
                onClick={() => handleStatusChange(status)}
                className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-100 first:rounded-t-md last:rounded-b-md ${
                  status === currentStatus ? 'bg-gray-50 font-medium' : ''
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function ProjectsClient({ initialProjects }: { initialProjects: ProjectType[] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleSuccess = () => {
    router.refresh();
  };

  const handleStatusChange = async (projectId: string, newStatus: ProjectType['status']) => {
    try {
      const response = await fetch('/api/projects', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: projectId, status: newStatus }),
      });

      if (!response.ok) {
        throw new Error('Failed to update project status');
      }

      router.refresh();
    } catch (error) {
      console.error('Error updating status:', error);
      // Could add toast notification here
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
          <p className="text-gray-600 mt-1">
            {initialProjects.length === 0 ? 'No projects yet' : `${initialProjects.length} project${initialProjects.length !== 1 ? 's' : ''}`}
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Project
        </button>
      </div>

      {initialProjects.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
          <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
          <p className="text-gray-600 mb-4">Get started by creating your first project</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Create Project
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {initialProjects.map((project) => (
            <div
              key={project._id}
              className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white cursor-pointer group"
              onClick={(e) => {
                // Don't navigate if clicking on status dropdown
                if (!(e.target as HTMLElement).closest('.status-dropdown')) {
                  router.push(`/projects/${project._id}`);
                }
              }}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {project.name}
                </h3>
                <div
                  className="status-dropdown"
                  onClick={(e) => e.stopPropagation()}
                >
                  <StatusDropdown
                    projectId={project._id}
                    currentStatus={project.status}
                    onStatusChange={handleStatusChange}
                  />
                </div>
              </div>
              {project.description && (
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">{project.description}</p>
              )}
              <p className="text-xs text-gray-400 mt-3">
                Created {new Date(project.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}

      <AddProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleSuccess}
      />
    </div>
  );
}
