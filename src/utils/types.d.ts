export type AtLeastOne<T, K extends keyof T = keyof T> = Partial<{ [P in K]: T[P] }>;
