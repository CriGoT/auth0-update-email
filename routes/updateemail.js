import express            from 'express'
import {ManagementClient} from'auth0'
import template           from '../views/update.jade'
import jwt                from 'express-jwt'
import url                from 'url';

const config = {
  AUTH0_DOMAIN: 'crigot.auth0.com',
  AUTH0_MANAGEMENT_TOKEN: '',
  AUTH0_CLIENT_ID:'',
  AUTH0_CLIENT_SECRET: '',
  AUTH0_CONNECTION: 'Username-Password-Authentication',
};
const router = express.Router();
const auth0client =new ManagementClient({
  token: config.AUTH0_MANAGEMENT_TOKEN,
  domain: config.AUTH0_DOMAIN
});

const authenticate = jwt({
  secret: new Buffer(config.AUTH0_CLIENT_SECRET, 'base64'),
  audience: config.AUTH0_CLIENT_ID
});

router.use('/api', authenticate);

router.get('/',(req,res) =>
{
  console.log(url.parse(req.originalUrl));
  const pathname = url.parse(req.originalUrl).pathname.replace(req.path, '');
  const baseUrl = url.format({
      protocol: 'https',
      host:     req.get('host'),
      pathname: pathname
    });
  res.header("Content-Type", 'text/html');
  res.status(200).send(template({baseUrl:baseUrl, config:config}));
});

router.get('/api/checkmail',(req, res)=>{
  if (!req.query.m) {
    return res.status(400).json({"name":"BadRequestError","code":"mail_required","description":"You must provide a mail to validate","statusCode":400});
  }

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
      res.status(500).json({"name":"InternalError","code":"management_api_error","description":"The Managemente API returned an error","statusCode":500});
    });

});

export default router
