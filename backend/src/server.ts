import type { Server } from 'node:http';
import { createApp } from './app';
import env from './config/env';
import { verifyEmailTransport } from './services/email.service';
import { logger } from './utils/logger';

const app = createApp();

const server: Server = app.listen(env.port, () => {
  logger.info(`Rezerveo API listening on port ${env.port} (${env.nodeEnv}).`);
  // Non-blocking SMTP verification so the server is up for healthchecks even
  // if mail is misconfigured.
  void verifyEmailTransport();
});

/** Graceful shutdown so in-flight requests can finish. */
function shutdown(signal: string): void {
  logger.info(`Received ${signal} — shutting down gracefully.`);
  server.close(() => {
    logger.info('HTTP server closed.');
    process.exit(0);
  });
  // Force-exit if connections do not drain in time.
  setTimeout(() => {
    logger.error('Forced shutdown after timeout.');
    process.exit(1);
  }, 10_000).unref();
}

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));

process.on('unhandledRejection', (reason) => {
  logger.error('Unhandled promise rejection.', reason);
});
process.on('uncaughtException', (err) => {
  logger.error('Uncaught exception.', err);
  process.exit(1);
});
