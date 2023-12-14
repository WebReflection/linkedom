export const assign: {
    <T extends {}, U>(target: T, source: U): T & U;
    <T_1 extends {}, U_1, V>(target: T_1, source1: U_1, source2: V): T_1 & U_1 & V;
    <T_2 extends {}, U_2, V_1, W>(target: T_2, source1: U_2, source2: V_1, source3: W): T_2 & U_2 & V_1 & W;
    (target: object, ...sources: any[]): any;
};
export const create: {
    (o: object): any;
    (o: object, properties: PropertyDescriptorMap & ThisType<any>): any;
};
export const defineProperties: <T>(o: T, properties: PropertyDescriptorMap & ThisType<any>) => T;
export const entries: {
    <T>(o: {
        [s: string]: T;
    } | ArrayLike<T>): [string, T][];
    (o: {}): [string, any][];
};
export const getOwnPropertyDescriptors: <T>(o: T) => { [P in keyof T]: TypedPropertyDescriptor<T[P]>; } & {
    [x: string]: PropertyDescriptor;
};
export const keys: {
    (o: object): string[];
    (o: {}): string[];
};
export const setPrototypeOf: (o: any, proto: object) => any;
