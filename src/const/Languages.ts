export const LANGUAGES: string[] = ['JavaScript', 'C++', 'Ruby', 'Java', 'PHP', 'Go'];

export function getLanguages(): Promise<string[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(LANGUAGES);
    }, 1000);
  });
}
