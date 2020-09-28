const presets = ['@babel/preset-env', '@vue/cli-plugin-babel/preset'];

const plugins = [
  ['@babel/plugin-proposal-optional-chaining', { loose: false }],
  ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
  ['@babel/plugin-proposal-nullish-coalescing-operator', { loose: false }],
  ['@babel/proposal-decorators', { legacy: true }],
  ['@babel/proposal-class-properties', { loose: true }],
  ['@babel/plugin-transform-spread', { loose: true }],
  '@babel/plugin-proposal-function-bind',
  '@babel/plugin-proposal-export-default-from',
  '@babel/plugin-proposal-logical-assignment-operators',
  '@babel/plugin-proposal-do-expressions',
  '@babel/plugin-proposal-function-sent',
  '@babel/plugin-proposal-export-namespace-from',
  '@babel/plugin-proposal-numeric-separator',
  '@babel/plugin-proposal-throw-expressions',
  '@babel/plugin-syntax-dynamic-import',
  '@babel/plugin-syntax-import-meta',
  '@babel/plugin-proposal-json-strings',
  '@babel/plugin-transform-async-to-generator',
  '@babel/plugin-transform-runtime',
  '@babel/plugin-transform-modules-commonjs'
];

const env = {
  test: {
    plugins: [
      '@babel/plugin-transform-modules-commonjs',
      'dynamic-import-node',
    ],
  },
};

module.exports = api => {
  api.cache(true);

  return { presets, plugins, env };
};
