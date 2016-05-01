import express            from 'express'
import template           from '../views/update.jade'
import jwt                from 'express-jwt'
import util               from './utils'
import bodyParser         from 'body-parser'
import {ManagementClient} from 'auth0'

const config = {
  AUTH0_DOMAIN: 'crigot.auth0.com',
  AUTH0_MANAGEMENT_TOKEN: '',
  AUTH0_CLIENT_ID:'',
  AUTH0_CLIENT_SECRET: '',
  AUTH0_CONNECTION: 'Username-Password-Authentication',
};



const authenticate = jwt({
  secret: new Buffer(config.AUTH0_CLIENT_SECRET, 'base64'),
  audience: config.AUTH0_CLIENT_ID
});

const api = express.Router();

api.get('/isavailable',(req, res)=>{
  if (!req.query.m) {
    return res.status(400).json({"name":"BadRequestError","code":"mail_required","description":"You must provide a mail to validate","statusCode":400});
  }
  console.log(`Checking if e-mail ${req.query.m} is being used`)
  const auth0client =new ManagementClient({
    token: config.AUTH0_MANAGEMENT_TOKEN,
    domain: config.AUTH0_DOMAIN
  });

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
      const result = !data.some(value => value.email.toUpperCase()===req.query.m.toUpperCase());
      //const result = !data.some((value) => value.email.length===req.query.m.length) // better performance bu it may not be necessary
      console.log(`E-mail ${req.query.m} is ${result ? 'not ':''} being used`)

      res.status(200).json(result);
    })
    .catch((err)=>{
      console.log(err);
      res.status(500).json({"name":"InternalError","code":"management_api_error","description":"The Managemente API returned an error","statusCode":500});
    });

});

api.use('/me',(req,res)=>{
  console.log(req.body);
  if (!req.body || !req.body.email)
  {
    res.status(400).json({"name":"BadRequestError","code":"mail_required","description":"You must provide a mail to update the user info","statusCode":400});
  }
  else
  {
    console.log(`Updating user ${req.user.sub} with email ${req.body.email}`);
    const auth0client =new ManagementClient({
      token: config.AUTH0_MANAGEMENT_TOKEN,
      domain: config.AUTH0_DOMAIN
    });

    auth0client
      .users
      .update({id:req.user.sub},{email:req.body.email})
      .then(data => {
        console.log(`User ${req.user.sub} updated!`)

        auth0client
          .jobs
          .verifyEmail({user_id:req.user.sub})
          .then(data => {
            console.log(`Verification for user ${req.user.sub} requested!`)
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
  }
});

const router = express.Router();

router.use('/api',
    authenticate,
    bodyParser.json(),
    api);

router.get('/',(req,res) =>
{
  res.header("Content-Type", 'text/html');
  res.status(200).send(template({baseUrl:util.getBaseUrl(req), config:config}));
});


export default router
