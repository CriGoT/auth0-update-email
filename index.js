import express  from 'express'
import admin    from './routes/admin'
import update   from './routes/update'
import unless   from 'express-unless'

const app = express();


app.use('/update',update);
admin.unless = unless;
app.use('/',admin.unless({path:'/update*'}));

export default app;
