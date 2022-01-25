/**
 * useSettings React custom hook
 * Usage:
 *    const { maxWidth } = useSettings();
 */

export function useSettings() {
  const maxWidth = '42rem';

  return {
    maxWidth
  };
}
