
export function titleToSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/ /g, "-")
}

export const camelize = s => s.replace(/-./g, x => x.toUpperCase()[1])