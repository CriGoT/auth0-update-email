import express  from 'express'
import auth0    from 'auth0-oauth2-express'
import template from '../views/index.jade'

const admin    = express.Router();

admin.use(auth0({
   scopes: 'read:connections update:users',
   clientName: 'Update Email Address Extension'
}));

admin.get('/', (req, res) => {
  console.log('Admin');
  res.header("Content-Type", 'text/html');
  res.status(200).send(template());
});


export default admin;
