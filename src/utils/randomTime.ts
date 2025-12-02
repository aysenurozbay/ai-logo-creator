export function getRandomTime(min: number = 30, max: number = 60): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
