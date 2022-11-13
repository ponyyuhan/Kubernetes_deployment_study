let Koa = require('koa');
let app = new Koa();
let Router = require('koa-router');
const koaBody = require('koa-body');
let router = new Router;

app.use(koaBody({multipart: true}));

let log4js = require('log4js');
log4js.configure('./log4js.json');
log4js.level = 'DEBUG';
let logger = log4js.getLogger('app');

function getServerInfo() {
	let os = require("os");
	let ifaces = os.networkInterfaces();
	let adresses = Object.keys(ifaces).reduce(function (result, dev) {
		return result.concat(ifaces[dev].reduce(function (result, details) {
			return result.concat(details.family === 'IPv4' && !details.internal ? [details.address] : []);
		}, []));
	});
	return `IP ${adresses}, hostname: ${os.hostname()}`
}

router.all('/', async ctx =>{
    logger.info('Yuhan Ma page)
	ctx.body = `This is yuhanma: \n\n${getServerInfo()}\n`
});

router.all('/hello/:name', async ctx =>{
	let name = ctx.params.name
    logger.info('on hello page')
	ctx.body = `Hi,welcome to yuhan ma repo ${name ? name : 'world'} \n\n${getServerInfo()}\n`
});

app.use(router.routes());

let port = process.env.PORT || 8080;
try{
	app.listen(port);
	logger.info('Server started successfully and listened on '+ port +'\n'+'http://localhost:'+port);
}catch(err){
	console.error(err);
}
