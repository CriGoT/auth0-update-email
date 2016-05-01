import express from 'express'
import App     from './'
import config  from'./config'

const port = process.env.PORT || 3000;
const server=express();

server.use((req,res,next) =>{
 req.webtaskContext = {secrets: config};
 return next();
});
server.use(App);

server.listen(port, () => {
    console.log('Server started on port', port);
})
