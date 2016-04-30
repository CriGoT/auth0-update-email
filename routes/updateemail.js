import express            from 'express'
import {ManagementClient} from'auth0'
import template           from '../views/update.jade'
import jwt                from 'express-jwt'
import util               from './utils'
import bodyParser         from 'body-parser'

const config = {
  AUTH0_DOMAIN: 'crigot.auth0.com',
  AUTH0_MANAGEMENT_TOKEN: '',
  AUTH0_CLIENT_ID:'',
  AUTH0_CLIENT_SECRET: '',
  AUTH0_CONNECTION: 'Username-Password-Authentication',
};

const auth0client =new ManagementClient({
  token: config.AUTH0_MANAGEMENT_TOKEN,
  domain: config.AUTH0_DOMAIN
});

const authenticate = jwt({
  secret: new Buffer(config.AUTH0_CLIENT_SECRET, 'base64'),
  audience: config.AUTH0_CLIENT_ID
});

const router = express.Router();

router.use('/api',
    authenticate,
    bodyParser.json({strict:true}));


router.get('/',(req,res) =>
{
  res.header("Content-Type", 'text/html');
  res.status(200).send(template({baseUrl:util.getBaseUrl(req), config:config}));
});

router.get('/api/check',(req, res)=>{
  if (!req.query.m) {
    return res.status(400).json({"name":"BadRequestError","code":"mail_required","description":"You must provide a mail to validate","statusCode":400});
  }
  console.log(req);

  auth0client
    .users
    .getAll({
      per_page: 1,
      include_fields: true,
      search_engine: 'v2',
      fields: 'email',
      q: `identities.connection:"${config.AUTH0_CONNECTION}" AND email:"${req.query.m}"`
    })
    .then((data) => {
      res.status(200).json(
        data.filter((value) => value.email.toUpperCase()===req.query.m.toUpperCase())
        //data.filter((value) => value.email.length===req.query.m.length) // better performance bu it may not be necessary
        );
    })
    .catch((err)=>{
      console.log(err);
      res.status(500).json({"name":"InternalError","code":"management_api_error","description":"The Managemente API returned an error","statusCode":500});
    });

});

router.patch('/api/user',(req,res)=>{
  if (!req.body || !req.body.email)
  {
    return res.status(400).json({"name":"BadRequestError","code":"mail_required","description":"You must provide a mail to update the user info","statusCode":400});
  }

  auth0client
    .users
    .update({id:req.user.sub},{email:req.body.email})
    .then(data => {
      auth0client
        .jobs
        .verifyEmail({user_id:req.user.sub})
        .then(data => {
          res.status(201).json({"status":"completed","message":"Your E-mail address has been updated you will shortly receive a message to verify it."});
        })
        .catch(err => {
          console.log(err);
          res.status(201).json({"status":"pending","message":"Your E-mail address has been updated but the message to verify your new address was not sent."});
        });
    })
    .catch((err)=>{
      console.log(err);
      res.status(500).json({"name":"InternalError","code":"management_api_error","description":"The Managemente API returned an error while updating the user","statusCode":500});
    });

});

export default router
