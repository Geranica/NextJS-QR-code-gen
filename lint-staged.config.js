module.exports = {
  '*/**/*.{js,jsx,tsx,ts}': ['prettier --write', 'eslint --fix', 'eslint'],
  '*/**/*.{json,html,css,scss}': ['prettier --write'],
  '*/**/*.(ts|tsx)': () => 'yarn tsc --noEmit',
};
