// eslint-disable-next-line no-restricted-imports
import s from 'slugify';

s.extend({ '#': '' });

export const slugify = (
  str: string,
  options: Exclude<Parameters<typeof s>[1], string> = {},
): string => {
  const {
    lower = true,
    strict = true,
    trim = true,
    replacement = '-',
    locale = 'en',
    ...rest
  } = options;

  return s(str, { lower, strict, trim, replacement, locale, ...rest });
};
