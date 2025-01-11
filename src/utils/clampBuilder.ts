import styleConstants from '@/shared/styles/styleConstants';

export const clampBuilder = (
  minValue: number,
  maxValue: number,
  maxViewport: number = styleConstants.maxLayoutWidth,
  minViewport: number = styleConstants.minLayoutWidth,
) => {
  const minValuePerRem = minValue / styleConstants.rootFontSize;
  const maxValuePerRem = maxValue / styleConstants.rootFontSize;
  const minViewportPerRem = minViewport / styleConstants.rootFontSize;
  const maxViewportPerRem = maxViewport / styleConstants.rootFontSize;

  const slope = (maxValuePerRem - minValuePerRem) / (maxViewportPerRem - minViewportPerRem);
  const yAxisIntersection = -minViewportPerRem * slope + minValuePerRem;
  return `clamp(${minValuePerRem}rem, ${yAxisIntersection}rem + ${slope * 100}vw, ${maxValuePerRem}rem)`;
};
