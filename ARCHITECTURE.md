# Portfolio v2 Architecture

This project is best maintained as a feature-based Next.js full-stack app.
The public UI should stay visually unchanged, while the data layer and admin panel become dynamic.

## Recommended Structure

```text
src/
  app/
    (site)/
      layout.tsx
      page.tsx
      about/page.tsx
      contact/page.tsx
      project/page.tsx
    (admin)/
      layout.tsx
      dashboard/
        page.tsx
        login/page.tsx
        profile/page.tsx
        projects/page.tsx
        media/page.tsx
        settings/page.tsx
    api/
      auth/[...nextauth]/route.ts
      admin/
        profile/route.ts
        projects/route.ts
        projects/reorder/route.ts
        media/route.ts
      upload/
        cloudinary/route.ts

  features/
    site/
      home/
      about/
      contact/
      projects/
    admin/
      components/
        layout/
        auth/
        profile/
        projects/
        media/
        shared/
      hooks/
      types/
      utils/
      constants/
      store/

  lib/
    auth/
    mongodb/
    cloudinary/
    validators/
    permissions/

  models/
    Profile.ts
    Project.ts
    Skill.ts
    Hobby.ts
    Experience.ts
    Education.ts
    Certificate.ts
    Settings.ts

  schemas/
    profile.schema.ts
    project.schema.ts
    skill.schema.ts
    auth.schema.ts

  types/
    index.ts
    cms.ts
    api.ts
```

## Why this structure

- `app/(site)` keeps the public portfolio clean and easy to navigate.
- `app/(admin)` isolates the dashboard so CMS changes never leak into the public UI.
- `app/api` keeps server actions, auth, upload, and reorder endpoints discoverable.
- `features/` groups code by domain instead of by file type, which is easier to scale.
- `lib/`, `models/`, and `schemas/` separate infrastructure, database models, and validation.

## Dashboard Stack Recommendation

Use a hybrid approach:

- Base UI: `shadcn/ui`
- Styling: `Tailwind CSS`
- Table/grid: `TanStack Table`
- Drag and drop: `dnd-kit`
- Forms: `react-hook-form` + `zod`
- Auth: `NextAuth`
- Toasts: `sonner`
- Icons: `lucide-react`
- Query/cache: `TanStack Query` if you want client caching for dashboard data

### Recommendation

Use `shadcn/ui` as the dashboard foundation, then customize the theme and layout to match your portfolio style.
That gives you:

- faster development
- consistent accessible components
- easier maintenance
- a cleaner admin UI than building every control from scratch

Avoid building the entire dashboard as fully custom UI unless you only need a very small admin surface.
For your case, `shadcn/ui` is the best balance of speed, quality, and flexibility.

## Data Flow

- Public pages read data from MongoDB.
- Dashboard edits data in forms.
- Project images upload to Cloudinary.
- MongoDB stores only the Cloudinary URLs and metadata.
- Reorder actions update an `order` field in MongoDB.
- Filters use stored skills/tags so the public project list can stay dynamic.

## Suggested Collections

- `profiles`
- `projects`
- `skills`
- `hobbies`
- `experiences`
- `educations`
- `certificates`
- `settings`
- `users`

## Best Practice Notes

- Keep one source of truth for portfolio content in MongoDB.
- Keep the public site fully read-only.
- Put all CMS mutations behind admin auth.
- Store image metadata in MongoDB and the actual file in Cloudinary.
- Use explicit validation schemas before saving any CMS data.
