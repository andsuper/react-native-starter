import { name } from '../../package.json'

/**
 * Returns the apps database name.
 *
 * @returns {string} database name
 */
function getDatabaseName(): string {
  const segments: string[] = name
    .split(/[x^+-]/)
    .map(segment => segment.charAt(0).toUpperCase() + segment.slice(1))

  return segments.join('')
}

export default getDatabaseName
