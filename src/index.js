const fp = require('fastify-plugin');

const expectCt = (app, opts, next) => {
	const maxAge = typeof opts.maxAge === 'number' && opts.maxAge > 0 ? Math.round(opts.maxAge) : 0;
	const headerArr = [];

	headerArr.push(`max-age=${maxAge}`);
	opts.enforce && headerArr.push('enforce');
	opts.reportUri && headerArr.push(`report-uri="${opts.reportUri}"`);

	const headerStr = headerArr.join(', ');

	app.addHook('onSend', (request, reply, payload, next) => {
		reply.header('Expect-CT', headerStr);
		next();
	});

	next();
};

module.exports = fp(expectCt, {
	fastify: '^1.0.0',
	name: 'fastify-expect-ct'
});
