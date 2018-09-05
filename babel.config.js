// https://babeljs.io/

module.exports = {
  presets: [
    [
      require('@babel/preset-env'),
      {
        modules: false,
        useBuiltIns: 'usage', // import('core-js')
      },
    ],
    require('@babel/preset-react'),
  ],
  plugins: [require('@babel/plugin-proposal-class-properties')],
}
