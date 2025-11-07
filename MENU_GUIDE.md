# Menu & Routing Guide

## Adding New Menu Items

### 1. Define the Menu Item

Edit `components/layout/Sidebar.tsx` and add to the appropriate menu array:

```typescript
const projectsMenu: MenuItem[] = [
  // ... existing items
  {
    id: 'new-item',
    label: 'New Item',
    icon: <YourIcon size={16} />,
    href: '/new-item'
  },
]
```

### 2. Create Nested/Grouped Items

```typescript
{
  id: 'parent',
  label: 'Parent Item',
  icon: <Icon size={16} />,
  href: '/parent',
  children: [
    { id: 'child1', label: 'Child 1', icon: <Icon size={16} />, href: '/parent/child1' },
    { id: 'child2', label: 'Child 2', icon: <Icon size={16} />, href: '/parent/child2' },
  ]
}
```

### 3. Create the Corresponding Page

Create a file at `app/[your-route]/page.tsx`:

```typescript
export default function YourPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Your Page Title</h1>
      <p className="text-gray-600">Your content here</p>
    </div>
  )
}
```

## Route Examples

| Menu href                          | File Location                                      |
|------------------------------------|----------------------------------------------------|
| `/`                                | `app/page.tsx`                                     |
| `/inbox`                           | `app/inbox/page.tsx`                               |
| `/projects`                        | `app/projects/page.tsx`                            |
| `/teamspaces/marketing`            | `app/teamspaces/marketing/page.tsx`                |
| `/projects/auto-campaigns/epics`   | `app/projects/auto-campaigns/epics/page.tsx`       |

## Adding New Sections (Main Navigation)

To add a new top-level section (like "Projects" or "Wiki"):

1. **Add to MainNavigation** (`components/layout/MainNavigation.tsx`):
```typescript
const navItems: NavItem[] = [
  // ... existing items
  { id: 'new-section', label: 'New Section', icon: <YourIcon size={20} /> },
]
```

2. **Add menu items in Sidebar** (`components/layout/Sidebar.tsx`):
```typescript
const newSectionMenu: MenuItem[] = [
  { id: 'item1', label: 'Item 1', icon: <Icon size={16} />, href: '/new-section/item1' },
  { id: 'item2', label: 'Item 2', icon: <Icon size={16} />, href: '/new-section/item2' },
]

// Update getMenuItems function:
const getMenuItems = () => {
  if (selectedSection === 'new-section') {
    return newSectionMenu
  }
  // ... other conditions
}
```

3. **Create pages** in `app/new-section/item1/page.tsx`, etc.

## Dynamic Routes (Optional)

For dynamic routes like `/projects/[projectId]/overview`:

1. Create folder structure: `app/projects/[projectId]/overview/page.tsx`
2. Access the dynamic parameter:

```typescript
export default function ProjectOverview({ params }: { params: { projectId: string } }) {
  return <div>Project: {params.projectId}</div>
}
```

## Quick Commands

- Add a menu item → Edit `Sidebar.tsx`
- Create a page → Create `app/[path]/page.tsx`
- Test routing → Click menu items and check URL changes
