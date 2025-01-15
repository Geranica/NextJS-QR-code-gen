export const downloadSvg = (svgStr: string) => {
  const link = document.createElement('a');
  link.href = svgStr;
  link.download = 'qr-code';

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
};
