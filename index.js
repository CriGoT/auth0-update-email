import express  from 'express'
import Webtask  from 'webtask-tools'
import template from './views/index.jade'
import admin    from './routes/admin'
import update   from './routes/updateemail'

const app = express();

app.use('/admin',admin);
app.use('/updateemail',update);
app.get('/',(req, res)=>
{
  res.redirect('/admin')
});

export default app;
