/**
 * Sistema de Monitoramento INP - Core Web Vitals
 *
 * Este módulo implementa monitoramento RUM (Real User Monitoring) para INP
 * conforme as especificações do Google Chrome Web Vitals.
 *
 * Meta: INP ≤ 200ms no p75
 */

// Tipos locais (compatíveis com web-vitals)
interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  cancelable: boolean;
  target: EventTarget | null;
}

interface Metric {
  name: string;
  value: number;
  rating: "good" | "needs-improvement" | "poor";
  delta: number;
  entries: PerformanceEventTiming[];
  id: string;
  navigationType: string;
}

interface INPMetric extends Metric {
  name: "INP";
}

// Tipos de interações monitoradas
export type InteractionType =
  | "click"
  | "tap"
  | "keypress"
  | "input"
  | "pointer"
  | "keyboard";

// Fases do INP
export interface INPPhases {
  inputDelay: number; // Input delay: tempo até o handler começar
  processingTime: number; // Processing: tempo de execução do handler
  presentationDelay: number; // Presentation: tempo até o próximo paint
}

// Evento de INP detalhado
export interface INPEvent {
  // Métricas básicas
  value: number; // Duração total (ms)
  rating: "good" | "needs-improvement" | "poor";

  // Detalhes da interação
  interactionType: InteractionType;
  target: string; // Seletor do elemento
  targetHTML: string; // HTML do elemento

  // Fases do INP
  phases: INPPhases;

  // Contexto
  url: string;
  timestamp: number;
  deviceType: "mobile" | "tablet" | "desktop";

  // Debug
  stackTrace?: string;

  // Rota/componente
  route: string;
  component?: string;
}

// Configuração de thresholds INP
export const INP_THRESHOLDS = {
  GOOD: 200, // ≤ 200ms: bom
  NEEDS_IMPROVEMENT: 500, // 200-500ms: precisa melhorar
  // > 500ms: ruim
} as const;

// Configuração de limites de long tasks
export const LONG_TASK_THRESHOLD = 50; // ms

// Detecta tipo de dispositivo
function getDeviceType(): "mobile" | "tablet" | "desktop" {
  const width = window.innerWidth;
  if (width < 768) return "mobile";
  if (width < 1024) return "tablet";
  return "desktop";
}

// Classifica rating do INP
function getRating(value: number): "good" | "needs-improvement" | "poor" {
  if (value <= INP_THRESHOLDS.GOOD) return "good";
  if (value <= INP_THRESHOLDS.NEEDS_IMPROVEMENT) return "needs-improvement";
  return "poor";
}

// Extrai seletor CSS do elemento
function getElementSelector(element: Element | null): string {
  if (!element) return "unknown";

  // Tenta usar ID primeiro
  if (element.id) return `#${element.id}`;

  // Depois classes
  if (element.className && typeof element.className === "string") {
    const classes = element.className
      .split(" ")
      .filter((c) => c)
      .slice(0, 2)
      .join(".");
    if (classes) return `.${classes}`;
  }

  // Fallback para tag + atributos
  let selector = element.tagName.toLowerCase();

  const dataAttrs = ["data-drawer", "aria-label", "role"];
  for (const attr of dataAttrs) {
    const value = element.getAttribute(attr);
    if (value) {
      selector += `[${attr}="${value}"]`;
      break;
    }
  }

  return selector;
}

// Detecta componente React pelo nome do display name
function getReactComponentName(element: Element | null): string | undefined {
  if (!element) return undefined;

  // Procura por componentes conhecidos
  const knownComponents = [
    "Header",
    "Drawer",
    "NavBar",
    "Sheet",
    "ButtonWhats",
    "AnalyticsConsent",
    "HomeScreen",
    "Packs",
    "AboutScreen",
    "Places",
    "Gallery",
    "Contact",
  ];

  let current = element as Element | null;
  while (current) {
    const className = current.className;
    for (const component of knownComponents) {
      if (className && className.includes(component.toLowerCase())) {
        return component;
      }
    }
    current = current.parentElement;
  }

  return undefined;
}

// Captura stack trace simplificado
function getStackTrace(): string | undefined {
  try {
    const stack = new Error().stack;
    if (!stack) return undefined;

    // Pega primeiras 5 linhas relevantes (remove Error e este arquivo)
    return stack
      .split("\n")
      .slice(2, 7)
      .map((line) => line.trim())
      .join("\n");
  } catch {
    return undefined;
  }
}

// Armazena eventos INP
const inpEvents: INPEvent[] = [];
const MAX_EVENTS = 100; // Limita memória

// Callback para enviar eventos (substituir com seu endpoint)
export type INPReportCallback = (event: INPEvent) => void;

let reportCallback: INPReportCallback | undefined;

/**
 * Configura callback para receber eventos INP
 */
export function onINPReport(callback: INPReportCallback) {
  reportCallback = callback;
}

/**
 * Monitora INP e envia eventos detalhados
 */
export async function monitorINP() {
  // Verifica se está no browser
  if (typeof window === "undefined") return;

  try {
    // Tenta importar web-vitals se disponível
    const webVitals = await import("web-vitals").catch(() => null);
    if (!webVitals) {
      console.warn(
        "[INP Monitor] web-vitals não instalado. Execute: npm install web-vitals"
      );
      return;
    }

    const { onINP } = webVitals;

    onINP((metric: INPMetric) => {
      // Extrai informações da interação
      const entry = metric.entries[0]; // Pega primeira entrada (worst case)
      if (!entry) return;

      const target = (entry.target as Element) || document.body;

      // Calcula fases do INP (aproximado)
      const phases: INPPhases = {
        inputDelay: entry.processingStart - entry.startTime,
        processingTime: entry.processingEnd - entry.processingStart,
        presentationDelay:
          entry.startTime + entry.duration - entry.processingEnd,
      };

      // Detecta tipo de interação
      let interactionType: InteractionType = "click";
      if (entry.name === "pointerdown" || entry.name === "pointerup") {
        interactionType = "pointer";
      } else if (entry.name === "keydown" || entry.name === "keyup") {
        interactionType = "keyboard";
      }

      // Monta evento completo
      const event: INPEvent = {
        value: metric.value,
        rating: getRating(metric.value),
        interactionType,
        target: getElementSelector(target),
        targetHTML: target.outerHTML?.substring(0, 200) || "",
        phases,
        url: window.location.href,
        timestamp: Date.now(),
        deviceType: getDeviceType(),
        stackTrace: getStackTrace(),
        route: window.location.pathname,
        component: getReactComponentName(target),
      };

      // Armazena (circular buffer)
      inpEvents.push(event);
      if (inpEvents.length > MAX_EVENTS) {
        inpEvents.shift();
      }

      // Reporta se callback configurado
      if (reportCallback) {
        reportCallback(event);
      }

      // Log em desenvolvimento
      if (process.env.NODE_ENV === "development") {
        const color =
          event.rating === "good"
            ? "green"
            : event.rating === "needs-improvement"
            ? "orange"
            : "red";
        console.log(
          `%c[INP] ${event.value}ms - ${event.rating}`,
          `color: ${color}; font-weight: bold`,
          {
            component: event.component,
            target: event.target,
            phases: event.phases,
            deviceType: event.deviceType,
          }
        );

        // Alerta para INP ruim
        if (event.value > INP_THRESHOLDS.NEEDS_IMPROVEMENT) {
          console.warn(
            `⚠️ INP RUIM detectado (${event.value}ms)!`,
            "\nComponente:",
            event.component,
            "\nTarget:",
            event.target,
            "\nFases:",
            phases,
            "\nInput Delay:",
            `${phases.inputDelay.toFixed(1)}ms`,
            "\nProcessing:",
            `${phases.processingTime.toFixed(1)}ms`,
            "\nPresentation:",
            `${phases.presentationDelay.toFixed(1)}ms`
          );
        }
      }
    });

    // Monitora long tasks
    monitorLongTasks();
  } catch (error) {
    console.error("[INP Monitor] Erro ao inicializar:", error);
  }
}

/**
 * Monitora Long Tasks (tarefas > 50ms)
 */
function monitorLongTasks() {
  if (!("PerformanceObserver" in window)) return;

  try {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.duration > LONG_TASK_THRESHOLD) {
          if (process.env.NODE_ENV === "development") {
            console.warn(
              `⚠️ Long Task detectada: ${entry.duration.toFixed(1)}ms`,
              entry
            );
          }
        }
      }
    });

    observer.observe({ entryTypes: ["longtask"] });
  } catch (error) {
    // Long tasks não suportados em alguns browsers
  }
}

/**
 * Retorna eventos INP armazenados
 */
export function getINPEvents(): INPEvent[] {
  return [...inpEvents];
}

/**
 * Calcula estatísticas dos eventos INP
 */
export function getINPStats() {
  if (inpEvents.length === 0) {
    return null;
  }

  const values = inpEvents.map((e) => e.value).sort((a, b) => a - b);
  const n = values.length;

  // Calcula percentis
  const p50 = values[Math.floor(n * 0.5)];
  const p75 = values[Math.floor(n * 0.75)];
  const p90 = values[Math.floor(n * 0.9)];
  const p98 = values[Math.floor(n * 0.98)];
  const max = values[n - 1];

  // Agrupa por rating
  const byRating = {
    good: inpEvents.filter((e) => e.rating === "good").length,
    needsImprovement: inpEvents.filter((e) => e.rating === "needs-improvement")
      .length,
    poor: inpEvents.filter((e) => e.rating === "poor").length,
  };

  // Agrupa por componente
  const byComponent = inpEvents.reduce((acc, e) => {
    const comp = e.component || "Unknown";
    if (!acc[comp]) acc[comp] = [];
    acc[comp].push(e.value);
    return acc;
  }, {} as Record<string, number[]>);

  return {
    count: n,
    percentiles: { p50, p75, p90, p98, max },
    byRating,
    byComponent: Object.entries(byComponent).map(([name, values]) => ({
      name,
      count: values.length,
      p75: values.sort((a, b) => a - b)[Math.floor(values.length * 0.75)],
    })),
    deviceType: getDeviceType(),
  };
}

/**
 * Exporta dados para análise (JSON)
 */
export function exportINPData() {
  const stats = getINPStats();
  const events = getINPEvents();

  return {
    timestamp: new Date().toISOString(),
    stats,
    events,
    url: window.location.href,
  };
}

/**
 * Hook React para inicializar monitoramento
 */
export function useINPMonitoring(callback?: INPReportCallback) {
  if (typeof window === "undefined") return;

  // Configura callback se fornecido
  if (callback) {
    onINPReport(callback);
  }

  // Inicializa monitoramento
  monitorINP();

  // Cleanup não necessário - monitoramento persiste durante sessão
}
