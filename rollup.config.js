import resolve from '@rollup/plugin-node-resolve';

export default[
	{
		input: 'node_modules/lit/index.js',
		output: [
			{
				file: "lit.mjs",
				format: 'es',
			}
		],
		plugins: [
			resolve(),
		],
	}
];
