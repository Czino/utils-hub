export const unique = (obj: unknown, index: number, self: unknown[]) => self.findIndex((s) => s === obj) === index
