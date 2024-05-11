export type AtLeastOne<T, K extends keyof T = keyof T> = Partial<T> & { [P in K]: T[P] };
export type KeyToValueMapping<T> = T[keyof T];
// export type RequiredKeys<T> = { [K in keyof T]-?: {} extends Pick<T, K> ? never : K }[keyof T];
