/// <reference types="node" />
export const performance: import("perf_hooks").Performance | {
    now(): number;
};
import { performance } from "perf_hooks";
