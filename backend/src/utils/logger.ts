/**
 * Tiny dependency-free logger with timestamped, leveled output.
 * Keeps the backend free of a heavyweight logging dependency while still
 * giving structured, greppable lines.
 */

type Level = 'info' | 'warn' | 'error' | 'debug';

function emit(level: Level, message: string, meta?: unknown): void {
  const ts = new Date().toISOString();
  const line = `[${ts}] ${level.toUpperCase()} ${message}`;
  const stream = level === 'error' ? console.error : level === 'warn' ? console.warn : console.log;
  if (meta !== undefined) {
    stream(line, meta);
  } else {
    stream(line);
  }
}

export const logger = {
  info: (message: string, meta?: unknown) => emit('info', message, meta),
  warn: (message: string, meta?: unknown) => emit('warn', message, meta),
  error: (message: string, meta?: unknown) => emit('error', message, meta),
  debug: (message: string, meta?: unknown) => {
    if (process.env.NODE_ENV !== 'production') emit('debug', message, meta);
  },
};
