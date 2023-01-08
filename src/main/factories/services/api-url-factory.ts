export function makeApiUrlFactory(path: string): string {
  return `https://api-to-ligado.herokuapp.com${path}`;
}
