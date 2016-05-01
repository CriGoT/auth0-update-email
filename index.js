import express  from 'express'
import update   from './routes/update'
import unless   from 'express-unless'

export default function(config) {
  const app = express();
  const updateMiddleware = update(config);

  app.use('/',updateMiddleware);

  return app;
}
