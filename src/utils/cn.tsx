import { ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

import tailwindConfig from '../../tailwind.config';

const customFontSizeClasses = Object.keys(tailwindConfig.theme.extend.fontSize).map(
  (item) => `text-${item}`,
);

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': customFontSizeClasses,
    },
  },
});

export const cn = (...inputs: ClassValue[]) => {
  return customTwMerge(clsx(inputs));
};
