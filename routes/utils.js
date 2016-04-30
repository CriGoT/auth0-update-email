import url from 'url'

export default class {
  static getBaseUrl(req){
    const pathname = url.parse(req.originalUrl).pathname.replace(req.path, '');
    let protocol = 'https';

    if ((process.env.NODE_ENV || 'development') === 'development') {
        protocol = req.protocol;
    }

    return url.format({
        protocol: protocol,
        host:     req.get('host'),
        pathname: pathname
      });
  }
}
