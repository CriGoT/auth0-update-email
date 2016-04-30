import express  from 'express'
import Webtask  from 'webtask-tools'
import template from './views/index.jade'
import admin    from './routes/admin'
import update   from './routes/updateemail'
import unless   from 'express-unless'

const app = express();


app.use('/updateemail',update);
admin.unless = unless;
app.use('/',admin.unless({path:'/updateemail*'}));

export default app;
