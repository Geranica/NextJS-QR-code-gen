import { RefObject } from 'react';

export const transformSvgToUrl = (svgRef: RefObject<SVGSVGElement | null>) => {
  if (!svgRef.current) return null;

  const svgData = new XMLSerializer().serializeToString(svgRef.current);
  const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });

  return URL.createObjectURL(svgBlob);
};
