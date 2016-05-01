import express  from 'express'
import auth0    from 'auth0-oauth2-express'
import template from '../views/admin.jade'
import url      from 'url'
import util     from'./utils'

const admin    = express.Router();

admin.use(auth0({
   scopes: 'read:connections update:users',
   clientName: 'Update Email Address Extension',
}));

admin.get('/', (req, res) => {

  res.header("Content-Type", 'text/html');
  res.status(200).send(template({baseUrl:util.getBaseUrl(req)}));
});


export default admin;
