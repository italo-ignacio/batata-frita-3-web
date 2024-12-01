export const formatContent = (type: 'subtitle' | 'title', content?: string): string => {
  const text = content ?? '';

  if (!text) return '';

  const regexMap: Record<string, RegExp> = {
    subtitle: /<p class="ementa">(?<temp1>.*?)<\/p>/gu,
    title: /<p class="identifica">(?<temp1>.*?)<\/p>/gu
  };

  const regex = regexMap[type];
  const matches = [];

  // eslint-disable-next-line @typescript-eslint/init-declarations
  let match;

  // eslint-disable-next-line no-cond-assign
  while ((match = regex.exec(text)) !== null) matches.push(match[1]);

  return matches.join(' ');
};
