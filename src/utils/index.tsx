export const hicksLaw = (n: number, a: number = 50, b: number = 150) => {
  if (n <= 0) return a; // Если вариантов нет, время = базовому
  return a + b * Math.log2(n);
};
