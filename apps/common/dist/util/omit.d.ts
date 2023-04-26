export type Omit<T, K extends keyof T | (string & Record<string, any>) | (number & Record<string, any>) | (symbol | Record<string, any>)> = {
    [P in Exclude<keyof T, K>]: T[P];
};
