export function handleServiceError(error: unknown, source: string) {
  console.error(`[${source}]`, error);
  return null;
}
