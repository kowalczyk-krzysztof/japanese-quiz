import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import helmet from 'helmet';
// Routers
import gameRouter from './routes/game';

dotenv.config({ path: 'config.env' });

const requestLimit: number = 500;
const windowMs: number = 60000;
const limiter = rateLimit({
  windowMs: windowMs,
  max: requestLimit,
  message: 'Too many requests',
});

const app = express();
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cors());
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        blockAllMixedContent: [],
        fontSrc: ["'self'", 'https:', 'data:'],
        frameAncestors: ["'self'"],
        frameSrc: ["'self'"],
        imgSrc: ["'self'", 'data:'],
        objectSrc: ["'self'", 'blob:'],
        mediaSrc: ["'self'", 'blob:', 'data:'],
        scriptSrc: ["'self'"],
        scriptSrcAttr: ["'none'"],
        styleSrc: ["'self'", 'https:', "'unsafe-inline'"],
        upgradeInsecureRequests: [],
        'connect-src': ["'self'", `${process.env.MYAPP}`],
      },
    },
  })
);

// Routers
app.use('/api/v1/game', limiter, gameRouter);
app.set('trust proxy', 1);

const PORT = (process.env.PORT as unknown as number) || 8080;

export const server = app.listen(PORT, (): void => {
  console.log(
    `Server is up and running @ http://localhost:${PORT} in ${process.env.NODE_ENV} mode`
  );
});
