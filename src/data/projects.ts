export type Project = {
  slug: string
  title: string
  category: string
  description: string
  image: string
}

/**
 * Only add projects that Cresco has actually completed and can reference.
 * With no entries, the Projects section renders a prepared, honest empty state.
 */
export const projects: Project[] = []
