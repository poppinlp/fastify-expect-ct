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

const mock = async (t, opts, expected) => {
	const rsp = await t.context.app.register(plugin, opts).inject({
		method: 'get',
		url: '/'
	});
	const header = rsp.headers['expect-ct'];

	t.is(header, expected);
};

[
	{ maxAge: -123 },
	{ maxAge: '123' },
	{ maxAge: true },
	{ maxAge: false },
	{ maxAge: {} },
	{ maxAge: [] },
	{ maxAge: [] },
	{ maxage: false },
	{ maxage: 1234 }
].forEach(opts => {
	test(`should get default value for invalid params: ${JSON.stringify(opts)}`, async t => {
		await mock(t, opts, 'max-age=0');
	});
});

test('can round maxAge', async t => {
	await mock(
		t,
		{
			maxAge: 1234.123
		},
		'max-age=1234'
	);
});

test('can enable enforcement', async t => {
	await mock(
		t,
		{
			enforce: true
		},
		'max-age=0, enforce'
	);
});

test('can set reportUri', async t => {
	await mock(
		t,
		{
			reportUri: 'http://example.com/report'
		},
		'max-age=0, report-uri="http://example.com/report"'
	);
});

test('can set enforcement, maxAge and reportUri', async t => {
	await mock(
		t,
		{
			enforce: true,
			maxAge: 123,
			reportUri: 'http://example.com/report'
		},
		'max-age=123, enforce, report-uri="http://example.com/report"'
	);
});
