import Webtask from 'webtask-tools'
import app     from './index'

module.exports = function(context,req,res){
  return Webtask.fromExpress(app(context.secrets))(context,req,res);
}
