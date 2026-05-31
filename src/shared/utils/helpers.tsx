/**
 * Split text by \n into lines
 */
export const splitTextByNewLine = (text?: string): string[] => {
  if (!text) return [];

  return text
    .replace(/\\n/g, '\n') // converts literal \n into real newline
    .split('\n');
};
