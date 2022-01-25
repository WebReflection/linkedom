/// <reference types="node" />
export var performance: import("perf_hooks").Performance | {
    now(): number;
};
import { performance } from "perf_hooks";
