import test from 'ava';
import fastify from 'fastify';
import plugin from '../src/index';

test.beforeEach(t => {
	const app = fastify();

	app.get('/', (request, reply) => {
		reply.send('hello world');
	});

	t.context.app = app;
});

const testHandler = (t, opts, expectedHeader, params = '') => {
	const { app } = t.context;

	t.plan(3);
	app.register(plugin, opts);
	app.inject(
		{
			method: 'GET',
			url: `/${params}`
		},
		(err, res) => {
			const expected = {
				payload: 'hello world',
				header: expectedHeader
			};
			const target = {
				payload: res.payload,
				header: res.headers['expect-ct']
			};

			t.is(err, null, 'should throw no error');
			t.is(target.payload, expected.payload, 'should have expected response payload');
			t.is(target.header, expected.header, 'should have expected response header');
			t.end();
		}
	);
};

test.cb('default option', t => {
	testHandler(t, {}, 'max-age=0');
});

test.cb('set maxAge', t => {
	testHandler(t, {
		maxAge: 12345
	}, 'max-age=12345');
});

test.cb('set enforce', t => {
	testHandler(t, {
		enforce: true
	}, 'max-age=0, enforce');
});

test.cb('set reportUri', t => {
	testHandler(t, {
		reportUri: 'http://www.foobar.com'
	}, `max-age=0, report-uri="http://www.foobar.com"`);
});
