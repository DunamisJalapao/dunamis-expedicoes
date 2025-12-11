/**
 * Utilities to prevent forced reflow by separating read and write operations
 * across animation frames.
 */

/**
 * Reads layout properties (offsetWidth, offsetHeight, getBoundingClientRect)
 * and executes a callback with the measurements in the next frame.
 * This prevents forced synchronous layout by separating read from write operations.
 */
export function measureLayout(
  element: HTMLElement,
  callback: (measurements: {
    width: number;
    height: number;
    top: number;
    left: number;
    right: number;
    bottom: number;
  }) => void
): void {
  requestAnimationFrame(() => {
    const rect = element.getBoundingClientRect();
    callback({
      width: element.offsetWidth,
      height: element.offsetHeight,
      top: rect.top,
      left: rect.left,
      right: rect.right,
      bottom: rect.bottom,
    });
  });
}

/**
 * Executes a mutation (write operation) in the next frame after measurements.
 * Use this pattern: measureLayout -> mutateLayout
 */
export function mutateLayout(callback: () => void): void {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      callback();
    });
  });
}

/**
 * Combines measure and mutate operations safely across frames.
 * Measures in frame N, mutates in frame N+1.
 */
export function measureAndMutate(
  element: HTMLElement,
  measureCallback: (measurements: {
    width: number;
    height: number;
    top: number;
    left: number;
    right: number;
    bottom: number;
  }) => void,
  mutateCallback: () => void
): void {
  measureLayout(element, (measurements) => {
    measureCallback(measurements);
    mutateLayout(mutateCallback);
  });
}

/**
 * Batches multiple DOM reads to prevent multiple forced reflows.
 * All reads happen in a single frame.
 */
export function batchReads<T>(reads: Array<() => T>): Promise<T[]> {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      const results = reads.map((read) => read());
      resolve(results);
    });
  });
}

/**
 * Batches multiple DOM writes to prevent multiple forced reflows.
 * All writes happen in a single frame.
 */
export function batchWrites(writes: Array<() => void>): void {
  requestAnimationFrame(() => {
    writes.forEach((write) => write());
  });
}
