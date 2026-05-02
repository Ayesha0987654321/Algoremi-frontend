
export function useStagger(base = 0, step = 0.08) {
  return (index) => base + index * step
}