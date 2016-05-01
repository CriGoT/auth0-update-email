import express  from 'express'
import admin    from './routes/admin'
import update   from './routes/update'
import unless   from 'express-unless'

export default function(config) {
  const app = express();
  const updateMiddleware = update(config);
  const adminMiddleware = admin(config);

  app.use('/update',updateMiddleware);
  adminMiddleware.unless = unless;
  app.use('/',adminMiddleware.unless({path:'/update*'}));

  return app;
}
