/**
 * Utilitários de Performance para INP
 *
 * Funções para otimizar event handlers e reduzir INP
 */

/**
 * Throttle otimizado para scroll usando requestAnimationFrame
 *
 * Garante que o callback execute no máximo 1x por frame (60fps = ~16ms)
 * Ideal para scroll handlers que atualizam UI
 *
 * @param callback - Função a ser throttled
 * @returns Função throttled
 */
export function throttleRAF<T extends (...args: any[]) => any>(
  callback: T
): (...args: Parameters<T>) => void {
  let rafId: number | null = null;
  let lastArgs: Parameters<T> | null = null;

  return function throttled(...args: Parameters<T>) {
    lastArgs = args;

    if (rafId !== null) {
      return;
    }

    rafId = requestAnimationFrame(() => {
      if (lastArgs) {
        callback(...lastArgs);
      }
      rafId = null;
      lastArgs = null;
    });
  };
}

/**
 * Debounce otimizado - espera período de silêncio
 *
 * Ideal para inputs de busca, resize handlers, etc.
 *
 * @param callback - Função a ser debounced
 * @param delay - Delay em ms (padrão: 300ms)
 * @returns Função debounced com método cancel()
 */
export function debounce<T extends (...args: any[]) => any>(
  callback: T,
  delay = 300
): ((...args: Parameters<T>) => void) & { cancel: () => void } {
  let timeoutId: NodeJS.Timeout | null = null;

  const debounced = function (...args: Parameters<T>) {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      callback(...args);
      timeoutId = null;
    }, delay);
  };

  debounced.cancel = () => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  };

  return debounced;
}

/**
 * Quebra long task em chunks menores usando setTimeout
 *
 * Permite que o navegador respire entre chunks e processe
 * eventos de usuário, reduzindo INP
 *
 * @param tasks - Array de funções a executar
 * @param chunkSize - Número de tasks por chunk (padrão: 1)
 * @returns Promise que resolve quando todas tasks completarem
 */
export async function yieldToMain<T>(
  tasks: (() => T)[],
  chunkSize = 1
): Promise<T[]> {
  const results: T[] = [];

  for (let i = 0; i < tasks.length; i += chunkSize) {
    const chunk = tasks.slice(i, i + chunkSize);

    // Executa chunk
    for (const task of chunk) {
      results.push(task());
    }

    // Yield para main thread processar eventos
    if (i + chunkSize < tasks.length) {
      await new Promise((resolve) => setTimeout(resolve, 0));
    }
  }

  return results;
}

/**
 * Wrapper para startTransition (React 18+)
 *
 * Marca state updates como não urgentes, permitindo
 * que React priorize feedback visual do usuário
 *
 * Nota: Use `import { startTransition } from 'react'` diretamente
 * Esta função é um fallback para código não-React
 *
 * @param callback - Função contendo state updates
 */
export function deferUpdate(callback: () => void) {
  // Fallback: executa no próximo tick
  // Para uso com React, importe startTransition diretamente
  setTimeout(callback, 0);
}

/**
 * Scheduler API polyfill para quebrar long tasks
 *
 * Usa scheduler.postTask se disponível, senão setTimeout
 *
 * @param callback - Tarefa a ser agendada
 * @param priority - Prioridade: 'user-blocking' | 'user-visible' | 'background'
 */
export async function scheduleTask(
  callback: () => void,
  priority: "user-blocking" | "user-visible" | "background" = "user-visible"
): Promise<void> {
  // Usa Scheduler API se disponível
  if ("scheduler" in window && "postTask" in (window as any).scheduler) {
    await (window as any).scheduler.postTask(callback, { priority });
  } else {
    // Fallback: setTimeout com delays baseados na prioridade
    const delays = {
      "user-blocking": 0,
      "user-visible": 50,
      background: 1000,
    };

    return new Promise((resolve) => {
      setTimeout(() => {
        callback();
        resolve();
      }, delays[priority]);
    });
  }
}

/**
 * Hook para observar interações com Intersection Observer
 *
 * Permite lazy-load de handlers pesados apenas quando necessário
 *
 * @param ref - Ref do elemento a observar
 * @param callback - Callback quando elemento fica visível
 * @param options - Opções do IntersectionObserver
 */
export function onVisible(
  element: Element,
  callback: () => void,
  options?: IntersectionObserverInit
): () => void {
  if (!("IntersectionObserver" in window)) {
    // Fallback: executa imediatamente
    callback();
    return () => {};
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback();
        observer.disconnect();
      }
    });
  }, options);

  observer.observe(element);

  return () => observer.disconnect();
}

/**
 * Detecta idle time para executar trabalho não urgente
 *
 * Usa requestIdleCallback se disponível
 *
 * @param callback - Trabalho a executar em idle
 * @param timeout - Timeout máximo em ms (padrão: 2000)
 */
export function runWhenIdle(callback: () => void, timeout = 2000): number {
  if ("requestIdleCallback" in window) {
    return requestIdleCallback(callback, { timeout });
  } else {
    // Fallback: setTimeout após delay
    return setTimeout(callback, timeout) as unknown as number;
  }
}

/**
 * Cancela callback agendado com runWhenIdle
 */
export function cancelIdle(id: number): void {
  if ("cancelIdleCallback" in window) {
    cancelIdleCallback(id);
  } else {
    clearTimeout(id);
  }
}

/**
 * Mede duração de uma função (para profiling)
 *
 * @param name - Nome da métrica
 * @param fn - Função a medir
 */
export async function measure<T>(
  name: string,
  fn: () => T | Promise<T>
): Promise<T> {
  const start = performance.now();

  try {
    const result = await fn();
    const duration = performance.now() - start;

    if (process.env.NODE_ENV === "development") {
      const color = duration > 50 ? "red" : duration > 16 ? "orange" : "green";
      console.log(
        `%c[Perf] ${name}: ${duration.toFixed(2)}ms`,
        `color: ${color}`
      );
    }

    return result;
  } catch (error) {
    const duration = performance.now() - start;
    console.error(
      `[Perf] ${name} failed after ${duration.toFixed(2)}ms`,
      error
    );
    throw error;
  }
}
