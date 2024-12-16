import { slugify } from 'transliteration';

export const computeOptionValueFromLabel = (label: string): string => {
  const prefixedLabel = /^\d/.test(label) ? `OPT${label}` : label;

  const formattedString = slugify(prefixedLabel, {
    trim: true,
    separator: '_',
    allowedChars: 'a-zA-Z0-9_',
  });

  if (formattedString === '') {
    throw new Error('Invalid label');
  }

  return formattedString.toUpperCase();
};