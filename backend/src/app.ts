import express, { type Application, type Request, type Response, type NextFunction } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';
import env from './config/env';
import bookingRoutes from './routes/booking.routes';
import { notFound } from './middleware/notFound';
import { errorHandler } from './middleware/errorHandler';

export function createApp(): Application {
  const app = express();

  // Behind nginx/Docker — trust the first proxy so rate-limit sees real IPs.
  app.set('trust proxy', 1);
  app.disable('x-powered-by');

  // Security headers.
  app.use(helmet());

  // CORS — allow configured origins; same-origin (no Origin header) always passes.
  app.use(
    cors({
      origin(origin, callback) {
        if (!origin || env.corsOrigins.length === 0 || env.corsOrigins.includes(origin)) {
          callback(null, true);
          return;
        }
        callback(new Error('Not allowed by CORS'));
      },
      methods: ['GET', 'POST'],
      credentials: false,
    }),
  );

  app.use(compression());
  app.use(express.json({ limit: '32kb' }));
  app.use(express.urlencoded({ extended: true, limit: '32kb' }));

  // Request logging (concise in prod, verbose in dev).
  app.use(morgan(env.isProduction ? 'combined' : 'dev'));

  // Routes.
  app.use('/api', bookingRoutes);

  app.get('/', (_req: Request, res: Response) => {
    res.json({ success: true, message: 'Rezerveo API' });
  });

  // CORS rejection -> 403 instead of a generic 500.
  app.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
    if (err && err.message === 'Not allowed by CORS') {
      res.status(403).json({ success: false, message: 'Origin not allowed.' });
      return;
    }
    next(err);
  });

  app.use(notFound);
  app.use(errorHandler);

  return app;
}
