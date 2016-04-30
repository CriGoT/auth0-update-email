import express from 'express'
import auth0 from'auth0'
import template from '../views/update.jade'

const router = express.Router();

router.use((req,res) =>
{
  console.log('User');
  res.header("Content-Type", 'text/html');
  res.status(200).send(template());
});

export default router
