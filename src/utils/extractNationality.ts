export const extractNationality = (input: string): string | null => {
  const match = input.match(/\(([^,]+),|\n([^,]+)/);
  return match ? (match[1] || match[2]).trim() : null;
};
