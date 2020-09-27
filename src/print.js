/**
 * Print a warning to the console.
 */
export const printWarning = (text) => {
  const message = `Warning: ${text}`;

  if (console.error) {
    console.error(message);
  }

  try {
    throw new Error(message);
  } catch (x) { /**/ }
};
