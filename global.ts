// 确保是模块
export {};

declare global {
  interface String {
    endsWith1(suffix: string): boolean;
  }
}