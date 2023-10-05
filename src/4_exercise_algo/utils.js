export const now = new Date('Jan 23, 2023 00:00:00')

/**
/**
 * Round up numbers.
 */
export const roundDecimals = (nb, nbDecimals = 3) =>
  Math.round(nb * 10 ** nbDecimals) / 10 ** nbDecimals
